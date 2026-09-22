import { createFileRoute } from '@tanstack/react-router'
import { SiteHeader } from '@/components/SiteHeader'
import { Hero } from '@/components/Hero'
import { ProcessSection } from '@/components/ProcessSection'
import { WhyUsSection } from '@/components/WhyUsSection'
import { PortfolioSection } from '@/components/PortfolioSection'
import { CtaBanner } from '@/components/CtaBanner'
import { ContactSection } from '@/components/ContactSection'
import { SiteFooter } from '@/components/SiteFooter'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <div>
      <SiteHeader />
      <main>
        <Hero />
        <ProcessSection />
        <WhyUsSection />
        <PortfolioSection />
        <CtaBanner />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}
