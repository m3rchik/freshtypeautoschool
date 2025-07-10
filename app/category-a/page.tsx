import { Metadata } from 'next'
import Link from 'next/link'
import { Car, Check, Users, ArrowRight, Zap, Shield } from 'lucide-react'
import ImageWithFallback from '@/components/ImageWithFallback'

export const metadata: Metadata = {
  title: 'Категория A - Мотоциклы | FreshType Автошкола',
  description: 'Обучение вождению мотоциклов категории A в автошколе FreshType. Профессиональные инструкторы, современные мотоциклы, безопасное обучение. Цена от 35,000₽.',
  keywords: 'категория A, мотоцикл, обучение вождению мотоцикла, права на мотоцикл, автошкола Москва',
}

const CategoryAPage = () => {
  const features = [
    {
      icon: Zap,
      title: 'Современные мотоциклы',
      description: 'Новые мотоциклы Honda CB600F и Yamaha MT-07 2023-2024 года'
    },
    {
      icon: Shield,
      title: 'Безопасность прежде всего',
      description: 'Полная экипировка, защита, радиосвязь с инструктором'
    },
    {
      icon: Users,
      title: 'Опытные инструкторы',
      description: 'Мотоинструкторы с опытом более 15 лет и безупречной репутацией'
    },
    {
      icon: Car,
      title: 'Закрытая площадка',
      description: 'Безопасная учебная площадка для отработки навыков'
    }
  ]

  const program = [
    {
      title: 'Теоретическая подготовка',
      duration: '108 часов',
      topics: [
        'Правила дорожного движения для мотоциклистов',
        'Особенности управления мотоциклом',
        'Устройство мотоцикла и техобслуживание',
        'Экипировка и средства защиты',
        'Психофизиология мотоциклиста',
        'Первая медицинская помощь'
      ]
    },
    {
      title: 'Практическое вождение',
      duration: '18 часов',
      topics: [
        'Посадка и начальные навыки',
        'Упражнения на площадке',
        'Маневрирование и парковка',
        'Движение в городских условиях',
        'Подготовка к экзамену в ГИБДД'
      ]
    }
  ]

  const motorcycles = [
    {
      model: 'Honda CB600F',
      year: '2023',
      engine: '600 см³, 102 л.с.',
      features: ['ABS', 'Защитные дуги', 'Радиосвязь', 'LED освещение'],
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop'
    },
    {
      model: 'Yamaha MT-07',
      year: '2024',
      engine: '689 см³, 75 л.с.',
      features: ['A-mode', 'Защитные слайдеры', 'TCS', 'Цифровая панель'],
      image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=400&h=300&fit=crop'
    }
  ]

  const prices = [
    {
      name: 'Базовый курс A',
      price: '35,000',
      originalPrice: '45,000',
      includes: ['108 ч. теории', '18 ч. практики', 'Экипировка в аренду', '2 попытки экзамена']
    },
    {
      name: 'Премиум A',
      price: '50,000',
      originalPrice: '65,000',
      includes: ['108 ч. теории', '24 ч. практики', 'Собственная экипировка', 'Неограниченные попытки', 'Персональный инструктор']
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero секция */}
      <section className="gradient-bg text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white mb-6">
                <Zap className="w-5 h-5 mr-2" />
                <span className="font-semibold">Категория A</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Обучение вождению мотоциклов
              </h1>
              
              <p className="text-xl text-gray-200 mb-8">
                Получите права категории A на управление мотоциклами. 
                Безопасное обучение с нуля на современной технике.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">от 18 лет</div>
                  <div className="text-gray-300">Минимальный возраст</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">1.5 месяца</div>
                  <div className="text-gray-300">Срок обучения</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">95%</div>
                  <div className="text-gray-300">Сдача с 1-го раза</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">600 см³</div>
                  <div className="text-gray-300">Объем двигателя</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link href="/booking" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors duration-300 inline-flex items-center justify-center space-x-2">
                  <span>Записаться на обучение</span>
                  <ArrowRight size={20} />
                </Link>
                <Link href="/pricing" className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-medium transition-colors duration-300">
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
                    <span>108 часов теоретических занятий</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span>18 часов практического вождения</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span>Полная экипировка и защита</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span>Радиосвязь с инструктором</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span>Подготовка к экзамену в ГИБДД</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Особенности */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Особенности обучения на мотоциклах
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Безопасность, качество и профессионализм - наши главные принципы
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Программа обучения */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Программа обучения
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Полный курс теории и практики для получения прав категории A
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {program.map((section, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {section.title}
                </h3>
                <div className="text-blue-600 font-semibold mb-6">
                  {section.duration}
                </div>
                <ul className="space-y-3">
                  {section.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Мотоциклы */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Наши мотоциклы
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Современная техника для безопасного и комфортного обучения
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {motorcycles.map((bike, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg">
                <div className="h-48 relative overflow-hidden">
                  <ImageWithFallback
                    src={bike.image}
                    alt={bike.model}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    fallbackType="car"
                    fallbackText={bike.model}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm font-semibold">
                    {bike.year}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {bike.model}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {bike.year} года выпуска • {bike.engine}
                  </p>
                  <div className="space-y-2">
                    {bike.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <Check className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Цены */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Стоимость обучения
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Выберите подходящий пакет обучения для получения прав категории A
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {prices.map((price, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-lg relative">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {price.name}
                </h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-blue-600">{price.price}₽</span>
                  <span className="text-lg text-gray-500 line-through ml-2">{price.originalPrice}₽</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {price.includes.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/booking" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors duration-300 inline-flex items-center justify-center">
                  Записаться
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-bg text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Готовы стать мотоциклистом?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Начните своё мотопутешествие с профессиональным обучением в FreshType
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <Link href="/booking" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors duration-300">
              Записаться на обучение
            </Link>
            <Link href="/contacts" className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-medium transition-colors duration-300">
              Задать вопрос
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CategoryAPage 