'use client'

import { useState } from 'react'
import { Metadata } from 'next'
import { useForm } from 'react-hook-form'
import { Calendar, Clock, User, Phone, Mail, Car, Check, Star, Users, CheckCircle } from 'lucide-react'

// Эти метаданные нужно будет экспортировать отдельно для client компонента
const pageMetadata = {
  title: 'Онлайн запись | FreshType Автошкола',
  description: 'Запишитесь на обучение в автошколе FreshType онлайн. Выберите удобное время, категорию и тариф. Бесплатная консультация.',
  keywords: 'запись автошкола, онлайн запись вождение, бронирование уроков вождения, консультация автошкола',
}

interface BookingFormData {
  firstName: string
  lastName: string
  phone: string
  email: string
  category: string
  tariff: string
  preferredTime: string
  preferredDate: string
  experience: string
  message: string
  agreement: boolean
}

const BookingPage = () => {
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const { register, handleSubmit, watch, formState: { errors } } = useForm<BookingFormData>()

  const categories = [
    { id: 'A', name: 'Категория A - Мотоциклы', price: '35 000 ₽' },
    { id: 'B', name: 'Категория B - Легковые автомобили', price: '45 000 ₽' },
    { id: 'C', name: 'Категория C - Грузовые автомобили', price: '55 000 ₽' },
    { id: 'D', name: 'Категория D - Автобусы', price: '65 000 ₽' },
    { id: 'BE', name: 'Категория BE - Легковые с прицепом', price: '25 000 ₽' }
  ]

  const tariffs = [
    { id: 'basic', name: 'Базовый', price: '35,000', discount: '22%' },
    { id: 'standard', name: 'Стандарт', price: '42,000', discount: '24%', popular: true },
    { id: 'vip', name: 'VIP', price: '65,000', discount: '24%' }
  ]

  const timeSlots = [
    '9:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'
  ]

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true)
    
    // Имитация отправки формы
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log('Booking data:', data)
    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  const nextStep = () => {
    if (step < 4) setStep(step + 1)
  }

  const prevStep = () => {
    if (step > 1) setStep(step - 1)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <div className="text-center p-8">
          <CheckCircle className="w-24 h-24 text-green-600 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Спасибо за заявку!
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-md">
            Мы получили вашу заявку и свяжемся с вами в течение 30 минут для подтверждения записи.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300"
          >
            Подать ещё одну заявку
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Онлайн запись на обучение
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Заполните форму ниже, и мы свяжемся с вами для подтверждения записи и выбора удобного времени занятий
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* Личная информация */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Личная информация
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Полное имя *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={watch('firstName')}
                    onChange={(e) => {
                      register('firstName').onChange(e)
                    }}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Введите ваше полное имя"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Номер телефона *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={watch('phone')}
                    onChange={(e) => {
                      register('phone').onChange(e)
                    }}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email адрес
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={watch('email')}
                    onChange={(e) => {
                      register('email').onChange(e)
                    }}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
            </div>

            {/* Выбор категории */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Выбор категории обучения
              </h2>
              <div className="space-y-4">
                {categories.map((category) => (
                  <label key={category.id} className="flex items-center p-4 border border-gray-200 dark:border-gray-600 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <input
                      type="radio"
                      name="category"
                      value={category.id}
                      checked={watch('category') === category.id}
                      onChange={(e) => {
                        register('category').onChange(e)
                      }}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <div className="ml-4 flex-1">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-medium text-gray-900 dark:text-white">
                          {category.name}
                        </span>
                        <span className="text-lg font-bold text-blue-600">
                          {category.price}
                        </span>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Выбор тарифа */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Выбор тарифа
              </h2>
              <div className="space-y-4">
                {tariffs.map((tariff) => (
                  <label
                    key={tariff.id}
                    className="flex items-center p-4 border border-gray-200 dark:border-gray-600 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <input
                      type="radio"
                      name="tariff"
                      value={tariff.id}
                      checked={watch('tariff') === tariff.id}
                      onChange={(e) => {
                        register('tariff').onChange(e)
                      }}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <div className="ml-4">
                      <div className="text-lg font-medium text-gray-900 dark:text-white">
                        {tariff.name}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        Скидка {tariff.discount}
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Выбор времени */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Удобное время обучения
              </h2>
              <div className="space-y-4">
                {timeSlots.map((time) => (
                  <label
                    key={time}
                    className="flex items-start p-4 border border-gray-200 dark:border-gray-600 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <input
                      type="radio"
                      name="preferredTime"
                      value={time}
                      checked={watch('preferredTime') === time}
                      onChange={(e) => {
                        register('preferredTime').onChange(e)
                      }}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 mt-1"
                    />
                    <div className="ml-4">
                      <div className="text-lg font-medium text-gray-900 dark:text-white">
                        {time}
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Выбор даты */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Предпочтительная дата
              </h2>
              <input
                type="date"
                name="preferredDate"
                value={watch('preferredDate')}
                onChange={(e) => {
                  register('preferredDate').onChange(e)
                }}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                min={new Date().toISOString().split('T')[0]}
              />
            </div>

            {/* Дополнительная информация */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Дополнительная информация
              </h2>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Комментарий или особые пожелания
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={watch('message')}
                  onChange={(e) => {
                    register('message').onChange(e)
                  }}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Расскажите нам о ваших предпочтениях или особых требованиях к обучению..."
                />
              </div>
            </div>

            {/* Согласие */}
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                {...register('agreement', { required: 'Необходимо согласие' })}
                className="mt-1"
              />
              <label className="text-sm text-gray-600 dark:text-gray-300">
                Я согласен с{' '}
                <a href="/privacy" className="text-primary-600 hover:underline">
                  политикой конфиденциальности
                </a>{' '}
                и{' '}
                <a href="/terms" className="text-primary-600 hover:underline">
                  пользовательским соглашением
                </a>
              </label>
            </div>
            {errors.agreement && (
              <p className="text-red-500 text-sm">{errors.agreement.message}</p>
            )}

            {/* Кнопка отправки */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-lg text-lg font-medium transition-colors duration-300 shadow-lg hover:shadow-xl ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
              </button>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-4">
                * Обязательные поля для заполнения
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default BookingPage 