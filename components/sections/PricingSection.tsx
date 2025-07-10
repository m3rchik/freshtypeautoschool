import Link from 'next/link'
import { Check, Star } from 'lucide-react'

const PricingSection = () => {
  const plans = [
    {
      name: 'Базовый',
      price: '35 000',
      category: 'Категория B',
      description: 'Стандартный пакет обучения',
      features: [
        'Теоретический курс (130 часов)',
        'Практическое вождение (56 часов)',
        'Учебные материалы',
        'Экзамен в ГИБДД',
        'Поддержка инструктора'
      ],
      buttonText: 'Выбрать план'
    },
    {
      name: 'Премиум',
      price: '45 000',
      category: 'Категория B',
      description: 'Расширенный пакет с дополнительными занятиями',
      features: [
        'Все из базового пакета',
        'Дополнительные часы вождения (20 часов)',
        'Индивидуальные занятия',
        'Экспресс подготовка',
        'Онлайн тесты и симуляторы',
        'Гарантия сдачи экзамена'
      ],
      buttonText: 'Выбрать план',
      popular: true
    },
    {
      name: 'VIP',
      price: '65 000',
      category: 'Категория B',
      description: 'Максимальный комфорт и индивидуальный подход',
      features: [
        'Все из премиум пакета',
        'Персональный инструктор',
        'Гибкий график занятий',
        'Трансфер на занятия',
        'Приоритетная запись на экзамен',
        'Психологическая подготовка',
        '100% возврат при не сдаче'
      ],
      buttonText: 'Выбрать план'
    }
  ]

  return (
    <section className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Пакеты обучения
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Выберите подходящий план обучения. Все цены указаны за полный курс подготовки
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative card p-8 ${
                plan.popular ? 'ring-2 ring-primary-500 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary-600 text-white px-6 py-2 rounded-full text-sm font-medium flex items-center space-x-2">
                    <Star size={16} />
                    <span>Популярный</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{plan.description}</p>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-primary-600">{plan.price}</span>
                  <span className="text-gray-500 ml-2">₽</span>
                </div>
                <p className="text-sm text-gray-500">{plan.category}</p>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/booking"
                className={`w-full inline-flex items-center justify-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-primary-600 hover:bg-primary-700 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white'
                }`}
              >
                {plan.buttonText}
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-primary-50 dark:bg-primary-900/20 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Специальные предложения
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-primary-600 mb-2">-20%</div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Скидка студентам и пенсионерам
                </p>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-600 mb-2">0%</div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Рассрочка на 6 месяцев
                </p>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-600 mb-2">+10</div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Дополнительные часы при групповой записи
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingSection 