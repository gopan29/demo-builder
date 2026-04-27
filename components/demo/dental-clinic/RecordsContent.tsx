import { dentalRecords } from '@/lib/sample-data-dental'

export default function DentalRecords() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-gray-800">診療記録</h1>
          <p className="text-sm text-gray-400 mt-0.5">{dentalRecords.length} 件の記録</p>
        </div>
        <button className="bg-blue-500 text-white text-sm font-bold px-4 py-2 rounded-lg opacity-60 cursor-default">＋ 新規記録（デモ）</button>
      </div>
      <div className="space-y-3">
        {dentalRecords.sort((a, b) => b.visit_date.localeCompare(a.visit_date)).map(r => (
          <div key={r.id} className="bg-white rounded-xl border border-gray-200 p-4">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-bold text-gray-800">{r.patient_name}</span>
                <span className="text-xs bg-blue-50 text-blue-500 px-2 py-0.5 rounded-full">{r.treatment}</span>
                <span className="text-xs text-gray-400">担当: {r.staff_name}</span>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="text-sm font-bold text-gray-500">{new Date(r.visit_date).toLocaleDateString('ja-JP', { month: 'long', day: 'numeric' })}</p>
                <p className="text-xs text-gray-400">¥{r.fee.toLocaleString()}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-xs font-bold text-gray-400 mb-1">所見・状態</p>
                <p className="text-sm text-gray-700">{r.findings}</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-3">
                <p className="text-xs font-bold text-blue-400 mb-1">次回治療方針</p>
                <p className="text-sm text-gray-700">{r.next_treatment}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
