import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Контакты и филиалы | FreshType Автошкола',
  description: 'Контакты автошколы FreshType в Москве. Адреса филиалов, телефоны, график работы. Бесплатная консультация по телефону.',
  keywords: 'контакты автошкола, филиалы FreshType, адрес автошкола Москва, телефон автошкола',
}

const ContactsPage = () => {
  const branches = [
    {
      name: 'Центральный филиал',
      address: 'г. Москва, ул. Тверская, д. 15, офис 301',
      phone: '+7 (495) 123-45-67',
      email: 'central@freshtype.ru',
      metro: 'м. Тверская',
      hours: 'Пн-Пт: 9:00-20:00, Сб: 10:00-18:00',
      services: ['Теория', 'Практика', 'Экзамены', 'Документы'],
      manager: 'Иванова Анна Сергеевна'
    },
    {
      name: 'Северный филиал', 
      address: 'г. Москва, ул. Дмитровское шоссе, д. 89, стр. 2',
      phone: '+7 (495) 234-56-78',
      email: 'north@freshtype.ru',
      metro: 'м. Дмитровская',
      hours: 'Пн-Пт: 9:00-20:00, Сб: 10:00-18:00',
      services: ['Теория', 'Практика', 'Автодром'],
      manager: 'Петров Михаил Алексеевич'
    },
    {
      name: 'Южный филиал',
      address: 'г. Москва, ул. Варшавское шоссе, д. 47, корп. 1',
      phone: '+7 (495) 345-67-89',
      email: 'south@freshtype.ru',
      metro: 'м. Варшавская',
      hours: 'Пн-Пт: 9:00-20:00, Сб: 10:00-18:00',
      services: ['Теория', 'Практика', 'Мотокурсы'],
      manager: 'Сидорова Елена Витальевна'
    },
    {
      name: 'Восточный филиал',
      address: 'г. Москва, ул. Измайловский проспект, д. 23',
      phone: '+7 (495) 456-78-90',
      email: 'east@freshtype.ru',
      metro: 'м. Измайловская',
      hours: 'Пн-Пт: 9:00-20:00, Сб: 10:00-18:00',
      services: ['Теория', 'Практика', 'Грузовые ТС'],
      manager: 'Козлов Андрей Дмитриевич'
    }
  ]

  const contactMethods = [
    {
      icon: Phone,
      title: 'Позвонить',
      value: '+7 (495) 123-45-67',
      description: 'Бесплатная консультация',
      action: 'tel:+74951234567',
      color: 'bg-green-500'
    },
    {
      icon: MessageCircle,
      title: 'Telegram',
      value: '@FreshTypeBot',
      description: 'Онлайн поддержка 24/7',
      action: 'https://t.me/freshtypebot',
      color: 'bg-blue-500'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'info@freshtype.ru',
      description: 'Ответим в течение часа',
      action: 'mailto:info@freshtype.ru',
      color: 'bg-red-500'
    }
  ]

  const workingHours = [
    { day: 'Понедельник', hours: '9:00 - 20:00' },
    { day: 'Вторник', hours: '9:00 - 20:00' },
    { day: 'Среда', hours: '9:00 - 20:00' },
    { day: 'Четверг', hours: '9:00 - 20:00' },
    { day: 'Пятница', hours: '9:00 - 20:00' },
    { day: 'Суббота', hours: '10:00 - 18:00' },
    { day: 'Воскресенье', hours: 'Выходной' }
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero секция */}
      <section className="gradient-bg text-white py-20">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">
              Контакты и филиалы
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Найдите ближайший филиал FreshType и начните обучение уже сегодня. 
              4 удобных локации по всей Москве.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.action}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className={`w-12 h-12 ${method.color} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                    <method.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{method.title}</h3>
                  <div className="text-xl font-bold mb-1">{method.value}</div>
                  <div className="text-gray-300 text-sm">{method.description}</div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Филиалы */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Наши филиалы
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Выберите удобный для вас филиал. Во всех локациях доступен полный спектр услуг
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {branches.map((branch, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {branch.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Руководитель: {branch.manager}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary-600" />
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {branch.address}
                      </div>
                      <div className="text-gray-500 text-sm">{branch.metro}</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-gray-500" />
                    <a
                      href={`tel:${branch.phone.replace(/\D/g, '')}`}
                      className="font-semibold text-primary-600 hover:underline"
                    >
                      {branch.phone}
                    </a>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-gray-500" />
                    <a
                      href={`mailto:${branch.email}`}
                      className="font-semibold text-primary-600 hover:underline"
                    >
                      {branch.email}
                    </a>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-gray-500" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {branch.hours}
                    </span>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    Доступные услуги:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {branch.services.map((service, serviceIndex) => (
                      <span
                        key={serviceIndex}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-3 mt-6">
                  <Link
                    href="/booking"
                    className="flex-1 btn-primary text-center"
                  >
                    Записаться
                  </Link>
                  <a
                    href={`tel:${branch.phone.replace(/\D/g, '')}`}
                    className="flex-1 btn-secondary text-center"
                  >
                    Позвонить
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* График работы */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              График работы
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Мы работаем без выходных для вашего удобства
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-8">
              <div className="space-y-4">
                {workingHours.map((schedule, index) => (
                  <div
                    key={index}
                    className={`flex justify-between items-center py-3 px-4 rounded-lg ${
                      schedule.day === 'Воскресенье'
                        ? 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400'
                        : 'bg-white dark:bg-gray-600'
                    }`}
                  >
                    <span className="font-semibold">{schedule.day}</span>
                    <span>{schedule.hours}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
                <div className="flex items-center space-x-2 text-primary-700 dark:text-primary-300">
                  <Clock className="w-5 h-5" />
                  <span className="font-semibold">Важно:</span>
                </div>
                <p className="text-primary-600 dark:text-primary-400 text-sm mt-2">
                  Практические занятия проводятся с 8:00 до 22:00 ежедневно. 
                  Экзамены в ГИБДД - по отдельному расписанию.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Карта */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Как нас найти
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Интерактивная карта с расположением всех филиалов
            </p>
          </div>

          <div className="bg-gray-200 dark:bg-gray-700 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-gray-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Интерактивная карта
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Здесь будет интегрирована Яндекс.Карта с отметками филиалов
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ по контактам */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Часто задаваемые вопросы
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white dark:bg-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Как быстро можно записаться на первое занятие?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Обычно в течение 1-2 дней. При срочной необходимости - в день обращения.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Можно ли поменять филиал в процессе обучения?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Да, можно. Ваш прогресс сохраняется и переносится в любой наш филиал.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Есть ли парковка возле филиалов?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Да, возле каждого филиала есть парковочные места для учеников.
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
            Выберите удобный филиал и запишитесь на бесплатную консультацию
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <Link href="/booking" className="btn-primary">
              Записаться на обучение
            </Link>
            <a href="tel:+74951234567" className="btn-secondary">
              Позвонить сейчас
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactsPage 