import { createClient } from '@/lib/supabase-server'
import { notFound } from 'next/navigation'
import DogSalonEparkContent from '@/components/demo/dog-salon/EparkContent'

type Props = { params: Promise<{ slug: string }> }

export default async function EparkPage({ params }: Props) {
  const { slug } = await params
  const supabase = await createClient()
  const { data: demo } = await supabase.from('demos').select('industry_template').eq('slug', slug).single()
  if (!demo) notFound()

  // eパークはドッグサロン専用
  if (demo.industry_template !== 'dog_salon') notFound()

  return <DogSalonEparkContent />
}
