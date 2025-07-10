import { Metadata } from 'next'
import Link from 'next/link'
import { Car, Bike, Truck, Bus, Package, Check, Clock, Users, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Категории обучения | FreshType Автошкола',
  description: 'Все категории водительских удостоверений в FreshType: A, B, C, D, E. Мотоциклы, легковые, грузовые автомобили, автобусы.',
  keywords: 'категории прав, категория A B C D E, обучение мотоцикл, легковой автомобиль, грузовик, автобус',
}

const CategoriesPage = () => {
  const categories = [
    {
      id: 'A',
      name: 'Категория A',
      icon: Bike,
      vehicle: 'Мотоциклы',
      description: 'Мотоциклы с объемом двигателя свыше 125 см³ и мощностью более 11 кВт',
      age: '18 лет',
      duration: '1.5 месяца',
      lessons: '134 ч. теории + 18 ч. практики',
      price: '25,000',
      features: [
        'Современные мотоциклы для обучения',
        'Защитная экипировка в комплекте',
        'Закрытая площадка для практики',
        'Опытные мото-инструкторы'
      ],
      color: 'bg-orange-500',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200'
    },
    {
      id: 'B',
      name: 'Категория B',
      icon: Car,
      vehicle: 'Легковые автомобили',
      description: 'Автомобили с разрешенной максимальной массой до 3500 кг и количеством мест до 8',
      age: '17 лет',
      duration: '2.5 месяца',
      lessons: '134 ч. теории + 56 ч. практики',
      price: '35,000',
      features: [
        'Автомобили с МКПП и АКПП',
        'Новый автопарк 2023-2024 года',
        'Индивидуальный подход',
        'Помощь в сдаче экзамена'
      ],
      color: 'bg-blue-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      popular: true
    },
    {
      id: 'C',
      name: 'Категория C',
      icon: Truck,
      vehicle: 'Грузовые автомобили',
      description: 'Автомобили с разрешенной максимальной массой свыше 3500 кг',
      age: '18 лет',
      duration: '3 месяца',
      lessons: '134 ч. теории + 72 ч. практики',
      price: '45,000',
      features: [
        'Современные грузовики',
        'Обучение маневрированию',
        'Техника безопасности',
        'Коммерческое вождение'
      ],
      color: 'bg-green-500',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      id: 'D',
      name: 'Категория D',
      icon: Bus,
      vehicle: 'Автобусы',
      description: 'Автомобили, предназначенные для перевозки пассажиров и имеющие более 8 мест',
      age: '21 год',
      duration: '3.5 месяца',
      lessons: '134 ч. теории + 84 ч. практики',
      price: '55,000',
      features: [
        'Современный автобусный парк',
        'Пассажирские перевозки',
        'Профессиональная подготовка',
        'Работа с пассажирами'
      ],
      color: 'bg-purple-500',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    },
    {
      id: 'BE',
      name: 'Категория BE',
      icon: Package,
      vehicle: 'Легковые с прицепом',
      description: 'Составы транспортных средств с автомобилем категории B и прицепом',
      age: '18 лет',
      duration: '1 месяц',
      lessons: '44 ч. практики',
      price: '30,000',
      features: [
        'Обучение с прицепом',
        'Маневрирование задним ходом',
        'Парковка с прицепом',
        'Безопасная буксировка'
      ],
      color: 'bg-indigo-500',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200'
    }
  ]

  const stats = [
    { icon: Users, value: '5000+', label: 'Выпускников' },
    { icon: Award, value: '98%', label: 'Успешная сдача' },
    { icon: Clock, value: '15', label: 'Лет опыта' },
    { icon: Car, value: '50+', label: 'Учебных ТС' }
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero секция */}
      <section className="gradient-bg text-white py-20">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">
              Все категории водительских удостоверений
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Профессиональное обучение по всем категориям с современным автопарком и опытными инструкторами
            </p>
            
            {/* Статистика */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                          {stats.map((stat, index) => (
              <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Категории */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {categories.map((category) => (
              <div
                key={category.id}
                className={`relative ${category.bgColor} border-2 ${category.borderColor} rounded-2xl p-8 hover:shadow-xl transition-all duration-300 ${
                  category.popular ? 'scale-105 shadow-2xl' : 'shadow-lg'
                }`}
              >
                {category.popular && (
                  <div className="absolute -top-4 left-6">
                    <div className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Самая популярная
                    </div>
                  </div>
                )}

                <div className="flex items-start space-x-6">
                  {/* Иконка */}
                  <div className={`w-16 h-16 ${category.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Информация */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {category.name}
                      </h3>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary-600">
                          {category.price}₽
                        </div>
                        <div className="text-sm text-gray-500">от</div>
                      </div>
                    </div>

                    <div className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                      {category.vehicle}
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                      {category.description}
                    </p>

                    {/* Характеристики */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 text-sm">
                      <div>
                        <div className="text-gray-500 dark:text-gray-400">Возраст</div>
                        <div className="font-semibold text-gray-900 dark:text-white">от {category.age}</div>
                      </div>
                      <div>
                        <div className="text-gray-500 dark:text-gray-400">Срок обучения</div>
                        <div className="font-semibold text-gray-900 dark:text-white">{category.duration}</div>
                      </div>
                      <div>
                        <div className="text-gray-500 dark:text-gray-400">Занятия</div>
                        <div className="font-semibold text-gray-900 dark:text-white">{category.lessons}</div>
                      </div>
                    </div>

                    {/* Особенности */}
                    <div className="space-y-2 mb-6">
                      {category.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Кнопки */}
                    <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                      <Link
                        href={`/category-${category.id.toLowerCase()}`}
                        className="flex-1 btn-primary text-center"
                      >
                        Подробнее
                      </Link>
                      <Link
                        href="/booking"
                        className="flex-1 btn-secondary text-center"
                      >
                        Записаться
                      </Link>
                    </div>
                  </div>
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
              Почему выбирают FreshType
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Мы предлагаем качественное обучение по всем категориям с индивидуальным подходом
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Лицензированная автошкола
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Официальная лицензия на образовательную деятельность и сертифицированные инструкторы
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Car className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Современный автопарк
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Новые учебные автомобили всех категорий с современным оборудованием
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Опытные инструкторы
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Профессиональные инструкторы со стажем более 10 лет и высокой квалификацией
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-bg text-white py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">
            Готовы начать обучение?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Выберите категорию и запишитесь на бесплатную консультацию прямо сейчас
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <Link href="/booking" className="btn-primary">
              Записаться на обучение
            </Link>
            <Link href="/pricing" className="btn-secondary">
              Посмотреть цены
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CategoriesPage 