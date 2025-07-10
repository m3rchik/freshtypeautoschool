'use client'

import { useState } from 'react'
import { BookOpen, Clock, Target, FileText, Trophy, Users, Brain, Zap } from 'lucide-react'
import PDDTestAdvanced from '../../components/PDDTestAdvanced'

interface TestMode {
  id: 'study' | 'exam' | 'review' | 'ticket'
  name: string
  description: string
  duration: string
  questions: number
  icon: React.ReactNode
  color: string
}

interface TestCategory {
  id: string
  name: string
  description: string
  questionsAvailable: number
  difficulty: 'easy' | 'medium' | 'hard'
}

interface TestResult {
  totalQuestions: number
  correctAnswers: number
  timeSpent: number
  passed: boolean
}

const OnlineTestsPage = () => {
  const [selectedMode, setSelectedMode] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedTicket, setSelectedTicket] = useState<number | null>(null)
  const [testStarted, setTestStarted] = useState(false)

  const testModes: TestMode[] = [
    {
      id: 'study',
      name: 'Режим обучения',
      description: 'Изучайте правила с подробными объяснениями после каждого вопроса. Идеально для первичного изучения материала.',
      duration: 'Без ограничений',
      questions: 10,
      icon: <BookOpen className="w-8 h-8" />,
      color: 'blue'
    },
    {
      id: 'exam',
      name: 'Экзаменационный режим',
      description: 'Реальные условия экзамена в ГИБДД с ограничением времени. Случайные вопросы из всех категорий.',
      duration: '20 минут',
      questions: 20,
      icon: <Clock className="w-8 h-8" />,
      color: 'red'
    },
    {
      id: 'ticket',
      name: 'Билеты ПДД',
      description: 'Решайте официальные экзаменационные билеты. 40 билетов по 20 вопросов в каждом.',
      duration: '20 минут',
      questions: 20,
      icon: <FileText className="w-8 h-8" />,
      color: 'purple'
    },
    {
      id: 'review',
      name: 'Повторение',
      description: 'Закрепление пройденного материала с анализом ошибок. Средний уровень сложности.',
      duration: '15 минут',
      questions: 15,
      icon: <Target className="w-8 h-8" />,
      color: 'green'
    }
  ]

  const testCategories: TestCategory[] = [
    {
      id: 'all',
      name: 'Все темы',
      description: 'Смешанные вопросы из всех разделов ПДД',
      questionsAvailable: 800,
      difficulty: 'medium'
    },
    {
      id: 'general',
      name: 'Общие положения',
      description: 'Основные понятия и термины ПДД',
      questionsAvailable: 120,
      difficulty: 'easy'
    },
    {
      id: 'signals',
      name: 'Дорожные знаки и сигналы',
      description: 'Знаки, разметка, сигналы светофора и регулировщика',
      questionsAvailable: 180,
      difficulty: 'medium'
    },
    {
      id: 'traffic',
      name: 'Движение и маневрирование',
      description: 'Правила движения, обгон, поворот, разворот',
      questionsAvailable: 160,
      difficulty: 'hard'
    },
    {
      id: 'priority',
      name: 'Приоритет движения',
      description: 'Проезд перекрестков, преимущество в движении',
      questionsAvailable: 140,
      difficulty: 'hard'
    },
    {
      id: 'parking',
      name: 'Остановка и стоянка',
      description: 'Правила остановки и стоянки транспортных средств',
      questionsAvailable: 100,
      difficulty: 'medium'
    },
    {
      id: 'safety',
      name: 'Безопасность движения',
      description: 'Освещение, перевозка грузов и пассажиров',
      questionsAvailable: 100,
      difficulty: 'medium'
    }
  ]

  const handleTestComplete = (result: TestResult) => {
    // Здесь можно сохранить результат в localStorage или отправить на сервер
    console.log('Результат теста:', result)
  }

  const startTest = () => {
    if ((selectedMode === 'ticket' && selectedTicket) || (selectedMode !== 'ticket' && selectedCategory)) {
      setTestStarted(true)
    }
  }

  const resetTest = () => {
    setTestStarted(false)
    setSelectedMode(null)
    setSelectedCategory(null)
    setSelectedTicket(null)
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'text-green-600 bg-green-100'
      case 'medium': return 'text-yellow-600 bg-yellow-100'
      case 'hard': return 'text-red-600 bg-red-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'border-blue-200 hover:border-blue-400 hover:bg-blue-50',
      red: 'border-red-200 hover:border-red-400 hover:bg-red-50',
      green: 'border-green-200 hover:border-green-400 hover:bg-green-50',
      purple: 'border-purple-200 hover:border-purple-400 hover:bg-purple-50'
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  if (testStarted) {
    return (
      <PDDTestAdvanced
        category={selectedCategory || 'all'}
        testMode={selectedMode as 'exam' | 'study' | 'review' | 'ticket'}
        ticketNumber={selectedTicket || undefined}
        onComplete={handleTestComplete}
      />
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            📚 Онлайн тесты ПДД
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Полная база из <span className="font-bold text-blue-600">800 официальных вопросов</span> ПДД РФ. 
            40 экзаменационных билетов с изображениями дорожных ситуаций и подробными объяснениями.
          </p>
        </div>

        {/* Статистика */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-white rounded-lg p-4 text-center shadow-md">
            <div className="text-2xl font-bold text-blue-600">800</div>
            <div className="text-sm text-gray-600">Вопросов</div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center shadow-md">
            <div className="text-2xl font-bold text-green-600">40</div>
            <div className="text-sm text-gray-600">Билетов</div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center shadow-md">
            <div className="text-2xl font-bold text-purple-600">7</div>
            <div className="text-sm text-gray-600">Категорий</div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center shadow-md">
            <div className="text-2xl font-bold text-orange-600">4</div>
            <div className="text-sm text-gray-600">Режима</div>
          </div>
        </div>

        {!selectedMode ? (
          /* Выбор режима тестирования */
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
              Выберите режим тестирования
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testModes.map((mode) => (
                <div
                  key={mode.id}
                  onClick={() => setSelectedMode(mode.id)}
                  className={`bg-white rounded-xl p-6 border-2 cursor-pointer transition-all duration-200 ${getColorClasses(mode.color)}`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`text-${mode.color}-500 flex-shrink-0`}>
                      {mode.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{mode.name}</h3>
                      <p className="text-gray-600 mb-4">{mode.description}</p>
                      <div className="flex justify-between items-center text-sm">
                        <span className="bg-gray-100 px-3 py-1 rounded-full">
                          📝 {mode.questions} вопросов
                        </span>
                        <span className="bg-gray-100 px-3 py-1 rounded-full">
                          ⏱️ {mode.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : selectedMode === 'ticket' ? (
          /* Выбор билета */
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-800">
                Выберите билет ПДД
              </h2>
              <button
                onClick={() => setSelectedMode(null)}
                className="text-gray-600 hover:text-gray-800"
              >
                ← Назад
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {Array.from({ length: 40 }, (_, i) => i + 1).map((ticketNum) => (
                <button
                  key={ticketNum}
                  onClick={() => setSelectedTicket(ticketNum)}
                  className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                    selectedTicket === ticketNum
                      ? 'border-purple-500 bg-purple-50 text-purple-800'
                      : 'border-gray-200 hover:border-purple-300 hover:bg-purple-50'
                  }`}
                >
                  <div className="text-lg font-bold">#{ticketNum}</div>
                  <div className="text-xs text-gray-600">20 вопросов</div>
                </button>
              ))}
            </div>
            {selectedTicket && (
              <div className="mt-8 text-center">
                <div className="bg-white rounded-lg p-6 inline-block shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Билет #{selectedTicket}
                  </h3>
                  <p className="text-gray-600 mb-4">20 вопросов • 20 минут • Официальные вопросы ГИБДД</p>
                  <button
                    onClick={startTest}
                    className="bg-purple-500 text-white px-8 py-3 rounded-lg hover:bg-purple-600 transition-colors font-semibold"
                  >
                    Начать тестирование
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          /* Выбор категории */
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-800">
                Выберите категорию вопросов
              </h2>
              <button
                onClick={() => setSelectedMode(null)}
                className="text-gray-600 hover:text-gray-800"
              >
                ← Назад
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testCategories.map((category) => (
                <div
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`bg-white rounded-xl p-6 border-2 cursor-pointer transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                  }`}
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-bold text-gray-800">{category.name}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(category.difficulty)}`}>
                      {category.difficulty === 'easy' ? 'Легко' : 
                       category.difficulty === 'medium' ? 'Средне' : 'Сложно'}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="bg-gray-100 px-3 py-1 rounded-full">
                      📊 {category.questionsAvailable} вопросов
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {selectedCategory && (
              <div className="mt-8 text-center">
                <div className="bg-white rounded-lg p-6 inline-block shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {testModes.find(m => m.id === selectedMode)?.name}
                  </h3>
                  <p className="text-gray-600 mb-2">
                    Категория: {testCategories.find(c => c.id === selectedCategory)?.name}
                  </p>
                  <p className="text-gray-600 mb-4">
                    {testModes.find(m => m.id === selectedMode)?.questions} вопросов • {testModes.find(m => m.id === selectedMode)?.duration}
                  </p>
                  <button
                    onClick={startTest}
                    className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors font-semibold"
                  >
                    Начать тестирование
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Информационный блок */}
        <div className="mt-16 bg-white rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            🎯 Особенности нашей системы тестирования
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <Trophy className="w-12 h-12 text-yellow-500 mx-auto mb-3" />
              <h4 className="font-bold text-gray-800 mb-2">Официальные вопросы</h4>
              <p className="text-gray-600 text-sm">Все 800 вопросов из официальной базы ГИБДД РФ</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-blue-500 mx-auto mb-3" />
              <h4 className="font-bold text-gray-800 mb-2">Реальные изображения</h4>
              <p className="text-gray-600 text-sm">Подлинные изображения дорожных ситуаций</p>
            </div>
            <div className="text-center">
              <Brain className="w-12 h-12 text-green-500 mx-auto mb-3" />
              <h4 className="font-bold text-gray-800 mb-2">Подробные объяснения</h4>
              <p className="text-gray-600 text-sm">Разбор каждого ответа со ссылками на ПДД</p>
            </div>
            <div className="text-center">
              <Zap className="w-12 h-12 text-purple-500 mx-auto mb-3" />
              <h4 className="font-bold text-gray-800 mb-2">Актуальная база</h4>
              <p className="text-gray-600 text-sm">Регулярные обновления в соответствии с изменениями в ПДД</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OnlineTestsPage 