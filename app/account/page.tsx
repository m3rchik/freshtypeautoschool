'use client'

import { useState } from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import { User, Settings, BookOpen, Calendar, CreditCard, Trophy, LogOut, Phone, Mail, Bell, ChevronRight } from 'lucide-react'

const AccountPage = () => {
  const [activeTab, setActiveTab] = useState('profile')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showLoginForm, setShowLoginForm] = useState(true)
  const [isSavingProfile, setIsSavingProfile] = useState(false)

  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  })

  const [registerData, setRegisterData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  })

  // Данные профиля
  const [profileData, setProfileData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  })

  const menuItems = [
    { id: 'profile', label: 'Мой профиль', icon: User },
    { id: 'courses', label: 'Мои курсы', icon: BookOpen },
    { id: 'schedule', label: 'Расписание', icon: Calendar },
    { id: 'payments', label: 'Платежи', icon: CreditCard },
    { id: 'progress', label: 'Прогресс', icon: Trophy },
    { id: 'settings', label: 'Настройки', icon: Settings }
  ]

  const courses = [
    {
      name: 'Категория B',
      progress: 75,
      status: 'В процессе',
      nextLesson: '25 декабря в 10:00',
      instructor: 'Иван Петров'
    },
    {
      name: 'Теоретический курс',
      progress: 90,
      status: 'Почти завершен',
      nextLesson: '26 декабря в 14:00',
      instructor: 'Мария Сидорова'
    }
  ]

  const payments = [
    { date: '2024-12-15', amount: '25,000₽', description: 'Курс категории B', status: 'Оплачено' },
    { date: '2024-12-10', amount: '5,000₽', description: 'Дополнительные занятия', status: 'Оплачено' },
    { date: '2024-12-05', amount: '3,000₽', description: 'Экзамен в ГИБДД', status: 'Ожидает оплаты' }
  ]

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Имитация входа с демо-данными
    setProfileData({
      firstName: 'Иван',
      lastName: 'Петров',
      email: loginData.email,
      phone: '+7 (999) 123-45-67'
    })
    
    setIsLoggedIn(true)
  }

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Проверка заполнения всех полей
    if (!registerData.firstName || !registerData.lastName || !registerData.email || !registerData.phone || !registerData.password || !registerData.confirmPassword) {
      alert('Пожалуйста, заполните все поля!')
      return
    }
    
    // Проверка совпадения паролей
    if (registerData.password !== registerData.confirmPassword) {
      alert('Пароли не совпадают!')
      return
    }
    
    // Сохранение данных регистрации в профиль
    setProfileData({
      firstName: registerData.firstName,
      lastName: registerData.lastName,
      email: registerData.email,
      phone: registerData.phone
    })
    
    // Имитация регистрации
    setIsLoggedIn(true)
  }

  // Обработчик сохранения профиля
  const handleSaveProfile = async () => {
    setIsSavingProfile(true)
    
    try {
      // Имитация сохранения на сервере
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      alert('Профиль успешно обновлен!')
      
    } catch (error) {
      console.error('Ошибка при сохранении профиля:', error)
      alert('Произошла ошибка при сохранении профиля')
    } finally {
      setIsSavingProfile(false)
    }
  }

  // Обработчик просмотра подробностей курса
  const handleViewCourseDetails = (courseName: string) => {
    alert(`Открытие подробной информации о курсе "${courseName}". В реальном проекте откроется страница с деталями курса.`)
  }

  // Обработчик изменения данных профиля
  const handleProfileChange = (field: string, value: string) => {
    setProfileData(prev => ({ ...prev, [field]: value }))
  }

  // Обработчик загрузки аватара
  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // В реальном проекте здесь будет загрузка на сервер
      alert('Загрузка аватара: ' + file.name)
    }
  }

  // Обработчик отмены записи
  const handleCancelBooking = (lessonDate: string) => {
    alert(`Отмена записи на урок ${lessonDate}`)
  }

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {showLoginForm ? 'Вход в личный кабинет' : 'Регистрация'}
                </h1>
                <p className="text-gray-600 dark:text-gray-300">
                  {showLoginForm ? 'Войдите в свой аккаунт' : 'Создайте новый аккаунт'}
                </p>
              </div>

              {showLoginForm ? (
                <form onSubmit={handleLogin} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={loginData.email}
                      onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      placeholder="example@email.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Пароль
                    </label>
                    <input
                      type="password"
                      value={loginData.password}
                      onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      placeholder="••••••••"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors duration-300"
                  >
                    Войти
                  </button>
                </form>
              ) : (
                <form onSubmit={handleRegister} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Имя
                      </label>
                      <input
                        type="text"
                        value={registerData.firstName}
                        onChange={(e) => setRegisterData({ ...registerData, firstName: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                        placeholder="Иван"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Фамилия
                      </label>
                      <input
                        type="text"
                        value={registerData.lastName}
                        onChange={(e) => setRegisterData({ ...registerData, lastName: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                        placeholder="Петров"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={registerData.email}
                      onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      placeholder="example@email.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Телефон
                    </label>
                    <input
                      type="tel"
                      value={registerData.phone}
                      onChange={(e) => setRegisterData({ ...registerData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      placeholder="+7 (999) 123-45-67"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Пароль
                    </label>
                    <input
                      type="password"
                      value={registerData.password}
                      onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      placeholder="••••••••"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Подтвердите пароль
                    </label>
                    <input
                      type="password"
                      value={registerData.confirmPassword}
                      onChange={(e) => setRegisterData({ ...registerData, confirmPassword: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      placeholder="••••••••"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors duration-300"
                  >
                    Зарегистрироваться
                  </button>
                </form>
              )}

              <div className="mt-6 text-center">
                <button
                  onClick={() => setShowLoginForm(!showLoginForm)}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  {showLoginForm ? 'Нет аккаунта? Зарегистрируйтесь' : 'Уже есть аккаунт? Войдите'}
                </button>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-600">
                <p className="text-center text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Нужна помощь?
                </p>
                <div className="flex justify-center space-x-4">
                  <a href="tel:+79991234567" className="flex items-center text-blue-600 hover:text-blue-700">
                    <Phone className="w-4 h-4 mr-1" />
                    <span className="text-sm">Позвонить</span>
                  </a>
                  <a href="mailto:support@freshtype.ru" className="flex items-center text-blue-600 hover:text-blue-700">
                    <Mail className="w-4 h-4 mr-1" />
                    <span className="text-sm">Написать</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="flex">
        {/* Сайдбар */}
        <div className="w-64 bg-white dark:bg-gray-800 shadow-lg">
          <div className="p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-semibold text-gray-900 dark:text-white">
                  {profileData.firstName && profileData.lastName 
                    ? `${profileData.firstName} ${profileData.lastName}` 
                    : 'Добро пожаловать!'
                  }
                </div>
                <div className="text-sm text-gray-500">Курсант</div>
              </div>
            </div>

            <nav className="space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors duration-200 ${
                    activeTab === item.id
                      ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-600">
              <button
                onClick={() => {
                  setIsLoggedIn(false)
                  setActiveTab('profile')
                  // Очистка данных при выходе
                  setProfileData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: ''
                  })
                  setLoginData({
                    email: '',
                    password: ''
                  })
                  setRegisterData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    password: '',
                    confirmPassword: ''
                  })
                }}
                className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors duration-200"
              >
                <LogOut className="w-5 h-5" />
                <span>Выйти</span>
              </button>
            </div>
          </div>
        </div>

        {/* Основной контент */}
        <div className="flex-1 p-8">
          {activeTab === 'profile' && (
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Мой профиль</h1>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                      Личная информация
                    </h2>
                    
                    {/* Аватар */}
                    <div className="flex items-center space-x-6 mb-6">
                      <div className="relative">
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center">
                          <User className="w-10 h-10 text-white" />
                        </div>
                        <label className="absolute bottom-0 right-0 bg-white dark:bg-gray-700 rounded-full p-2 shadow-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleAvatarUpload}
                            className="hidden"
                          />
                          <Settings className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                        </label>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                          {profileData.firstName && profileData.lastName 
                            ? `${profileData.firstName} ${profileData.lastName}` 
                            : 'Новый пользователь'
                          }
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">Курсант</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Имя
                        </label>
                        <input
                          type="text"
                          value={profileData.firstName}
                          onChange={(e) => handleProfileChange('firstName', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Фамилия
                        </label>
                        <input
                          type="text"
                          value={profileData.lastName}
                          onChange={(e) => handleProfileChange('lastName', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          value={profileData.email}
                          onChange={(e) => handleProfileChange('email', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Телефон
                        </label>
                        <input
                          type="tel"
                          value={profileData.phone}
                          onChange={(e) => handleProfileChange('phone', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                        />
                      </div>
                    </div>
                    <button
                      onClick={handleSaveProfile}
                      className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
                    >
                      Сохранить изменения
                    </button>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                      Статистика
                    </h2>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-300">Курсы в процессе</span>
                        <span className="font-semibold text-gray-900 dark:text-white">2</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-300">Пройдено уроков</span>
                        <span className="font-semibold text-gray-900 dark:text-white">24</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-300">Общий прогресс</span>
                        <span className="font-semibold text-green-600">82%</span>
                      </div>
                    </div>
                  </div>

                  {/* Быстрые действия */}
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                      Быстрые действия
                    </h2>
                    <div className="space-y-3">
                      <Link href="/online-tests" className="flex items-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
                        <BookOpen className="w-5 h-5 text-blue-600 mr-3" />
                        <span className="text-gray-900 dark:text-white">Пройти тест ПДД</span>
                      </Link>
                      <Link href="/booking" className="flex items-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors">
                        <Calendar className="w-5 h-5 text-green-600 mr-3" />
                        <span className="text-gray-900 dark:text-white">Записаться на урок</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'courses' && (
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Мои курсы</h1>
              
              <div className="space-y-6">
                {courses.map((course, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                          {course.name}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          Инструктор: {course.instructor}
                        </p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        course.status === 'В процессе' 
                          ? 'bg-blue-100 text-blue-600'
                          : 'bg-green-100 text-green-600'
                      }`}>
                        {course.status}
                      </span>
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-600 dark:text-gray-300">Прогресс</span>
                        <span className="font-medium text-gray-900 dark:text-white">{course.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Следующее занятие: {course.nextLesson}
                        </p>
                      </div>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleCancelBooking(course.nextLesson)}
                          className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-300"
                        >
                          Отменить
                        </button>
                        <button
                          onClick={() => handleViewCourseDetails(course.name)}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300"
                        >
                          Подробнее
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'payments' && (
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">История платежей</h1>
              
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 dark:bg-gray-700">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                          Дата
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                          Описание
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                          Сумма
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                          Статус
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                      {payments.map((payment, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                            {payment.date}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                            {payment.description}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                            {payment.amount}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                              payment.status === 'Оплачено'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {payment.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'schedule' && (
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Расписание</h1>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Ближайшие занятия */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Ближайшие занятия
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <div className="flex items-center">
                        <Calendar className="w-5 h-5 text-blue-600 mr-3" />
                        <div>
                          <div className="font-medium text-gray-900 dark:text-white">
                            Практическое вождение
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-300">
                            25 декабря в 10:00 - Иван Петров
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => handleCancelBooking('25 декабря в 10:00')}
                        className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm font-medium transition-colors duration-300"
                      >
                        Отменить
                      </button>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <div className="flex items-center">
                        <Calendar className="w-5 h-5 text-green-600 mr-3" />
                        <div>
                          <div className="font-medium text-gray-900 dark:text-white">
                            Теория ПДД
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-300">
                            26 декабря в 14:00 - Мария Сидорова
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => handleCancelBooking('26 декабря в 14:00')}
                        className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm font-medium transition-colors duration-300"
                      >
                        Отменить
                      </button>
                    </div>
                  </div>
                </div>

                {/* Календарь */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Календарь на месяц
                  </h2>
                  <div className="text-center text-gray-600 dark:text-gray-300">
                    <Calendar className="w-16 h-16 mx-auto mb-4" />
                    <p>Интерактивный календарь будет здесь</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'progress' && (
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Прогресс обучения</h1>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Общий прогресс */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Общий прогресс
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-600 dark:text-gray-300">Теория</span>
                        <span className="font-medium text-gray-900 dark:text-white">90%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div className="bg-green-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-600 dark:text-gray-300">Практика</span>
                        <span className="font-medium text-gray-900 dark:text-white">75%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Достижения */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Достижения
                  </h2>
                  <div className="space-y-3">
                    <div className="flex items-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                      <Trophy className="w-5 h-5 text-yellow-600 mr-3" />
                      <span className="text-sm text-gray-900 dark:text-white">
                        Первый урок завершен
                      </span>
                    </div>
                    <div className="flex items-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <Trophy className="w-5 h-5 text-blue-600 mr-3" />
                      <span className="text-sm text-gray-900 dark:text-white">
                        Тест ПДД сдан на 100%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Настройки</h1>
              
              <div className="space-y-6">
                {/* Уведомления */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Уведомления
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Bell className="w-5 h-5 text-gray-400 mr-3" />
                        <span className="text-gray-900 dark:text-white">Email уведомления</span>
                      </div>
                      <input type="checkbox" defaultChecked className="rounded" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Bell className="w-5 h-5 text-gray-400 mr-3" />
                        <span className="text-gray-900 dark:text-white">SMS уведомления</span>
                      </div>
                      <input type="checkbox" className="rounded" />
                    </div>
                  </div>
                </div>

                {/* Безопасность */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Безопасность
                  </h2>
                  <div className="space-y-4">
                    <button className="w-full text-left p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-900 dark:text-white">Изменить пароль</span>
                        <ChevronRight className="w-5 h-5 text-gray-400" />
                      </div>
                    </button>
                    <button className="w-full text-left p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-900 dark:text-white">Двухфакторная аутентификация</span>
                        <ChevronRight className="w-5 h-5 text-gray-400" />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AccountPage 