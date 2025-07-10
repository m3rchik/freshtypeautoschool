import { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, Users, MapPin, Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Расписание занятий | FreshType Автошкола',
  description: 'Расписание теоретических и практических занятий в автошколе FreshType. Удобное время, гибкий график.',
  keywords: 'расписание автошкола, график занятий, время обучения, теория практика',
}

const SchedulePage = () => {
  const theorySchedule = [
    { time: '9:00-10:30', mon: 'ПДД', tue: 'Устройство', wed: 'ПДД', thu: 'Безопасность', fri: 'ПДД', sat: 'Экзамен' },
    { time: '11:00-12:30', mon: 'Устройство', tue: 'ПДД', wed: 'Медпомощь', thu: 'ПДД', fri: 'Устройство', sat: 'Экзамен' },
    { time: '13:00-14:30', mon: 'ПДД', tue: 'Безопасность', wed: 'ПДД', thu: 'Устройство', fri: 'ПДД', sat: '-' },
    { time: '15:00-16:30', mon: 'Безопасность', tue: 'ПДД', wed: 'Устройство', thu: 'ПДД', fri: 'Медпомощь', sat: '-' },
    { time: '17:00-18:30', mon: 'ПДД', tue: 'Медпомощь', wed: 'ПДД', thu: 'Психология', fri: 'ПДД', sat: '-' },
    { time: '19:00-20:30', mon: 'Устройство', tue: 'ПДД', wed: 'Безопасность', thu: 'ПДД', fri: 'Экзамен', sat: '-' },
  ]

  const practiceSlots = [
    '8:00-9:30', '9:30-11:00', '11:00-12:30', '12:30-14:00', 
    '14:00-15:30', '15:30-17:00', '17:00-18:30', '18:30-20:00', '20:00-21:30'
  ]

  const instructors = [
    { name: 'Иванов И.И.', experience: '15 лет', rating: 4.9, available: ['ПН', 'ВТ', 'СР', 'ЧТ'] },
    { name: 'Петров П.П.', experience: '12 лет', rating: 4.8, available: ['ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'] },
    { name: 'Сидоров С.С.', experience: '10 лет', rating: 4.9, available: ['ПН', 'СР', 'ПТ', 'СБ'] },
    { name: 'Козлова А.В.', experience: '8 лет', rating: 4.7, available: ['ПН', 'ВТ', 'ЧТ', 'ПТ'] },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero секция */}
      <section className="gradient-bg text-white py-20">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">
              Расписание занятий
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Удобное расписание теоретических и практических занятий. 
              Выберите время, которое подходит именно вам.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
                <Calendar className="w-8 h-8 mx-auto mb-3 text-primary-400" />
                <div className="text-2xl font-bold mb-1">7 дней</div>
                <div className="text-gray-300">в неделю</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
                <Clock className="w-8 h-8 mx-auto mb-3 text-primary-400" />
                <div className="text-2xl font-bold mb-1">8:00-22:00</div>
                <div className="text-gray-300">время работы</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
                <Users className="w-8 h-8 mx-auto mb-3 text-primary-400" />
                <div className="text-2xl font-bold mb-1">до 12</div>
                <div className="text-gray-300">человек в группе</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Теоретические занятия */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Расписание теоретических занятий
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Занятия проходят в удобных аудиториях с современным оборудованием
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg overflow-x-auto">
            <table className="w-full min-w-[700px]">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Время</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-900 dark:text-white">ПН</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-900 dark:text-white">ВТ</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-900 dark:text-white">СР</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-900 dark:text-white">ЧТ</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-900 dark:text-white">ПТ</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-900 dark:text-white">СБ</th>
                </tr>
              </thead>
              <tbody>
                {theorySchedule.map((row, index) => (
                  <tr key={index} className="border-b last:border-b-0">
                    <td className="py-3 px-4 font-semibold text-primary-600">{row.time}</td>
                    <td className="py-3 px-4 text-center text-gray-700 dark:text-gray-300">{row.mon}</td>
                    <td className="py-3 px-4 text-center text-gray-700 dark:text-gray-300">{row.tue}</td>
                    <td className="py-3 px-4 text-center text-gray-700 dark:text-gray-300">{row.wed}</td>
                    <td className="py-3 px-4 text-center text-gray-700 dark:text-gray-300">{row.thu}</td>
                    <td className="py-3 px-4 text-center text-gray-700 dark:text-gray-300">{row.fri}</td>
                    <td className="py-3 px-4 text-center text-gray-700 dark:text-gray-300">{row.sat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            <div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded"></div>
                <span>ПДД - Правила дорожного движения</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded"></div>
                <span>Устройство - Устройство автомобиля</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-yellow-500 rounded"></div>
                <span>Безопасность - Основы безопасности</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded"></div>
                <span>Медпомощь - Первая помощь</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-purple-500 rounded"></div>
                <span>Экзамен - Внутренний экзамен</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Практические занятия */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Практические занятия
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Индивидуальные занятия с опытными инструкторами по удобному графику
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Временные слоты */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Доступное время
              </h3>
              
              <div className="space-y-3">
                {practiceSlots.map((slot, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-white dark:bg-gray-600 rounded-lg"
                  >
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {slot}
                    </span>
                    <div className="flex items-center space-x-2 text-green-600 dark:text-green-400">
                      <Check className="w-4 h-4" />
                      <span className="text-sm">Доступно</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
                <h4 className="font-semibold text-primary-700 dark:text-primary-300 mb-2">
                  Важная информация:
                </h4>
                <ul className="text-sm text-primary-600 dark:text-primary-400 space-y-1">
                  <li>• Занятие длится 1,5 часа (2 академических часа)</li>
                  <li>• Запись за 24 часа до занятия</li>
                  <li>• Перенос занятия за 12 часов без штрафа</li>
                  <li>• Выходные и праздники - по отдельному расписанию</li>
                </ul>
              </div>
            </div>

            {/* Инструкторы */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Наши инструкторы
              </h3>
              
              <div className="space-y-4">
                {instructors.map((instructor, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-600 rounded-lg p-4"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {instructor.name}
                      </h4>
                      <div className="flex items-center space-x-1">
                        <span className="text-yellow-500">★</span>
                        <span className="text-sm font-semibold">{instructor.rating}</span>
                      </div>
                    </div>
                    
                    <div className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                      Опыт: {instructor.experience}
                    </div>
                    
                    <div className="flex flex-wrap gap-1">
                      {instructor.available.map((day, dayIndex) => (
                        <span
                          key={dayIndex}
                          className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded text-xs"
                        >
                          {day}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Филиалы и адреса */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Места проведения занятий
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Выберите удобный филиал для теоретических и практических занятий
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Центральный', address: 'ул. Тверская, 15', metro: 'м. Тверская' },
              { name: 'Северный', address: 'Дмитровское ш., 89', metro: 'м. Дмитровская' },
              { name: 'Южный', address: 'Варшавское ш., 47', metro: 'м. Варшавская' },
              { name: 'Восточный', address: 'Измайловский пр., 23', metro: 'м. Измайловская' }
            ].map((branch, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-primary-600" />
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {branch.name} филиал
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                  {branch.address}
                </p>
                
                <p className="text-primary-600 text-sm font-medium">
                  {branch.metro}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-bg text-white py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">
            Запишитесь на удобное время
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Выберите подходящее расписание и начните обучение уже на этой неделе
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <Link href="/booking" className="btn-primary">
              Записаться на занятия
            </Link>
            <Link href="/contacts" className="btn-secondary">
              Задать вопрос
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SchedulePage 