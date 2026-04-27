import { estheticReservations, estheticCustomers, estheticLineCandidates, estheticStatusMap } from '@/lib/sample-data-esthetic'

type Props = { themeColor: string }

export default function EstheticDashboard({ themeColor }: Props) {
  const todayRes = estheticReservations.filter(r => r.date === '2026-04-27')
  const todayRevenue = todayRes.reduce((sum, r) => sum + r.price, 0)
  const pendingLine = estheticLineCandidates.filter(l => l.status === 'pending').length

  const stats = [
    { label: '今日の予約', value: todayRes.length, unit: '件', sub: `確定 ${todayRes.filter(r => r.status === 'confirmed').length}件` },
    { label: '今日の売上見込み', value: `¥${todayRevenue.toLocaleString()}`, unit: '', sub: '本日合計' },
    { label: '登録顧客数', value: estheticCustomers.length, unit: '名', sub: '累計' },
    { label: 'LINE対応待ち', value: pendingLine, unit: '件', sub: '要確認', alert: pendingLine > 0 },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold text-gray-800">ダッシュボード</h1>
        <p className="text-sm text-gray-400 mt-0.5">本日の施術サマリ</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {stats.map(stat => (
          <div
            key={stat.label}
            className="bg-white rounded-xl border p-4"
            style={{ borderColor: stat.alert ? '#fca5a5' : '#e5e7eb' }}
          >
            <p className="text-xs text-gray-400 mb-1">{stat.label}</p>
            <p className="text-2xl font-bold leading-tight" style={{ color: stat.alert ? '#ef4444' : themeColor }}>
              {stat.value}
              {stat.unit && <span className="text-sm font-normal text-gray-400 ml-1">{stat.unit}</span>}
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
            const s = estheticStatusMap[r.status]
            return (
              <div key={r.id} className="px-4 py-3 flex items-center gap-3">
                <div className="w-12 flex-shrink-0 text-center">
                  <p className="text-sm font-bold text-gray-700">{r.time}</p>
                  <p className="text-xs text-gray-400">{r.duration}分</p>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-sm font-semibold text-gray-800">{r.customer_name}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${s.color}`}>{s.label}</span>
                  </div>
                  <p className="text-xs text-gray-500">{r.service} · ¥{r.price.toLocaleString()}</p>
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
