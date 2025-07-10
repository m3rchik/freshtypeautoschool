# 🚗 FreshType - Сайт Автошколы

Современный веб-сайт для автошколы FreshType с полным функционалом для онлайн-записи, информации о курсах и интеграцией с Telegram-ботом.

## ✨ Особенности

- 🎨 **Современный дизайн** - минималистичный и удобный интерфейс
- 📱 **Адаптивная верстка** - отлично работает на всех устройствах
- 🌙 **Темная тема** - переключение между светлой и темной темами
- ⚡ **Высокая производительность** - оптимизировано для быстрой загрузки
- 🔍 **SEO-оптимизация** - настроено для поисковых систем
- 🤖 **Интеграция с Telegram** - прямая связь с ботом автошколы
- 📊 **Аналитика** - Yandex.Metrika и Facebook Pixel

## 🛠 Технологический стек

- **Frontend**: Next.js 14, React 18, TypeScript
- **Стилизация**: Tailwind CSS, Headless UI
- **Иконки**: Lucide React
- **Анимации**: Framer Motion
- **Формы**: React Hook Form
- **SEO**: Next SEO
- **Шрифты**: Inter, Poppins

## 📋 Основные разделы

1. **Главная страница** - героическая секция с призывом к действию
2. **Категории обучения** - A, B, C, D, E категории
3. **Цены и пакеты** - подробные тарифные планы
4. **Расписание занятий** - удобный график обучения
5. **Инструкторы** - информация о преподавательском составе
6. **Автопарк** - фотографии учебных автомобилей
7. **Отзывы** - отзывы выпускников
8. **Контакты** - адреса филиалов и способы связи
9. **Быстрая запись** - форма онлайн-записи
10. **Блог** - полезные статьи о ПДД

## 🚀 Быстрый старт

### Установка зависимостей

```bash
npm install
# или
yarn install
# или
pnpm install
```

### Запуск в режиме разработки

```bash
npm run dev
# или
yarn dev
# или
pnpm dev
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере.

### Сборка для продакшена

```bash
npm run build
npm run start
```

## ⚙️ Настройка

### Переменные окружения

Создайте файл `.env.local` в корне проекта:

```env
# Сайт
NEXT_PUBLIC_SITE_URL=https://your-domain.com

# Telegram Bot
NEXT_PUBLIC_TELEGRAM_BOT_URL=https://t.me/your_bot

# Yandex Metrika
NEXT_PUBLIC_YANDEX_METRIKA_ID=your_metrika_id

# Facebook Pixel
NEXT_PUBLIC_FACEBOOK_PIXEL_ID=your_pixel_id

# Google Analytics (опционально)
NEXT_PUBLIC_GA_ID=your_ga_id

# Email для форм
NEXT_PUBLIC_CONTACT_EMAIL=info@your-domain.com
```

### Настройка мета-тегов

Отредактируйте файл `app/layout.tsx` для настройки:

- Title и description сайта
- Open Graph данные
- Canonical URL
- Verification коды для поисковых систем

### Настройка цветовой схемы

Цвета настраиваются в `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Основные цвета бренда
  },
  secondary: {
    // Дополнительные цвета
  },
  accent: {
    // Акцентные цвета
  }
}
```

## 📂 Структура проекта

```
freshtypeautoschool/
├── app/                    # Next.js app directory
│   ├── globals.css        # Глобальные стили
│   ├── layout.tsx         # Корневой layout
│   └── page.tsx           # Главная страница
├── components/            # React компоненты
│   ├── sections/         # Секции страниц
│   ├── Header.tsx        # Шапка сайта
│   ├── Footer.tsx        # Подвал сайта
│   ├── TelegramButton.tsx # Плавающая кнопка Telegram
│   └── ThemeProvider.tsx # Провайдер темы
├── public/               # Статические файлы
├── package.json          # Зависимости
├── tailwind.config.js    # Конфигурация Tailwind
├── tsconfig.json         # Конфигурация TypeScript
└── next.config.js        # Конфигурация Next.js
```

## 🔧 Кастомизация

### Добавление новых страниц

Создайте новые страницы в папке `app/`:

```
app/
├── categories/
│   └── page.tsx
├── pricing/
│   └── page.tsx
└── contacts/
    └── page.tsx
```

### Создание новых компонентов

```typescript
// components/NewComponent.tsx
'use client'

import { ComponentProps } from './types'

const NewComponent = ({ prop1, prop2 }: ComponentProps) => {
  return (
    <div className="custom-class">
      {/* Ваш контент */}
    </div>
  )
}

export default NewComponent
```

### Добавление анимаций

Используйте классы Tailwind или Framer Motion:

```typescript
import { motion } from 'framer-motion'

const AnimatedComponent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      Анимированный контент
    </motion.div>
  )
}
```

## 📊 SEO и аналитика

### Настройка robots.txt

Создайте файл `public/robots.txt`:

```
User-agent: *
Allow: /

Sitemap: https://your-domain.com/sitemap.xml
```

### Создание sitemap.xml

Добавьте в `app/sitemap.ts`:

```typescript
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://your-domain.com',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    // Добавьте остальные страницы
  ]
}
```

## 🚀 Деплой

### Vercel (рекомендуется)

1. Загрузите код на GitHub
2. Подключите репозиторий к Vercel
3. Настройте переменные окружения
4. Деплой произойдет автоматически

### Другие платформы

- **Netlify**: Поддерживает Next.js
- **Railway**: Простой деплой с Git
- **DigitalOcean**: App Platform
- **AWS**: Amplify или EC2

## 🔒 Безопасность

Проект включает базовые настройки безопасности:

- CSP headers
- XSS protection
- Content type validation
- Frame options

## 📝 Разработка

### Добавление новых зависимостей

```bash
npm install package-name
npm install -D package-name  # для dev-зависимостей
```

### Линтинг и форматирование

```bash
npm run lint        # Проверка кода
npm run lint:fix    # Автоисправление
```

### Тестирование

```bash
npm test           # Запуск тестов
npm run test:watch # Тесты в watch режиме
```

## 🐛 Решение проблем

### Ошибки TypeScript

Большинство ошибок TypeScript исчезнут после установки зависимостей:

```bash
npm install
```

### Проблемы со стилями

Убедитесь, что PostCSS и Tailwind настроены правильно:

```bash
npm run build  # Проверка сборки
```

### Ошибки сборки

Очистите кэш Next.js:

```bash
rm -rf .next
npm run dev
```

## 🤝 Участие в разработке

1. Форкните репозиторий
2. Создайте ветку для функции: `git checkout -b feature/new-feature`
3. Внесите изменения: `git commit -am 'Add new feature'`
4. Загрузите в ветку: `git push origin feature/new-feature`
5. Создайте Pull Request

## 📄 Лицензия

MIT License. Подробности в файле LICENSE.

## 📞 Поддержка

- Email: info@freshtype.ru
- Telegram: [@freshtype_autoschool_bot](https://t.me/freshtype_autoschool_bot)
- Телефон: +7 (999) 123-45-67

---

Сделано с ❤️ для автошколы FreshType 