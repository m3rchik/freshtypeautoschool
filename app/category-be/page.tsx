import Link from 'next/link'
import { Clock, Users, Truck, Shield, Award, ArrowRight, CheckCircle, Weight } from 'lucide-react'
import ImageWithFallback from '../../components/ImageWithFallback'

export default function CategoryBEPage() {
  const features = [
    {
      icon: Clock,
      title: 'Продолжительность',
      description: '1-1.5 месяца дополнительного обучения'
    },
    {
      icon: Users,
      title: 'Группы',
      description: 'Индивидуальные и групповые занятия'
    },
    {
      icon: Truck,
      title: 'Практика',
      description: '32 часа практического вождения с прицепом'
    },
    {
      icon: Shield,
      title: 'Безопасность',
      description: 'Особенности управления автопоездом'
    }
  ]

  const equipment = [
    {
      model: 'Volkswagen Polo + прицеп',
      year: '2021',
      description: 'Легковой автомобиль с учебным прицепом',
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop',
      specs: {
        weight: '750 кг',
        type: 'Одноосный',
        coupling: 'Шаровая'
      }
    },
    {
      model: 'Kia Rio + прицеп',
      year: '2022',
      description: 'Современный автомобиль с прицепом для грузов',
      image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=400&h=300&fit=crop',
      specs: {
        weight: '750 кг',
        type: 'Бортовой',
        coupling: 'Шаровая'
      }
    }
  ]

  const requirements = [
    'Наличие прав категории B',
    'Стаж вождения не менее 1 года',
    'Возраст от 18 лет',
    'Медицинская справка (если требуется)',
    'Теоретические знания ПДД'
  ]

  const program = [
    {
      title: 'Теоретическая подготовка',
      hours: '18 часов',
      topics: [
        'Правила движения с прицепом',
        'Особенности маневрирования',
        'Правила сцепки и расцепки',
        'Техническое обслуживание прицепа',
        'Безопасность автопоезда'
      ]
    },
    {
      title: 'Практическое вождение',
      hours: '32 часа',
      topics: [
        'Сцепка и расцепка прицепа',
        'Движение прямо и повороты',
        'Разворот с прицепом',
        'Въезд в бокс задним ходом',
        'Парковка автопоезда'
      ]
    }
  ]

  const applications = [
    {
      title: 'Перевозка грузов',
      description: 'Транспортировка мебели, стройматериалов, бытовой техники',
      icon: '📦'
    },
    {
      title: 'Отдых и туризм',
      description: 'Прицеп-дача, лодка, мотоцикл, велосипеды',
      icon: '🏕️'
    },
    {
      title: 'Коммерческая деятельность',
      description: 'Малый бизнес, доставка товаров, переезды',
      icon: '💼'
    },
    {
      title: 'Хозяйственные нужды',
      description: 'Садовая техника, инструменты, сезонные работы',
      icon: '🔧'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero секция */}
      <section className="relative bg-gradient-to-r from-orange-600 to-amber-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white mb-6">
                <Truck className="w-5 h-5 mr-2" />
                <span className="font-semibold">Категория BE</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Обучение вождению с прицепом
              </h1>
              
              <p className="text-xl text-orange-100 mb-8">
                Расширьте возможности своего автомобиля! Научитесь безопасно управлять 
                легковым автомобилем с прицепом массой до 3,5 тонн.
              </p>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link href="/booking" className="btn-primary bg-white text-orange-600 hover:bg-gray-100">
                  Записаться на обучение
                </Link>
                <Link href="/pricing" className="border border-white text-white hover:bg-white hover:text-orange-600 px-6 py-3 rounded-lg font-medium transition-colors">
                  Узнать стоимость
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Что дает категория BE:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-orange-300" />
                    <span>Прицепы массой до 3,5 тонн</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-orange-300" />
                    <span>Грузовые и дачные прицепы</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-orange-300" />
                    <span>Прицепы для лодок и техники</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-orange-300" />
                    <span>Легальная коммерческая деятельность</span>
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
              Особенности обучения на категорию BE
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Краткий курс для тех, кто уже имеет права категории B
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
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

      {/* Учебная техника */}
      <section className="section-padding bg-white dark:bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Учебная техника
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Современные автомобили с прицепами для практических занятий
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {equipment.map((item, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg">
                <div className="relative h-64">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.model}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {item.year} год
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {item.model}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {item.description}
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="text-center">
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {item.specs.weight}
                      </div>
                      <div className="text-gray-500">макс. масса</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {item.specs.type}
                      </div>
                      <div className="text-gray-500">тип</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {item.specs.coupling}
                      </div>
                      <div className="text-gray-500">сцепка</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Применение */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Где пригодятся навыки BE
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Множество ситуаций, когда прицеп станет незаменимым помощником
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applications.map((app, index) => (
              <div key={index} className="card p-6 text-center group hover-scale">
                <div className="text-6xl mb-4">{app.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {app.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {app.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Требования и преимущества */}
      <section className="section-padding bg-white dark:bg-gray-800">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Требования для обучения
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Минимальные требования для получения категории BE
              </p>
              
              <ul className="space-y-4">
                {requirements.map((requirement, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
              <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-6">
                <Weight className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Важные особенности
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li>• Общая масса автопоезда до 4,25 тонн</li>
                <li>• Масса прицепа от 750 кг до 3,5 тонн</li>
                <li>• Экзамен только на практическое вождение</li>
                <li>• Быстрое получение (4-6 недель)</li>
                <li>• Доступная стоимость обучения</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Программа обучения */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Программа обучения
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Компактный курс для освоения навыков управления автопоездом
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {program.map((section, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {section.title}
                </h3>
                <div className="text-orange-600 font-semibold mb-6">{section.hours}</div>
                
                <ul className="space-y-3">
                  {section.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-start space-x-3">
                      <ArrowRight className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Практические упражнения */}
          <div className="mt-12 bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Обязательные упражнения на экзамене
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Сцепка прицепа</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Правильная процедура присоединения прицепа к автомобилю
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Въезд в бокс</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Заезд в ограниченное пространство задним ходом
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Расцепка</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Безопасное отсоединение прицепа от автомобиля
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Призыв к действию */}
      <section className="section-padding bg-gradient-to-r from-orange-600 to-amber-600 text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Расширьте возможности своего автомобиля
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Всего за месяц научитесь уверенно управлять автомобилем с прицепом 
              и откройте новые возможности для работы и отдыха!
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
              <Link href="/booking" className="btn-primary bg-white text-orange-600 hover:bg-gray-100">
                Записаться на обучение
              </Link>
              <Link href="/contacts" className="border border-white text-white hover:bg-white hover:text-orange-600 px-6 py-3 rounded-lg font-medium transition-colors">
                Задать вопрос
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 