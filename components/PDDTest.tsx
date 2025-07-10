'use client'

import { useState, useEffect, useMemo } from 'react'
import { CheckCircle, XCircle, Clock, ArrowRight, RotateCcw, Trophy } from 'lucide-react'

interface Answer {
  id: string
  text: string
  isCorrect: boolean
  explanation?: string
}

interface Question {
  id: string
  text: string
  image?: string
  answers: Answer[]
  category: 'general' | 'signals' | 'traffic' | 'parking' | 'priority'
}

interface TestResult {
  totalQuestions: number
  correctAnswers: number
  timeSpent: number
  passed: boolean
}

interface PDDTestProps {
  category: string
  testMode: 'exam' | 'study' | 'review'
  onComplete: (result: TestResult) => void
}

const PDDTest = ({ category, testMode, onComplete }: PDDTestProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({})
  const [showExplanation, setShowExplanation] = useState(false)
  const [timeLeft, setTimeLeft] = useState(0)
  const [isCompleted, setIsCompleted] = useState(false)
  const [startTime] = useState(Date.now())

  // Расширенная база вопросов ПДД (актуальные на 2024 год)
  const allQuestions: Question[] = [
    // Общие правила
    {
      id: 'general_1',
      text: 'Что означает термин "Участник дорожного движения"?',
      category: 'general',
      answers: [
        { id: 'a', text: 'Лицо, принимающее непосредственное участие в процессе движения в качестве водителя, пешехода, пассажира транспортного средства', isCorrect: true, explanation: 'Согласно пункту 1.2 ПДД РФ, участник дорожного движения включает всех лиц, принимающих участие в процессе движения.' },
        { id: 'b', text: 'Только водители механических транспортных средств', isCorrect: false },
        { id: 'c', text: 'Только пешеходы и водители', isCorrect: false },
        { id: 'd', text: 'Лица, находящиеся на проезжей части', isCorrect: false }
      ]
    },
    {
      id: 'general_2',
      text: 'В каких случаях водителю запрещается эксплуатация транспортного средства?',
      category: 'general',
      answers: [
        { id: 'a', text: 'При неисправности рулевого управления', isCorrect: true, explanation: 'Согласно п.2.3.1 ПДД, запрещается движение при неисправности рулевого управления, тормозной системы, негорящих фарах и задних габаритных огнях в темное время суток или в условиях недостаточной видимости.' },
        { id: 'b', text: 'При загрязненных номерных знаках', isCorrect: false },
        { id: 'c', text: 'При отсутствии аптечки', isCorrect: false },
        { id: 'd', text: 'При истекшем сроке техосмотра', isCorrect: false }
      ]
    },
    {
      id: 'general_3',
      text: 'Разрешается ли водителю пользоваться телефоном во время движения?',
      category: 'general',
      answers: [
        { id: 'a', text: 'Запрещается', isCorrect: false },
        { id: 'b', text: 'Разрешается только с использованием технического устройства, позволяющего вести переговоры без использования рук', isCorrect: true, explanation: 'Согласно п.2.7 ПДД РФ, водителю запрещается пользоваться телефоном, не оборудованным техническим устройством hands-free.' },
        { id: 'c', text: 'Разрешается только на красный сигнал светофора', isCorrect: false },
        { id: 'd', text: 'Разрешается в любых случаях', isCorrect: false }
      ]
    },

    // Дорожные знаки
    {
      id: 'signals_1',
      text: 'Что означает дорожный знак "Движение запрещено"?',
      category: 'signals',
      answers: [
        { id: 'a', text: 'Запрещается движение всех транспортных средств', isCorrect: true, explanation: 'Знак 3.2 "Движение запрещено" запрещает движение всех транспортных средств кроме маршрутных ТС.' },
        { id: 'b', text: 'Запрещается движение только грузовых автомобилей', isCorrect: false },
        { id: 'c', text: 'Запрещается движение только в дневное время', isCorrect: false },
        { id: 'd', text: 'Запрещается обгон', isCorrect: false }
      ]
    },
    {
      id: 'signals_2',
      text: 'На каком расстоянии устанавливается знак "Дети" в населенном пункте?',
      category: 'signals',
      answers: [
        { id: 'a', text: '50-100 метров', isCorrect: true, explanation: 'В населенных пунктах предупреждающие знаки устанавливаются на расстоянии 50-100 метров до начала опасного участка.' },
        { id: 'b', text: '150-300 метров', isCorrect: false },
        { id: 'c', text: '15-20 метров', isCorrect: false },
        { id: 'd', text: 'Непосредственно перед опасным участком', isCorrect: false }
      ]
    },
    {
      id: 'signals_3',
      text: 'Что означает сочетание красного и желтого сигналов светофора?',
      category: 'signals',
      answers: [
        { id: 'a', text: 'Движение запрещено', isCorrect: false },
        { id: 'b', text: 'Приготовиться к движению', isCorrect: true, explanation: 'Сочетание красного и желтого сигналов запрещает движение и информирует о предстоящем включении зеленого сигнала.' },
        { id: 'c', text: 'Движение разрешено', isCorrect: false },
        { id: 'd', text: 'Внимание, смена сигнала', isCorrect: false }
      ]
    },

    // Движение по дорогам
    {
      id: 'traffic_1',
      text: 'Какая максимальная скорость разрешена в населенных пунктах?',
      category: 'traffic',
      answers: [
        { id: 'a', text: '40 км/ч', isCorrect: false },
        { id: 'b', text: '60 км/ч', isCorrect: true, explanation: 'В населенных пунктах разрешается движение транспортных средств со скоростью не более 60 км/ч.' },
        { id: 'c', text: '80 км/ч', isCorrect: false },
        { id: 'd', text: '90 км/ч', isCorrect: false }
      ]
    },
    {
      id: 'traffic_2',
      text: 'Разрешен ли обгон на мостах, путепроводах, эстакадах и под ними?',
      category: 'traffic',
      answers: [
        { id: 'a', text: 'Разрешен', isCorrect: false },
        { id: 'b', text: 'Запрещен', isCorrect: true, explanation: 'Обгон запрещен на мостах, путепроводах, эстакадах и под ними, а также в тоннелях.' },
        { id: 'c', text: 'Разрешен только в светлое время суток', isCorrect: false },
        { id: 'd', text: 'Разрешен при хорошей видимости', isCorrect: false }
      ]
    },
    {
      id: 'traffic_3',
      text: 'На каком расстоянии должны включаться указатели поворота?',
      category: 'traffic',
      answers: [
        { id: 'a', text: 'Непосредственно перед маневром', isCorrect: false },
        { id: 'b', text: 'Заблаговременно до начала выполнения маневра', isCorrect: true, explanation: 'Указатели поворота должны подаваться заблаговременно до начала выполнения маневра и прекращаться немедленно после его завершения.' },
        { id: 'c', text: 'За 100 метров до поворота', isCorrect: false },
        { id: 'd', text: 'За 50 метров до поворота', isCorrect: false }
      ]
    },

    // Приоритет движения
    {
      id: 'priority_1',
      text: 'Кто имеет преимущество при проезде нерегулируемого перекрестка равнозначных дорог?',
      category: 'priority',
      answers: [
        { id: 'a', text: 'Транспортное средство, приближающееся справа', isCorrect: true, explanation: 'На перекрестке равнозначных дорог водитель безрельсового ТС обязан уступить дорогу ТС, приближающимся справа.' },
        { id: 'b', text: 'Транспортное средство, приближающееся слева', isCorrect: false },
        { id: 'c', text: 'Транспортное средство, движущееся прямо', isCorrect: false },
        { id: 'd', text: 'Более крупное транспортное средство', isCorrect: false }
      ]
    },
    {
      id: 'priority_2',
      text: 'Обязан ли водитель уступать дорогу пешеходам при повороте направо или налево?',
      category: 'priority',
      answers: [
        { id: 'a', text: 'Обязан', isCorrect: true, explanation: 'При повороте направо или налево водитель обязан уступить дорогу пешеходам и велосипедистам, пересекающим проезжую часть дороги.' },
        { id: 'b', text: 'Не обязан', isCorrect: false },
        { id: 'c', text: 'Обязан только при повороте налево', isCorrect: false },
        { id: 'd', text: 'Обязан только на нерегулируемом перекрестке', isCorrect: false }
      ]
    },
    {
      id: 'priority_3',
      text: 'Кто пользуется преимуществом проезда — трамвай или безрельсовое транспортное средство?',
      category: 'priority',
      answers: [
        { id: 'a', text: 'Безрельсовое транспортное средство', isCorrect: false },
        { id: 'b', text: 'Трамвай имеет преимущество во всех случаях', isCorrect: false },
        { id: 'c', text: 'Трамвай, кроме случаев выезда из депо', isCorrect: true, explanation: 'Трамвай имеет преимущество перед безрельсовыми ТС, движущимися в попутном или встречном направлении по равнозначной дороге, кроме случаев выезда из депо.' },
        { id: 'd', text: 'Зависит от сигналов светофора', isCorrect: false }
      ]
    },

    // Остановка и стоянка
    {
      id: 'parking_1',
      text: 'Разрешается ли остановка ближе 5 м от пешеходного перехода?',
      category: 'parking',
      answers: [
        { id: 'a', text: 'Разрешается', isCorrect: false },
        { id: 'b', text: 'Запрещается', isCorrect: true, explanation: 'Остановка запрещается ближе 5 метров от края пересекаемой проезжей части, а также перед пешеходным переходом.' },
        { id: 'c', text: 'Разрешается только для высадки пассажиров', isCorrect: false },
        { id: 'd', text: 'Разрешается в светлое время суток', isCorrect: false }
      ]
    },
    {
      id: 'parking_2',
      text: 'Где запрещается стоянка транспортных средств?',
      category: 'parking',
      answers: [
        { id: 'a', text: 'На главной дороге вне населенного пункта', isCorrect: true, explanation: 'Стоянка запрещается на главной дороге вне населенных пунктов, а также ближе 50 м от железнодорожных переездов.' },
        { id: 'b', text: 'На дорогах с односторонним движением', isCorrect: false },
        { id: 'c', text: 'На дорогах с двумя полосами движения', isCorrect: false },
        { id: 'd', text: 'В жилых зонах', isCorrect: false }
      ]
    },
    {
      id: 'parking_3',
      text: 'На каком расстоянии от остановки маршрутных ТС запрещена остановка?',
      category: 'parking',
      answers: [
        { id: 'a', text: '10 метров', isCorrect: false },
        { id: 'b', text: '15 метров', isCorrect: true, explanation: 'Остановка запрещается ближе 15 метров от мест остановки маршрутных ТС, кроме случая остановки для посадки и высадки пассажиров.' },
        { id: 'c', text: '20 метров', isCorrect: false },
        { id: 'd', text: '25 метров', isCorrect: false }
      ]
    }
  ]

  // Получение категории по ID
  const getCategoryId = (categoryName: string): string => {
    const categoryMap: Record<string, string> = {
      'Общие правила': 'general',
      'Дорожные знаки': 'signals', 
      'Движение по дорогам': 'traffic',
      'Приоритет движения': 'priority',
      'Остановка и стоянка': 'parking'
    }
    return categoryMap[categoryName] || 'general'
  }

  // Фильтрация вопросов по категории и режиму
  const filteredQuestions = useMemo(() => {
    const categoryId = getCategoryId(category)
    const categoryQuestions = allQuestions.filter(q => q.category === categoryId)
    
    // Определяем количество вопросов в зависимости от режима
    const questionCount = testMode === 'exam' ? 10 : testMode === 'study' ? 5 : 8
    
    // Возвращаем случайные вопросы в нужном количестве
    const shuffled = [...categoryQuestions].sort(() => Math.random() - 0.5)
    return shuffled.slice(0, Math.min(questionCount, categoryQuestions.length))
  }, [category, testMode])

  // Устанавливаем таймер в зависимости от количества вопросов
  useEffect(() => {
    const timePerQuestion = testMode === 'exam' ? 90 : 0 // 1.5 минуты на вопрос в экзамене
    const totalTime = testMode === 'exam' ? filteredQuestions.length * timePerQuestion : 0
    setTimeLeft(totalTime)
  }, [testMode, filteredQuestions.length])

  // Таймер для экзамена
  useEffect(() => {
    if (testMode === 'exam' && timeLeft > 0 && !isCompleted) {
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            handleTestComplete()
            return 0
          }
          return prev - 1
        })
      }, 1000)
      return () => clearInterval(timer)
    }
  }, [timeLeft, isCompleted, testMode])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  const handleAnswerSelect = (questionId: string, answerId: string) => {
    if (isCompleted) return
    
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: answerId
    }))

    if (testMode === 'study') {
      setShowExplanation(true)
    }
  }

  const handleNextQuestion = () => {
    setShowExplanation(false)
    if (currentQuestion < filteredQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1)
    } else {
      handleTestComplete()
    }
  }

  const handleTestComplete = () => {
    const timeSpent = Math.round((Date.now() - startTime) / 1000)
    const correctCount = filteredQuestions.reduce((count, question) => {
      const selectedAnswerId = selectedAnswers[question.id]
      const correctAnswer = question.answers.find(a => a.isCorrect)
      return count + (selectedAnswerId === correctAnswer?.id ? 1 : 0)
    }, 0)

    // Снижаем порог прохождения до 80% (более реалистично)
    const passThreshold = Math.ceil(filteredQuestions.length * 0.8)

    const result: TestResult = {
      totalQuestions: filteredQuestions.length,
      correctAnswers: correctCount,
      timeSpent,
      passed: correctCount >= passThreshold
    }

    setIsCompleted(true)
    onComplete(result)
  }

  const resetTest = () => {
    setCurrentQuestion(0)
    setSelectedAnswers({})
    setShowExplanation(false)
    const timePerQuestion = testMode === 'exam' ? 90 : 0
    const totalTime = testMode === 'exam' ? filteredQuestions.length * timePerQuestion : 0
    setTimeLeft(totalTime)
    setIsCompleted(false)
  }

  // Если нет вопросов для категории
  if (filteredQuestions.length === 0) {
    return (
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <div className="text-center">
          <XCircle className="w-16 h-16 mx-auto mb-4 text-red-500" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Вопросы не найдены
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Для выбранной категории "{category}" пока нет доступных вопросов.
          </p>
          <button
            onClick={() => window.history.back()}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Вернуться к выбору категории
          </button>
        </div>
      </div>
    )
  }

  const currentQ = filteredQuestions[currentQuestion]
  const selectedAnswerId = selectedAnswers[currentQ?.id]
  const selectedAnswer = currentQ?.answers.find(a => a.id === selectedAnswerId)
  const correctAnswer = currentQ?.answers.find(a => a.isCorrect)

  if (isCompleted) {
    const correctCount = filteredQuestions.reduce((count, question) => {
      const selectedAnswerId = selectedAnswers[question.id]
      const correctAnswer = question.answers.find(a => a.isCorrect)
      return count + (selectedAnswerId === correctAnswer?.id ? 1 : 0)
    }, 0)
    
    const passThreshold = Math.ceil(filteredQuestions.length * 0.8)
    const passed = correctCount >= passThreshold

    return (
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <div className="text-center">
          <div className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center ${
            passed ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
          }`}>
            {passed ? <Trophy className="w-10 h-10" /> : <XCircle className="w-10 h-10" />}
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {passed ? 'Поздравляем!' : 'Тест не пройден'}
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            {passed 
              ? 'Вы успешно сдали тест ПДД!'
              : `Для прохождения нужно набрать минимум ${passThreshold} правильных ответов.`
            }
          </p>

          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {correctCount}/{filteredQuestions.length}
              </div>
              <div className="text-gray-600 dark:text-gray-300">Правильных ответов</div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {Math.round((correctCount / filteredQuestions.length) * 100)}%
              </div>
              <div className="text-gray-600 dark:text-gray-300">Результат</div>
            </div>
          </div>

          <div className="flex space-x-4 justify-center">
            <button
              onClick={resetTest}
              className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <RotateCcw className="w-5 h-5" />
              <span>Пройти заново</span>
            </button>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center space-x-2 bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <span>Вернуться к выбору</span>
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg">
      {/* Заголовок теста */}
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Тест ПДД - {category}
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Вопрос {currentQuestion + 1} из {filteredQuestions.length}
            </p>
          </div>
          {testMode === 'exam' && (
            <div className="flex items-center space-x-2 text-blue-600">
              <Clock className="w-5 h-5" />
              <span className="font-mono text-lg">{formatTime(timeLeft)}</span>
            </div>
          )}
        </div>
        
        {/* Прогресс бар */}
        <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / filteredQuestions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Вопрос */}
      <div className="p-6">
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            {currentQ?.text}
          </h3>
          {currentQ?.image && (
            <div className="mb-6">
              <img
                src={currentQ.image}
                alt="Дорожная ситуация"
                className="w-full max-w-md mx-auto rounded-lg shadow-md"
              />
            </div>
          )}
        </div>

        {/* Варианты ответов */}
        <div className="space-y-3">
          {currentQ?.answers.map((answer) => {
            const isSelected = selectedAnswerId === answer.id
            const isCorrect = answer.isCorrect
            const showResult = showExplanation || isCompleted
            
            let buttonClass = 'w-full text-left p-4 rounded-lg border-2 transition-all duration-200 '
            
            if (showResult) {
              if (isCorrect) {
                buttonClass += 'border-green-500 bg-green-50 text-green-800 dark:bg-green-900 dark:text-green-200'
              } else if (isSelected && !isCorrect) {
                buttonClass += 'border-red-500 bg-red-50 text-red-800 dark:bg-red-900 dark:text-red-200'
              } else {
                buttonClass += 'border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-gray-700'
              }
            } else if (isSelected) {
              buttonClass += 'border-blue-500 bg-blue-50 dark:bg-blue-900 dark:border-blue-400'
            } else {
              buttonClass += 'border-gray-300 hover:border-blue-300 dark:border-gray-600 dark:hover:border-blue-500'
            }

            return (
              <button
                key={answer.id}
                onClick={() => handleAnswerSelect(currentQ.id, answer.id)}
                disabled={showExplanation || isCompleted}
                className={buttonClass}
              >
                <div className="flex items-center justify-between">
                  <span className="flex-1">{answer.text}</span>
                  {showResult && isCorrect && (
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  )}
                  {showResult && isSelected && !isCorrect && (
                    <XCircle className="w-5 h-5 text-red-600" />
                  )}
                </div>
              </button>
            )
          })}
        </div>

        {/* Объяснение */}
        {showExplanation && selectedAnswer && (
          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900 rounded-lg">
            <h4 className="font-semibold text-blue-900 dark:text-blue-200 mb-2">
              Объяснение:
            </h4>
            <p className="text-blue-800 dark:text-blue-300">
              {correctAnswer?.explanation || 'Правильный ответ выделен зеленым цветом.'}
            </p>
          </div>
        )}

        {/* Навигация */}
        <div className="mt-8 flex justify-between">
          <button
            onClick={() => setCurrentQuestion(prev => Math.max(0, prev - 1))}
            disabled={currentQuestion === 0}
            className="px-6 py-3 bg-gray-300 hover:bg-gray-400 disabled:opacity-50 disabled:cursor-not-allowed text-gray-700 rounded-lg font-medium transition-colors"
          >
            Назад
          </button>
          
          {(selectedAnswerId || testMode === 'study') && (
            <button
              onClick={handleNextQuestion}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
            >
              <span>{currentQuestion === filteredQuestions.length - 1 ? 'Завершить тест' : 'Следующий вопрос'}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default PDDTest 