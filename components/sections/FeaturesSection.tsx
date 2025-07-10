import { Award, Clock, Users, Car, BookOpen, Shield, Heart, Star } from 'lucide-react'

const FeaturesSection = () => {
  const features = [
    {
      icon: Award,
      title: "Лицензированная автошкола",
      description: "Официальная лицензия на образовательную деятельность. Все документы в порядке."
    },
    {
      icon: Clock,
      title: "Быстрое обучение",
      description: "Получите права за 2-3 месяца. Интенсивная программа подготовки."
    },
    {
      icon: Users,
      title: "Опытные инструкторы",
      description: "Профессиональные инструкторы с опытом работы более 10 лет."
    },
    {
      icon: Car,
      title: "Новый автопарк",
      description: "Современные автомобили 2023-2024 года с АКПП и МКПП."
    },
    {
      icon: BookOpen,
      title: "Онлайн обучение",
      description: "Изучайте теорию в удобное время через наш мобильный портал."
    },
    {
      icon: Shield,
      title: "Гарантия результата",
      description: "98% учеников сдают экзамен с первого раза или возврат денег."
    },
    {
      icon: Heart,
      title: "Индивидуальный подход",
      description: "Персональная программа обучения под ваши потребности."
    },
    {
      icon: Star,
      title: "Рейтинг 4.9/5",
      description: "Высокие оценки от наших выпускников. Более 5000 довольных клиентов."
    }
  ]

  return (
    <section className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Почему выбирают FreshType?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Мы предлагаем современный подход к обучению вождению с использованием 
            новейших методик и технологий
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card p-6 text-center hover:scale-105 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Статистика */}
        <div className="mt-20 bg-gradient-to-r from-primary-600 to-primary-800 rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">5000+</div>
              <div className="text-primary-200">Выпускников</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">98%</div>
              <div className="text-primary-200">Сдача с 1-го раза</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">15</div>
              <div className="text-primary-200">Лет опыта</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">4.9</div>
              <div className="text-primary-200">Рейтинг</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection 