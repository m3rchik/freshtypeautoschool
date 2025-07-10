'use client'

import { useState } from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import { FileText, Download, Eye, Award, Calendar, Check } from 'lucide-react'

// Убираем export metadata так как компонент теперь клиентский
// export const metadata: Metadata = {
//   title: 'Документы автошколы | FreshType Автошкола',
//   description: 'Официальные документы автошколы FreshType: лицензии, сертификаты, учебные программы, справочные материалы.',
//   keywords: 'документы автошколы, лицензии, сертификаты, учебные программы, справочники',
// }

const DocumentsPage = () => {
  const [downloadingDoc, setDownloadingDoc] = useState<string | null>(null)

  // Обработчик скачивания документа
  const handleDownload = async (docName: string, docType: string) => {
    setDownloadingDoc(docName)
    
    try {
      // Имитация загрузки файла
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // В реальном проекте здесь был бы запрос к серверу для скачивания файла
      alert(`Скачивание документа "${docName}" начато. В реальном проекте файл будет загружен.`)
      
      // Можно создать заглушку для скачивания
      const link = document.createElement('a')
      link.href = '#'
      link.download = `${docName}.${docType.toLowerCase()}`
      document.body.appendChild(link)
      // link.click() // Раскомментировать для реального скачивания
      document.body.removeChild(link)
      
    } catch (error) {
      console.error('Ошибка при скачивании:', error)
      alert('Произошла ошибка при скачивании документа')
    } finally {
      setDownloadingDoc(null)
    }
  }

  // Обработчик просмотра документа
  const handlePreview = (docName: string) => {
    // В реальном проекте здесь была бы ссылка на PDF-viewer или модальное окно
    alert(`Открытие предварительного просмотра для "${docName}". В реальном проекте откроется PDF-viewer.`)
  }

  const documentCategories = [
    {
      title: 'Учредительные документы',
      icon: Award,
      color: 'blue',
      documents: [
        {
          id: 'charter',
          name: 'Устав ООО "FreshType Автошкола"',
          type: 'PDF',
          size: '2.3 МБ',
          date: '15.03.2023',
          description: 'Учредительный документ организации'
        },
        {
          id: 'registration',
          name: 'Свидетельство о государственной регистрации',
          type: 'PDF',
          size: '1.1 МБ',
          date: '10.03.2023',
          description: 'ОГРН 1127746123456'
        },
        {
          id: 'tax-certificate',
          name: 'Справка о постановке на налоговый учет',
          type: 'PDF',
          size: '0.8 МБ',
          date: '12.03.2023',
          description: 'ИНН 7701234567'
        }
      ]
    },
    {
      title: 'Лицензии и разрешения',
      icon: FileText,
      color: 'green',
      documents: [
        {
          id: 'education-license',
          name: 'Лицензия на образовательную деятельность',
          type: 'PDF',
          size: '1.8 МБ',
          date: '15.03.2023',
          description: '№ 041221, выдана Департаментом образования г. Москвы'
        },
        {
          id: 'accreditation',
          name: 'Свидетельство о государственной аккредитации',
          type: 'PDF',
          size: '1.5 МБ',
          date: '20.03.2023',
          description: '№ 004852, действует до 20.03.2029'
        },
        {
          id: 'fire-safety',
          name: 'Заключение о соответствии требованиям пожарной безопасности',
          type: 'PDF',
          size: '2.1 МБ',
          date: '25.03.2023',
          description: 'МЧС России по г. Москве'
        },
        {
          id: 'sanitary',
          name: 'Санитарно-эпидемиологическое заключение',
          type: 'PDF',
          size: '1.3 МБ',
          date: '28.03.2023',
          description: 'Роспотребнадзор по г. Москве'
        }
      ]
    },
    {
      title: 'Учебные программы',
      icon: FileText,
      color: 'purple',
      documents: [
        {
          id: 'program-a',
          name: 'Программа обучения категории A',
          type: 'PDF',
          size: '5.2 МБ',
          date: '01.04.2023',
          description: 'Полная программа обучения мотоциклистов, 130 часов'
        },
        {
          id: 'program-b',
          name: 'Программа обучения категории B',
          type: 'PDF',
          size: '6.8 МБ',
          date: '01.04.2023',
          description: 'Полная программа обучения легковых ТС, 190 часов'
        },
        {
          id: 'program-c',
          name: 'Программа обучения категории C',
          type: 'PDF',
          size: '7.1 МБ',
          date: '01.04.2023',
          description: 'Полная программа обучения грузовых ТС, 252 часа'
        },
        {
          id: 'program-d',
          name: 'Программа обучения категории D',
          type: 'PDF',
          size: '7.3 МБ',
          date: '01.04.2023',
          description: 'Полная программа обучения автобусов, 252 часа'
        }
      ]
    },
    {
      title: 'Справочные материалы',
      icon: FileText,
      color: 'orange',
      documents: [
        {
          id: 'pdd-2024',
          name: 'Правила дорожного движения РФ 2024',
          type: 'PDF',
          size: '12.5 МБ',
          date: '01.01.2024',
          description: 'Актуальная редакция ПДД с изменениями'
        },
        {
          id: 'tickets-ab',
          name: 'Билеты ПДД категории AB 2024',
          type: 'PDF',
          size: '8.9 МБ',
          date: '01.01.2024',
          description: '40 экзаменационных билетов с ответами'
        },
        {
          id: 'tickets-cd',
          name: 'Билеты ПДД категории CD 2024',
          type: 'PDF',
          size: '9.1 МБ',
          date: '01.01.2024',
          description: '40 экзаменационных билетов с ответами'
        },
        {
          id: 'methods',
          name: 'Методические рекомендации по вождению',
          type: 'PDF',
          size: '4.2 МБ',
          date: '15.03.2024',
          description: 'Практические советы и упражнения'
        }
      ]
    }
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400',
      green: 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400',
      purple: 'bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-400',
      orange: 'bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-400'
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Заголовок */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900 rounded-full text-blue-600 dark:text-blue-400 mb-6">
              <FileText className="w-5 h-5 mr-2" />
              <span className="font-semibold">Официальные документы</span>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Документы автошколы
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Полный комплект официальных документов, лицензий, учебных программ 
              и справочных материалов автошколы FreshType.
            </p>
          </div>

          {/* Важное уведомление */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-2xl p-6 mb-12">
            <div className="flex items-start space-x-4">
              <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Check className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                  Важная информация
                </h3>
                <p className="text-yellow-700 dark:text-yellow-300 text-sm">
                  Все документы актуальны и соответствуют требованиям законодательства РФ. 
                  Оригиналы документов доступны для ознакомления в офисе автошколы по адресу: 
                  г. Москва, ул. Примерная, д. 1.
                </p>
              </div>
            </div>
          </div>

          {/* Категории документов */}
          <div className="space-y-12">
            {documentCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                <div className="flex items-center space-x-4 mb-8">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getColorClasses(category.color)}`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.documents.map((document, docIndex) => (
                    <div key={docIndex} className="border border-gray-200 dark:border-gray-600 rounded-xl p-6 hover:shadow-md transition-shadow duration-200">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                            {document.name}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                            {document.description}
                          </p>
                          <div className="flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-400">
                            <div className="flex items-center space-x-1">
                              <FileText className="w-3 h-3" />
                              <span>{document.type}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <span>{document.size}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-3 h-3" />
                              <span>{document.date}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex space-x-3">
                        <button 
                          onClick={() => handleDownload(document.name, document.type)}
                          disabled={downloadingDoc === document.name}
                          className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200 inline-flex items-center justify-center space-x-2"
                        >
                          {downloadingDoc === document.name ? (
                            <>
                              <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                              <span>Скачивание...</span>
                            </>
                          ) : (
                            <>
                              <Download className="w-4 h-4" />
                              <span>Скачать</span>
                            </>
                          )}
                        </button>
                        <button 
                          onClick={() => handlePreview(document.name)}
                          className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200 inline-flex items-center justify-center space-x-2"
                        >
                          <Eye className="w-4 h-4" />
                          <span>Просмотр</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Контактная информация */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center mt-16">
            <h2 className="text-2xl font-bold mb-4">
              Нужна помощь с документами?
            </h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Если у вас возникли вопросы по документам или вам нужны заверенные копии, 
              обращайтесь в наш отдел документооборота
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
              <a href="tel:+79991234567" className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors duration-300">
                Позвонить: +7 (999) 123-45-67
              </a>
              <a href="mailto:documents@freshtype.ru" className="border border-white text-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-lg font-medium transition-colors duration-300">
                documents@freshtype.ru
              </a>
            </div>
            
            <div className="mt-8 pt-6 border-t border-blue-500">
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center text-sm text-blue-100">
                <div>Режим работы: Пн-Пт 9:00-18:00</div>
                <div>Адрес: г. Москва, ул. Примерная, д. 1</div>
                <div>Ответственный: Петрова М.И.</div>
              </div>
            </div>
          </div>

          {/* Связанные страницы */}
          <div className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/license" className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <Award className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Лицензия
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Подробная информация о лицензии на образовательную деятельность
                </p>
              </Link>
              
              <Link href="/privacy" className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <FileText className="w-8 h-8 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Конфиденциальность
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Политика защиты и обработки персональных данных
                </p>
              </Link>
              
              <Link href="/terms" className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <Check className="w-8 h-8 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Соглашение
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Пользовательское соглашение и условия обучения
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DocumentsPage 