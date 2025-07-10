'use client'

import { useState } from 'react'
import { Car, User } from 'lucide-react'

interface ImageWithFallbackProps {
  src: string
  alt: string
  className?: string
  fallbackType?: 'car' | 'person' | 'placeholder'
  fallbackText?: string
}

const ImageWithFallback = ({ 
  src, 
  alt, 
  className = '', 
  fallbackType = 'placeholder',
  fallbackText 
}: ImageWithFallbackProps) => {
  const [imageError, setImageError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const handleImageError = () => {
    setImageError(true)
    setIsLoading(false)
  }

  const handleImageLoad = () => {
    setIsLoading(false)
  }

  if (imageError) {
    return (
      <div className={`bg-gradient-to-br from-gray-300 to-gray-500 flex items-center justify-center ${className}`}>
        {fallbackType === 'car' && <Car className="w-16 h-16 text-white opacity-70" />}
        {fallbackType === 'person' && <User className="w-16 h-16 text-white opacity-70" />}
        {fallbackType === 'placeholder' && fallbackText && (
          <span className="text-white font-semibold text-center px-4">
            {fallbackText}
          </span>
        )}
      </div>
    )
  }

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-300 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-primary-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        onError={handleImageError}
        onLoad={handleImageLoad}
      />
    </div>
  )
}

export default ImageWithFallback 