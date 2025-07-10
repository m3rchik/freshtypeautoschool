import { Metadata } from 'next'
import Link from 'next/link'
import { Car, Check, Users, ArrowRight, Gauge, Shield } from 'lucide-react'
import ImageWithFallback from '@/components/ImageWithFallback'

export const metadata: Metadata = {
  title: 'Категория B - Легковые автомобили | FreshType Автошкола',
  description: 'Обучение вождению категории B в автошколе FreshType. МКПП и АКПП, новый автопарк, опытные инструкторы. Цена от 35,000₽.',
  keywords: 'категория B, легковой автомобиль, МКПП, АКПП, обучение вождению, автошкола Москва',
}

const CategoryBPage = () => {
  const features = [
    {
      icon: Car,
      title: 'Современный автопарк',
      description: 'Новые автомобили 2023-2024 года: Лada Vesta, KIA Rio, Hyundai Solaris'
    },
    {
      icon: Gauge,
      title: 'МКПП и АКПП',
      description: 'Обучение на механической и автоматической коробке передач'
    },
    {
      icon: Users,
      title: 'Опытные инструкторы',
      description: 'Сертифицированные инструкторы со стажем более 10 лет'
    },
    {
      icon: Shield,
      title: 'Безопасность',
      description: 'Дополнительные педали, зеркала и системы безопасности'
    }
  ]

  const program = [
    {
      title: 'Теоретическая подготовка',
      duration: '134 часа',
      topics: [
        'Правила дорожного движения',
        'Основы безопасного вождения',
        'Устройство автомобиля',
        'Первая медицинская помощь',
        'Психофизиологические основы',
        'Административная ответственность'
      ]
    },
    {
      title: 'Практическое вождение',
      duration: '56 часов',
      topics: [
        'Начальное обучение вождению',
        'Обучение на автодроме',
        'Обучение в условиях города',
        'Совершенствование навыков',
        'Подготовка к экзамену'
      ]
    }
  ]

  const cars = [
    {
      model: 'Lada Vesta',
      year: '2024',
      transmission: 'МКПП',
      fuel: 'Бензин',
      image: 'https://images.unsplash.com/photo-1606611421999-430e6d2f5e60?w=400&h=300&fit=crop'
    },
    {
      model: 'KIA Rio',
      year: '2023',
      transmission: 'АКПП',
      fuel: 'Бензин',
      image: 'https://images.unsplash.com/photo-1502877828070-33bb9f4f8e6b?w=400&h=300&fit=crop'
    },
    {
      model: 'Hyundai Solaris',
      year: '2024',
      transmission: 'МКПП/АКПП',
      fuel: 'Бензин',
      image: 'https://images.unsplash.com/photo-1494976049143-1334ffe27399?w=400&h=300&fit=crop'
    }
  ]

  const prices = [
    {
      name: 'Базовый МКПП',
      price: '35,000',
      originalPrice: '45,000',
      includes: ['134 ч. теории', '56 ч. практики', 'Учебные материалы', '2 попытки экзамена']
    },
    {
      name: 'Базовый АКПП',
      price: '38,000',
      originalPrice: '48,000',
      includes: ['134 ч. теории', '56 ч. практики', 'Учебные материалы', '2 попытки экзамена']
    },
    {
      name: 'VIP пакет',
      price: '65,000',
      originalPrice: '85,000',
      includes: ['134 ч. теории', '80 ч. практики', 'VIP материалы', 'Неограниченные попытки', 'Персональный куратор']
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero секция */}
      <section className="gradient-bg text-white py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white mb-6">
                <Car className="w-5 h-5 mr-2" />
                <span className="font-semibold">Категория B</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">
                Обучение вождению легковых автомобилей
              </h1>
              
              <p className="text-xl text-gray-200 mb-8">
                Получите водительские права категории B в современной автошколе. 
                Обучение на новых автомобилях с МКПП и АКПП.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">от 17 лет</div>
                  <div className="text-gray-300">Минимальный возраст</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">2.5 месяца</div>
                  <div className="text-gray-300">Срок обучения</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">98%</div>
                  <div className="text-gray-300">Сдача с 1-го раза</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">3500 кг</div>
                  <div className="text-gray-300">Макс. масса ТС</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link href="/booking" className="btn-primary inline-flex items-center justify-center space-x-2">
                  <span>Записаться на обучение</span>
                  <ArrowRight size={20} />
                </Link>
                <Link href="/pricing" className="btn-secondary">
                  Посмотреть цены
                </Link>
              </div>
            </div>

            <div className="lg:justify-self-end">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Что входит в обучение</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span>134 часа теоретических занятий</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span>56 часов практического вождения</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span>Современные учебные материалы</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span>Подготовка к экзамену в ГИБДД</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span>Медицинская комиссия в подарок</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Особенности */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Преимущества обучения в FreshType
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Мы предлагаем современный подход к обучению с использованием новейших технологий
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Программа обучения */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Программа обучения
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Полный курс подготовки по категории B согласно требованиям ГИБДД
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {program.map((block, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {block.title}
                  </h3>
                  <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {block.duration}
                  </span>
                </div>
                
                <div className="space-y-3">
                  {block.topics.map((topic, topicIndex) => (
                    <div key={topicIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Автопарк */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Наш автопарк
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Современные автомобили с системами безопасности для комфортного обучения
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cars.map((car, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="h-48 relative overflow-hidden">
                  <ImageWithFallback
                    src={car.image}
                    alt={car.model}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    fallbackType="car"
                    fallbackText={car.model}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {car.year}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {car.model}
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Год выпуска:</span>
                      <span className="font-semibold">{car.year}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Коробка:</span>
                      <span className="font-semibold">{car.transmission}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Топливо:</span>
                      <span className="font-semibold">{car.fuel}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Цены */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Стоимость обучения
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Прозрачные цены без скрытых платежей. Рассрочка 0% на 6 месяцев
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {prices.map((price, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {price.name}
                </h3>
                
                <div className="mb-6">
                  <div className="flex items-center space-x-2">
                    <span className="text-3xl font-bold text-primary-600">
                      {price.price}₽
                    </span>
                  </div>
                  <div className="text-gray-400 line-through">
                    {price.originalPrice}₽
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {price.includes.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/booking"
                  className="w-full btn-primary text-center block"
                >
                  Выбрать тариф
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-bg text-white py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">
            Начните обучение уже сегодня!
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Запишитесь на бесплатную консультацию и получите скидку 20% на обучение
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <Link href="/booking" className="btn-primary">
              Записаться на обучение
            </Link>
            <Link href="/contacts" className="btn-secondary">
              Связаться с нами
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CategoryBPage 