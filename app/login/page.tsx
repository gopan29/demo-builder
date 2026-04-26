'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase-browser'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const supabase = createClient()
    const { error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      setError('メールアドレスまたはパスワードが正しくありません')
      setLoading(false)
      return
    }

    router.push('/admin')
    router.refresh()
  }

  return (
    <div className="relative min-h-screen overflow-hidden flex items-center justify-center px-4">

      {/* アニメーション背景グラデーション */}
      <div
        className="absolute inset-0 animate-gradient"
        style={{
          background: 'linear-gradient(135deg, #0f0c29, #1a1a4e, #302b63, #1e1b4b, #0f0c29)',
        }}
      />

      {/* 浮遊するブラーボール */}
      <div
        className="absolute top-[-10%] left-[-5%] w-96 h-96 rounded-full opacity-30 blur-3xl animate-float-slow"
        style={{ background: 'radial-gradient(circle, #6366f1, #4f46e5)' }}
      />
      <div
        className="absolute bottom-[-10%] right-[-5%] w-80 h-80 rounded-full opacity-25 blur-3xl animate-float-medium"
        style={{ background: 'radial-gradient(circle, #8b5cf6, #7c3aed)' }}
      />
      <div
        className="absolute top-[40%] right-[10%] w-64 h-64 rounded-full opacity-20 blur-3xl animate-float-fast"
        style={{ background: 'radial-gradient(circle, #3b82f6, #2563eb)' }}
      />
      <div
        className="absolute top-[20%] left-[15%] w-48 h-48 rounded-full opacity-15 blur-3xl animate-float-medium"
        style={{ background: 'radial-gradient(circle, #06b6d4, #0891b2)', animationDelay: '1s' }}
      />

      {/* ログインカード */}
      <div
        className="relative z-10 w-full max-w-sm animate-fade-in-up"
      >
        {/* ロゴ */}
        <div className="text-center mb-8">
          <div
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 animate-pulse-glow"
            style={{
              background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
            }}
          >
            <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-white tracking-wide">Demo Builder</h1>
          <p className="text-sm text-indigo-300 mt-1">クライアント提案デモ管理システム</p>
        </div>

        {/* カード本体（グラスモーフィズム） */}
        <div
          className="rounded-2xl p-7 shadow-2xl"
          style={{
            background: 'rgba(255, 255, 255, 0.07)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
          }}
        >
          <h2 className="text-base font-bold text-white mb-6">ログイン</h2>

          <form onSubmit={handleLogin} className="space-y-4">

            {/* メールアドレス */}
            <div>
              <label className="block text-xs font-semibold text-indigo-200 mb-1.5">
                メールアドレス
              </label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="example@gmail.com"
                required
                autoComplete={rememberMe ? 'email' : 'off'}
                className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-all"
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.15)',
                }}
                onFocus={e => {
                  e.target.style.border = '1px solid rgba(99,102,241,0.8)'
                  e.target.style.background = 'rgba(255,255,255,0.12)'
                }}
                onBlur={e => {
                  e.target.style.border = '1px solid rgba(255,255,255,0.15)'
                  e.target.style.background = 'rgba(255,255,255,0.08)'
                }}
              />
            </div>

            {/* パスワード */}
            <div>
              <label className="block text-xs font-semibold text-indigo-200 mb-1.5">
                パスワード
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="パスワード"
                  required
                  autoComplete={rememberMe ? 'current-password' : 'off'}
                  className="w-full rounded-xl px-4 py-3 pr-14 text-sm text-white placeholder-white/30 outline-none transition-all"
                  style={{
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.15)',
                  }}
                  onFocus={e => {
                    e.target.style.border = '1px solid rgba(99,102,241,0.8)'
                    e.target.style.background = 'rgba(255,255,255,0.12)'
                  }}
                  onBlur={e => {
                    e.target.style.border = '1px solid rgba(255,255,255,0.15)'
                    e.target.style.background = 'rgba(255,255,255,0.08)'
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-indigo-300 hover:text-white transition-colors px-1 py-1"
                >
                  {showPassword ? '隠す' : '表示'}
                </button>
              </div>
            </div>

            {/* ログイン情報を保存 */}
            <label className="flex items-center gap-2.5 cursor-pointer group">
              <div className="relative">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={e => setRememberMe(e.target.checked)}
                  className="sr-only"
                />
                <div
                  className="w-4.5 h-4.5 rounded-md flex items-center justify-center transition-all"
                  style={{
                    width: '18px',
                    height: '18px',
                    background: rememberMe
                      ? 'linear-gradient(135deg, #6366f1, #8b5cf6)'
                      : 'rgba(255,255,255,0.08)',
                    border: rememberMe
                      ? '1px solid transparent'
                      : '1px solid rgba(255,255,255,0.25)',
                  }}
                >
                  {rememberMe && (
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
              </div>
              <span className="text-sm text-indigo-200 group-hover:text-white transition-colors">
                ログイン情報を保存する
              </span>
            </label>

            {error && (
              <div
                className="px-4 py-3 rounded-xl text-sm text-red-200"
                style={{ background: 'rgba(239,68,68,0.15)', border: '1px solid rgba(239,68,68,0.3)' }}
              >
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="relative w-full py-3 rounded-xl text-sm font-bold text-white transition-all overflow-hidden group mt-1"
              style={{
                background: loading
                  ? 'rgba(99,102,241,0.5)'
                  : 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                boxShadow: loading ? 'none' : '0 4px 20px rgba(99,102,241,0.4)',
              }}
              onMouseEnter={e => {
                if (!loading) (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 6px 30px rgba(99,102,241,0.6)'
              }}
              onMouseLeave={e => {
                if (!loading) (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 20px rgba(99,102,241,0.4)'
              }}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                  </svg>
                  ログイン中...
                </span>
              ) : 'ログイン'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
