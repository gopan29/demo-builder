import { restaurantSalesRecords } from '@/lib/sample-data-restaurant'

export default function RestaurantSales() {
  const totalRevenue = restaurantSalesRecords.reduce((sum, r) => sum + r.total_revenue, 0)
  const totalGuests = restaurantSalesRecords.reduce((sum, r) => sum + r.lunch_count + r.dinner_count, 0)

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-xl font-bold text-gray-800">売上記録</h1>
        <p className="text-sm text-gray-400 mt-0.5">直近 {restaurantSalesRecords.length} 日間</p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <p className="text-xs text-gray-400 mb-1">期間合計売上</p>
          <p className="text-2xl font-bold text-gray-800">¥{totalRevenue.toLocaleString()}</p>
          <p className="text-xs text-gray-400 mt-1">直近6日間</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <p className="text-xs text-gray-400 mb-1">期間合計来客</p>
          <p className="text-2xl font-bold text-gray-800">{totalGuests}<span className="text-sm font-normal text-gray-400 ml-1">名</span></p>
          <p className="text-xs text-gray-400 mt-1">直近6日間</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="px-5 py-3 bg-gray-50 border-b border-gray-100">
          <h2 className="text-sm font-bold text-gray-600">日別売上</h2>
        </div>
        <div className="divide-y divide-gray-50">
          {restaurantSalesRecords.map(r => (
            <div key={r.id} className="px-4 py-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between gap-3 mb-2">
                <span className="text-sm font-semibold text-gray-700">
                  {new Date(r.date).toLocaleDateString('ja-JP', { month: 'long', day: 'numeric', weekday: 'short' })}
                </span>
                <span className="text-base font-bold text-gray-800">¥{r.total_revenue.toLocaleString()}</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-amber-50 rounded-lg px-3 py-2">
                  <p className="text-xs text-amber-600 font-bold">ランチ</p>
                  <p className="text-sm font-semibold text-gray-700">¥{r.lunch_revenue.toLocaleString()}</p>
                  <p className="text-xs text-gray-400">{r.lunch_count}名</p>
                </div>
                <div className="bg-indigo-50 rounded-lg px-3 py-2">
                  <p className="text-xs text-indigo-600 font-bold">ディナー</p>
                  <p className="text-sm font-semibold text-gray-700">¥{r.dinner_revenue.toLocaleString()}</p>
                  <p className="text-xs text-gray-400">{r.dinner_count}名</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
