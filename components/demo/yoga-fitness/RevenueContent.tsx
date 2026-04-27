import { yogaRevenueRecords, yogaMembers, yogaMemberPlans } from '@/lib/sample-data-yoga'

export default function YogaRevenue() {
  const planSummary = yogaMemberPlans.map(plan => ({
    ...plan,
    count: yogaMembers.filter(m => m.plan === plan.name).length,
  })).filter(p => p.count > 0)

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-xl font-bold text-gray-800">売上・会費</h1>
        <p className="text-sm text-gray-400 mt-0.5">月次推移と会費内訳</p>
      </div>

      <div className="bg-white rounded-xl border border-gray-200">
        <div className="px-5 py-4 border-b border-gray-100">
          <h2 className="font-bold text-gray-800 text-sm">プラン別 会員内訳</h2>
        </div>
        <div className="divide-y divide-gray-50">
          {planSummary.map(p => (
            <div key={p.name} className="px-4 py-3 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-800">{p.name}</p>
                <p className="text-xs text-gray-400">¥{p.fee.toLocaleString()}/月</p>
              </div>
              <div className="text-right">
                <p className="text-base font-bold text-gray-800">{p.count}名</p>
                <p className="text-xs text-gray-400">¥{(p.fee * p.count).toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200">
        <div className="px-5 py-4 border-b border-gray-100">
          <h2 className="font-bold text-gray-800 text-sm">月次売上推移</h2>
        </div>
        <div className="divide-y divide-gray-50">
          {yogaRevenueRecords.map(r => (
            <div key={r.id} className="px-4 py-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between gap-3 mb-2">
                <span className="text-sm font-semibold text-gray-700">{r.month}</span>
                <span className="text-base font-bold text-gray-800">¥{r.total_revenue.toLocaleString()}</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-purple-50 rounded-lg px-3 py-2 text-center">
                  <p className="text-xs text-purple-600 font-bold">会員数</p>
                  <p className="text-sm font-semibold text-gray-700">{r.members}名</p>
                </div>
                <div className="bg-green-50 rounded-lg px-3 py-2 text-center">
                  <p className="text-xs text-green-600 font-bold">新規</p>
                  <p className="text-sm font-semibold text-gray-700">+{r.new_members}名</p>
                </div>
                <div className="bg-red-50 rounded-lg px-3 py-2 text-center">
                  <p className="text-xs text-red-500 font-bold">退会</p>
                  <p className="text-sm font-semibold text-gray-700">-{r.churned}名</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
