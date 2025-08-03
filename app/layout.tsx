import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '税理士法人 未来会計 | マイクロ法人設立に強い税理士事務所',
  description: 'マイクロ法人設立を専門とする税理士事務所です。個人事業主の法人化を全力でサポートし、税務顧問も承っております。初回相談無料。',
  keywords: 'マイクロ法人, 法人設立, 税理士, 税務顧問, 個人事業主, 法人化',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 