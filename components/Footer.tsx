import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react'
import VkIcon from './icons/VkIcon'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* О компании */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">F</span>
              </div>
              <div>
                <div className="text-xl font-bold">FreshType</div>
                <div className="text-sm text-gray-400">Автошкола</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Современная автошкола с профессиональными инструкторами и новым автопарком. 
              Качественное обучение вождению по всем категориям.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com/freshtypeauto" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                title="Мы в Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://instagram.com/freshtypeauto" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                title="Мы в Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://vk.com/freshtypeauto" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors" 
                title="Мы ВКонтакте"
              >
                <VkIcon size={20} />
              </a>
            </div>
          </div>

          {/* Навигация */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Навигация</h3>
            <ul className="space-y-3">
              <li><Link href="/categories" className="text-gray-300 hover:text-primary-400 transition-colors">Категории обучения</Link></li>
              <li><Link href="/pricing" className="text-gray-300 hover:text-primary-400 transition-colors">Цены и пакеты</Link></li>
              <li><Link href="/schedule" className="text-gray-300 hover:text-primary-400 transition-colors">Расписание</Link></li>
              <li><Link href="/instructors" className="text-gray-300 hover:text-primary-400 transition-colors">Инструкторы</Link></li>
              <li><Link href="/fleet" className="text-gray-300 hover:text-primary-400 transition-colors">Автопарк</Link></li>
              <li><Link href="/reviews" className="text-gray-300 hover:text-primary-400 transition-colors">Отзывы</Link></li>
            </ul>
          </div>

          {/* Услуги */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Услуги</h3>
            <ul className="space-y-3">
              <li><Link href="/category-a" className="text-gray-300 hover:text-primary-400 transition-colors">Категория A (мотоцикл)</Link></li>
              <li><Link href="/category-b" className="text-gray-300 hover:text-primary-400 transition-colors">Категория B (легковой)</Link></li>
              <li><Link href="/category-c" className="text-gray-300 hover:text-primary-400 transition-colors">Категория C (грузовой)</Link></li>
              <li><Link href="/online-tests" className="text-gray-300 hover:text-primary-400 transition-colors">Онлайн тесты ПДД</Link></li>
              <li><Link href="/account" className="text-gray-300 hover:text-primary-400 transition-colors">Личный кабинет</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-primary-400 transition-colors">Полезные статьи</Link></li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Контакты</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-primary-400" />
                <span className="text-gray-300">+7 (999) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-primary-400" />
                <span className="text-gray-300">info@freshtype.ru</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-primary-400" />
                <span className="text-gray-300">г. Москва, ул. Примерная, д. 1</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock size={18} className="text-primary-400" />
                <div className="text-gray-300">
                  <div>Пн-Пт: 9:00-20:00</div>
                  <div>Сб: 10:00-18:00</div>
                  <div>Вс: выходной</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Документы и лицензии */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap items-center space-x-6 text-sm text-gray-400">
              <Link href="/license" className="hover:text-primary-400 transition-colors">
                Лицензия на образовательную деятельность
              </Link>
              <Link href="/documents" className="hover:text-primary-400 transition-colors">
                Документы автошколы
              </Link>
              <Link href="/privacy" className="hover:text-primary-400 transition-colors">
                Политика конфиденциальности
              </Link>
              <Link href="/terms" className="hover:text-primary-400 transition-colors">
                Пользовательское соглашение
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} FreshType Автошкола. Все права защищены.</p>
          <p className="mt-2 text-sm">
            Лицензия на осуществление образовательной деятельности № 123456 от 01.01.2023
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 