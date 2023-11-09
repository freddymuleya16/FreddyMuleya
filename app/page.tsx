
import Header from '@/components/header'
import Hero from '@/components/hero'
import AboutMe from '@/components/about-me'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import Portfolio from '@/components/portfolio'

export const runtime = 'edge'
export const preferredRegion = 'home'
export const dynamic = 'force-dynamic'

export default function Home() {


  return (
    <>
      <Header />



      <Hero />



      <AboutMe />




      <Portfolio />


      <Contact />


      <Footer />



      <a href="#home" className="fixed bottom-4 right-4 z-[9999] hidden h-14 w-14 items-center justify-center rounded-full bg-primary p-4 hover:animate-pulse" id="to-top">
        <span className="mt-2 block h-5 w-5 rotate-45 border-t-2 border-l-2"></span>
      </a>
    </>
  )
}
