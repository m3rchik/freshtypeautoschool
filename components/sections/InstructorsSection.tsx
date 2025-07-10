'use client'

import { Star, Award, Clock } from 'lucide-react'
import { useRouter } from 'next/navigation'

const InstructorsSection = () => {
  const router = useRouter()

  // Обработчик записи к инструктору
  const handleBookInstructor = (instructorName: string, categories: string) => {
    // Перенаправляем на страницу записи с предзаполненными данными
    const params = new URLSearchParams({
      instructor: instructorName,
      category: categories.split(', ')[0] // Берем первую категорию
    })
    
    router.push(`/booking?${params.toString()}`)
  }

  const instructors = [
    {
      name: 'Михаил Владимирович',
      position: 'Старший инструктор',
      experience: '15 лет',
      category: 'B, C, D',
      rating: 4.9,
      students: 1200,
      specialization: 'Категория B, сложные случаи',
      photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'Анна Сергеевна',
      position: 'Инструктор',
      experience: '8 лет',
      category: 'A, B',
      rating: 4.8,
      students: 850,
      specialization: 'Работа с начинающими',
      photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'Дмитрий Алексеевич',
      position: 'Инструктор',
      experience: '12 лет',
      category: 'B, C',
      rating: 4.9,
      students: 950,
      specialization: 'Грузовой транспорт',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'Елена Ивановна',
      position: 'Инструктор',
      experience: '10 лет',
      category: 'A, B',
      rating: 4.8,
      students: 780,
      specialization: 'Мотоциклы, женская группа',
      photo: 'https://images.unsplash.com/photo-1494790108755-2616b612b602?w=400&h=400&fit=crop&crop=face'
    }
  ]

  return (
    <section className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Наши инструкторы
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Профессиональные инструкторы с многолетним опытом помогут вам уверенно чувствовать себя за рулем
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {instructors.map((instructor, index) => (
            <div key={index} className="card p-6 text-center">
              <div className="relative mb-6">
                <img
                  src={instructor.photo}
                  alt={instructor.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                />
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {instructor.experience}
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                {instructor.name}
              </h3>
              <p className="text-primary-600 text-sm font-medium mb-3">
                {instructor.position}
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {instructor.specialization}
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Категории:</span>
                  <span className="font-medium text-gray-900 dark:text-white">{instructor.category}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Учеников:</span>
                  <span className="font-medium text-gray-900 dark:text-white">{instructor.students}+</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Рейтинг:</span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="font-medium text-gray-900 dark:text-white">{instructor.rating}</span>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => handleBookInstructor(instructor.name, instructor.category)}
                className="w-full btn-primary text-sm"
              >
                Записаться к инструктору
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-primary-50 dark:bg-primary-900/20 rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Award className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Сертифицированные инструкторы
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Все наши инструкторы имеют необходимые сертификаты и регулярно проходят повышение квалификации
              </p>
            </div>
            <div className="text-center">
              <Clock className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Гибкий график
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Подберем удобное время для занятий. Работаем 7 дней в неделю с 8:00 до 22:00
              </p>
            </div>
            <div className="text-center">
              <Star className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Высокие рейтинги
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Средний рейтинг наших инструкторов составляет 4.8 из 5 звезд по отзывам учеников
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InstructorsSection 