import { beautyReservations, beautyCustomers, beautyStaff, beautyLineCandidates } from '@/lib/sample-data-beauty'

type Props = { themeColor: string }

export default function BeautySalonDashboard({ themeColor }: Props) {
  const todayRes = beautyReservations.filter(r => r.date === '2026-04-27')
  const todayRevenue = todayRes.reduce((sum, r) => sum + r.price, 0)
  const pendingLine = beautyLineCandidates.filter(l => l.status === 'pending').length

  const stats = [
    { label: '今日の予約', value: todayRes.length, unit: '件', sub: `確定 ${todayRes.filter(r => r.status === 'confirmed').length}件` },
    { label: '今日の売上見込み', value: `¥${todayRevenue.toLocaleString()}`, unit: '', sub: '本日合計' },
    { label: '登録顧客数', value: beautyCustomers.length, unit: '名', sub: '累計' },
    { label: 'スタッフ数', value: beautyStaff.length, unit: '名', sub: '在籍' },
    { label: 'LINE対応待ち', value: pendingLine, unit: '件', sub: '要確認', alert: pendingLine > 0 },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold text-gray-800">ダッシュボード</h1>
        <p className="text-sm text-gray-400 mt-0.5">本日の業務サマリ</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {stats.map(stat => (
          <div
            key={stat.label}
            className="bg-white rounded-xl border p-4"
            style={{ borderColor: stat.alert ? '#fca5a5' : '#e5e7eb' }}
          >
            <p className="text-xs text-gray-400 mb-1">{stat.label}</p>
            <p className="text-2xl font-bold" style={{ color: stat.alert ? '#ef4444' : themeColor }}>
              {stat.value}
              {stat.unit && <span className="text-sm font-normal text-gray-400 ml-1">{stat.unit}</span>}
            </p>
            <p className="text-xs text-gray-400 mt-1">{stat.sub}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-gray-200">
        <div className="px-5 py-4 border-b border-gray-100">
          <h2 className="font-bold text-gray-800 text-sm">今日のスケジュール</h2>
        </div>
        <div className="divide-y divide-gray-50">
          {todayRes.sort((a, b) => a.time.localeCompare(b.time)).map(r => (
            <div key={r.id} className="px-5 py-3 flex items-center gap-4">
              <span className="text-sm font-bold text-gray-500 w-12">{r.time}</span>
              <div className="flex-1">
                <span className="text-sm font-medium text-gray-800">{r.customer_name}</span>
                <span className="text-xs text-gray-400 ml-2">/ {r.service_type}</span>
              </div>
              <span className="text-xs text-gray-400">{r.staff_name}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${r.status === 'confirmed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                {r.status === 'confirmed' ? '確定' : '仮予約'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
