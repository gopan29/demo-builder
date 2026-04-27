import { osteoReservations, osteoPatients, osteoInsuranceMap, osteoStatusMap } from '@/lib/sample-data-osteopathic'

type Props = { themeColor: string }

export default function OsteopathicDashboard({ themeColor }: Props) {
  const todayRes = osteoReservations.filter(r => r.date === '2026-04-27')
  const insuranceCounts = {
    '健康保険': osteoPatients.filter(p => p.insurance === '健康保険').length,
    '自費': osteoPatients.filter(p => p.insurance === '自費').length,
    '自賠責': osteoPatients.filter(p => p.insurance === '自賠責').length,
  }

  const stats = [
    { label: '今日の予約', value: todayRes.length, unit: '件', sub: `確定 ${todayRes.filter(r => r.status === 'confirmed').length}件` },
    { label: '登録患者数', value: osteoPatients.length, unit: '名', sub: '累計' },
    { label: '健康保険', value: insuranceCounts['健康保険'], unit: '名', sub: '保険患者' },
    { label: '自賠責', value: insuranceCounts['自賠責'], unit: '名', sub: '交通事故', alert: insuranceCounts['自賠責'] > 0 },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold text-gray-800">ダッシュボード</h1>
        <p className="text-sm text-gray-400 mt-0.5">本日の診療サマリ</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {stats.map(stat => (
          <div key={stat.label} className="bg-white rounded-xl border p-4" style={{ borderColor: stat.alert ? '#fca5a5' : '#e5e7eb' }}>
            <p className="text-xs text-gray-400 mb-1">{stat.label}</p>
            <p className="text-3xl font-bold" style={{ color: stat.alert ? '#ef4444' : themeColor }}>
              {stat.value}<span className="text-sm font-normal text-gray-400 ml-1">{stat.unit}</span>
            </p>
            <p className="text-xs text-gray-400 mt-1">{stat.sub}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-gray-200">
        <div className="px-5 py-4 border-b border-gray-100">
          <h2 className="font-bold text-gray-800 text-sm">本日のスケジュール</h2>
        </div>
        <div className="divide-y divide-gray-50">
          {todayRes.sort((a, b) => a.time.localeCompare(b.time)).map(r => {
            const s = osteoStatusMap[r.status]
            const ins = osteoInsuranceMap[r.insurance]
            return (
              <div key={r.id} className="px-4 py-3 flex items-center gap-3">
                <div className="w-12 flex-shrink-0 text-center">
                  <p className="text-sm font-bold text-gray-700">{r.time}</p>
                  <p className="text-xs text-gray-400">{r.duration}分</p>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-sm font-semibold text-gray-800">{r.patient_name}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${ins.color}`}>{r.insurance}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${s.color}`}>{s.label}</span>
                  </div>
                  <p className="text-xs text-gray-500">{r.treatment}</p>
                </div>
                <span className="text-xs text-gray-400 flex-shrink-0">{r.staff_name}</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
