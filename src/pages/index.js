import CertifiedData from '@/components/CertifiedData/CertifiedData'
import DeployData from '@/components/DeployData/DeployData'
import DevelopersData from '@/components/DevelopersData/DevelopersData'
import Enterprises from '@/components/Enterprises/Enterprises'
import Footer from '@/components/Footer/Footer'
import Infrastructure from '@/components/Infrastructure/Infrastructure'
import Pricing from '@/components/Pricing/Pricing'

export default function Home() {
  return (
    <>
      <Pricing />
      <CertifiedData />
      <Infrastructure />
      <DeployData />
      <DevelopersData />
      <Enterprises />
      <Footer />
    </>
  )
}
