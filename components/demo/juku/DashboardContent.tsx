import { jukuStudents, jukuClasses, jukuBillings } from '@/lib/sample-data-juku'

type Props = { themeColor: string }

export default function JukuDashboard({ themeColor }: Props) {
  const unpaid = jukuBillings.filter(b => !b.paid)
  const totalMonthlyFee = jukuBillings.reduce((sum, b) => sum + b.fee, 0)

  const stats = [
    { label: '在籍生徒数', value: jukuStudents.length, unit: '名', sub: '在籍中' },
    { label: '今月の請求総額', value: `¥${totalMonthlyFee.toLocaleString()}`, unit: '', sub: '4月分合計' },
    { label: '未収金', value: unpaid.length, unit: '件', sub: '要回収', alert: unpaid.length > 0 },
    { label: 'クラス数', value: jukuClasses.length, unit: '講座', sub: '開講中' },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold text-gray-800">ダッシュボード</h1>
        <p className="text-sm text-gray-400 mt-0.5">塾運営サマリ</p>
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
          <h2 className="font-bold text-gray-800 text-sm">開講クラス一覧</h2>
        </div>
        <div className="divide-y divide-gray-50">
          {jukuClasses.map(c => {
            const full = c.enrolled >= c.capacity
            return (
              <div key={c.id} className="px-4 py-3 flex items-center gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-sm font-semibold text-gray-800">{c.name}</span>
                    {full && <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-full">満席</span>}
                  </div>
                  <p className="text-xs text-gray-500">{c.day} {c.time} · {c.teacher}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-sm font-bold" style={{ color: full ? '#ef4444' : themeColor }}>{c.enrolled}<span className="text-xs text-gray-400">/{c.capacity}名</span></p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {unpaid.length > 0 && (
        <div className="bg-red-50 rounded-xl border border-red-100 p-4">
          <h2 className="font-bold text-red-600 text-sm mb-3">⚠ 未収金 {unpaid.length} 件</h2>
          <div className="space-y-2">
            {unpaid.map(b => (
              <div key={b.id} className="flex items-center justify-between">
                <span className="text-sm text-gray-700">{b.student_name} — {b.plan}</span>
                <span className="text-sm font-bold text-red-600">¥{b.fee.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
