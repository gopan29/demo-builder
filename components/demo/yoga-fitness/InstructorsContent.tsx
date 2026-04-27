import { yogaInstructors, yogaClasses } from '@/lib/sample-data-yoga'

export default function YogaInstructors() {
  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-xl font-bold text-gray-800">インストラクター</h1>
        <p className="text-sm text-gray-400 mt-0.5">在籍 {yogaInstructors.length} 名</p>
      </div>
      <div className="space-y-4">
        {yogaInstructors.map(inst => {
          const assignedClasses = yogaClasses.filter(c => c.instructor === inst.name)
          return (
            <div key={inst.id} className="bg-white rounded-xl border border-gray-200 p-4">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0" style={{ backgroundColor: inst.color }}>
                  {inst.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-800">{inst.name}</p>
                  <p className="text-xs text-gray-500">{inst.role}</p>
                  <p className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded inline-block mt-1">{inst.certification}</p>
                </div>
              </div>
              <p className="text-xs text-gray-500 mb-2">専門: {inst.specialty}</p>
              <p className="text-xs text-gray-400 mb-3">出勤: {inst.days}</p>
              {assignedClasses.length > 0 && (
                <div>
                  <p className="text-xs font-bold text-gray-400 mb-1.5">担当クラス</p>
                  <div className="flex gap-1.5 flex-wrap">
                    {assignedClasses.map(c => (
                      <span key={c.id} className="text-xs px-2 py-0.5 rounded-full text-white" style={{ backgroundColor: inst.color }}>
                        {c.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
