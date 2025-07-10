# 🚀 Быстрый запуск FreshType AutoSchool

## Установка и запуск

1. **Установите зависимости:**
   ```bash
   npm install
   ```

2. **Запустите проект:**
   ```bash
   npm run dev
   ```

3. **Откройте в браузере:**
   ```
   http://localhost:3000
   ```

## Важные файлы для настройки

### 🎨 Цвета и стили
- `tailwind.config.js` - настройка цветовой схемы
- `app/globals.css` - глобальные стили

### 📱 Контент
- `app/layout.tsx` - мета-теги, title, описание
- `components/sections/` - основной контент страниц

### ⚙️ Настройки
- `next.config.js` - конфигурация Next.js
- `.env.local` - переменные окружения (создайте из `.env.example`)

## Основные команды

```bash
npm run dev      # Запуск в режиме разработки
npm run build    # Сборка для продакшена
npm run start    # Запуск собранного проекта
npm run lint     # Проверка кода
```

## Структура

```
├── app/                 # Страницы Next.js
├── components/          # React компоненты
│   ├── sections/       # Секции страниц
│   ├── Header.tsx      # Шапка
│   ├── Footer.tsx      # Подвал
│   └── ...
├── public/             # Статические файлы
└── ...
```

## Кастомизация

1. **Логотип:** замените в `components/Header.tsx` и `components/Footer.tsx`
2. **Цвета:** настройте в `tailwind.config.js`
3. **Контент:** отредактируйте файлы в `components/sections/`
4. **Контакты:** обновите в `components/sections/ContactSection.tsx`
5. **Telegram-бот:** ссылку в `components/TelegramButton.tsx`

## Быстрые изменения

### Изменить название автошколы
Найдите и замените "FreshType" на ваше название в:
- `app/layout.tsx`
- `components/Header.tsx`
- `components/Footer.tsx`
- `README.md`

### Изменить контакты
Обновите в:
- `components/Header.tsx` (топ-бар)
- `components/sections/ContactSection.tsx`
- `components/TelegramButton.tsx`
- `app/layout.tsx` (structured data)

### Изменить цены
Отредактируйте массив `plans` в `components/sections/PricingSection.tsx`

### Добавить/изменить категории
Отредактируйте массив `categories` в `components/sections/CategoriesSection.tsx`

## Деплой

### Vercel (1 клик)
1. Загрузите на GitHub
2. Подключите к Vercel
3. Готово!

### Другие платформы
- Netlify
- Railway  
- DigitalOcean App Platform
- AWS Amplify

## Поддержка

Если возникают ошибки после установки зависимостей:

1. Очистите кэш:
   ```bash
   rm -rf .next node_modules package-lock.json
   npm install
   ```

2. Проверьте версию Node.js (нужна 18+):
   ```bash
   node --version
   ```

3. Убедитесь, что все зависимости установлены:
   ```bash
   npm list
   ```

---

✅ **Готово!** Ваш сайт автошколы запущен и готов к кастомизации. 