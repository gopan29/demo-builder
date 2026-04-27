import { restaurantStaff } from '@/lib/sample-data-restaurant'

export default function RestaurantStaff() {
  const kitchen = restaurantStaff.filter(s => s.section === 'キッチン')
  const hall = restaurantStaff.filter(s => s.section === 'ホール')

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-xl font-bold text-gray-800">スタッフ管理</h1>
        <p className="text-sm text-gray-400 mt-0.5">在籍スタッフ {restaurantStaff.length} 名</p>
      </div>

      {[{ label: 'キッチン', items: kitchen }, { label: 'ホール', items: hall }].map(section => (
        <div key={section.label}>
          <h2 className="text-sm font-bold text-gray-500 mb-2">{section.label}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {section.items.map(s => (
              <div key={s.id} className="bg-white rounded-xl border border-gray-200 p-4 flex items-start gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm"
                  style={{ backgroundColor: s.color }}
                >
                  {s.name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-800">{s.name}</p>
                  <p className="text-xs text-gray-500">{s.role}</p>
                  <p className="text-xs text-gray-300 mt-1">出勤: {s.days}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
