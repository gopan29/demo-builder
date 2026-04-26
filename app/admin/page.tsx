import { createClient } from '@/lib/supabase-server'
import Link from 'next/link'
import type { Demo } from '@/types/demo'
import { INDUSTRY_TEMPLATES } from '@/types/demo'
import DeleteDemoButton from '@/components/DeleteDemoButton'

export default async function AdminPage() {
  const supabase = await createClient()
  const { data: demos } = await supabase
    .from('demos')
    .select('*')
    .order('created_at', { ascending: false })

  const templateLabel = (value: string) =>
    INDUSTRY_TEMPLATES.find(t => t.value === value)?.label ?? value

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">デモ案件一覧</h1>
          <p className="text-sm text-gray-500 mt-1">クライアント提案用デモを管理します</p>
        </div>
        <Link
          href="/admin/new"
          className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-bold px-4 py-2 rounded-lg transition-colors"
        >
          + 新規作成
        </Link>
      </div>

      {!demos || demos.length === 0 ? (
        <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
          <p className="text-gray-400 text-sm">デモ案件がまだありません</p>
          <Link href="/admin/new" className="text-blue-500 text-sm mt-2 inline-block hover:underline">
            最初のデモを作成する
          </Link>
        </div>
      ) : (
        <div className="space-y-3">
          {demos.map((demo: Demo) => (
            <div key={demo.id} className="bg-white rounded-xl border border-gray-200 px-5 py-4 flex items-center gap-4">
              <div
                className="w-4 h-4 rounded-full flex-shrink-0"
                style={{ backgroundColor: demo.theme_color }}
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-gray-800">{demo.client_name}</span>
                  <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">
                    {templateLabel(demo.industry_template)}
                  </span>
                  {demo.is_active ? (
                    <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded-full">公開中</span>
                  ) : (
                    <span className="text-xs bg-gray-100 text-gray-400 px-2 py-0.5 rounded-full">非公開</span>
                  )}
                </div>
                <p className="text-xs text-gray-400 mt-0.5">
                  /demo/{demo.slug}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Link
                  href={`/demo/${demo.slug}`}
                  target="_blank"
                  className="text-xs text-blue-500 hover:text-blue-600 border border-blue-200 hover:border-blue-400 px-3 py-1.5 rounded-lg transition-colors"
                >
                  デモを見る
                </Link>
                <Link
                  href={`/admin/${demo.id}/edit`}
                  className="text-xs text-gray-600 hover:text-gray-800 border border-gray-200 hover:border-gray-400 px-3 py-1.5 rounded-lg transition-colors"
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
