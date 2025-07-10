import Link from 'next/link'
import { Clock, Users, Fuel, Shield, Award, ArrowRight, CheckCircle } from 'lucide-react'
import ImageWithFallback from '../../components/ImageWithFallback'

export default function CategoryDPage() {
  const features = [
    {
      icon: Clock,
      title: 'Продолжительность',
      description: '2.5-3 месяца интенсивного обучения'
    },
    {
      icon: Users,
      title: 'Группы',
      description: 'Малые группы до 8 человек'
    },
    {
      icon: Fuel,
      title: 'Практика',
      description: '56 часов вождения на реальных маршрутах'
    },
    {
      icon: Shield,
      title: 'Безопасность',
      description: 'Особый акцент на перевозку пассажиров'
    }
  ]

  const buses = [
    {
      model: 'ПАЗ-3205',
      year: '2020',
      description: 'Современный городской автобус',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=300&fit=crop',
      specs: {
        seats: '22+1',
        engine: 'Дизель 4.43л',
        length: '8.5м'
      }
    },
    {
      model: 'ГАЗель Next',
      year: '2021',
      description: 'Микроавтобус для пригородных маршрутов',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop',
      specs: {
        seats: '18+1',
        engine: 'Бензин 2.7л',
        length: '5.5м'
      }
    }
  ]

  const requirements = [
    'Возраст не менее 21 года',
    'Наличие прав категории B или C1',
    'Стаж вождения не менее 3 лет',
    'Медицинская справка',
    'Справка о несудимости'
  ]

  const program = [
    {
      title: 'Теоретическая подготовка',
      hours: '130 часов',
      topics: [
        'Правила дорожного движения для категории D',
        'Устройство и техническое обслуживание автобусов',
        'Перевозка пассажиров',
        'Безопасность дорожного движения',
        'Оказание первой помощи'
      ]
    },
    {
      title: 'Практическое вождение',
      hours: '56 часов',
      topics: [
        'Отработка навыков на автодроме',
        'Вождение в городских условиях',
        'Маневрирование на остановках',
        'Парковка и разворот',
        'Экзаменационные маршруты'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero секция */}
      <section className="relative bg-gradient-to-r from-green-600 to-emerald-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white mb-6">
                <Users className="w-5 h-5 mr-2" />
                <span className="font-semibold">Категория D</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Обучение вождению автобусов
              </h1>
              
              <p className="text-xl text-green-100 mb-8">
                Профессиональная подготовка водителей пассажирского транспорта. 
                Получите права категории D и работайте в сфере пассажирских перевозок.
              </p>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link href="/booking" className="btn-primary bg-white text-green-600 hover:bg-gray-100">
                  Записаться на обучение
                </Link>
                <Link href="/pricing" className="border border-white text-white hover:bg-white hover:text-green-600 px-6 py-3 rounded-lg font-medium transition-colors">
                  Узнать стоимость
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Что включает категория D:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span>Автобусы с числом мест более 8</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span>Городские и междугородние автобусы</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span>Маршрутные такси</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span>Туристические автобусы</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Особенности обучения */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Особенности обучения на категорию D
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Профессиональная подготовка с учетом специфики пассажирских перевозок
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
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

      {/* Автопарк */}
      <section className="section-padding bg-white dark:bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Учебные автобусы
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Современный автопарк для качественного обучения
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {buses.map((bus, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg">
                <div className="relative h-64">
                  <ImageWithFallback
                    src={bus.image}
                    alt={bus.model}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {bus.year} год
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {bus.model}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {bus.description}
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="text-center">
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {bus.specs.seats}
                      </div>
                      <div className="text-gray-500">мест</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {bus.specs.engine}
                      </div>
                      <div className="text-gray-500">двигатель</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {bus.specs.length}
                      </div>
                      <div className="text-gray-500">длина</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Требования */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Требования для обучения
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Для получения категории D необходимо соответствовать определенным требованиям
              </p>
              
              <ul className="space-y-4">
                {requirements.map((requirement, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Профессиональные перспективы
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li>• Водитель городского автобуса</li>
                <li>• Водитель междугороднего автобуса</li>
                <li>• Водитель туристического автобуса</li>
                <li>• Водитель маршрутного такси</li>
                <li>• Индивидуальный предприниматель</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Программа обучения */}
      <section className="section-padding bg-white dark:bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Программа обучения
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Полный курс подготовки водителей категории D
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {program.map((section, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {section.title}
                </h3>
                <div className="text-green-600 font-semibold mb-6">{section.hours}</div>
                
                <ul className="space-y-3">
                  {section.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-start space-x-3">
                      <ArrowRight className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Призыв к действию */}
      <section className="section-padding bg-gradient-to-r from-green-600 to-emerald-700 text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Начните карьеру водителя автобуса
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Стабильная работа, достойная зарплата и возможность помогать людям добираться до места назначения
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
              <Link href="/booking" className="btn-primary bg-white text-green-600 hover:bg-gray-100">
                Записаться на обучение
              </Link>
              <Link href="/contacts" className="border border-white text-white hover:bg-white hover:text-green-600 px-6 py-3 rounded-lg font-medium transition-colors">
                Задать вопрос
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 