import { dentalPatients } from '@/lib/sample-data-dental'

export default function DentalPatients() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-gray-800">患者管理</h1>
          <p className="text-sm text-gray-400 mt-0.5">登録患者 {dentalPatients.length} 名</p>
        </div>
        <button className="bg-blue-500 text-white text-sm font-bold px-4 py-2 rounded-lg opacity-60 cursor-default">＋ 新規登録（デモ）</button>
      </div>
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="divide-y divide-gray-50">
          {dentalPatients.map(p => (
            <div key={p.id} className="px-4 py-4 flex items-start gap-3 hover:bg-gray-50 transition-colors">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold flex-shrink-0">
                {p.name.charAt(0)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-semibold text-gray-800">{p.name}</span>
                  <span className="text-xs text-gray-400">{p.gender}</span>
                  <span className="text-xs bg-blue-50 text-blue-500 px-2 py-0.5 rounded-full">{p.visit_count}回来院</span>
                </div>
                <p className="text-sm text-gray-500 mt-0.5">{p.phone}</p>
                {p.notes && (
                  <p className="text-xs text-amber-600 bg-amber-50 px-2 py-0.5 rounded mt-1.5 inline-block">⚠ {p.notes}</p>
                )}
              </div>
              <span className="text-xs text-gray-400 flex-shrink-0 hidden sm:block">前回: {p.last_visit}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
