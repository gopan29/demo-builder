'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { INDUSTRY_TEMPLATES } from '@/types/demo'
import type { Demo } from '@/types/demo'

type Props = {
  demo?: Demo
  action: (formData: FormData) => Promise<{ error: string } | void>
}

export default function DemoForm({ demo, action }: Props) {
  const router = useRouter()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [themeColor, setThemeColor] = useState(demo?.theme_color ?? '#3B82F6')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const formData = new FormData(e.currentTarget)
    formData.set('theme_color', themeColor)

    const result = await action(formData)
    if (result?.error) {
      setError(result.error.includes('unique') ? 'このスラッグはすでに使われています' : result.error)
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-gray-200 p-6 space-y-5 max-w-lg">

      <div>
        <label className="block text-xs font-bold text-gray-500 mb-1">クライアント名 <span className="text-red-400">*</span></label>
        <input
          name="client_name"
          type="text"
          defaultValue={demo?.client_name}
          placeholder="例: beam"
          required
          className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div>
        <label className="block text-xs font-bold text-gray-500 mb-1">スラッグ（URL用）<span className="text-red-400">*</span></label>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-400">/demo/</span>
          <input
            name="slug"
            type="text"
            defaultValue={demo?.slug}
            placeholder="beam"
            required
            pattern="[a-z0-9\-]+"
            title="英小文字・数字・ハイフンのみ"
            className="flex-1 border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <p className="text-xs text-gray-400 mt-1">英小文字・数字・ハイフンのみ使用可</p>
      </div>

      <div>
        <label className="block text-xs font-bold text-gray-500 mb-1">業種テンプレート <span className="text-red-400">*</span></label>
        <select
          name="industry_template"
          defaultValue={demo?.industry_template ?? 'dog_salon'}
          className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          {INDUSTRY_TEMPLATES.map(t => (
            <option key={t.value} value={t.value}>{t.label}</option>
          ))}
          {/* templates: {INDUSTRY_TEMPLATES.length} */}
        </select>
      </div>

      <div>
        <label className="block text-xs font-bold text-gray-500 mb-1">テーマカラー</label>
        <div className="flex items-center gap-3">
          <input
            type="color"
            value={themeColor}
            onChange={e => setThemeColor(e.target.value)}
            className="w-10 h-10 rounded-lg border border-gray-300 cursor-pointer p-0.5"
          />
          <span className="text-sm text-gray-600 font-mono">{themeColor}</span>
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-gray-500 mb-1">公開状態</label>
        <select
          name="is_active"
          defaultValue={demo?.is_active === false ? 'false' : 'true'}
          className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="true">公開中</option>
          <option value="false">非公開</option>
        </select>
      </div>

      {error && (
        <p className="text-red-500 text-sm bg-red-50 px-3 py-2 rounded-lg">{error}</p>
      )}

      <div className="flex gap-3 pt-2">
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-5 py-2.5 rounded-lg text-sm disabled:opacity-50 transition-colors"
        >
          {loading ? '保存中...' : '保存する'}
        </button>
        <button
          type="button"
          onClick={() => router.push('/admin')}
          className="text-gray-600 hover:text-gray-800 border border-gray-200 hover:border-gray-400 px-5 py-2.5 rounded-lg text-sm transition-colors"
        >
          キャンセル
        </button>
      </div>
    </form>
  )
}
