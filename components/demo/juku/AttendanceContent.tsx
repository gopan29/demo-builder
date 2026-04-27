import { jukuAttendance } from '@/lib/sample-data-juku'

const statusConfig = {
  present: { label: '出席', color: 'bg-green-100 text-green-700' },
  absent:  { label: '欠席', color: 'bg-red-100 text-red-600' },
  late:    { label: '遅刻', color: 'bg-yellow-100 text-yellow-700' },
}

export default function JukuAttendance() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-gray-800">出欠記録</h1>
          <p className="text-sm text-gray-400 mt-0.5">直近 {jukuAttendance.length} 件</p>
        </div>
        <button className="bg-blue-500 text-white text-sm font-bold px-4 py-2 rounded-lg opacity-60 cursor-default">＋ 記録追加（デモ）</button>
      </div>
      <div className="space-y-4">
        {jukuAttendance.map(att => {
          const presentCount = att.records.filter(r => r.status === 'present').length
          return (
            <div key={att.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="px-5 py-3 bg-gray-50 border-b border-gray-100 flex items-center justify-between">
                <div>
                  <h2 className="text-sm font-bold text-gray-700">{att.class_name}</h2>
                  <p className="text-xs text-gray-400">{new Date(att.date).toLocaleDateString('ja-JP', { month: 'long', day: 'numeric', weekday: 'short' })}</p>
                </div>
                <span className="text-sm font-bold text-gray-600">出席 {presentCount}/{att.records.length}名</span>
              </div>
              <div className="divide-y divide-gray-50">
                {att.records.map((r, i) => {
                  const conf = statusConfig[r.status as keyof typeof statusConfig]
                  return (
                    <div key={i} className="px-4 py-3 flex items-center gap-3">
                      <span className="text-sm text-gray-800 flex-1">{r.student}</span>
                      <span className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${conf.color}`}>{conf.label}</span>
                      {r.reason && <span className="text-xs text-gray-400">{r.reason}</span>}
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
