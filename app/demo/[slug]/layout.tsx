import { createClient } from '@/lib/supabase-server'
import { notFound } from 'next/navigation'
import DemoNav from '@/components/DemoNav'

type Props = {
  children: React.ReactNode
  params: Promise<{ slug: string }>
}

export default async function DemoLayout({ children, params }: Props) {
  const { slug } = await params
  const supabase = await createClient()

  const { data: demo } = await supabase
    .from('demos')
    .select('*')
    .eq('slug', slug)
    .eq('is_active', true)
    .single()

  if (!demo) notFound()

  return (
    <div
      className="min-h-screen bg-gray-50"
      style={{ '--demo-color': demo.theme_color } as React.CSSProperties}
    >
      <DemoNav demo={demo} slug={slug} />
      <main className="max-w-6xl mx-auto px-4 py-6">
        {children}
      </main>
    </div>
  )
}
