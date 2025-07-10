'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { User, Phone, Mail, Calendar, Car, Send } from 'lucide-react'

interface BookingFormData {
  name: string
  phone: string
  email: string
  category: string
  schedule: string
  message?: string
}

const QuickBookingForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<BookingFormData>()

  const categories = [
    { value: 'A', label: 'Категория A (Мотоцикл)' },
    { value: 'B', label: 'Категория B (Легковой автомобиль)' },
    { value: 'C', label: 'Категория C (Грузовой автомобиль)' },
    { value: 'D', label: 'Категория D (Автобус)' },
    { value: 'BE', label: 'Категория BE (Легковой с прицепом)' },
    { value: 'CE', label: 'Категория CE (Грузовой с прицепом)' }
  ]

  const scheduleOptions = [
    { value: 'morning', label: 'Утренние занятия (9:00-13:00)' },
    { value: 'afternoon', label: 'Дневные занятия (13:00-17:00)' },
    { value: 'evening', label: 'Вечерние занятия (17:00-21:00)' },
    { value: 'weekend', label: 'Выходные дни' },
    { value: 'individual', label: 'Индивидуальный график' }
  ]

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true)
    
    try {
      // Здесь должна быть отправка данных на сервер
      console.log('Booking data:', data)
      
      // Имитация отправки
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setIsSubmitted(true)
      reset()
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <section className="section-padding bg-gradient-to-r from-primary-50 to-accent-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container-custom">
          <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 text-center">
            <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Send className="w-8 h-8 text-accent-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Заявка отправлена!
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Спасибо за ваш интерес к нашей автошколе. Мы свяжемся с вами в течение 15 минут для уточнения деталей.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="btn-primary"
            >
              Отправить ещё одну заявку
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="section-padding bg-gradient-to-r from-primary-50 to-accent-50 dark:from-gray-800 dark:to-gray-900" id="booking">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Быстрая запись на обучение
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Оставьте заявку и получите персональную консультацию от наших специалистов
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Имя */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Ваше имя *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      {...register('name', { required: 'Имя обязательно' })}
                      type="text"
                      className={`form-input with-icon ${errors.name ? 'border-red-500' : ''}`}
                      placeholder="Введите ваше имя"
                    />
                  </div>
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>

                {/* Телефон */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Телефон *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      {...register('phone', { required: 'Телефон обязателен' })}
                      type="tel"
                      className={`form-input with-icon ${errors.phone ? 'border-red-500' : ''}`}
                      placeholder="+7 (999) 123-45-67"
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      {...register('email')}
                      type="email"
                      className="form-input with-icon"
                      placeholder="example@email.com"
                    />
                  </div>
                </div>

                {/* Категория */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Категория обучения *
                  </label>
                  <div className="relative">
                    <Car className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <select
                      {...register('category', { required: 'Выберите категорию' })}
                      className={`form-input select-with-icon ${errors.category ? 'border-red-500' : ''}`}
                    >
                      <option value="">Выберите категорию</option>
                      {categories.map((category) => (
                        <option key={category.value} value={category.value}>
                          {category.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  {errors.category && (
                    <p className="mt-1 text-sm text-red-600">{errors.category.message}</p>
                  )}
                </div>

                {/* Расписание */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Предпочитаемое время
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <select
                      {...register('schedule')}
                      className="form-input select-with-icon"
                    >
                      <option value="">Выберите время</option>
                      {scheduleOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Сообщение */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Дополнительные вопросы
                  </label>
                  <textarea
                    {...register('message')}
                    rows={4}
                    className="form-input"
                    placeholder="Расскажите о ваших пожеланиях или задайте вопросы..."
                  />
                </div>
              </div>

              {/* Кнопка отправки */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn-primary inline-flex items-center space-x-2 ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Отправляем...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Отправить заявку</span>
                    </>
                  )}
                </button>
              </div>

              {/* Согласие */}
              <p className="text-sm text-gray-500 text-center">
                Нажимая кнопку "Отправить заявку", вы соглашаетесь с{' '}
                <a href="/privacy" className="text-primary-600 hover:underline">
                  политикой конфиденциальности
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default QuickBookingForm 