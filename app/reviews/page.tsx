'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Star, Quote, Users, Award, ThumbsUp, MessageCircle, User, Trophy, Heart, CheckCircle } from 'lucide-react'

const ReviewsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [formRating, setFormRating] = useState(0)
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    review: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [reviewsToShow, setReviewsToShow] = useState(6)

  const reviews = [
    {
      name: 'Анна Петрова',
      age: 24,
      course: 'Категория B (АКПП)',
      instructor: 'Иванов А.С.',
      rating: 5,
      date: '15 ноября 2024',
      text: 'Отличная автошкола! Сдала экзамен с первого раза. Инструктор Алексей Сергеевич очень терпеливый и профессиональный. Объяснял всё доступно, занятия проходили в спокойной обстановке. Рекомендую всем!',
      avatar: '/avatars/anna.jpg',
      verified: true,
      helpful: 24
    },
    {
      name: 'Михаил Козлов',
      age: 32,
      course: 'Категория B (МКПП)',
      instructor: 'Петрова Е.В.',
      rating: 5,
      date: '8 ноября 2024',
      text: 'Быстро и качественно прошёл обучение. Очень понравился подход инструктора Елены Викторовны - всегда готова объяснить непонятные моменты. Автомобиль новый, в отличном состоянии. Цена оправдана качеством.',
      avatar: '/avatars/mikhail.jpg',
      verified: true,
      helpful: 18
    },
    {
      name: 'Елена Сидорова',
      age: 28,
      course: 'Категория B (АКПП)',
      instructor: 'Сидоров М.А.',
      rating: 5,
      date: '2 ноября 2024',
      text: 'Прошла обучение в FreshType и очень довольна! Михаил Александрович - золотой инструктор, научил всем тонкостям вождения. Теоретические занятия были интересными, материал подавался структурированно.',
      avatar: '/avatars/elena.jpg',
      verified: true,
      helpful: 31
    },
    {
      name: 'Дмитрий Волков',
      age: 19,
      course: 'Категория B (МКПП)',
      instructor: 'Николаева О.П.',
      rating: 4,
      date: '25 октября 2024',
      text: 'Хорошая автошкола для новичков. Ольга Петровна очень терпеливая, помогла преодолеть страх вождения. Единственный минус - иногда приходилось ждать свободного времени для записи на практику.',
      avatar: '/avatars/dmitry.jpg',
      verified: true,
      helpful: 12
    },
    {
      name: 'Мария Соколова',
      age: 35,
      course: 'Категория B (АКПП)',
      instructor: 'Козлова А.Д.',
      rating: 5,
      date: '20 октября 2024',
      text: 'Обучалась в возрасте 35 лет, было очень волнительно. Анна Дмитриевна сразу успокоила, создала комфортную атмосферу. Заниматься было одно удовольствие! Сдала все экзамены с первого раза.',
      avatar: '/avatars/maria.jpg',
      verified: true,
      helpful: 27
    },
    {
      name: 'Алексей Морозов',
      age: 26,
      course: 'Категория A',
      instructor: 'Козлова А.Д.',
      rating: 5,
      date: '15 октября 2024',
      text: 'Получал права на мотоцикл. Анна Дмитриевна - профессионал своего дела! Научила всем основам безопасной езды на мотоцикле. Экипировка предоставляется, мотоциклы в отличном состоянии.',
      avatar: '/avatars/alexey.jpg',
      verified: true,
      helpful: 19
    },
    {
      name: 'Ольга Кузнецова',
      age: 22,
      course: 'Категория B (МКПП)',
      instructor: 'Волков Д.И.',
      rating: 5,
      date: '10 октября 2024',
      text: 'Дмитрий Иванович - настоящий профессионал! 20 лет опыта чувствуется в каждом занятии. Благодаря его методике быстро освоила механику. Очень рекомендую эту автошколу!',
      avatar: '/avatars/olga.jpg',
      verified: true,
      helpful: 22
    },
    {
      name: 'Игорь Лебедев',
      age: 41,
      course: 'Категория C',
      instructor: 'Сидоров М.А.',
      rating: 5,
      date: '5 октября 2024',
      text: 'Получал категорию C для работы. Михаил Александрович обучил всем тонкостям управления грузовиком. Профессиональный подход, современная техника. Рекомендую для коммерческого обучения.',
      avatar: '/avatars/igor.jpg',
      verified: true,
      helpful: 16
    }
  ]

  const stats = [
    { icon: Star, value: '4.9', label: 'Средний рейтинг' },
    { icon: Users, value: '1,250+', label: 'Отзывов' },
    { icon: Award, value: '98%', label: 'Положительных' },
    { icon: ThumbsUp, value: '95%', label: 'Рекомендуют друзьям' }
  ]

  const categories = [
    { id: 'all', name: 'Все отзывы', count: 47, active: activeCategory === 'all' },
    { id: 'a', name: 'Категория A', count: 8, active: activeCategory === 'a' },
    { id: 'b', name: 'Категория B', count: 25, active: activeCategory === 'b' },
    { id: 'c', name: 'Категория C', count: 10, active: activeCategory === 'c' },
    { id: 'd', name: 'Категория D', count: 4, active: activeCategory === 'd' }
  ]

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId)
    setReviewsToShow(6) // Сброс количества показываемых отзывов
  }

  const handleLoadMore = () => {
    setReviewsToShow(prev => prev + 6)
  }

  const handleLike = (reviewIndex: number) => {
    alert(`Отзыв отмечен как полезный! В реальном проекте будет добавлен лайк.`)
  }

  const handleReply = (reviewIndex: number, reviewerName: string) => {
    alert(`Открытие формы ответа на отзыв от ${reviewerName}. В реальном проекте откроется модальное окно.`)
  }

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name || !formData.category || !formData.review || formRating === 0) {
      alert('Пожалуйста, заполните все поля и поставьте оценку')
      return
    }

    setIsSubmitting(true)
    
    try {
      // Имитация отправки отзыва
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      alert('Спасибо за ваш отзыв! Он будет опубликован после модерации.')
      
      // Сброс формы
      setFormData({ name: '', category: '', review: '' })
      setFormRating(0)
      
    } catch (error) {
      console.error('Ошибка при отправке отзыва:', error)
      alert('Произошла ошибка при отправке отзыва')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  // Фильтрация отзывов по категории
  const filteredReviews = activeCategory === 'all' 
    ? reviews 
    : reviews.filter(review => review.course.toLowerCase().includes(activeCategory))

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero секция */}
      <section className="gradient-bg text-white py-20">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white mb-6">
              <Star className="w-5 h-5 mr-2" />
              <span className="font-semibold">Отзывы наших учеников</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Более 5000 довольных выпускников
            </h1>
            
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Честные отзывы от наших учеников о качестве обучения, 
              инструкторах и процессе получения водительских прав
            </p>

            {/* Статистика отзывов */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Фильтр по категориям */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  category.active
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Отзывы */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredReviews.slice(0, reviewsToShow).map((review, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Заголовок отзыва */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center text-white font-bold">
                      {review.name.split(' ')[0][0]}{review.name.split(' ')[1][0]}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {review.name}
                      </h3>
                      <div className="text-gray-500 text-sm">
                        {review.age} лет • {review.course}
                      </div>
                    </div>
                  </div>
                  {review.verified && (
                    <div className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-2 py-1 rounded-full text-xs font-semibold">
                      ✓ Проверен
                    </div>
                  )}
                </div>

                {/* Рейтинг */}
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < review.rating
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>

                {/* Инструктор */}
                <div className="mb-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    Инструктор: <span className="font-semibold text-primary-600">{review.instructor}</span>
                  </div>
                </div>

                {/* Текст отзыва */}
                <div className="relative mb-4">
                  <Quote className="absolute top-0 left-0 w-6 h-6 text-primary-300 -mt-2 -ml-2" />
                  <p className="text-gray-700 dark:text-gray-300 pl-4">
                    {review.text}
                  </p>
                </div>

                {/* Полезность */}
                <div className="flex items-center justify-between pt-4 border-t">
                  <button 
                    onClick={() => handleLike(index)}
                    className="flex items-center space-x-2 text-gray-500 hover:text-primary-600 transition-colors"
                  >
                    <ThumbsUp className="w-4 h-4" />
                    <span className="text-sm">Полезно ({review.helpful})</span>
                  </button>
                  <button 
                    onClick={() => handleReply(index, review.name)}
                    className="flex items-center space-x-1 text-gray-500 hover:text-primary-600 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span className="text-sm">Ответить</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Кнопка загрузить еще */}
          {filteredReviews.length > reviewsToShow && (
            <div className="text-center mt-12">
              <button 
                onClick={handleLoadMore}
                className="btn-secondary"
              >
                Загрузить еще отзывы
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Форма добавления отзыва */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Поделитесь своим мнением
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Если вы прошли обучение в нашей автошколе, мы будем рады вашему отзыву
            </p>
            
            <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-8">
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Ваше имя
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="form-input"
                      placeholder="Введите ваше имя"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Категория обучения
                    </label>
                    <select 
                      value={formData.category}
                      onChange={(e) => handleInputChange('category', e.target.value)}
                      className="form-input"
                      required
                    >
                      <option value="">Выберите категорию</option>
                      <option value="a">Категория A</option>
                      <option value="b">Категория B</option>
                      <option value="c">Категория C</option>
                      <option value="d">Категория D</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Оценка
                  </label>
                  <div className="flex space-x-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setFormRating(star)}
                        className={`w-8 h-8 transition-colors ${
                          star <= formRating 
                            ? 'text-yellow-400' 
                            : 'text-gray-300 hover:text-yellow-400'
                        }`}
                      >
                        <Star className={`w-full h-full ${star <= formRating ? 'fill-current' : ''}`} />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Ваш отзыв
                  </label>
                  <textarea
                    rows={5}
                    value={formData.review}
                    onChange={(e) => handleInputChange('review', e.target.value)}
                    className="form-input"
                    placeholder="Расскажите о вашем опыте обучения в автошколе..."
                    required
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`btn-primary w-full ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Отправка...' : 'Добавить отзыв'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-bg text-white py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">
            Присоединяйтесь к нашим довольным ученикам
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Начните свое обучение в автошколе с высоким рейтингом и довольными выпускниками
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <Link href="/booking" className="btn-primary">
              Записаться на обучение
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

export default ReviewsPage 