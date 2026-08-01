import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Services } from '@/components/services'
import { Projects } from '@/components/projects'
import { A2P } from '@/components/a2p'
import { Process, TechStack } from '@/components/process-stack'
import { Why } from '@/components/why'
import { FAQ } from '@/components/faq'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            'radial-gradient(600px 400px at 15% 8%, rgba(147,51,234,.16), transparent 60%), radial-gradient(700px 500px at 85% 30%, rgba(236,72,153,.10), transparent 60%)',
        }}
      />
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <A2P />
        <Process />
        <TechStack />
        <Why />
        <FAQ />
      </main>
      <SiteFooter />
    </>
  )
}
