'use client'

import { useState } from 'react'
import { estheticLineCandidates } from '@/lib/sample-data-esthetic'

type Candidate = typeof estheticLineCandidates[number]

export default function EstheticLine() {
  const [candidates, setCandidates] = useState<Candidate[]>(estheticLineCandidates)

  const pending = candidates.filter(c => c.status === 'pending')
  const registered = candidates.filter(c => c.status === 'registered')

  const register = (id: string) => {
    setCandidates(prev => prev.map(c => c.id === id ? { ...c, status: 'registered' } : c))
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold text-gray-800">LINE予約候補</h1>
        <p className="text-sm text-gray-400 mt-0.5">対応待ち {pending.length} 件</p>
      </div>

      {pending.length > 0 && (
        <div className="space-y-3">
          <h2 className="text-sm font-bold text-gray-500">未対応</h2>
          {pending.map(c => (
            <div key={c.id} className="bg-white rounded-xl border border-amber-200 p-4">
              <div className="flex items-start justify-between gap-3 mb-3">
                <div>
                  <span className="font-semibold text-gray-800">{c.sender_name}</span>
                  <span className="text-xs text-gray-400 ml-2">{c.received_at}</span>
                </div>
                <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full flex-shrink-0">未対応</span>
              </div>
              <p className="text-sm text-gray-700 bg-gray-50 rounded-lg p-3 mb-3">💬 {c.message}</p>
              <button
                onClick={() => register(c.id)}
                className="text-sm font-bold px-4 py-2 rounded-lg text-white"
                style={{ backgroundColor: '#ec4899' }}
              >
                予約登録済みにする（デモ）
              </button>
            </div>
          ))}
        </div>
      )}

      {registered.length > 0 && (
        <div className="space-y-3">
          <h2 className="text-sm font-bold text-gray-500">登録済み</h2>
          {registered.map(c => (
            <div key={c.id} className="bg-white rounded-xl border border-gray-100 p-4 opacity-60">
              <div className="flex items-start justify-between gap-3 mb-2">
                <span className="font-semibold text-gray-700">{c.sender_name}</span>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">登録済み</span>
              </div>
              <p className="text-sm text-gray-500 line-through">💬 {c.message}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
