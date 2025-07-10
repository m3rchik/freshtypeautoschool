'use client'

import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'

const ContactSection = () => {
  // Обработчик построения маршрута
  const handleBuildRoute = (address: string, branchName: string) => {
    // Создаем ссылку на Google Maps или Яндекс.Карты
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`
    const yandexMapsUrl = `https://yandex.ru/maps/?rtext=~${encodeURIComponent(address)}`
    
    // Определяем платформу пользователя для выбора подходящей карты
    const userAgent = navigator.userAgent.toLowerCase()
    
    if (userAgent.includes('android') || userAgent.includes('iphone')) {
      // Для мобильных устройств открываем Google Maps
      window.open(googleMapsUrl, '_blank')
    } else {
      // Для десктопа предлагаем выбор
      const useYandex = confirm(`Построить маршрут до ${branchName}?\n\nНажмите "OK" для Яндекс.Карт или "Отмена" для Google Maps`)
      window.open(useYandex ? yandexMapsUrl : googleMapsUrl, '_blank')
    }
  }

  const branches = [
    {
      name: 'Главный офис',
      address: 'г. Москва, ул. Примерная, д. 1',
      phone: '+7 (999) 123-45-67',
      email: 'info@freshtype.ru',
      schedule: 'Пн-Пт: 9:00-20:00, Сб: 10:00-18:00',
      coordinates: { lat: 55.7558, lng: 37.6176 }
    },
    {
      name: 'Филиал "Север"',
      address: 'г. Москва, ул. Северная, д. 25',
      phone: '+7 (999) 123-45-68',
      email: 'sever@freshtype.ru',
      schedule: 'Пн-Пт: 9:00-20:00, Сб: 10:00-18:00',
      coordinates: { lat: 55.8558, lng: 37.6176 }
    },
    {
      name: 'Филиал "Юг"',
      address: 'г. Москва, ул. Южная, д. 15',
      phone: '+7 (999) 123-45-69',
      email: 'ug@freshtype.ru',
      schedule: 'Пн-Пт: 9:00-20:00, Сб: 10:00-18:00',
      coordinates: { lat: 55.6558, lng: 37.6176 }
    }
  ]

  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Контакты и адреса
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Выберите ближайший к вам филиал для удобного обучения
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {branches.map((branch, index) => (
            <div key={index} className="card p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {branch.name}
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">{branch.address}</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary-600 flex-shrink-0" />
                  <a 
                    href={`tel:${branch.phone}`}
                    className="text-gray-600 dark:text-gray-300 hover:text-primary-600 transition-colors"
                  >
                    {branch.phone}
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary-600 flex-shrink-0" />
                  <a 
                    href={`mailto:${branch.email}`}
                    className="text-gray-600 dark:text-gray-300 hover:text-primary-600 transition-colors"
                  >
                    {branch.email}
                  </a>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">{branch.schedule}</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-600">
                <button 
                  onClick={() => handleBuildRoute(branch.address, branch.name)}
                  className="w-full btn-primary text-sm"
                >
                  Построить маршрут
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Способы связи */}
        <div className="bg-white dark:bg-gray-700 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Связаться с нами
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="tel:+79991234567"
              className="flex items-center space-x-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-xl hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors"
            >
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-semibold text-gray-900 dark:text-white">Позвонить</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">+7 (999) 123-45-67</div>
              </div>
            </a>

            <a
              href="mailto:info@freshtype.ru"
              className="flex items-center space-x-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
            >
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-semibold text-gray-900 dark:text-white">Написать email</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">info@freshtype.ru</div>
              </div>
            </a>

            <a
              href="https://t.me/freshtype_autoschool_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-xl hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors"
            >
              <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-semibold text-gray-900 dark:text-white">Telegram-бот</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Быстрые ответы 24/7</div>
              </div>
            </a>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Мы отвечаем на все обращения в течение 15 минут в рабочее время
            </p>
            <div className="flex justify-center space-x-6 text-sm text-gray-500">
              <span>Пн-Пт: 9:00-20:00</span>
              <span>Сб: 10:00-18:00</span>
              <span>Вс: выходной</span>
            </div>
          </div>
        </div>

        {/* Карта (заглушка) */}
        <div className="mt-12">
          <div className="bg-gray-200 dark:bg-gray-700 rounded-2xl h-64 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 dark:text-gray-400">
                Интерактивная карта с филиалами
              </p>
              <p className="text-sm text-gray-400 mt-2">
                Здесь будет размещена карта с отметками всех филиалов
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection 