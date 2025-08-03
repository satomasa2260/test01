'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FiMenu, FiX } from 'react-icons/fi'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { name: 'ホーム', href: '/' },
    { name: '事務所紹介', href: '/about' },
    { name: 'サービス・料金', href: '/services' },
    { name: 'マイクロ法人のメリット', href: '/benefits' },
    { name: 'お問い合わせ', href: '/contact' },
  ]

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* ロゴ */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">未</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">税理士法人 未来会計</h1>
              <p className="text-sm text-gray-600">マイクロ法人設立専門</p>
            </div>
          </Link>

          {/* デスクトップメニュー */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary-500 font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTAボタン */}
          <div className="hidden md:block">
            <Link href="/contact" className="btn-primary">
              無料相談
            </Link>
          </div>

          {/* モバイルメニューボタン */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <FiX className="w-6 h-6 text-gray-700" />
            ) : (
              <FiMenu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* モバイルメニュー */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary-500 font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="btn-primary text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                無料相談
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header 