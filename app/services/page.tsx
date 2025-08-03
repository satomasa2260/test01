import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { FiCheck, FiFileText, FiDollarSign, FiTrendingUp, FiShield, FiClock } from 'react-icons/fi'

export default function Services() {
  const services = [
    {
      icon: <FiFileText className="w-8 h-8" />,
      title: 'マイクロ法人設立サポート',
      description: '個人事業主からマイクロ法人への設立を完全サポート。書類作成から登記手続きまで、すべてお任せください。',
      price: '50,000円〜',
      features: [
        '定款作成',
        '登記申請書類作成',
        '法務局への申請代行',
        '設立後の税務署・年金事務所への届出',
        '設立記念品（印鑑・印鑑証明書等）',
        '設立後の税務相談（1回）'
      ]
    },
    {
      icon: <FiDollarSign className="w-8 h-8" />,
      title: '税務顧問',
      description: '設立後の税務申告や記帳をサポート。月額で安心の税務サービスを提供します。',
      price: '月額15,000円〜',
      features: [
        '月次記帳代行',
        '年次決算書作成',
        '法人税申告書作成',
        '消費税申告書作成',
        '税務相談（月2回まで）',
        '年末調整代行'
      ]
    },
    {
      icon: <FiTrendingUp className="w-8 h-8" />,
      title: '記帳代行',
      description: '日々の取引記録を専門スタッフが代行。お客様は事業に集中できます。',
      price: '月額8,000円〜',
      features: [
        '日次取引記録',
        '月次試算表作成',
        '銀行口座連携',
        '領収書管理',
        '経費精算サポート',
        'クラウド会計ソフト利用'
      ]
    }
  ]

  const additionalServices = [
    {
      title: '年末調整代行',
      price: '5,000円〜',
      description: '従業員の年末調整を代行いたします。'
    },
    {
      title: '給与計算代行',
      price: '月額3,000円〜',
      description: '従業員の給与計算と給与明細作成を代行いたします。'
    },
    {
      title: '社会保険手続き代行',
      price: '10,000円〜',
      description: '健康保険・厚生年金の加入手続きを代行いたします。'
    },
    {
      title: '税務調査立会',
      price: '30,000円〜',
      description: '税務調査の立会いと対応をいたします。'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* ヒーローセクション */}
      <section className="bg-gradient-to-r from-primary-700 to-secondary-700 text-white">
        <div className="container-custom section-padding">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              サービス・料金
            </h1>
            <p className="text-xl text-white/90">
              透明性のある料金体系で、安心してご利用いただけます
            </p>
          </div>
        </div>
      </section>

      {/* 料金表セクション */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              料金プラン
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              お客様のニーズに合わせて、最適なプランをご提案いたします
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card border-2 border-gray-200 hover:border-primary-500 transition-colors duration-300">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-700">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                                     <div className="text-3xl font-bold text-primary-700 mb-2">
                    {service.price}
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <FiCheck className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link href="/contact" className="btn-primary w-full text-center">
                  お問い合わせ
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 追加サービスセクション */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              追加サービス
            </h2>
            <p className="text-lg text-gray-600">
              必要に応じて、追加のサービスもご提供いたします
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="card text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                                 <div className="text-2xl font-bold text-primary-700 mb-2">
                  {service.price}
                </div>
                <p className="text-gray-600 text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 料金についての説明 */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              料金について
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <div className="flex items-center mb-4">
                                 <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 mr-4">
                  <FiShield className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">透明性のある料金</h3>
              </div>
              <p className="text-gray-600">
                すべての料金を事前に明示し、隠れた費用は一切ありません。
                お客様に安心してご利用いただけるよう、透明性のある料金体系を採用しています。
              </p>
            </div>
            
            <div className="card">
              <div className="flex items-center mb-4">
                                 <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center text-secondary-700 mr-4">
                  <FiClock className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">初回相談無料</h3>
              </div>
              <p className="text-gray-600">
                法人化のメリット・デメリットや、最適なプランについて、
                初回相談は無料でお受けいたします。お気軽にご相談ください。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* よくある質問 */}
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
                Q. 設立費用は分割払いできますか？
              </h3>
              <p className="text-gray-600">
                A. はい、設立費用は分割払いにも対応しております。詳しくはお問い合わせください。
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Q. 設立後すぐに税務顧問を契約する必要がありますか？
              </h3>
              <p className="text-gray-600">
                A. 必ずしも必要ではありませんが、設立後の税務申告や記帳をスムーズに行うために、
                税務顧問のご契約をお勧めしております。
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
            お客様の状況に合わせて、最適なプランをご提案いたします。
          </p>
          <Link href="/contact" className="btn-secondary text-lg px-8 py-4">
            無料相談を申し込む
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
} 