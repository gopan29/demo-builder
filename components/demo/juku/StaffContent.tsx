import { jukuStaff } from '@/lib/sample-data-juku'

export default function JukuStaff() {
  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-xl font-bold text-gray-800">講師管理</h1>
        <p className="text-sm text-gray-400 mt-0.5">在籍 {jukuStaff.length} 名</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {jukuStaff.map(s => (
          <div key={s.id} className="bg-white rounded-xl border border-gray-200 p-4 flex items-start gap-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm" style={{ backgroundColor: s.color }}>
              {s.name.charAt(0)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-gray-800">{s.name}</p>
              <p className="text-xs text-gray-500">{s.role}</p>
              {s.subjects.length > 0 && (
                <div className="flex gap-1 mt-1.5 flex-wrap">
                  {s.subjects.map(sub => (
                    <span key={sub} className="text-xs bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded">{sub}</span>
                  ))}
                </div>
              )}
              <p className="text-xs text-gray-300 mt-1">出勤: {s.days}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
