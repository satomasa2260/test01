import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '税理士法人 未来会計 | マイクロ法人設立に強い税理士事務所',
  description: 'マイクロ法人設立を専門とする税理士事務所です。個人事業主の法人化を全力でサポートし、税務顧問も承っております。初回相談無料。',
  keywords: 'マイクロ法人, 法人設立, 税理士, 税務顧問, 個人事業主, 法人化',
  authors: [{ name: '税理士法人 未来会計' }],
  creator: '税理士法人 未来会計',
  publisher: '税理士法人 未来会計',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://satomasa2260.github.io'),
  alternates: {
    canonical: '/test01/',
  },
  openGraph: {
    title: '税理士法人 未来会計 | マイクロ法人設立に強い税理士事務所',
    description: 'マイクロ法人設立を専門とする税理士事務所です。個人事業主の法人化を全力でサポートし、税務顧問も承っております。初回相談無料。',
    url: 'https://satomasa2260.github.io/test01/',
    siteName: '税理士法人 未来会計',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '税理士法人 未来会計 | マイクロ法人設立に強い税理士事務所',
    description: 'マイクロ法人設立を専門とする税理士事務所です。個人事業主の法人化を全力でサポートし、税務顧問も承っております。初回相談無料。',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 