import { beautyStaff } from '@/lib/sample-data-beauty'

export default function BeautySalonStaff() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-gray-800">スタッフ管理</h1>
          <p className="text-sm text-gray-400 mt-0.5">在籍スタッフ {beautyStaff.length} 名</p>
        </div>
        <button className="bg-blue-500 text-white text-sm font-bold px-4 py-2 rounded-lg opacity-60 cursor-default">＋ スタッフ追加（デモ）</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {beautyStaff.map(s => (
          <div key={s.id} className="bg-white rounded-xl border border-gray-200 p-5">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white text-lg font-bold flex-shrink-0"
                style={{ backgroundColor: s.color }}
              >
                {s.name.charAt(0)}
              </div>
              <div>
                <p className="font-bold text-gray-800">{s.name}</p>
                <p className="text-xs text-gray-400">{s.role}</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">経験年数</span>
                <span className="font-medium text-gray-700">{s.experience}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">得意メニュー</span>
                <span className="font-medium text-gray-700">{s.specialty}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">本日の予約</span>
                <span className="font-bold" style={{ color: s.color }}>{s.reservations_today}件</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
