import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TelegramButton from '@/components/TelegramButton'
import { ThemeProvider } from '@/components/ThemeProvider'


const inter = Inter({ 
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter'
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: 'FreshType - Автошкола нового поколения | Обучение вождению в России',
  description: 'Современная автошкола FreshType предлагает качественное обучение вождению по всем категориям А, В, С, D, E. Опытные инструкторы, новый автопарк, удобное расписание. Записывайтесь на обучение!',
  keywords: 'автошкола, обучение вождению, водительские права, категория B, категория A, категория C, ПДД, инструктор, автошкола России, FreshType',
  authors: [{ name: 'FreshType AutoSchool' }],
  creator: 'FreshType AutoSchool',
  publisher: 'FreshType AutoSchool',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://freshtype-autoschool.ru'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'FreshType - Автошкола нового поколения',
    description: 'Современная автошкола FreshType предлагает качественное обучение вождению по всем категориям. Опытные инструкторы, новый автопарк, удобное расписание.',
    url: 'https://freshtype-autoschool.ru',
    siteName: 'FreshType AutoSchool',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'FreshType Автошкола',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FreshType - Автошкола нового поколения',
    description: 'Современная автошкола FreshType предлагает качественное обучение вождению по всем категориям.',
    images: ['/og-image.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    yandex: 'your-yandex-verification-code',
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        {/* Yandex.Metrika */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/watch.js", "ym");
              
              ym(12345678, "init", {
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true,
                webvisor:true
              });
            `,
          }}
        />
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/12345678" style={{position: 'absolute', left: '-9999px'}} alt="" />
          </div>
        </noscript>
        
        {/* Facebook Pixel */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', 'YOUR_PIXEL_ID');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        
        {/* Structured Data для автошколы */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "DrivingSchool",
              "name": "FreshType",
              "description": "Современная автошкола FreshType предлагает качественное обучение вождению по всем категориям",
              "url": "https://freshtype-autoschool.ru",
              "logo": "https://freshtype-autoschool.ru/logo.svg",
              "image": "https://freshtype-autoschool.ru/og-image.svg",
              "telephone": "+7 (999) 123-45-67",
              "email": "info@freshtype-autoschool.ru",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "ул. Примерная, д. 1",
                "addressLocality": "Москва",
                "addressCountry": "RU"
              },
              "openingHours": [
                "Mo-Fr 09:00-20:00",
                "Sa 10:00-18:00"
              ],
              "priceRange": "₽₽",
              "areaServed": "Россия",
              "serviceType": "Обучение вождению"
            })
          }}
        />
      </head>
      <body className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <ThemeProvider>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <TelegramButton />
          {/* <StagewiseWrapper /> */}
        </ThemeProvider>
      </body>
    </html>
  )
} 