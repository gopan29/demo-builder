import { createClient } from '@/lib/supabase-server'
import Link from 'next/link'
import type { Demo } from '@/types/demo'
import { INDUSTRY_TEMPLATES, TEMPLATE_LABEL } from '@/lib/industry-templates'
import DeleteDemoButton from '@/components/DeleteDemoButton'

export default async function AdminPage() {
  const supabase = await createClient()
  const { data: demos } = await supabase
    .from('demos')
    .select('*')
    .order('created_at', { ascending: false })

  const templateLabel = (value: string) => TEMPLATE_LABEL[value] ?? value

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">デモ案件一覧</h1>
          <p className="text-sm text-gray-400 mt-1">クライアント提案用デモを管理します</p>
        </div>
        <Link
          href="/admin/new"
          className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-colors shadow-sm"
        >
          ＋ 新規作成
        </Link>
      </div>

      {!demos || demos.length === 0 ? (
        <div className="bg-white rounded-2xl border border-gray-200 p-16 text-center">
          <div className="text-4xl mb-3">📋</div>
          <p className="text-gray-400 text-sm">デモ案件がまだありません</p>
          <Link href="/admin/new" className="text-blue-500 text-sm mt-2 inline-block hover:underline">
            最初のデモを作成する →
          </Link>
        </div>
      ) : (
        <div className="space-y-3">
          {demos.map((demo: Demo) => (
            <div
              key={demo.id}
              className="bg-white rounded-2xl border border-gray-200 px-6 py-5 flex items-center gap-5 hover:shadow-sm transition-shadow"
            >
              {/* テーマカラーバー */}
              <div
                className="w-1 self-stretch rounded-full flex-shrink-0"
                style={{ backgroundColor: demo.theme_color, minHeight: '48px' }}
              />

              {/* ロゴ */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-white text-lg font-bold flex-shrink-0"
                style={{ backgroundColor: demo.theme_color }}
              >
                {demo.client_name.charAt(0).toUpperCase()}
              </div>

              {/* 情報 */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-bold text-gray-800 text-base">{demo.client_name}</span>
                  <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">
                    {templateLabel(demo.industry_template)}
                  </span>
                  {demo.is_active
                    ? <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded-full font-medium">公開中</span>
                    : <span className="text-xs bg-gray-100 text-gray-400 px-2 py-0.5 rounded-full">非公開</span>
                  }
                </div>
                <p className="text-xs text-gray-400 mt-1 font-mono">
                  /demo/{demo.slug}
                </p>
              </div>

              {/* アクション */}
              <div className="flex items-center gap-2 flex-shrink-0">
                <Link
                  href={`/demo/${demo.slug}`}
                  target="_blank"
                  className="text-xs font-bold px-4 py-2 rounded-lg border-2 transition-colors"
                  style={{ color: demo.theme_color, borderColor: demo.theme_color }}
                >
                  デモを見る ↗
                </Link>
                <Link
                  href={`/admin/${demo.id}/edit`}
                  className="text-xs text-gray-500 hover:text-gray-700 border border-gray-200 hover:border-gray-400 px-3 py-2 rounded-lg transition-colors"
                >
                  編集
                </Link>
                <DeleteDemoButton id={demo.id} clientName={demo.client_name} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
