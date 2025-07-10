'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FileText, Award, Check, Download } from 'lucide-react'

const LicensePage = () => {
  const [downloadingLicense, setDownloadingLicense] = useState<string | null>(null)

  // Обработчик скачивания лицензии
  const handleDownloadLicense = async (licenseType: string) => {
    setDownloadingLicense(licenseType)
    
    try {
      // Имитация загрузки файла
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      alert(`Скачивание документа "${licenseType}" начато. В реальном проекте файл будет загружен.`)
      
    } catch (error) {
      console.error('Ошибка при скачивании:', error)
      alert('Произошла ошибка при скачивании документа')
    } finally {
      setDownloadingLicense(null)
    }
  }

  // Обработчик запроса копий
  const handleRequestCopies = () => {
    const subject = 'Запрос копий документов автошколы FreshType'
    const body = `Здравствуйте!

Прошу предоставить заверенные копии следующих документов автошколы FreshType:
- Лицензия на образовательную деятельность
- Свидетельство о государственной аккредитации
- Устав автошколы

С уважением,
[Ваше имя]
[Ваш телефон]`

    const mailtoLink = `mailto:documents@freshtype.ru?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.open(mailtoLink, '_blank')
  }

  const licenses = [
    {
      type: 'Лицензия на образовательную деятельность',
      number: '№ 041221 от 15.03.2023',
      issuer: 'Департамент образования города Москвы',
      validUntil: 'Бессрочно',
      scope: 'Дополнительное профессиональное образование взрослых по программам профессиональной подготовки водителей транспортных средств'
    },
    {
      type: 'Свидетельство о государственной аккредитации',
      number: '№ 004852 от 20.03.2023',
      issuer: 'Федеральная служба по надзору в сфере образования и науки',
      validUntil: '20.03.2029',
      scope: 'Дополнительное профессиональное образование'
    }
  ]

  const documents = [
    'Устав автошколы',
    'Свидетельство о государственной регистрации',
    'Справка о постановке на налоговый учет',
    'Лицензия на образовательную деятельность',
    'Свидетельство о государственной аккредитации',
    'Заключение о соответствии объекта защиты требованиям пожарной безопасности',
    'Санитарно-эпидемиологическое заключение'
  ]

  const programs = [
    {
      category: 'Категория A',
      description: 'Мотоциклы',
      hours: '130 часов'
    },
    {
      category: 'Категория B',
      description: 'Легковые автомобили',
      hours: '190 часов'
    },
    {
      category: 'Категория C',
      description: 'Грузовые автомобили',
      hours: '252 часа'
    },
    {
      category: 'Категория D',
      description: 'Автобусы',
      hours: '252 часа'
    },
    {
      category: 'Категория CE',
      description: 'Составы транспортных средств',
      hours: '32 часа'
    },
    {
      category: 'Категория DE',
      description: 'Составы с автобусом',
      hours: '32 часа'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Заголовок */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900 rounded-full text-blue-600 dark:text-blue-400 mb-6">
              <FileText className="w-5 h-5 mr-2" />
              <span className="font-semibold">Лицензии и документы</span>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Лицензия на образовательную деятельность
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Автошкола FreshType имеет все необходимые лицензии и разрешения для осуществления 
              образовательной деятельности по подготовке водителей транспортных средств.
            </p>
          </div>

          {/* Основные лицензии */}
          <div className="space-y-8 mb-16">
            {licenses.map((license, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {license.type}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <div className="space-y-3">
                          <div>
                            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Номер документа:</span>
                            <div className="font-semibold text-gray-900 dark:text-white">{license.number}</div>
                          </div>
                          <div>
                            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Выдан:</span>
                            <div className="text-gray-700 dark:text-gray-300">{license.issuer}</div>
                          </div>
                          <div>
                            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Действует до:</span>
                            <div className="font-semibold text-green-600">{license.validUntil}</div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Область применения:</span>
                        <div className="text-gray-700 dark:text-gray-300 mt-1">{license.scope}</div>
                      </div>
                    </div>
                    <button 
                      onClick={() => handleDownloadLicense(license.type)}
                      disabled={downloadingLicense === license.type}
                      className="mt-6 inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
                    >
                      {downloadingLicense === license.type ? (
                        <>
                          <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
                          <span>Загрузка...</span>
                        </>
                      ) : (
                        <>
                          <Download className="w-5 h-5" />
                          <span>Скачать копию</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Лицензированные программы */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Лицензированные программы обучения
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {programs.map((program, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <div className="flex items-center space-x-3 mb-4">
                    <Check className="w-5 h-5 text-green-500" />
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {program.category}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    {program.description}
                  </p>
                  <div className="text-sm font-medium text-blue-600">
                    {program.hours}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Документы */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Учредительные документы
            </h2>
            
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {documents.map((document, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                    <FileText className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{document}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-600 text-center">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Все документы доступны для ознакомления в офисе автошколы
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
                  <Link href="/contacts" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300">
                    Адреса офисов
                  </Link>
                  <button 
                    onClick={handleRequestCopies}
                    className="border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-6 py-3 rounded-lg font-medium transition-colors duration-300"
                  >
                    Запросить копии
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Контактная информация */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">
              Вопросы о лицензии и документах?
            </h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Обращайтесь в наш отдел по работе с документами для получения подробной информации
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
              <a href="tel:+79991234567" className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors duration-300">
                Позвонить: +7 (999) 123-45-67
              </a>
              <a href="mailto:documents@freshtype.ru" className="border border-white text-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-lg font-medium transition-colors duration-300">
                documents@freshtype.ru
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LicensePage 