'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, Star, Users, Award, Clock } from 'lucide-react'

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const heroSlides = [
    {
      title: "Получи права за 2 месяца!",
      subtitle: "Современная автошкола с профессиональными инструкторами",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&h=600&fit=crop&crop=center",
      highlight: "Скидка 20% до конца месяца"
    },
    {
      title: "Новый автопарк 2024 года",
      subtitle: "Обучение на современных автомобилях с АКПП и МКПП",
      image: "https://images.unsplash.com/photo-1494976049143-1334ffe27399?w=1200&h=600&fit=crop&crop=center",
      highlight: "Бесплатное первое занятие"
    },
    {
      title: "100% сдача с первого раза",
      subtitle: "Уникальная методика обучения и подготовки к экзаменам",
      image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=1200&h=600&fit=crop&crop=center",
      highlight: "Гарантия возврата денег"
    }
  ]

  useEffect(() => {
    // Preload images
    heroSlides.forEach((slide) => {
      const img = new Image()
      img.src = slide.image
    })

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [heroSlides.length])

  const stats = [
    { icon: Users, value: "5000+", label: "Выпускников" },
    { icon: Award, value: "98%", label: "Сдача с 1-го раза" },
    { icon: Clock, value: "15", label: "Лет опыта" },
    { icon: Star, value: "4.9", label: "Рейтинг" }
  ]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Фоновые слайды */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ 
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
          </div>
        ))}
      </div>

      {/* Контент */}
      <div className="relative z-10 container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Текстовая часть */}
          <div className="text-white">
            {/* Бейдж */}
            <div className="inline-flex items-center px-4 py-2 bg-primary-600/20 backdrop-blur-sm border border-primary-400/30 rounded-full text-primary-300 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-primary-400 rounded-full mr-2 animate-pulse" />
              {heroSlides[currentSlide].highlight}
            </div>

            {/* Заголовок */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6 leading-tight">
              {heroSlides[currentSlide].title}
            </h1>

            {/* Подзаголовок */}
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              {heroSlides[currentSlide].subtitle}
            </p>

            {/* Преимущества */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent-400 rounded-full flex-shrink-0" />
                <span className="text-gray-200">Лицензированная автошкола</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent-400 rounded-full flex-shrink-0" />
                <span className="text-gray-200">Рассрочка 0% на 6 месяцев</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent-400 rounded-full flex-shrink-0" />
                <span className="text-gray-200">Telegram-бот для записи и поддержки</span>
              </div>
            </div>

            {/* Кнопки действий */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/booking" className="btn-primary inline-flex items-center justify-center space-x-2">
                <span>Записаться на обучение</span>
                <ArrowRight size={20} />
              </Link>
              <Link href="/pricing" className="btn-secondary inline-flex items-center justify-center">
                Узнать цены
              </Link>
            </div>
          </div>

          {/* Статистика */}
          <div className="lg:justify-self-end">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <stat.icon className="w-8 h-8 text-primary-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Индикаторы слайдов */}
        <div className="flex justify-center space-x-2 mt-12">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-primary-400 w-8' 
                  : 'bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Стрелка вниз */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}

export default HeroSection 