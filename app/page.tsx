import HeroSection from '@/components/sections/HeroSection'
import FeaturesSection from '@/components/sections/FeaturesSection'
import CategoriesSection from '@/components/sections/CategoriesSection'
import PricingSection from '@/components/sections/PricingSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import InstructorsSection from '@/components/sections/InstructorsSection'
import GallerySection from '@/components/sections/GallerySection'
import ContactSection from '@/components/sections/ContactSection'
import QuickBookingForm from '@/components/QuickBookingForm'

export default function HomePage() {
  return (
    <>
      {/* Секция героя с основным призывом */}
      <HeroSection />
      
      {/* Форма быстрой записи */}
      <QuickBookingForm />
      
      {/* Основные преимущества */}
      <FeaturesSection />
      
      {/* Категории обучения */}
      <CategoriesSection />
      
      {/* Цены и пакеты */}
      <PricingSection />
      
      {/* Отзывы */}
      <TestimonialsSection />
      
      {/* Инструкторы */}
      <InstructorsSection />
      
      {/* Галерея автошколы */}
      <GallerySection />
      
      {/* Контакты */}
      <ContactSection />
    </>
  )
} 