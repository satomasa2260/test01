import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { FiMapPin, FiPhone, FiMail, FiClock, FiAward, FiUsers, FiTarget } from 'react-icons/fi'

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* ヒーローセクション */}
      <section className="bg-gradient-to-r from-primary-700 to-secondary-700 text-white">
        <div className="container-custom section-padding">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              事務所・代表紹介
            </h1>
            <p className="text-xl text-white/90">
              マイクロ法人設立の専門家として、お客様の成功をサポートします
            </p>
          </div>
        </div>
      </section>

      {/* 代表紹介セクション */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                代表税理士 山田 太郎
              </h2>
              <div className="prose prose-lg text-gray-600 mb-6">
                <p className="mb-4">
                  はじめまして。税理士法人 未来会計の代表を務めております山田太郎です。
                </p>
                <p className="mb-4">
                  私は長年、個人事業主の方々の法人化をサポートしてきました。
                  その中で感じたのは、「法人化したいけれど、どこに相談すればいいかわからない」
                  という声が非常に多いということです。
                </p>
                <p className="mb-4">
                  そこで、マイクロ法人設立に特化した税理士事務所を設立し、
                  個人事業主の方々が安心して法人化できる環境を提供したいと考えました。
                </p>
                <p>
                  私たちは単なる手続き代行ではなく、お客様の事業発展を長期的にサポートする
                  パートナーでありたいと考えています。
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-700 mb-2">500+</div>
                  <div className="text-gray-600">設立実績</div>
                </div>
                <div className="text-center">
                                     <div className="text-3xl font-bold text-primary-700 mb-2">10年</div>
                  <div className="text-gray-600">経験年数</div>
                </div>
                <div className="text-center">
                                     <div className="text-3xl font-bold text-primary-700 mb-2">98%</div>
                  <div className="text-gray-600">顧客満足度</div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-primary-600 to-secondary-600 rounded-full flex items-center justify-center text-white text-6xl font-bold mb-6">
                山田
              </div>
              <p className="text-gray-600">
                税理士法人 未来会計<br />
                代表税理士
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 事務所の設立経緯 */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              事務所の設立経緯
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              私たちがマイクロ法人設立に特化した理由と、お客様への想いをご紹介します
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <div className="flex items-center mb-4">
                                 <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 mr-4">
                  <FiTarget className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">設立のきっかけ</h3>
              </div>
              <p className="text-gray-600">
                個人事業主の方々から「法人化したいけれど、どこに相談すればいいかわからない」
                「手続きが複雑で不安」という声を多く聞きました。そこで、マイクロ法人設立に特化し、
                分かりやすく、安心して利用できる税理士事務所を作ろうと決意しました。
              </p>
            </div>
            
            <div className="card">
              <div className="flex items-center mb-4">
                                 <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center text-secondary-700 mr-4">
                  <FiUsers className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">お客様への想い</h3>
              </div>
              <p className="text-gray-600">
                私たちは単なる手続き代行ではなく、お客様の事業発展を長期的にサポートする
                パートナーでありたいと考えています。法人化はゴールではなく、新しいスタートです。
                設立後も継続的にサポートし、お客様の成功を一緒に喜びたいと思います。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 事務所の強み */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              事務所の強み
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-600">
                <FiAward className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">専門性</h3>
              <p className="text-gray-600">
                マイクロ法人設立に特化することで、豊富な経験と専門知識を提供できます。
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4 text-secondary-700">
                <FiUsers className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">親しみやすさ</h3>
              <p className="text-gray-600">
                堅苦しい税理士事務所のイメージを変え、親しみやすく相談しやすい環境を提供します。
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4 text-accent-700">
                <FiTarget className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">継続サポート</h3>
              <p className="text-gray-600">
                設立後も税務顧問として長期的にお付き合いし、事業発展をサポートします。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 事務所基本情報 */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              事務所基本情報
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="card">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">連絡先・アクセス</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <FiMapPin className="w-5 h-5 text-primary-700 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800">住所</p>
                    <p className="text-gray-600">東京都渋谷区渋谷1-1-1 渋谷ビル5F</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <FiPhone className="w-5 h-5 text-primary-700 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800">電話番号</p>
                    <p className="text-gray-600">03-1234-5678</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <FiMail className="w-5 h-5 text-primary-700 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800">メールアドレス</p>
                    <p className="text-gray-600">info@mirai-kaikei.com</p>
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
            
            <div className="card">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">アクセス</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">最寄り駅</p>
                  <p className="text-gray-600">渋谷駅（JR・東急・京王・東京メトロ）徒歩5分</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">駐車場</p>
                  <p className="text-gray-600">ビル内に駐車場あり（有料）</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">オンライン対応</p>
                  <p className="text-gray-600">Zoom、Teams等でのオンライン相談も可能です</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 