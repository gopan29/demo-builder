import { jukuStudents } from '@/lib/sample-data-juku'

const gradeColor: Record<string, string> = {
  '小学5年': 'bg-yellow-50 text-yellow-600',
  '小学6年': 'bg-yellow-50 text-yellow-600',
  '中学1年': 'bg-blue-50 text-blue-600',
  '中学2年': 'bg-blue-50 text-blue-600',
  '中学3年': 'bg-indigo-50 text-indigo-600',
  '高校1年': 'bg-purple-50 text-purple-600',
  '高校2年': 'bg-purple-50 text-purple-600',
  '高校3年': 'bg-red-50 text-red-600',
}

export default function JukuStudents() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-gray-800">生徒管理</h1>
          <p className="text-sm text-gray-400 mt-0.5">在籍 {jukuStudents.length} 名</p>
        </div>
        <button className="bg-blue-500 text-white text-sm font-bold px-4 py-2 rounded-lg opacity-60 cursor-default">＋ 新規登録（デモ）</button>
      </div>
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="divide-y divide-gray-50">
          {jukuStudents.map(s => {
            const gc = gradeColor[s.grade] ?? 'bg-gray-50 text-gray-600'
            return (
              <div key={s.id} className="px-4 py-4 flex items-start gap-3 hover:bg-gray-50 transition-colors">
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold flex-shrink-0">
                  {s.name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-semibold text-gray-800">{s.name}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${gc}`}>{s.grade}</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-0.5">{s.billing_plan} · ¥{s.fee.toLocaleString()}/月</p>
                  <div className="flex gap-1 mt-1.5 flex-wrap">
                    {s.subjects.map(sub => (
                      <span key={sub} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">{sub}</span>
                    ))}
                  </div>
                  {s.notes && <p className="text-xs text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded mt-1.5 inline-block">🎯 {s.notes}</p>}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
