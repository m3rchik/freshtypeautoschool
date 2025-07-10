import { Metadata } from 'next'
import Link from 'next/link'
import { Truck, Check, Users, ArrowRight, Shield, Wrench } from 'lucide-react'
import ImageWithFallback from '@/components/ImageWithFallback'

export const metadata: Metadata = {
  title: 'Категория C - Грузовые автомобили | FreshType Автошкола',
  description: 'Обучение вождению грузовых автомобилей категории C в автошколе FreshType. Профессиональные инструкторы, современные грузовики. Цена от 55,000₽.',
  keywords: 'категория C, грузовой автомобиль, обучение вождению грузовика, права на грузовик, автошкола Москва',
}

const CategoryCPage = () => {
  const features = [
    {
      icon: Truck,
      title: 'Современные грузовики',
      description: 'МАЗ, КАМАЗ и Volvo последних годов выпуска с системами безопасности'
    },
    {
      icon: Shield,
      title: 'Системы безопасности',
      description: 'ABS, ESP, система контроля слепых зон и помощи при парковке'
    },
    {
      icon: Users,
      title: 'Профессиональные инструкторы',
      description: 'Инструкторы с опытом коммерческих перевозок более 20 лет'
    },
    {
      icon: Wrench,
      title: 'Техническое обслуживание',
      description: 'Изучение устройства и обслуживания грузовых автомобилей'
    }
  ]

  const program = [
    {
      title: 'Теоретическая подготовка',
      duration: '178 часов',
      topics: [
        'ПДД для водителей грузовых ТС',
        'Устройство грузового автомобиля',
        'Техническое обслуживание',
        'Перевозка грузов и пассажиров',
        'Организация и безопасность движения',
        'Охрана труда водителя',
        'Первая медицинская помощь'
      ]
    },
    {
      title: 'Практическое вождение',
      duration: '72 часа',
      topics: [
        'Начальное обучение вождению',
        'Обучение на автодроме',
        'Движение в городе',
        'Парковка и маневрирование',
        'Перестроения и развороты',
        'Подготовка к экзамену'
      ]
    }
  ]

  const trucks = [
    {
      model: 'МАЗ 5340',
      year: '2023',
      engine: '6.0 л, 240 л.с.',
      gearbox: 'МКПП',
      features: ['Тахограф', 'Система мониторинга', 'Дополнительное зеркало', 'Учебная кабина'],
      maxWeight: '18 тонн',
      image: 'https://images.unsplash.com/photo-1591768793355-74d04bb6608f?w=400&h=300&fit=crop'
    },
    {
      model: 'КАМАЗ 65115',
      year: '2024',
      engine: '6.7 л, 260 л.с.',
      gearbox: 'МКПП',
      features: ['ABS', 'ESP', 'Круиз-контроль', 'Система помощи при торможении'],
      maxWeight: '15 тонн',
      image: 'https://images.unsplash.com/photo-1586854982238-1660298ceaa8?w=400&h=300&fit=crop'
    }
  ]

  const prices = [
    {
      name: 'Базовый курс C',
      price: '55,000',
      originalPrice: '70,000',
      includes: ['178 ч. теории', '72 ч. практики', 'Учебные материалы', '3 попытки экзамена'],
      popular: false
    },
    {
      name: 'Профессиональный C',
      price: '75,000',
      originalPrice: '95,000',
      includes: ['178 ч. теории', '90 ч. практики', 'Расширенная программа', 'Неограниченные попытки', 'Персональный инструктор'],
      popular: true
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
                <Truck className="w-5 h-5 mr-2" />
                <span className="font-semibold">Категория C</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Обучение вождению грузовых автомобилей
              </h1>
              
              <p className="text-xl text-gray-200 mb-8">
                Получите права категории C для управления грузовыми автомобилями. 
                Профессиональная подготовка коммерческих водителей.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">от 21 года</div>
                  <div className="text-gray-300">Минимальный возраст</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">3.5 месяца</div>
                  <div className="text-gray-300">Срок обучения</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">94%</div>
                  <div className="text-gray-300">Сдача с 1-го раза</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">7.5+ тонн</div>
                  <div className="text-gray-300">Масса ТС</div>
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
                    <span>178 часов теоретических занятий</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span>72 часа практического вождения</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span>Изучение устройства грузовика</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span>Правила перевозки грузов</span>
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
              Особенности обучения на грузовиках
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Профессиональная подготовка коммерческих водителей с практическим опытом
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-orange-600" />
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
              Расширенный курс теории и практики для профессиональных водителей
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {program.map((section, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {section.title}
                </h3>
                <div className="text-orange-600 font-semibold mb-6">
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

      {/* Грузовики */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Учебные грузовики
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Современная техника для безопасного и качественного обучения
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trucks.map((truck, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg">
                <div className="h-48 relative overflow-hidden">
                  <ImageWithFallback
                    src={truck.image}
                    alt={truck.model}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    fallbackType="car"
                    fallbackText={truck.model}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm font-semibold">
                    {truck.year}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {truck.model}
                  </h3>
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-300 mb-4">
                    <div>Год: {truck.year}</div>
                    <div>КПП: {truck.gearbox}</div>
                    <div>Двигатель: {truck.engine}</div>
                    <div>Макс. масса: {truck.maxWeight}</div>
                  </div>
                  <div className="space-y-2">
                    {truck.features.map((feature, featureIndex) => (
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
              Инвестиция в профессиональную карьеру коммерческого водителя
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {prices.map((price, index) => (
              <div key={index} className={`bg-white dark:bg-gray-700 rounded-xl p-8 shadow-lg relative ${price.popular ? 'ring-2 ring-orange-500' : ''}`}>
                {price.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Популярный
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {price.name}
                </h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-orange-600">{price.price}₽</span>
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
                <Link href="/booking" className={`w-full py-3 rounded-lg font-medium transition-colors duration-300 inline-flex items-center justify-center ${price.popular ? 'bg-orange-600 hover:bg-orange-700 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-900'}`}>
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
            Начните карьеру профессионального водителя
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Высокооплачиваемая профессия с возможностью карьерного роста ждёт вас
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <Link href="/booking" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors duration-300">
              Записаться на обучение
            </Link>
            <Link href="/contacts" className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-medium transition-colors duration-300">
              Получить консультацию
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CategoryCPage 