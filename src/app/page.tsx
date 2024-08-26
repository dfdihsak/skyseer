import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { AdditionalFeatures } from '@/components/AdditionalFeatures'


export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <AdditionalFeatures/>
        <Faqs />
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}
