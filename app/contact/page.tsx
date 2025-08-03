'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { FiPhone, FiMail, FiMapPin, FiClock, FiMessageCircle } from 'react-icons/fi'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    inquiryType: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // 実際の実装では、ここでフォームデータをサーバーに送信します
    // 今回はシミュレーションのため、少し待機してから成功メッセージを表示
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const contactMethods = [
    {
      icon: <FiPhone className="w-6 h-6" />,
      title: 'お電話でのお問い合わせ',
      contact: '03-1234-5678',
      description: '平日 9:00-18:00',
      action: 'tel:03-1234-5678'
    },
    {
      icon: <FiMail className="w-6 h-6" />,
      title: 'メールでのお問い合わせ',
      contact: 'info@mirai-kaikei.com',
      description: '24時間受付',
      action: 'mailto:info@mirai-kaikei.com'
    },
    {
      icon: <FiMessageCircle className="w-6 h-6" />,
      title: 'LINE公式アカウント',
      contact: '@mirai-kaikei',
      description: '平日 9:00-18:00',
      action: '#'
    }
  ]

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-3xl font-bold text-gray-800 mb-4">
                お問い合わせありがとうございます
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                お問い合わせを受け付けました。内容を確認の上、2営業日以内にご連絡いたします。
              </p>
              <a href="/" className="btn-primary">
                ホームに戻る
              </a>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* ヒーローセクション */}
      <section className="bg-gradient-to-r from-primary-700 to-secondary-700 text-white">
        <div className="container-custom section-padding">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              お問い合わせ
            </h1>
            <p className="text-xl text-white/90">
              マイクロ法人設立について、お気軽にご相談ください
            </p>
          </div>
        </div>
      </section>

      {/* お問い合わせフォームセクション */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* フォーム */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                お問い合わせフォーム
              </h2>
              <p className="text-gray-600 mb-8">
                以下のフォームにご記入の上、送信してください。
                初回相談は無料です。お気軽にご相談ください。
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    お名前 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="山田 太郎"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    メールアドレス <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="example@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    電話番号
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="03-1234-5678"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    会社名・事業名
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="株式会社サンプル"
                  />
                </div>
                
                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
                    お問い合わせ内容 <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">選択してください</option>
                    <option value="establishment">マイクロ法人設立について</option>
                    <option value="consultation">税務顧問について</option>
                    <option value="simulation">節税シミュレーション</option>
                    <option value="other">その他</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    ご相談内容 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="ご相談内容を詳しくお聞かせください。"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? '送信中...' : '送信する'}
                </button>
              </form>
            </div>
            
            {/* 連絡先情報 */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                その他の連絡方法
              </h2>
              <p className="text-gray-600 mb-8">
                お急ぎの場合は、以下の方法でもお問い合わせいただけます。
              </p>
              
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <div key={index} className="card">
                    <div className="flex items-start space-x-4">
                                             <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 flex-shrink-0">
                        {method.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                          {method.title}
                        </h3>
                                                 <a
                           href={method.action}
                           className="text-xl font-bold text-primary-700 hover:text-primary-800 transition-colors duration-200"
                         >
                          {method.contact}
                        </a>
                        <p className="text-gray-600 mt-1">
                          {method.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="card mt-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  事務所情報
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <FiMapPin className="w-5 h-5 text-primary-700 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-800">住所</p>
                      <p className="text-gray-600">東京都渋谷区渋谷1-1-1 渋谷ビル5F</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <FiClock className="w-5 h-5 text-primary-700 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-800">営業時間</p>
                      <p className="text-gray-600">平日 9:00-18:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* よくある質問セクション */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              よくある質問
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Q. 初回相談は本当に無料ですか？
              </h3>
              <p className="text-gray-600">
                A. はい、初回相談は完全無料です。法人化のメリット・デメリットや、
                お客様の状況に合わせたアドバイスを無料で提供いたします。
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Q. オンラインでの相談は可能ですか？
              </h3>
              <p className="text-gray-600">
                A. はい、ZoomやTeams等を使用したオンライン相談にも対応しております。
                お気軽にご利用ください。
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Q. 相談から設立までどのくらいの期間がかかりますか？
              </h3>
              <p className="text-gray-600">
                A. 通常、相談から設立完了まで約1-2ヶ月程度です。
                ただし、お客様のご希望や状況により異なります。
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 