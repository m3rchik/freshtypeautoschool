import { Star, Quote } from 'lucide-react'

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Алексей Иванов',
      age: 24,
      category: 'Категория B',
      rating: 5,
      text: 'Отличная автошкола! Сдал экзамен с первого раза. Инструктор Михаил очень терпеливо объяснял все нюансы. Рекомендую всем друзьям!',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Мария Петрова',
      age: 19,
      category: 'Категория B',
      rating: 5,
      text: 'Очень довольна обучением в FreshType. Современные автомобили, удобное расписание. Особенно понравились онлайн тесты.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b602?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Дмитрий Сидоров',
      age: 32,
      category: 'Категория C',
      rating: 5,
      text: 'Профессиональный подход к обучению на грузовых автомобилях. Получил все необходимые навыки для работы водителем.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Анна Козлова',
      age: 28,
      category: 'Категория B',
      rating: 5,
      text: 'Боялась садиться за руль, но инструкторы FreshType помогли преодолеть страх. Теперь вожу с удовольствием!',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Сергей Морозов',
      age: 22,
      category: 'Категория A',
      rating: 5,
      text: 'Мечтал о мотоцикле и FreshType помогла осуществить мечту. Качественное обучение, новые мотоциклы.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Елена Волкова',
      age: 35,
      category: 'Категория B',
      rating: 5,
      text: 'Гибкий график занятий очень помог. Совмещала обучение с работой без проблем. Персонал очень отзывчивый.',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face'
    }
  ]

  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Отзывы наших выпускников
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Более 5000 довольных клиентов выбрали FreshType для получения водительских прав
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card p-6 relative">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary-200 dark:text-primary-800" />
              
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {testimonial.age} лет • {testimonial.category}
                  </p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>

        {/* Статистика отзывов */}
        <div className="mt-16 bg-white dark:bg-gray-700 rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">4.9</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Средний рейтинг</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">1247</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Отзывов</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">98%</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Рекомендуют нас</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">24ч</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Время ответа</div>
            </div>
          </div>
        </div>

        {/* Призыв к действию */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Присоединяйтесь к тысячам довольных выпускников FreshType
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="/booking" className="btn-primary">
              Записаться на обучение
            </a>
            <a href="/reviews" className="btn-secondary">
              Читать все отзывы
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection 