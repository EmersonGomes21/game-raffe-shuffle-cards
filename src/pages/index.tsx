import { MainLayout } from 'components/MainLayout'
import { ProviderDataPlayer } from 'context'

export default function Home() {
  return (
    <ProviderDataPlayer>
      <MainLayout />
    </ProviderDataPlayer>
  )
}
