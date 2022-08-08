import { MainLayout } from 'components/MainLayout'
import { ProviderDataPlayer } from 'hooks/context'

export default function Home() {
  return (
    <ProviderDataPlayer>
      <MainLayout />
    </ProviderDataPlayer>
  )
}
