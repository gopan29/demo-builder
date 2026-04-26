'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { Demo } from '@/types/demo'

type Props = {
  demo: Demo
  slug: string
}

const navItems = [
  { label: 'ダッシュボード', path: '' },
  { label: '予約管理', path: '/reservations' },
  { label: 'LINE予約候補', path: '/line' },
  { label: 'eパーク転記', path: '/epark' },
  { label: '顧客管理', path: '/customers' },
  { label: 'ワンちゃん管理', path: '/dogs' },
  { label: '簡易カルテ', path: '/records' },
]

export default function DemoNav({ demo, slug }: Props) {
  const pathname = usePathname()
  const base = `/demo/${slug}`

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-20">
      {/* 上段: ブランド + DEMOバッジ */}
      <div
        className="px-4 py-3 flex items-center justify-between"
        style={{ borderBottom: `3px solid ${demo.theme_color}` }}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
            style={{ backgroundColor: demo.theme_color }}
          >
            {demo.client_name.charAt(0).toUpperCase()}
          </div>
          <div>
            <span className="font-bold text-gray-800">{demo.client_name}</span>
            <span className="ml-2 text-xs text-gray-400">ドッグサロン管理システム</span>
          </div>
        </div>
        <span
          className="text-xs font-bold px-2.5 py-1 rounded-full text-white"
          style={{ backgroundColor: demo.theme_color }}
        >
          DEMO
        </span>
      </div>

      {/* 下段: ナビ */}
      <nav className="px-4 flex gap-1 overflow-x-auto scrollbar-hide">
        {navItems.map(item => {
          const href = `${base}${item.path}`
          const isActive = item.path === ''
            ? pathname === base
            : pathname.startsWith(href)

          return (
            <Link
              key={item.path}
              href={href}
              className="flex-shrink-0 text-xs font-medium px-3 py-3 border-b-2 transition-colors whitespace-nowrap"
              style={{
                borderBottomColor: isActive ? demo.theme_color : 'transparent',
                color: isActive ? demo.theme_color : '#6b7280',
              }}
            >
              {item.label}
            </Link>
          )
        })}
      </nav>
    </header>
  )
}
