import Link from 'next/link'
import { INDUSTRY_TEMPLATES } from '@/lib/industry-templates'

const templateIcons: Record<string, string> = {
  dog_salon:          '🐶',
  beauty_salon:       '💇',
  dental_clinic:      '🦷',
  restaurant:         '🍽️',
  esthetic_salon:     '✨',
  osteopathic_clinic: '🏥',
  juku:               '📚',
  yoga_fitness:       '🧘',
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm" style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}>
              D
            </div>
            <span className="font-bold text-gray-800">Demo Builder</span>
          </div>
          <Link
            href="/admin"
            className="text-sm font-bold px-4 py-2 rounded-lg text-white transition-opacity hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}
          >
            管理画面へ →
          </Link>
        </div>
      </header>

      {/* ヒーロー */}
      <section className="max-w-5xl mx-auto px-4 py-16 text-center">
        <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 text-xs font-bold px-3 py-1.5 rounded-full mb-6">
          クライアント提案用デモツール
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          業種別の管理システムを<br className="sm:hidden" />
          <span className="text-indigo-600">その場でデモ</span>できる
        </h1>
        <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto mb-8">
          商談時に「御社ならこう管理できます」をリアルなサンプルデータで見せる提案ツール。
          現在 <span className="font-bold text-gray-700">{INDUSTRY_TEMPLATES.length}業種</span> のテンプレートに対応。
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/admin"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white font-bold text-sm transition-opacity hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}
          >
            デモを作成する
          </Link>
          <Link
            href="/demo/sample-dog"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-indigo-600 font-bold text-sm border-2 border-indigo-200 hover:border-indigo-400 transition-colors bg-white"
          >
            サンプルを見る
          </Link>
        </div>
      </section>

      {/* テンプレート一覧 */}
      <section className="max-w-5xl mx-auto px-4 pb-16">
        <h2 className="text-lg font-bold text-gray-700 mb-4">対応業種テンプレート</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {INDUSTRY_TEMPLATES.map(t => (
            <div
              key={t.value}
              className="bg-white rounded-xl border border-gray-200 p-4 flex items-center gap-3 hover:border-indigo-200 hover:shadow-sm transition-all"
            >
              <span className="text-2xl flex-shrink-0">{templateIcons[t.value] ?? '🏢'}</span>
              <span className="text-sm font-medium text-gray-700">{t.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 使い方 */}
      <section className="bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 py-12">
          <h2 className="text-lg font-bold text-gray-700 mb-8 text-center">使い方</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { step: '01', title: 'デモを作成', desc: '管理画面でクライアント名・業種・テーマカラーを設定' },
              { step: '02', title: 'URLを共有', desc: '生成された /demo/スラッグ のURLをそのまま商談で開く' },
              { step: '03', title: 'その場で提案', desc: 'リアルなサンプルデータで業務イメージを具体的に伝える' },
            ].map(item => (
              <div key={item.step} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-indigo-600 font-bold text-sm flex-shrink-0 bg-indigo-50">
                  {item.step}
                </div>
                <div>
                  <p className="font-bold text-gray-800 mb-1">{item.title}</p>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="border-t border-gray-200 py-6 text-center text-xs text-gray-400">
        Demo Builder — クライアント提案デモ管理システム
      </footer>
    </div>
  )
}
