import { Metadata } from 'next'
import Link from 'next/link'
import { Star, Award, Calendar, Users, Car, Shield } from 'lucide-react'
import ImageWithFallback from '@/components/ImageWithFallback'

export const metadata: Metadata = {
  title: 'Инструкторы | FreshType Автошкола',
  description: 'Опытные инструкторы автошколы FreshType. Профессиональное обучение вождению с индивидуальным подходом.',
  keywords: 'инструкторы автошкола, преподаватели вождения, опытные инструкторы Москва',
}

const InstructorsPage = () => {
  const instructors = [
    {
      name: 'Иванов Алексей Сергеевич',
      position: 'Старший инструктор по категории B',
      experience: '15 лет',
      rating: 4.9,
      reviews: 342,
      specialization: ['Категория B', 'МКПП', 'АКПП', 'Начинающие'],
      achievements: ['Лучший инструктор 2023', 'Сертификат безопасности'],
      photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      description: 'Специализируется на обучении начинающих водителей. Терпеливый и внимательный подход к каждому ученику.',
      stats: { students: 1250, passRate: 98, experience: 15 }
    },
    {
      name: 'Петрова Елена Викторовна',
      position: 'Инструктор по категории B',
      experience: '12 лет',
      rating: 4.8,
      reviews: 287,
      specialization: ['Категория B', 'АКПП', 'Женское обучение'],
      achievements: ['Сертификат психологии', 'Инструктор года 2022'],
      photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      description: 'Опытный женский инструктор. Особый подход к обучению женщин-водителей.',
      stats: { students: 950, passRate: 97, experience: 12 }
    },
    {
      name: 'Сидоров Михаил Александрович',
      position: 'Инструктор по категориям B, C',
      experience: '18 лет',
      rating: 4.9,
      reviews: 428,
      specialization: ['Категория B', 'Категория C', 'МКПП', 'Грузовые ТС'],
      achievements: ['Мастер спорта по автоспорту', 'Золотой инструктор'],
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      description: 'Универсальный инструктор с большим опытом. Обучает как легковым, так и грузовым автомобилям.',
      stats: { students: 1580, passRate: 99, experience: 18 }
    },
    {
      name: 'Козлова Анна Дмитриевна',
      position: 'Инструктор по категории A, B',
      experience: '8 лет',
      rating: 4.7,
      reviews: 156,
      specialization: ['Категория A', 'Категория B', 'Мотоциклы'],
      achievements: ['Сертификат мото-инструктора', 'Безаварийный стаж 10 лет'],
      photo: 'https://images.unsplash.com/photo-1494790108755-2616b612b602?w=400&h=400&fit=crop&crop=face',
      description: 'Молодой и энергичный инструктор. Специализируется на обучении мотоциклистов.',
      stats: { students: 420, passRate: 95, experience: 8 }
    },
    {
      name: 'Волков Дмитрий Иванович',
      position: 'Инструктор по категориям B, D',
      experience: '20 лет',
      rating: 4.9,
      reviews: 512,
      specialization: ['Категория B', 'Категория D', 'Автобусы', 'Коммерческие перевозки'],
      achievements: ['Почетный инструктор', 'Наставник молодых кадров'],
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
      description: 'Ветеран автошколы с огромным опытом. Обучает водителей автобусов и коммерческого транспорта.',
      stats: { students: 2100, passRate: 98, experience: 20 }
    },
    {
      name: 'Николаева Ольга Петровна',
      position: 'Инструктор по категории B',
      experience: '10 лет',
      rating: 4.8,
      reviews: 234,
      specialization: ['Категория B', 'АКПП', 'Пожилые ученики'],
      achievements: ['Специалист по работе с пожилыми', 'Терпеливый наставник'],
      photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face',
      description: 'Особый подход к обучению людей старшего возраста. Терпеливая и понимающая.',
      stats: { students: 680, passRate: 96, experience: 10 }
    }
  ]

  const stats = [
    { icon: Users, value: '25+', label: 'Инструкторов' },
    { icon: Award, value: '97%', label: 'Сдача с 1-го раза' },
    { icon: Calendar, value: '12', label: 'Лет среднего стажа' },
    { icon: Star, value: '4.8', label: 'Средний рейтинг' }
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero секция */}
      <section className="gradient-bg text-white py-20">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">
              Наши инструкторы
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Профессиональные инструкторы с многолетним опытом и индивидуальным подходом к каждому ученику
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-3 bg-white/20 rounded-lg flex items-center justify-center">
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Команда инструкторов */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Познакомьтесь с нашей командой
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Каждый инструктор имеет сертификат и большой опыт обучения водителей
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {instructors.map((instructor, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Фото инструктора */}
                <div className="h-64 relative overflow-hidden">
                  <ImageWithFallback
                    src={instructor.photo}
                    alt={instructor.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    fallbackType="person"
                    fallbackText={instructor.name.split(' ')[0][0] + instructor.name.split(' ')[1][0]}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm font-semibold">
                    {instructor.experience} опыта
                  </div>
                  <div className="absolute bottom-4 left-4 bg-primary-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                    ⭐ {instructor.rating}
                  </div>
                </div>

                <div className="p-6">
                  {/* Основная информация */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {instructor.name}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400 font-medium">
                      {instructor.position}
                    </p>
                  </div>

                  {/* Рейтинг и отзывы */}
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="font-bold text-gray-900 dark:text-white">
                        {instructor.rating}
                      </span>
                    </div>
                    <div className="text-gray-600 dark:text-gray-300 text-sm">
                      {instructor.reviews} отзывов
                    </div>
                  </div>

                  {/* Статистика */}
                  <div className="grid grid-cols-3 gap-4 mb-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-900 dark:text-white">
                        {instructor.stats.students}
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-300">
                        учеников
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">
                        {instructor.stats.passRate}%
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-300">
                        сдали
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary-600">
                        {instructor.stats.experience}
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-300">
                        лет
                      </div>
                    </div>
                  </div>

                  {/* Описание */}
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {instructor.description}
                  </p>

                  {/* Специализация */}
                  <div className="mb-4">
                    <div className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Специализация:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {instructor.specialization.map((spec, specIndex) => (
                        <span
                          key={specIndex}
                          className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded text-xs"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Достижения */}
                  <div className="mb-6">
                    <div className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Достижения:
                    </div>
                    <div className="space-y-1">
                      {instructor.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-center space-x-2">
                          <Award className="w-4 h-4 text-yellow-500" />
                          <span className="text-sm text-gray-600 dark:text-gray-300">
                            {achievement}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Кнопка записи */}
                  <Link
                    href={`/booking?instructor=${encodeURIComponent(instructor.name)}`}
                    className="w-full btn-primary text-center block"
                  >
                    Записаться к инструктору
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Преимущества наших инструкторов */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Почему наши инструкторы лучшие
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Мы тщательно отбираем и регулярно обучаем наших инструкторов
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Сертифицированные специалисты
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Все инструкторы имеют действующие сертификаты и регулярно проходят переаттестацию
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Индивидуальный подход
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Каждый инструктор адаптирует методику обучения под конкретного ученика
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Car className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Современные методики
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Используем передовые методы обучения и современное оборудование
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-bg text-white py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">
            Выберите своего инструктора
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Запишитесь на пробное занятие с любым из наших инструкторов
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <Link href="/booking" className="btn-primary">
              Записаться на обучение
            </Link>
            <Link href="/contacts" className="btn-secondary">
              Задать вопрос
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default InstructorsPage 