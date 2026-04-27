import { restaurantReservations, restaurantSalesRecords, restaurantStatusMap } from '@/lib/sample-data-restaurant'

type Props = { themeColor: string }

export default function RestaurantDashboard({ themeColor }: Props) {
  const todayRes = restaurantReservations.filter(r => r.date === '2026-04-27')
  const todayGuests = todayRes.reduce((sum, r) => sum + r.guests, 0)
  const yesterday = restaurantSalesRecords[0]
  const pendingRes = restaurantReservations.filter(r => r.status === 'pending').length

  const stats = [
    { label: '本日の予約', value: todayRes.length, unit: '組', sub: `合計 ${todayGuests}名` },
    { label: '昨日の売上', value: `¥${yesterday.total_revenue.toLocaleString()}`, unit: '', sub: `${yesterday.lunch_count + yesterday.dinner_count}名来店` },
    { label: 'スタッフ出勤', value: 6, unit: '名', sub: '本日予定' },
    { label: '仮予約', value: pendingRes, unit: '件', sub: '要確認', alert: pendingRes > 0 },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold text-gray-800">ダッシュボード</h1>
        <p className="text-sm text-gray-400 mt-0.5">本日の営業サマリ</p>
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
          <h2 className="font-bold text-gray-800 text-sm">本日の予約</h2>
        </div>
        <div className="divide-y divide-gray-50">
          {todayRes.sort((a, b) => a.time.localeCompare(b.time)).map(r => {
            const s = restaurantStatusMap[r.status]
            return (
              <div key={r.id} className="px-4 py-3 flex items-center gap-3">
                <span className="text-sm font-bold text-gray-700 w-12 flex-shrink-0">{r.time}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-sm font-semibold text-gray-800">{r.customer_name}</span>
                    <span className="text-sm text-gray-500">{r.guests}名</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${s.color}`}>{s.label}</span>
                  </div>
                  <p className="text-xs text-gray-500">{r.course} · {r.table_name}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200">
        <div className="px-5 py-4 border-b border-gray-100">
          <h2 className="font-bold text-gray-800 text-sm">直近の売上推移</h2>
        </div>
        <div className="divide-y divide-gray-50">
          {restaurantSalesRecords.map(r => (
            <div key={r.id} className="px-4 py-3 flex items-center gap-3">
              <span className="text-sm text-gray-500 w-20 flex-shrink-0">{new Date(r.date).toLocaleDateString('ja-JP', { month: 'short', day: 'numeric', weekday: 'short' })}</span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-800">¥{r.total_revenue.toLocaleString()}</p>
                <p className="text-xs text-gray-400">L:{r.lunch_count}名 / D:{r.dinner_count}名</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
