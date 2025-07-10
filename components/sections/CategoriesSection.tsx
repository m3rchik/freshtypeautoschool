import Link from 'next/link'
import { Bike, Car, Truck, Bus, ArrowRight, Link2 } from 'lucide-react'

const CategoriesSection = () => {
  const categories = [
    {
      id: 'A',
      title: 'Категория A',
      subtitle: 'Мотоцикл',
      description: 'Обучение вождению мотоцикла. Теория + практика на современных мотоциклах.',
      price: 'от 25 000 ₽',
      duration: '1-2 месяца',
      icon: Bike,
      color: 'bg-red-500',
      features: ['Теоретический курс', 'Практические занятия', 'Подготовка к экзамену']
    },
    {
      id: 'B',
      title: 'Категория B',
      subtitle: 'Легковой автомобиль',
      description: 'Самая популярная категория. Обучение на автомобилях с АКПП и МКПП.',
      price: 'от 35 000 ₽',
      duration: '2-3 месяца',
      icon: Car,
      color: 'bg-primary-600',
      features: ['Теория ПДД', 'Практика вождения', 'Экзамен в ГИБДД'],
      popular: true
    },
    {
      id: 'C',
      title: 'Категория C',
      subtitle: 'Грузовой автомобиль',
      description: 'Профессиональное обучение вождению грузовых автомобилей.',
      price: 'от 45 000 ₽',
      duration: '2-4 месяца',
      icon: Truck,
      color: 'bg-orange-500',
      features: ['Теория для грузовиков', 'Практика на грузовиках', 'Профессиональная подготовка']
    },
    {
      id: 'D',
      title: 'Категория D',
      subtitle: 'Автобус',
      description: 'Обучение вождению автобусов для работы в сфере пассажирских перевозок.',
      price: 'от 55 000 ₽',
      duration: '3-4 месяца',
      icon: Bus,
      color: 'bg-green-500',
      features: ['Теория пассажирских перевозок', 'Практика на автобусе', 'Медицинские требования']
    },
    {
      id: 'BE',
      title: 'Категория BE',
      subtitle: 'Легковой с прицепом',
      description: 'Обучение управлению легковым автомобилем с прицепом до 3,5 тонн.',
      price: 'от 20 000 ₽',
      duration: '1-1.5 месяца',
      icon: Link2,
      color: 'bg-orange-500',
      features: ['Теория с прицепом', 'Практика сцепки', 'Быстрое получение']
    }
  ]

  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Категории обучения
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Выберите подходящую категорию и начните обучение уже сегодня
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`relative card p-6 ${category.popular ? 'ring-2 ring-primary-500' : ''}`}
            >
              {category.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Популярная
                  </span>
                </div>
              )}

              <div className={`w-16 h-16 ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                <category.icon className="w-8 h-8 text-white" />
              </div>

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 font-medium mb-3">
                  {category.subtitle}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {category.description}
                </p>
              </div>

              <div className="space-y-3 mb-6">
                {category.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 dark:border-gray-600 pt-4 mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-500">Стоимость:</span>
                  <span className="font-bold text-primary-600">{category.price}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Срок обучения:</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">{category.duration}</span>
                </div>
              </div>

              <Link
                href={`/category-${category.id.toLowerCase()}`}
                className="w-full btn-primary inline-flex items-center justify-center space-x-2"
              >
                <span>Подробнее</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Нужна дополнительная категория или переподготовка?
          </p>
          <Link href="/categories" className="btn-secondary">
            Посмотреть все категории
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CategoriesSection 