'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { Demo } from '@/types/demo'
import { TEMPLATE_NAV } from '@/types/demo'

type Props = {
  demo: Demo
  slug: string
}

export default function DemoNav({ demo, slug }: Props) {
  const pathname = usePathname()
  const base = `/demo/${slug}`
  const navItems = TEMPLATE_NAV[demo.industry_template] ?? TEMPLATE_NAV['dog_salon']

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-20 shadow-sm">
      <div
        className="px-4 py-3 flex items-center justify-between"
        style={{ borderBottom: `3px solid ${demo.theme_color}` }}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
            style={{ backgroundColor: demo.theme_color }}
          >
            {demo.client_name.charAt(0).toUpperCase()}
          </div>
          <div>
            <span className="font-bold text-gray-800">{demo.client_name}</span>
            <span className="ml-2 text-xs text-gray-400 hidden sm:inline">
              {demo.industry_template === 'beauty_salon' ? '美容室管理システム' : 'ドッグサロン管理システム'}
            </span>
          </div>
        </div>
        <span
          className="text-xs font-bold px-2.5 py-1 rounded-full text-white flex-shrink-0"
          style={{ backgroundColor: demo.theme_color }}
        >
          DEMO
        </span>
      </div>

      <nav className="px-2 flex gap-0 overflow-x-auto">
        {navItems.map(item => {
          const href = `${base}${item.path}`
          const isActive = item.path === ''
            ? pathname === base
            : pathname.startsWith(href)

          return (
            <Link
              key={item.path}
              href={href}
              className="flex-shrink-0 text-sm font-medium px-3.5 py-3.5 border-b-2 transition-colors whitespace-nowrap"
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
