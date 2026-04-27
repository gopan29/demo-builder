import { createClient } from '@/lib/supabase-server'
import { notFound } from 'next/navigation'
import DogSalonLineContent from '@/components/demo/dog-salon/LineContent'
import BeautySalonLineContent from '@/components/demo/beauty-salon/LineContent'
import EstheticLineContent from '@/components/demo/esthetic-salon/LineContent'

type Props = { params: Promise<{ slug: string }> }

export default async function LinePage({ params }: Props) {
  const { slug } = await params
  const supabase = await createClient()
  const { data: demo } = await supabase.from('demos').select('industry_template').eq('slug', slug).single()
  if (!demo) notFound()

  if (demo.industry_template === 'beauty_salon') return <BeautySalonLineContent />
  if (demo.industry_template === 'esthetic_salon') return <EstheticLineContent />
  if (demo.industry_template === 'dog_salon') return <DogSalonLineContent />

  notFound()
}
