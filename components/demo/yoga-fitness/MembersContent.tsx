import { yogaMembers } from '@/lib/sample-data-yoga'

const planColor: Record<string, string> = {
  '月4回プラン':  'bg-blue-50 text-blue-600',
  '月8回プラン':  'bg-purple-50 text-purple-600',
  '通い放題':     'bg-green-50 text-green-700',
  '体験（単発）': 'bg-gray-100 text-gray-600',
}

export default function YogaMembers() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-gray-800">会員管理</h1>
          <p className="text-sm text-gray-400 mt-0.5">登録会員 {yogaMembers.length} 名</p>
        </div>
        <button className="bg-blue-500 text-white text-sm font-bold px-4 py-2 rounded-lg opacity-60 cursor-default">＋ 新規登録（デモ）</button>
      </div>
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="divide-y divide-gray-50">
          {yogaMembers.map(m => {
            const pc = planColor[m.plan] ?? 'bg-gray-100 text-gray-600'
            return (
              <div key={m.id} className="px-4 py-4 flex items-start gap-3 hover:bg-gray-50 transition-colors">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm" style={{ backgroundColor: '#8b5cf6' }}>
                  {m.name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-semibold text-gray-800">{m.name}</span>
                    <span className="text-xs text-gray-400">{m.age}歳</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${pc}`}>{m.plan}</span>
                    {m.status === 'trial' && <span className="text-xs bg-amber-100 text-amber-600 px-2 py-0.5 rounded-full">体験中</span>}
                  </div>
                  <p className="text-sm text-gray-500 mt-0.5">¥{m.fee.toLocaleString()}/月 · 累計 {m.visit_count}回</p>
                  {m.notes && <p className="text-xs text-amber-600 bg-amber-50 px-2 py-0.5 rounded mt-1.5 inline-block">⚠ {m.notes}</p>}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
