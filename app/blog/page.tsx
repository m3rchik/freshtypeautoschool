'use client'

import { useState } from 'react'
import { CalendarDays, Clock, User, Search, Filter } from 'lucide-react'

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('Все категории')
  const [searchQuery, setSearchQuery] = useState('')
  const [visiblePosts, setVisiblePosts] = useState(4)
  const [isLoadingMore, setIsLoadingMore] = useState(false)
  const [email, setEmail] = useState('')
  const [isSubscribing, setIsSubscribing] = useState(false)

  const featuredPost = {
    id: 1,
    title: "Новые правила сдачи экзамена в ГИБДД 2024",
    excerpt: "Рассказываем о всех изменениях в процедуре сдачи экзамена, которые вступили в силу в этом году...",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    date: "15 марта 2024",
    readTime: "5 мин",
    category: "Обучение",
    author: "Анна Петрова"
  };

  const recentPosts = [
    {
      id: 2,
      title: "Как побороть страх за рулем?",
      excerpt: "Практические советы для начинающих водителей...",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      date: "12 марта 2024",
      readTime: "3 мин",
      category: "Психология",
      author: "Михаил Иванов"
    },
    {
      id: 3,
      title: "Зимнее вождение: основы безопасности",
      excerpt: "Что нужно знать о езде в зимних условиях...",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      date: "8 марта 2024",
      readTime: "4 мин",
      category: "Безопасность",
      author: "Сергей Козлов"
    },
    {
      id: 4,
      title: "Выбор первого автомобиля",
      excerpt: "На что обратить внимание при покупке первой машины...",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      date: "5 марта 2024",
      readTime: "6 мин",
      category: "Покупка авто",
      author: "Елена Смирнова"
    }
  ];

  const categories = [
    { name: "Все категории", count: 24, active: activeCategory === "Все категории" },
    { name: "Обучение", count: 8, active: activeCategory === "Обучение" },
    { name: "ПДД", count: 6, active: activeCategory === "ПДД" },
    { name: "Безопасность", count: 5, active: activeCategory === "Безопасность" },
    { name: "Психология", count: 3, active: activeCategory === "Психология" },
    { name: "Покупка авто", count: 2, active: activeCategory === "Покупка авто" }
  ];

  const popularPosts = [
    { id: 5, title: "10 самых частых ошибок на экзамене", views: 15420 },
    { id: 6, title: "Парковка задним ходом: пошаговая инструкция", views: 12380 },
    { id: 7, title: "Что делать, если не сдал экзамен?", views: 9650 },
    { id: 8, title: "Как выбрать автошколу?", views: 8290 }
  ];

  // Обработчик загрузки дополнительных статей
  const handleLoadMore = async () => {
    setIsLoadingMore(true)
    
    try {
      // Имитация загрузки с сервера
      await new Promise(resolve => setTimeout(resolve, 1500))
      setVisiblePosts(prev => prev + 4)
    } catch (error) {
      console.error('Ошибка при загрузке статей:', error)
      alert('Произошла ошибка при загрузке статей')
    } finally {
      setIsLoadingMore(false)
    }
  }

  // Обработчик изменения категории
  const handleCategoryChange = (categoryName: string) => {
    setActiveCategory(categoryName)
    setVisiblePosts(4) // Сброс количества показываемых статей
    alert(`Фильтрация по категории: ${categoryName}. В реальном проекте здесь будет загрузка статей из выбранной категории.`)
  }

  // Обработчик подписки на новости
  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email) {
      alert('Пожалуйста, введите email')
      return
    }

    if (!email.includes('@')) {
      alert('Пожалуйста, введите корректный email')
      return
    }

    setIsSubscribing(true)
    
    try {
      // Имитация отправки подписки
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      alert('Спасибо за подписку! Вы будете получать уведомления о новых статьях.')
      setEmail('')
      
    } catch (error) {
      console.error('Ошибка при подписке:', error)
      alert('Произошла ошибка при подписке')
    } finally {
      setIsSubscribing(false)
    }
  }

  // Обработчик поиска статей
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
    if (e.target.value) {
      alert(`Поиск по запросу: "${e.target.value}". В реальном проекте здесь будет реализован поиск.`)
    }
  }

  // Фильтрация статей (в реальном проекте здесь была бы логика фильтрации)
  const filteredPosts = recentPosts.slice(0, visiblePosts)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Блог автошколы FreshType
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Полезные статьи о вождении, ПДД и всём, что связано с автомобилями
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Featured Post */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden mb-8">
              <div className="relative h-64 md:h-80">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <span className="inline-block bg-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-3">
                    {featuredPost.category}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-200 mb-4">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-300">
                    <CalendarDays className="h-4 w-4 mr-1" />
                    <span className="mr-4">{featuredPost.date}</span>
                    <Clock className="h-4 w-4 mr-1" />
                    <span className="mr-4">{featuredPost.readTime}</span>
                    <User className="h-4 w-4 mr-1" />
                    <span>{featuredPost.author}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Search */}
            <div className="relative mb-8">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Поиск статей..."
                value={searchQuery}
                onChange={handleSearch}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              />
            </div>

            {/* Recent Posts Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {filteredPosts.map((post) => (
                <article key={post.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-48">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-3 left-3 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 hover:text-blue-600 transition-colors cursor-pointer">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <CalendarDays className="h-4 w-4 mr-1" />
                      <span className="mr-4">{post.date}</span>
                      <Clock className="h-4 w-4 mr-1" />
                      <span className="mr-4">{post.readTime}</span>
                      <User className="h-4 w-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More Button */}
            {recentPosts.length > visiblePosts && (
              <div className="text-center mt-8">
                <button 
                  onClick={handleLoadMore}
                  disabled={isLoadingMore}
                  className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300 inline-flex items-center space-x-2"
                >
                  {isLoadingMore ? (
                    <>
                      <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
                      <span>Загрузка...</span>
                    </>
                  ) : (
                    <span>Загрузить ещё статьи</span>
                  )}
                </button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Categories */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Категории
              </h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => handleCategoryChange(category.name)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors duration-300 ${
                      category.active 
                        ? 'bg-blue-600 text-white' 
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    <span>{category.name}</span>
                    <span className="float-right">{category.count}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Popular Posts */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Популярные статьи
              </h3>
              <div className="space-y-4">
                {popularPosts.map((post) => (
                  <div key={post.id} className="flex items-start space-x-3 group cursor-pointer">
                    <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2 group-hover:bg-blue-700 transition-colors" />
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors line-clamp-2">
                        {post.title}
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        {post.views.toLocaleString()} просмотров
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg p-6 text-white">
              <h3 className="text-xl font-bold mb-2">
                Подписка на новости
              </h3>
              <p className="text-blue-100 mb-4">
                Получайте новые статьи первыми!
              </p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Ваш email"
                  className="w-full px-4 py-2 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  disabled={isSubscribing}
                  className="w-full bg-white text-blue-600 font-medium py-2 rounded-lg hover:bg-gray-100 disabled:bg-gray-100 disabled:opacity-50 transition-colors duration-300"
                >
                  {isSubscribing ? 'Подписываемся...' : 'Подписаться'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 