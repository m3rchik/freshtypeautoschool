import { Metadata } from 'next'
import { Check, X, Star, Award, Users, Clock } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Цены и тарифы | FreshType Автошкола',
  description: 'Прозрачные цены на обучение в автошколе FreshType. Рассрочка 0%, скидки для студентов. Все категории: A, B, C, D, E.',
  keywords: 'цены автошкола, стоимость обучения вождению, рассрочка на права, скидки автошкола',
}

const PricingPage = () => {
  const pricingPlans = [
    {
      name: "Базовый",
      price: "35,000",
      originalPrice: "45,000",
      discount: "22%",
      description: "Стандартное обучение с опытными инструкторами",
      features: [
        "Теоретический курс (134 часа)",
        "Практические занятия (56 часов)",
        "Учебные материалы",
        "Экзамен в ГИБДД (2 попытки)",
        "Медкомиссия в подарок",
        "Онлайн тесты ПДД"
      ],
      notIncluded: [
        "Дополнительные занятия",
        "Индивидуальные уроки",
        "VIP сопровождение"
      ],
      popular: false,
      buttonText: "Выбрать тариф",
      color: "border-gray-200",
      bgColor: "bg-white"
    },
    {
      name: "Стандарт",
      price: "42,000",
      originalPrice: "55,000",
      discount: "24%",
      description: "Расширенная программа + дополнительные услуги",
      features: [
        "Теоретический курс (134 часа)",
        "Практические занятия (70 часов)",
        "Учебные материалы Premium",
        "Экзамен в ГИБДД (3 попытки)",
        "Медкомиссия в подарок",
        "Онлайн тесты ПДД",
        "5 дополнительных занятий",
        "Помощь в оформлении документов",
        "Техподдержка 24/7"
      ],
      notIncluded: [
        "VIP сопровождение",
        "Персональный куратор"
      ],
      popular: true,
      buttonText: "Популярный выбор",
      color: "border-primary-500",
      bgColor: "bg-primary-50"
    },
    {
      name: "VIP",
      price: "65,000",
      originalPrice: "85,000",
      discount: "24%",
      description: "Премиум обучение с персональным подходом",
      features: [
        "Теоретический курс (134 часа)",
        "Практические занятия (80 часов)",
        "Учебные материалы VIP",
        "Экзамен в ГИБДД (неограниченно)",
        "Медкомиссия в подарок",
        "Онлайн тесты ПДД Premium",
        "10 дополнительных занятий",
        "VIP сопровождение на экзамен",
        "Персональный куратор",
        "Приоритетное расписание",
        "Страховка КАСКО на время обучения"
      ],
      notIncluded: [],
      popular: false,
      buttonText: "VIP обслуживание",
      color: "border-accent-500",
      bgColor: "bg-accent-50"
    }
  ]

  const additionalServices = [
    {
      name: "Дополнительное занятие",
      price: "1,500",
      description: "Отработка сложных элементов"
    },
    {
      name: "Повторный экзамен",
      price: "2,500",
      description: "При неудачной сдаче в ГИБДД"
    },
    {
      name: "Персональный инструктор",
      price: "2,000",
      description: "Занятие с личным инструктором"
    },
    {
      name: "Интенсивный курс",
      price: "+15,000",
      description: "Ускоренное обучение за 3 недели"
    }
  ]

  const benefits = [
    {
      icon: Award,
      title: "Гарантия качества",
      description: "98% учеников сдают экзамен с первого раза"
    },
    {
      icon: Users,
      title: "Опытные инструкторы",
      description: "Средний стаж наших инструкторов 10+ лет"
    },
    {
      icon: Clock,
      title: "Гибкий график",
      description: "Занятия 7 дней в неделю с 8:00 до 22:00"
    },
    {
      icon: Star,
      title: "Современный автопарк",
      description: "Новые автомобили 2023-2024 года выпуска"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero секция */}
      <section className="gradient-bg text-white py-20">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">
              Прозрачные цены без скрытых платежей
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Выберите оптимальный тариф для обучения в автошколе FreshType. 
              Рассрочка 0% на 6 месяцев для всех тарифов.
            </p>
            <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white">
              <Star className="w-5 h-5 mr-2 text-yellow-400" />
              <span className="font-semibold">Акция до конца месяца: скидки до 24%</span>
            </div>
          </div>
        </div>
      </section>

      {/* Тарифы */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative ${plan.bgColor} border-2 ${plan.color} rounded-2xl p-8 ${
                  plan.popular ? 'scale-105 shadow-2xl' : 'shadow-lg'
                } hover:shadow-xl transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Самый популярный
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {plan.description}
                  </p>
                  
                  <div className="mb-4">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-4xl font-bold text-gray-900 dark:text-white">
                        {plan.price}
                      </span>
                      <span className="text-gray-600 dark:text-gray-300">₽</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 mt-1">
                      <span className="text-lg text-gray-400 line-through">
                        {plan.originalPrice}₽
                      </span>
                      <span className="text-green-500 font-semibold">
                        -{plan.discount}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                  {plan.notIncluded.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <X className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-400">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/booking"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 block ${
                    plan.popular
                      ? 'bg-primary-600 hover:bg-primary-700 text-white'
                      : 'bg-gray-900 hover:bg-gray-800 text-white dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100'
                  }`}
                >
                  {plan.buttonText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Дополнительные услуги */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Дополнительные услуги
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Индивидуальные услуги для максимального комфорта обучения
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="text-2xl font-bold text-primary-600 mb-2">
                  {service.price}₽
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {service.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Почему выбирают FreshType
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section className="gradient-bg text-white py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">
            Готовы начать обучение?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Записывайтесь на бесплатную консультацию и выберите оптимальный тариф
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

export default PricingPage 