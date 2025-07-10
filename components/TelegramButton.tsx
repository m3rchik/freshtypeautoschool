'use client'

import { useState, useEffect } from 'react'
import { MessageCircle, X } from 'lucide-react'

const TelegramButton = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleTelegramClick = () => {
    // Замените на реальную ссылку на ваш Telegram-бот
    window.open('https://t.me/freshtype_autoschool_bot', '_blank')
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Основная кнопка */}
      <div className="relative">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-14 h-14 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center animate-bounce-gentle"
          aria-label="Открыть меню связи"
        >
          {isExpanded ? <X size={24} /> : <MessageCircle size={24} />}
        </button>

        {/* Расширенное меню */}
        {isExpanded && (
          <div className="absolute bottom-16 right-0 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 p-4 w-80 animate-slide-up">
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900 dark:text-white">
                Связаться с нами
              </h3>
              
              <div className="space-y-3">
                <button
                  onClick={handleTelegramClick}
                  className="w-full flex items-center space-x-3 p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
                >
                  <MessageCircle size={20} />
                  <div className="text-left">
                    <div className="font-medium">Telegram-бот</div>
                    <div className="text-sm opacity-90">Запись и консультации</div>
                  </div>
                </button>

                <a
                  href="tel:+79991234567"
                  className="w-full flex items-center space-x-3 p-3 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors"
                >
                  <div className="w-5 h-5 flex items-center justify-center">
                    📞
                  </div>
                  <div className="text-left">
                    <div className="font-medium">Позвонить</div>
                    <div className="text-sm opacity-90">+7 (999) 123-45-67</div>
                  </div>
                </a>

                <a
                  href="mailto:info@freshtype.ru"
                  className="w-full flex items-center space-x-3 p-3 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
                >
                  <div className="w-5 h-5 flex items-center justify-center">
                    ✉️
                  </div>
                  <div className="text-left">
                    <div className="font-medium">Написать email</div>
                    <div className="text-sm opacity-90">info@freshtype.ru</div>
                  </div>
                </a>
              </div>

              <div className="pt-3 border-t border-gray-200 dark:border-gray-600">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Мы ответим в течение 15 минут в рабочее время
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default TelegramButton 