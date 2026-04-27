import { estheticCustomers } from '@/lib/sample-data-esthetic'

export default function EstheticCustomers() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-gray-800">顧客管理</h1>
          <p className="text-sm text-gray-400 mt-0.5">登録顧客 {estheticCustomers.length} 名</p>
        </div>
        <button className="bg-blue-500 text-white text-sm font-bold px-4 py-2 rounded-lg opacity-60 cursor-default">＋ 新規登録（デモ）</button>
      </div>
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="divide-y divide-gray-50">
          {estheticCustomers.map(c => (
            <div key={c.id} className="px-4 py-4 flex items-start gap-3 hover:bg-gray-50 transition-colors">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm" style={{ backgroundColor: '#ec4899' }}>
                {c.name.charAt(0)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-semibold text-gray-800">{c.name}</span>
                  <span className="text-xs text-gray-400">{c.age}歳</span>
                  <span className="text-xs bg-pink-50 text-pink-500 px-2 py-0.5 rounded-full">{c.visit_count}回来店</span>
                </div>
                <p className="text-sm text-gray-500 mt-0.5">{c.skin_type} · {c.phone}</p>
                {c.notes && (
                  <p className="text-xs text-amber-600 bg-amber-50 px-2 py-0.5 rounded mt-1.5 inline-block">⚠ {c.notes}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
