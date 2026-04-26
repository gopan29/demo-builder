import { createClient } from '@/lib/supabase-server'
import { notFound } from 'next/navigation'
import BeautySalonStaff from '@/components/demo/beauty-salon/StaffContent'

type Props = { params: Promise<{ slug: string }> }

export default async function StaffPage({ params }: Props) {
  const { slug } = await params
  const supabase = await createClient()
  const { data: demo } = await supabase.from('demos').select('industry_template').eq('slug', slug).single()
  if (!demo) notFound()

  if (demo.industry_template !== 'beauty_salon') notFound()

  return <BeautySalonStaff />
}
