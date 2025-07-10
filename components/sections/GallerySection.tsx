'use client'

import { useState } from 'react'
import { X, ChevronLeft, ChevronRight, MapPin, Users, Car, Award } from 'lucide-react'

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop',
      alt: 'Учебный класс автошколы',
      category: 'Классы',
      title: 'Современный учебный класс',
      description: 'Комфортные аудитории с интерактивными досками и современным оборудованием'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1494976049143-1334ffe27399?w=800&h=600&fit=crop',
      alt: 'Автодром для практики',
      category: 'Автодром',
      title: 'Учебный автодром',
      description: 'Просторный автодром с разметкой для отработки всех элементов экзамена'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&h=600&fit=crop',
      alt: 'Теоретические занятия',
      category: 'Обучение',
      title: 'Теоретические занятия',
      description: 'Групповые занятия с опытными преподавателями по изучению ПДД'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop',
      alt: 'Практическое вождение',
      category: 'Практика',
      title: 'Практическое вождение',
      description: 'Индивидуальные занятия с инструктором на современных автомобилях'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      alt: 'Здание автошколы',
      category: 'Здание',
      title: 'Наше здание',
      description: 'Удобное расположение в центре города с парковкой для учеников'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop',
      alt: 'Парк автомобилей',
      category: 'Автопарк',
      title: 'Автомобили для обучения',
      description: 'Новые автомобили всех категорий с дополнительными педалями'
    }
  ]

  const openModal = (index: number) => {
    setSelectedImage(index)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'unset'
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1)
    }
  }

  const stats = [
    { icon: MapPin, label: 'Удобное расположение', value: 'Центр города' },
    { icon: Users, label: 'Группы до', value: '12 человек' },
    { icon: Car, label: 'Автомобилей', value: '30+' },
    { icon: Award, label: 'Лет опыта', value: '15+' }
  ]

  return (
    <section className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Наша автошкола
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Современные классы, просторный автодром и комфортные условия для качественного обучения
          </p>
        </div>

        {/* Статистика */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl">
              <div className="w-12 h-12 mx-auto mb-3 bg-primary-600 rounded-lg flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-300 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Галерея */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-2xl cursor-pointer hover:shadow-xl transition-all duration-300"
              onClick={() => openModal(index)}
            >
              <div className="aspect-w-4 aspect-h-3 bg-gray-200">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="text-sm font-medium text-primary-400 mb-1">
                  {image.category}
                </div>
                <h3 className="text-lg font-semibold mb-1">
                  {image.title}
                </h3>
                <p className="text-sm text-gray-200">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Модальное окно */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90" onClick={closeModal}>
            <div className="relative max-w-4xl max-h-full p-4" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              
              <div className="absolute bottom-4 left-4 right-4 text-white text-center">
                <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4">
                  <h3 className="text-xl font-semibold mb-2">
                    {galleryImages[selectedImage].title}
                  </h3>
                  <p className="text-gray-200">
                    {galleryImages[selectedImage].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default GallerySection 