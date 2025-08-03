import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { FiCheck, FiX, FiTrendingUp, FiShield, FiUsers, FiDollarSign, FiHeart, FiBriefcase } from 'react-icons/fi'

export default function Benefits() {
  const comparisonData = [
    {
      item: '税率',
      individual: '最大55%（所得税）',
      corporation: '最大23.2%（法人税）',
      advantage: 'corporation'
    },
    {
      item: '社会保険',
      individual: '国民健康保険・国民年金',
      corporation: '健康保険・厚生年金',
      advantage: 'corporation'
    },
    {
      item: '経費計上',
      individual: '制限あり',
      corporation: '幅広く認められる',
      advantage: 'corporation'
    },
    {
      item: '信用力',
      individual: '個人の信用',
      corporation: '法人の信用',
      advantage: 'corporation'
    },
    {
      item: '設立費用',
      individual: '0円',
      corporation: '約20万円',
      advantage: 'individual'
    },
    {
      item: '手続きの複雑さ',
      individual: '比較的簡単',
      corporation: '複雑',
      advantage: 'individual'
    }
  ]

  const benefits = [
    {
      icon: <FiDollarSign className="w-8 h-8" />,
      title: '税金が安くなる',
      description: '個人事業主の最高税率55%に対して、法人税は最大23.2%。所得が高いほど節税効果が大きくなります。',
      details: [
        '所得800万円の場合：約100万円の節税',
        '所得1,200万円の場合：約200万円の節税',
        '所得1,500万円の場合：約300万円の節税'
      ]
    },
    {
      icon: <FiHeart className="w-8 h-8" />,
      title: '社会保険に入れる',
      description: '国民健康保険・国民年金から、健康保険・厚生年金に加入できます。将来の年金額が増加します。',
      details: [
        '健康保険料の会社負担分（約50%）を節約',
        '厚生年金により将来の年金額が増加',
        '扶養家族の保険料が無料'
      ]
    },
    {
      icon: <FiBriefcase className="w-8 h-8" />,
      title: '経費計上が有利',
      description: '法人は個人事業主よりも幅広い経費を計上できます。事業に必要な費用をより多く経費として認められます。',
      details: [
        '役員報酬の最適化',
        '家族への給与支給',
        '生命保険料の経費計上',
        '退職金制度の活用'
      ]
    },
    {
      icon: <FiShield className="w-8 h-8" />,
      title: '信用力が向上',
      description: '法人としての信用力により、取引先からの信頼度が向上し、事業拡大の機会が増えます。',
      details: [
        '取引先からの信頼度向上',
        '銀行融資が受けやすくなる',
        '大手企業との取引が可能',
        '事業継承がスムーズ'
      ]
    }
  ]

  const considerations = [
    {
      title: '設立費用',
      description: '約20万円の設立費用がかかります（当社のサポート料金含む）',
      solution: '分割払いにも対応しております'
    },
    {
      title: '手続きの複雑さ',
      description: '設立手続きや設立後の税務申告が複雑になります',
      solution: '当社が設立から設立後まで完全サポートいたします'
    },
    {
      title: '継続的なコスト',
      description: '税務顧問料や社会保険料などの継続的なコストが発生します',
      solution: '節税効果を考慮すると、多くの場合メリットの方が大きいです'
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
              マイクロ法人設立のメリット
            </h1>
            <p className="text-xl text-white/90">
              個人事業主とマイクロ法人の違いを詳しく解説します
            </p>
          </div>
        </div>
      </section>

      {/* 比較表セクション */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              個人事業主 vs マイクロ法人
            </h2>
            <p className="text-lg text-gray-600">
              どちらがお得か、詳しく比較してみましょう
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-4 text-left font-semibold">比較項目</th>
                  <th className="border border-gray-300 p-4 text-center font-semibold">個人事業主</th>
                  <th className="border border-gray-300 p-4 text-center font-semibold">マイクロ法人</th>
                  <th className="border border-gray-300 p-4 text-center font-semibold">有利な方</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="border border-gray-300 p-4 font-medium">{row.item}</td>
                    <td className="border border-gray-300 p-4 text-center">{row.individual}</td>
                    <td className="border border-gray-300 p-4 text-center">{row.corporation}</td>
                    <td className="border border-gray-300 p-4 text-center">
                      {row.advantage === 'corporation' ? (
                        <span className="inline-flex items-center text-green-600">
                          <FiCheck className="w-5 h-5 mr-1" />
                          法人
                        </span>
                      ) : (
                        <span className="inline-flex items-center text-blue-600">
                          <FiCheck className="w-5 h-5 mr-1" />
                          個人
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* メリット詳細セクション */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              マイクロ法人設立の4つのメリット
            </h2>
            <p className="text-lg text-gray-600">
              具体的なメリットを詳しくご説明します
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="card">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 mr-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{benefit.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{benefit.description}</p>
                <ul className="space-y-2">
                  {benefit.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start space-x-2">
                      <FiCheck className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 注意点セクション */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              法人化の注意点
            </h2>
            <p className="text-lg text-gray-600">
              メリットだけでなく、注意点も知っておきましょう
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {considerations.map((consideration, index) => (
              <div key={index} className="card border-l-4 border-yellow-500">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {consideration.title}
                </h3>
                <p className="text-gray-600 mb-3">
                  {consideration.description}
                </p>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-green-800 text-sm font-medium">
                    <FiCheck className="w-4 h-4 inline mr-1" />
                    {consideration.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* シミュレーションセクション */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              節税シミュレーション
            </h2>
            <p className="text-lg text-gray-600">
              実際の数字で比較してみましょう
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">所得800万円の場合</h3>
                <div className="text-3xl font-bold text-primary-700 mb-2">約100万円</div>
                <p className="text-gray-600">年間の節税効果</p>
              </div>
              
              <div className="card text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">所得1,200万円の場合</h3>
                <div className="text-3xl font-bold text-primary-700 mb-2">約200万円</div>
                <p className="text-gray-600">年間の節税効果</p>
              </div>
              
              <div className="card text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">所得1,500万円の場合</h3>
                <div className="text-3xl font-bold text-primary-700 mb-2">約300万円</div>
                <p className="text-gray-600">年間の節税効果</p>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                ※ 実際の節税効果は、事業内容や経費の状況により異なります。
              </p>
              <Link href="/contact" className="btn-primary">
                詳細なシミュレーションを依頼する
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* よくある質問 */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              よくある質問
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Q. どのくらいの所得があれば法人化した方が良いですか？
              </h3>
              <p className="text-gray-600">
                A. 一般的に年間所得が800万円を超える場合、法人化のメリットが大きくなります。
                ただし、事業内容や経費の状況により異なりますので、個別にシミュレーションすることをお勧めします。
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Q. 設立後すぐに節税効果は得られますか？
              </h3>
              <p className="text-gray-600">
                A. 設立年度から節税効果を得ることができます。ただし、設立時期によっては
                初年度の効果が限定的になる場合もあります。詳しくはご相談ください。
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Q. 設立後、個人事業主に戻ることはできますか？
              </h3>
              <p className="text-gray-600">
                A. 法人を解散して個人事業主に戻ることは可能です。ただし、解散手続きには
                時間と費用がかかります。慎重に検討してから設立することをお勧めします。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="section-padding bg-primary-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            法人化について詳しく相談しませんか？
          </h2>
          <p className="text-xl mb-8 text-primary-200">
            お客様の状況に合わせて、最適なアドバイスをいたします。
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