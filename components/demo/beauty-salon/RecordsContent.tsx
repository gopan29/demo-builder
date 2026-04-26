import { beautyRecords } from '@/lib/sample-data-beauty'

export default function BeautySalonRecords() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-gray-800">施術記録</h1>
          <p className="text-sm text-gray-400 mt-0.5">{beautyRecords.length} 件の記録</p>
        </div>
        <button className="bg-blue-500 text-white text-sm font-bold px-4 py-2 rounded-lg opacity-60 cursor-default">＋ 新規記録（デモ）</button>
      </div>
      <div className="space-y-3">
        {beautyRecords.sort((a, b) => b.visit_date.localeCompare(a.visit_date)).map(r => (
          <div key={r.id} className="bg-white rounded-xl border border-gray-200 p-5">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap mb-2">
                  <span className="text-lg">✂️</span>
                  <span className="font-bold text-gray-800">{r.customer_name}</span>
                  <span className="text-xs bg-pink-50 text-pink-500 px-2 py-0.5 rounded-full">{r.service_type}</span>
                  <span className="text-xs text-gray-400">担当: {r.staff_name}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-xs font-bold text-gray-400 mb-1">施術内容・所見</p>
                    <p className="text-sm text-gray-700">{r.condition}</p>
                    {r.color_used !== 'なし' && (
                      <p className="text-xs text-purple-500 mt-1">🎨 使用カラー: {r.color_used}</p>
                    )}
                  </div>
                  <div className="bg-pink-50 rounded-lg p-3">
                    <p className="text-xs font-bold text-pink-400 mb-1">次回予定 / 料金</p>
                    <p className="text-sm text-gray-700">
                      {new Date(r.next_visit_scheduled).toLocaleDateString('ja-JP', { month: 'long', day: 'numeric' })}
                    </p>
                    <p className="text-sm font-bold text-gray-700 mt-1">¥{r.price.toLocaleString()}</p>
                  </div>
                </div>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="text-sm font-bold text-gray-500">
                  {new Date(r.visit_date).toLocaleDateString('ja-JP', { month: 'long', day: 'numeric' })}
                </p>
                <p className="text-xs text-gray-300">{new Date(r.visit_date).getFullYear()}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
