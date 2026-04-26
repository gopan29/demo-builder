import { beautyCustomers } from '@/lib/sample-data-beauty'

export default function BeautySalonCustomers() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-gray-800">顧客管理</h1>
          <p className="text-sm text-gray-400 mt-0.5">登録顧客 {beautyCustomers.length} 名</p>
        </div>
        <button className="bg-blue-500 text-white text-sm font-bold px-4 py-2 rounded-lg opacity-60 cursor-default">＋ 新規登録（デモ）</button>
      </div>
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="divide-y divide-gray-50">
          {beautyCustomers.map(c => (
            <div key={c.id} className="px-5 py-4 flex items-start gap-4 hover:bg-gray-50 transition-colors">
              <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center text-pink-500 font-bold flex-shrink-0">
                {c.name.charAt(0)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-bold text-gray-800">{c.name}</span>
                  <span className="text-xs bg-pink-50 text-pink-500 px-2 py-0.5 rounded-full">{c.visit_count}回来店</span>
                </div>
                <p className="text-xs text-gray-400 mt-0.5">{c.phone} ／ {c.email}</p>
                {c.memo && <p className="text-xs text-orange-400 mt-1 bg-orange-50 px-2 py-1 rounded-lg">📝 {c.memo}</p>}
              </div>
              <span className="text-xs text-gray-300 flex-shrink-0">{c.registered_at} 登録</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
