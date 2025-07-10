import { Metadata } from 'next'
import Link from 'next/link'
import { Car, Settings, Shield, Award, Check } from 'lucide-react'
import ImageWithFallback from '@/components/ImageWithFallback'

export const metadata: Metadata = {
  title: 'Автопарк | FreshType Автошкола',
  description: 'Современный автопарк FreshType: новые автомобили 2023-2024 года, МКПП и АКПП, системы безопасности.',
  keywords: 'автопарк автошкола, учебные автомобили, новые машины для обучения, МКПП АКПП',
}

const FleetPage = () => {
  const vehicles = [
    {
      brand: 'Lada',
      model: 'Vesta',
      year: '2024',
      category: 'B',
      transmission: 'МКПП',
      engine: '1.6 л, 106 л.с.',
      fuel: 'Бензин',
      features: ['Дополнительные педали', 'Обзорное зеркало', 'Система безопасности', 'Кондиционер'],
      count: 8,
      image: 'https://images.unsplash.com/photo-1606611421999-430e6d2f5e60?w=400&h=300&fit=crop&crop=center',
      price: '35,000₽'
    },
    {
      brand: 'KIA',
      model: 'Rio',
      year: '2023',
      category: 'B',
      transmission: 'АКПП',
      engine: '1.4 л, 100 л.с.',
      fuel: 'Бензин',
      features: ['Автоматическая коробка', 'Дополнительные педали', 'Климат-контроль', 'Парктроник'],
      count: 6,
      image: 'https://images.unsplash.com/photo-1502877828070-33bb9f4f8e6b?w=400&h=300&fit=crop&crop=center',
      price: '38,000₽'
    },
    {
      brand: 'Hyundai',
      model: 'Solaris',
      year: '2024',
      category: 'B',
      transmission: 'МКПП/АКПП',
      engine: '1.6 л, 123 л.с.',
      fuel: 'Бензин',
      features: ['Выбор коробки передач', 'Система курсовой устойчивости', 'Мультимедиа', 'ABS'],
      count: 10,
      image: 'https://images.unsplash.com/photo-1494976049143-1334ffe27399?w=400&h=300&fit=crop&crop=center',
      price: '35,000₽ / 38,000₽'
    },
    {
      brand: 'Honda',
      model: 'CB 600F',
      year: '2023',
      category: 'A',
      transmission: 'МКПП',
      engine: '600 см³, 102 л.с.',
      fuel: 'Бензин',
      features: ['Защитная экипировка', 'Радиосвязь с инструктором', 'Слайдеры', 'LED освещение'],
      count: 4,
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop&crop=center',
      price: '25,000₽'
    },
    {
      brand: 'МАЗ',
      model: '5340',
      year: '2023',
      category: 'C',
      transmission: 'МКПП',
      engine: '6.0 л, 240 л.с.',
      fuel: 'Дизель',
      features: ['Учебная кабина', 'Дополнительное зеркало', 'Тахограф', 'Система мониторинга'],
      count: 2,
      image: 'https://images.unsplash.com/photo-1591768793355-74d04bb6608f?w=400&h=300&fit=crop&crop=center',
      price: '45,000₽'
    },
    {
      brand: 'ПАЗ',
      model: '4234',
      year: '2024',
      category: 'D',
      transmission: 'МКПП',
      engine: '4.4 л, 140 л.с.',
      fuel: 'Дизель',
      features: ['Учебный салон', 'Система видеонаблюдения', 'Тахограф', 'Кондиционер'],
      count: 1,
      image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=400&h=300&fit=crop&crop=center',
      price: '55,000₽'
    }
  ]

  const advantages = [
    {
      icon: Car,
      title: 'Современные автомобили',
      description: 'Весь автопарк состоит из автомобилей 2023-2024 года выпуска'
    },
    {
      icon: Shield,
      title: 'Максимальная безопасность',
      description: 'Дополнительные педали, зеркала и системы безопасности для инструкторов'
    },
    {
      icon: Settings,
      title: 'Регулярное ТО',
      description: 'Техническое обслуживание каждые 5000 км и полная диагностика'
    },
    {
      icon: Award,
      title: 'Сертифицированные ТС',
      description: 'Все автомобили имеют допуск для обучения и сдачи экзаменов'
    }
  ]

  const stats = [
    { value: '30+', label: 'Автомобилей в парке' },
    { value: '100%', label: 'Новые автомобили' },
    { value: '24/7', label: 'Техническая поддержка' },
    { value: '5', label: 'Категорий обучения' }
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero секция */}
      <section className="gradient-bg text-white py-20">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">
              Наш автопарк
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Современные автомобили 2023-2024 года для комфортного и безопасного обучения вождению
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Автомобили */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Автомобили для обучения
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Весь парк оснащен дополнительными педалями, зеркалами и системами безопасности
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.map((vehicle, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Изображение автомобиля */}
                <div className="h-48 relative overflow-hidden">
                  <ImageWithFallback
                    src={vehicle.image}
                    alt={`${vehicle.brand} ${vehicle.model}`}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    fallbackType="car"
                    fallbackText={`${vehicle.brand} ${vehicle.model}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Категория {vehicle.category}
                  </div>
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm">
                    {vehicle.count} шт.
                  </div>
                </div>

                <div className="p-6">
                  {/* Основная информация */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {vehicle.brand} {vehicle.model}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {vehicle.year} года выпуска
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-primary-600">
                        {vehicle.price}
                      </div>
                      <div className="text-xs text-gray-500">за курс</div>
                    </div>
                  </div>

                  {/* Характеристики */}
                  <div className="grid grid-cols-2 gap-4 mb-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg text-sm">
                    <div>
                      <div className="text-gray-500 dark:text-gray-400">Коробка</div>
                      <div className="font-semibold">{vehicle.transmission}</div>
                    </div>
                    <div>
                      <div className="text-gray-500 dark:text-gray-400">Двигатель</div>
                      <div className="font-semibold">{vehicle.engine}</div>
                    </div>
                    <div className="col-span-2">
                      <div className="text-gray-500 dark:text-gray-400">Топливо</div>
                      <div className="font-semibold">{vehicle.fuel}</div>
                    </div>
                  </div>

                  {/* Особенности */}
                  <div className="mb-6">
                    <div className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                      Оснащение:
                    </div>
                    <div className="space-y-2">
                      {vehicle.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-600 dark:text-gray-300">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Кнопка записи */}
                  <Link
                    href={`/booking?category=${vehicle.category}&vehicle=${vehicle.brand}%20${vehicle.model}`}
                    className="w-full btn-primary text-center block"
                  >
                    Записаться на {vehicle.brand} {vehicle.model}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Преимущества нашего автопарка
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Мы постоянно обновляем и совершенствуем наш автопарк для максимального комфорта обучения
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <advantage.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Техническое обслуживание */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Техническое обслуживание
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Мы следим за техническим состоянием автомобилей для вашей безопасности
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Плановое ТО
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      Ежедневный осмотр
                    </div>
                    <div className="text-gray-600 dark:text-gray-300 text-sm">
                      Проверка технического состояния перед каждым занятием
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      Еженедельная диагностика
                    </div>
                    <div className="text-gray-600 dark:text-gray-300 text-sm">
                      Компьютерная диагностика всех систем
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      ТО каждые 5000 км
                    </div>
                    <div className="text-gray-600 dark:text-gray-300 text-sm">
                      Замена масла, фильтров, проверка тормозной системы
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      Предрейсовый контроль
                    </div>
                    <div className="text-gray-600 dark:text-gray-300 text-sm">
                      Медицинский осмотр инструкторов
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary-50 dark:bg-primary-900/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Системы безопасности
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-primary-600 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      Дополнительные педали
                    </div>
                    <div className="text-gray-600 dark:text-gray-300 text-sm">
                      Полный контроль инструктора над автомобилем
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-primary-600 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      Обзорные зеркала
                    </div>
                    <div className="text-gray-600 dark:text-gray-300 text-sm">
                      Дополнительные зеркала для инструктора
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-primary-600 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      GPS мониторинг
                    </div>
                    <div className="text-gray-600 dark:text-gray-300 text-sm">
                      Отслеживание маршрута и скорости движения
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-primary-600 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      Видеорегистратор
                    </div>
                    <div className="text-gray-600 dark:text-gray-300 text-sm">
                      Запись процесса обучения для анализа
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-bg text-white py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">
            Выберите автомобиль для обучения
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Запишитесь на обучение на любом автомобиле из нашего современного парка
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <Link href="/booking" className="btn-primary">
              Записаться на обучение
            </Link>
            <Link href="/categories" className="btn-secondary">
              Выбрать категорию
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FleetPage 