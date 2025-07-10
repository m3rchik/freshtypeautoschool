'use client'

import { useState, useEffect, useMemo } from 'react'
import { CheckCircle, XCircle, Clock, ArrowRight, RotateCcw, Trophy, Download, Image as ImageIcon } from 'lucide-react'

interface PDDAnswer {
  answer_text: string
  is_correct: boolean
}

interface PDDQuestion {
  title: string
  ticket_number: string
  ticket_category: string
  image: string
  question: string
  answers: PDDAnswer[]
  correct_answer: string
  answer_tip: string
  topic: string[]
  id: string
}

interface TestResult {
  totalQuestions: number
  correctAnswers: number
  timeSpent: number
  passed: boolean
}

interface PDDTestAdvancedProps {
  category: string
  testMode: 'exam' | 'study' | 'review' | 'ticket'
  ticketNumber?: number
  onComplete: (result: TestResult) => void
}

const PDDTestAdvanced = ({ category, testMode, ticketNumber, onComplete }: PDDTestAdvancedProps) => {
  const [questions, setQuestions] = useState<PDDQuestion[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [userAnswers, setUserAnswers] = useState<Array<{ questionId: string; answer: string; correct: boolean }>>([])
  const [timeRemaining, setTimeRemaining] = useState(0)
  const [testCompleted, setTestCompleted] = useState(false)
  const [startTime] = useState(Date.now())

  // Загрузка вопросов с GitHub API
  const loadQuestions = async () => {
    try {
      setLoading(true)
      setError(null)

      let questionsData: PDDQuestion[] = []

      if (testMode === 'ticket' && ticketNumber) {
        // Загружаем конкретный билет
        const response = await fetch(
          `https://raw.githubusercontent.com/etspring/pdd_russia/master/questions/A_B/tickets/Билет ${ticketNumber}.json`
        )
        if (!response.ok) throw new Error(`Ошибка загрузки билета ${ticketNumber}`)
        questionsData = await response.json()
      } else {
        // Загружаем случайные билеты для формирования теста
        const ticketsToLoad = testMode === 'exam' ? 1 : Math.ceil(getQuestionsCount() / 20)
        
        for (let i = 0; i < ticketsToLoad; i++) {
          const randomTicket = Math.floor(Math.random() * 40) + 1
          const response = await fetch(
            `https://raw.githubusercontent.com/etspring/pdd_russia/master/questions/A_B/tickets/Билет ${randomTicket}.json`
          )
          if (response.ok) {
            const ticketData = await response.json()
            questionsData.push(...ticketData)
          }
        }

        // Фильтруем по категории если не "Все темы"
        if (category !== 'all') {
          questionsData = questionsData.filter(q => 
            q.topic.some(t => getCategoryKeywords(category).some(keyword => 
              t.toLowerCase().includes(keyword.toLowerCase())
            ))
          )
        }

        // Перемешиваем и берем нужное количество
        questionsData = questionsData.sort(() => Math.random() - 0.5).slice(0, getQuestionsCount())
      }

      setQuestions(questionsData)
      setTimeRemaining(getTestDuration())
    } catch (err) {
      setError(`Ошибка загрузки вопросов: ${err instanceof Error ? err.message : 'Неизвестная ошибка'}`)
    } finally {
      setLoading(false)
    }
  }

  // Получение ключевых слов для категорий
  const getCategoryKeywords = (cat: string): string[] => {
    const categoryMap: Record<string, string[]> = {
      'general': ['общие положения', 'общие', 'основы'],
      'signals': ['знаки', 'сигналы', 'светофор', 'регулировщик'],
      'traffic': ['движение', 'скорость', 'обгон', 'остановка', 'стоянка'],
      'priority': ['приоритет', 'преимущество', 'уступить'],
      'parking': ['остановка', 'стоянка', 'парковка'],
      'safety': ['безопасность', 'освещение', 'перевозка'],
      'violations': ['ответственность', 'нарушения']
    }
    return categoryMap[cat] || []
  }

  // Количество вопросов в зависимости от режима
  const getQuestionsCount = (): number => {
    switch (testMode) {
      case 'exam':
      case 'ticket':
        return 20
      case 'study':
        return 10
      case 'review':
        return 15
      default:
        return 20
    }
  }

  // Длительность теста в секундах
  const getTestDuration = (): number => {
    switch (testMode) {
      case 'exam':
      case 'ticket':
        return 20 * 60 // 20 минут
      case 'study':
        return 0 // Без ограничений
      case 'review':
        return 15 * 60 // 15 минут
      default:
        return 20 * 60
    }
  }

  // Таймер
  useEffect(() => {
    if (timeRemaining > 0 && !testCompleted) {
      const timer = setTimeout(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            handleCompleteTest()
            return 0
          }
          return prev - 1
        })
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [timeRemaining, testCompleted])

  // Загрузка вопросов при монтировании
  useEffect(() => {
    loadQuestions()
  }, [category, testMode, ticketNumber])

  const handleAnswerSelect = (answerText: string) => {
    if (showExplanation) return
    setSelectedAnswer(answerText)
  }

  const handleNext = () => {
    if (!selectedAnswer) return

    const currentQ = questions[currentQuestion]
    const isCorrect = currentQ.answers.find(a => a.answer_text === selectedAnswer)?.is_correct || false

    setUserAnswers(prev => [...prev, {
      questionId: currentQ.id,
      answer: selectedAnswer,
      correct: isCorrect
    }])

    if (testMode === 'study') {
      setShowExplanation(true)
    } else {
      moveToNext()
    }
  }

  const handleContinue = () => {
    setShowExplanation(false)
    moveToNext()
  }

  const moveToNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1)
      setSelectedAnswer(null)
    } else {
      handleCompleteTest()
    }
  }

  const handleCompleteTest = () => {
    const timeSpent = Math.floor((Date.now() - startTime) / 1000)
    const correctAnswers = userAnswers.filter(a => a.correct).length
    const totalQuestions = questions.length
    const passed = (correctAnswers / totalQuestions) >= 0.9 // 90% для прохождения

    setTestCompleted(true)
    onComplete({
      totalQuestions,
      correctAnswers,
      timeSpent,
      passed
    })
  }

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  const getImageUrl = (imagePath: string): string => {
    if (imagePath === './images/no_image.jpg') return ''
    return `https://raw.githubusercontent.com/etspring/pdd_russia/master/${imagePath}`
  }

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <Download className="w-16 h-16 text-blue-500 mx-auto mb-4 animate-bounce" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Загрузка вопросов ПДД</h2>
          <p className="text-gray-600">Получаем актуальные вопросы из официальной базы данных...</p>
          <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
            <div className="bg-blue-500 h-2 rounded-full animate-pulse" style={{ width: '60%' }}></div>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <XCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Ошибка загрузки</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button 
            onClick={loadQuestions}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Попробовать снова
          </button>
        </div>
      </div>
    )
  }

  if (testCompleted) {
    const correctAnswers = userAnswers.filter(a => a.correct).length
    const totalQuestions = questions.length
    const percentage = Math.round((correctAnswers / totalQuestions) * 100)
    const passed = percentage >= 90

    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          {passed ? (
            <Trophy className="w-20 h-20 text-yellow-500 mx-auto mb-4" />
          ) : (
            <XCircle className="w-20 h-20 text-red-500 mx-auto mb-4" />
          )}
          
          <h2 className={`text-3xl font-bold mb-2 ${passed ? 'text-green-600' : 'text-red-600'}`}>
            {passed ? 'Поздравляем!' : 'Тест не пройден'}
          </h2>
          
          <p className={`text-xl mb-6 ${passed ? 'text-green-600' : 'text-red-600'}`}>
            {passed ? 'Вы успешно сдали тест ПДД!' : 'Необходимо больше подготовки'}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="text-3xl font-bold text-blue-600">{correctAnswers}/{totalQuestions}</div>
              <div className="text-blue-800">Правильных ответов</div>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="text-3xl font-bold text-green-600">{percentage}%</div>
              <div className="text-green-800">Результат</div>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="text-3xl font-bold text-purple-600">
                {formatTime(Math.floor((Date.now() - startTime) / 1000))}
              </div>
              <div className="text-purple-800">Время</div>
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <button 
              onClick={() => window.location.reload()}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
            >
              <RotateCcw className="w-5 h-5" />
              Пройти снова
            </button>
            
            <button 
              onClick={() => window.history.back()}
              className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors"
            >
              Назад к выбору
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (questions.length === 0) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <p className="text-gray-600">Вопросы не найдены для выбранной категории</p>
        </div>
      </div>
    )
  }

  const question = questions[currentQuestion]
  const imageUrl = getImageUrl(question.image)

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Заголовок */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6">
          <div className="flex justify-between items-center mb-2">
            <h1 className="text-2xl font-bold">
              {testMode === 'ticket' ? `${question.ticket_number}` : 'Тест ПДД'} - {question.topic.join(', ')}
            </h1>
            {timeRemaining > 0 && (
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg">
                <Clock className="w-5 h-5" />
                <span className="font-mono text-lg">{formatTime(timeRemaining)}</span>
              </div>
            )}
          </div>
          
          <div className="flex justify-between items-center">
            <p className="text-blue-100">Вопрос {currentQuestion + 1} из {questions.length}</p>
            <div className="w-48 bg-white/20 rounded-full h-2">
              <div 
                className="bg-white h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Контент вопроса */}
        <div className="p-6">
          {/* Изображение */}
          {imageUrl && (
            <div className="mb-6 text-center">
              <img 
                src={imageUrl} 
                alt="Дорожная ситуация"
                className="max-w-full h-auto mx-auto rounded-lg shadow-md"
                style={{ maxHeight: '300px' }}
              />
            </div>
          )}

          {/* Вопрос */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">{question.question}</h2>
          </div>

          {/* Варианты ответов */}
          <div className="space-y-3 mb-6">
            {question.answers.map((answer, index) => {
              const isSelected = selectedAnswer === answer.answer_text
              const isCorrect = answer.is_correct
              
              let buttonClass = "w-full p-4 text-left border-2 rounded-lg transition-all duration-200 "
              
              if (showExplanation) {
                if (isCorrect) {
                  buttonClass += "border-green-500 bg-green-50 text-green-800"
                } else if (isSelected && !isCorrect) {
                  buttonClass += "border-red-500 bg-red-50 text-red-800"
                } else {
                  buttonClass += "border-gray-200 bg-gray-50 text-gray-600"
                }
              } else {
                if (isSelected) {
                  buttonClass += "border-blue-500 bg-blue-50 text-blue-800"
                } else {
                  buttonClass += "border-gray-200 hover:border-blue-300 hover:bg-blue-50"
                }
              }

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(answer.answer_text)}
                  className={buttonClass}
                  disabled={showExplanation}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      showExplanation && isCorrect ? 'border-green-500 bg-green-500' :
                      showExplanation && isSelected && !isCorrect ? 'border-red-500 bg-red-500' :
                      isSelected ? 'border-blue-500 bg-blue-500' : 'border-gray-300'
                    }`}>
                      {((showExplanation && isCorrect) || (isSelected && !showExplanation)) && (
                        <CheckCircle className="w-4 h-4 text-white" />
                      )}
                      {showExplanation && isSelected && !isCorrect && (
                        <XCircle className="w-4 h-4 text-white" />
                      )}
                    </div>
                    <span className="flex-1">{answer.answer_text}</span>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Объяснение */}
          {showExplanation && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <h3 className="font-semibold text-yellow-800 mb-2">Объяснение:</h3>
              <p className="text-yellow-700">{question.answer_tip}</p>
            </div>
          )}

          {/* Кнопки навигации */}
          <div className="flex justify-between items-center">
            <button
              onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
              disabled={currentQuestion === 0}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              ← Назад
            </button>

            <div className="flex gap-3">
              {!showExplanation ? (
                <button
                  onClick={handleNext}
                  disabled={!selectedAnswer}
                  className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
                >
                  {currentQuestion === questions.length - 1 ? 'Завершить тест' : 'Следующий вопрос'}
                  <ArrowRight className="w-5 h-5" />
                </button>
              ) : (
                <button
                  onClick={handleContinue}
                  className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors flex items-center gap-2"
                >
                  {currentQuestion === questions.length - 1 ? 'Завершить тест' : 'Продолжить'}
                  <ArrowRight className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PDDTestAdvanced 