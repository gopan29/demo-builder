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

const templateSamples: Record<string, string> = {
  dog_salon:          'sample-dog',
  beauty_salon:       'sample-beauty',
  dental_clinic:      'sample-dental',
  restaurant:         'sample-restaurant',
  esthetic_salon:     'sample-esthetic',
  osteopathic_clinic: 'sample-osteo',
  juku:               'sample-juku',
  yoga_fitness:       'sample-yoga',
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm"
              style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}
            >
              D
            </div>
            <span className="font-bold text-gray-800">Demo Builder</span>
            <span className="text-xs text-gray-400 border border-gray-200 px-2 py-0.5 rounded-full">社内用</span>
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

      <div className="max-w-4xl mx-auto px-4 py-10">
        {/* タイトル + アクション */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-xl font-bold text-gray-800">デモ一覧 / テンプレート</h1>
            <p className="text-sm text-gray-400 mt-1">
              商談用デモは管理画面で作成 → URLをそのまま開いて使用
            </p>
          </div>
          <Link
            href="/admin/new"
            className="text-sm font-bold px-5 py-2.5 rounded-xl text-white transition-opacity hover:opacity-90 hidden sm:block"
            style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}
          >
            ＋ デモを作成
          </Link>
        </div>

        {/* テンプレート一覧 */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {INDUSTRY_TEMPLATES.map(t => {
            const sampleSlug = templateSamples[t.value]
            return (
              <div
                key={t.value}
                className="bg-white rounded-xl border border-gray-200 p-4 flex flex-col gap-3 hover:border-indigo-200 hover:shadow-sm transition-all"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xl">{templateIcons[t.value] ?? '🏢'}</span>
                  <span className="text-sm font-medium text-gray-700">{t.label}</span>
                </div>
                {sampleSlug && (
                  <Link
                    href={`/demo/${sampleSlug}`}
                    target="_blank"
                    className="text-xs text-indigo-500 hover:text-indigo-700 font-medium"
                  >
                    サンプルを見る ↗
                  </Link>
                )}
              </div>
            )
          })}
        </div>

        {/* スマホ用ボタン */}
        <div className="mt-6 sm:hidden">
          <Link
            href="/admin/new"
            className="w-full flex items-center justify-center text-sm font-bold px-5 py-3 rounded-xl text-white transition-opacity hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}
          >
            ＋ デモを作成
          </Link>
        </div>
      </div>

      <footer className="border-t border-gray-200 py-5 text-center text-xs text-gray-300 mt-10">
        Demo Builder — 社内提案用
      </footer>
    </div>
  )
}
