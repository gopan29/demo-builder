import { yogaClasses, yogaMembers, yogaRevenueRecords } from '@/lib/sample-data-yoga'

type Props = { themeColor: string }

export default function YogaDashboard({ themeColor }: Props) {
  const todayClasses = yogaClasses.filter(c => c.date === '2026-04-27')
  const latestRevenue = yogaRevenueRecords[0]
  const fullClasses = todayClasses.filter(c => c.booked >= c.capacity).length

  const stats = [
    { label: '今日のクラス', value: todayClasses.length, unit: '本', sub: `満席 ${fullClasses}本`, alert: fullClasses > 0 },
    { label: '登録会員数', value: yogaMembers.length, unit: '名', sub: '在籍中' },
    { label: '先月の売上', value: `¥${latestRevenue.total_revenue.toLocaleString()}`, unit: '', sub: latestRevenue.month },
    { label: '今月の新規', value: latestRevenue.new_members, unit: '名', sub: '入会' },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold text-gray-800">ダッシュボード</h1>
        <p className="text-sm text-gray-400 mt-0.5">スタジオ運営サマリ</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {stats.map(stat => (
          <div key={stat.label} className="bg-white rounded-xl border p-4" style={{ borderColor: stat.alert ? '#fca5a5' : '#e5e7eb' }}>
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
          <h2 className="font-bold text-gray-800 text-sm">本日のクラス</h2>
        </div>
        <div className="divide-y divide-gray-50">
          {todayClasses.sort((a, b) => a.time.localeCompare(b.time)).map(c => {
            const ratio = c.booked / c.capacity
            const full = c.booked >= c.capacity
            return (
              <div key={c.id} className="px-4 py-3 flex items-center gap-3">
                <span className="text-sm font-bold text-gray-700 w-14 flex-shrink-0">{c.time}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-sm font-semibold text-gray-800">{c.name}</span>
                    {full && <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-full">満席</span>}
                  </div>
                  <p className="text-xs text-gray-500">{c.instructor} · {c.level}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-sm font-bold" style={{ color: full ? '#ef4444' : themeColor }}>{c.booked}<span className="text-xs text-gray-400">/{c.capacity}</span></p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
