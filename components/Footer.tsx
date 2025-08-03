import Link from 'next/link'
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 事務所情報 */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">未</span>
              </div>
              <h3 className="text-xl font-bold">税理士法人 未来会計</h3>
            </div>
            <p className="text-gray-300 mb-4">
              マイクロ法人設立を専門とする税理士事務所です。
              個人事業主の皆様の法人化を全力でサポートし、
              税務顧問としても長期的にお付き合いさせていただきます。
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-300">
                <FiMapPin className="w-4 h-4" />
                <span>東京都渋谷区渋谷1-1-1 渋谷ビル5F</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <FiPhone className="w-4 h-4" />
                <span>03-1234-5678</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <FiMail className="w-4 h-4" />
                <span>info@mirai-kaikei.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <FiClock className="w-4 h-4" />
                <span>平日 9:00-18:00</span>
              </div>
            </div>
          </div>

          {/* サービス */}
          <div>
            <h4 className="text-lg font-semibold mb-4">サービス</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors duration-200">
                  マイクロ法人設立
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors duration-200">
                  税務顧問
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors duration-200">
                  記帳代行
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors duration-200">
                  年末調整
                </Link>
              </li>
            </ul>
          </div>

          {/* ページリンク */}
          <div>
            <h4 className="text-lg font-semibold mb-4">ページ</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-200">
                  ホーム
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors duration-200">
                  事務所紹介
                </Link>
              </li>
              <li>
                <Link href="/benefits" className="text-gray-300 hover:text-white transition-colors duration-200">
                  マイクロ法人のメリット
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors duration-200">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 税理士法人 未来会計. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 