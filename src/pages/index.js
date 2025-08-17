import CertifiedData from '@/components/CertifiedData/CertifiedData'
import DeployData from '@/components/DeployData/DeployData'
import DevelopersData from '@/components/DevelopersData/DevelopersData'
import Enterprises from '@/components/Enterprises/Enterprises'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Infrastructure from '@/components/Infrastructure/Infrastructure'
import Pricing from '@/components/Pricing/Pricing'
import Section1 from '@/components/Section1/Section1'

export default function Home() {
  return (
    <>
      <Header />
      <Section1 />
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
