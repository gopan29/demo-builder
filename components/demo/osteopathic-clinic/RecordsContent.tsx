import { osteoRecords, osteoInsuranceMap } from '@/lib/sample-data-osteopathic'

export default function OsteopathicRecords() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-gray-800">施術記録</h1>
          <p className="text-sm text-gray-400 mt-0.5">{osteoRecords.length} 件の記録</p>
        </div>
        <button className="bg-blue-500 text-white text-sm font-bold px-4 py-2 rounded-lg opacity-60 cursor-default">＋ 新規記録（デモ）</button>
      </div>
      <div className="space-y-3">
        {osteoRecords.sort((a, b) => b.visit_date.localeCompare(a.visit_date)).map(r => {
          const ins = osteoInsuranceMap[r.insurance]
          return (
            <div key={r.id} className="bg-white rounded-xl border border-gray-200 p-4">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-bold text-gray-800">{r.patient_name}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${ins.color}`}>{r.insurance}</span>
                  <span className="text-xs text-gray-400">担当: {r.staff_name}</span>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-sm font-bold text-gray-500">{new Date(r.visit_date).toLocaleDateString('ja-JP', { month: 'long', day: 'numeric' })}</p>
                  <p className="text-xs text-gray-400">{r.insurance === '自賠責' ? '自賠責対応' : `¥${r.fee.toLocaleString()}`}</p>
                </div>
              </div>
              <p className="text-xs text-gray-500 mb-2 bg-gray-50 rounded px-3 py-1.5">施術: {r.treatment}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs font-bold text-gray-400 mb-1">所見・経過</p>
                  <p className="text-sm text-gray-700">{r.findings}</p>
                </div>
                <div className="bg-teal-50 rounded-lg p-3">
                  <p className="text-xs font-bold text-teal-500 mb-1">担当者メモ</p>
                  <p className="text-sm text-gray-700">{r.memo}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
