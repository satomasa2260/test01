import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { FiCheckCircle, FiUsers, FiShield, FiClock, FiStar } from 'react-icons/fi'

export default function Home() {
  const strengths = [
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: 'マイクロ法人設立実績多数',
      description: '年間100社以上のマイクロ法人設立をサポート。豊富な経験で安心の設立をお約束します。'
    },
    {
      icon: <FiShield className="w-8 h-8" />,
      title: '初回相談無料',
      description: '法人化のメリット・デメリットを詳しくご説明。お気軽にご相談ください。'
    },
    {
      icon: <FiClock className="w-8 h-8" />,
      title: 'オンライン完結',
      description: '書類のやり取りから設立手続きまで、すべてオンラインで完結できます。'
    }
  ]

  const testimonials = [
    {
      name: '田中 美咲さん',
      company: 'Webデザイナー',
      content: '個人事業主から法人化を検討していましたが、税理士事務所選びに迷っていました。未来会計さんは親切に説明してくださり、設立手続きもスムーズに進みました。今では月額の税務顧問もお願いしています。',
      rating: 5
    },
    {
      name: '佐藤 健太さん',
      company: 'ITコンサルタント',
      content: 'フリーランスとして活動していましたが、取引先から法人での契約を求められることが増え、法人化を決意。未来会計さんのサポートにより、思いのほか簡単に設立できました。',
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* ヒーローセクション */}
      <section className="bg-gradient-to-r from-primary-700 to-secondary-700 text-white">
        <div className="container-custom section-padding">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              未来会計と一緒に、<br />
              賢く法人化
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              あなたのマイクロ法人設立を全力でサポートします
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-secondary text-lg px-8 py-4">
                無料相談はこちら
              </Link>
              <Link href="/benefits" className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary-500">
                メリットを詳しく見る
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 強みセクション */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              未来会計が選ばれる理由
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              マイクロ法人設立の専門家として、お客様一人ひとりに寄り添ったサポートを提供します
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {strengths.map((strength, index) => (
              <div key={index} className="card text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-700">
                  {strength.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {strength.title}
                </h3>
                <p className="text-gray-600">
                  {strength.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* お客様の声セクション */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              お客様の声
            </h2>
            <p className="text-lg text-gray-600">
              実際に未来会計をご利用いただいたお客様からの声をご紹介します
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FiStar key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{testimonial.name}</p>
                    <p className="text-gray-600 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="section-padding bg-primary-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            まずは無料相談から始めませんか？
          </h2>
                      <p className="text-xl mb-8 text-primary-200">
            法人化のメリット・デメリットを詳しくご説明します。<br />
            お気軽にお問い合わせください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-secondary text-lg px-8 py-4">
              無料相談を申し込む
            </Link>
            <Link href="/services" className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary-500">
              サービス・料金を見る
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 