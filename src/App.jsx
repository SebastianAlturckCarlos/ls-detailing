import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Services from './components/Services'
import BeforeAfter from './components/BeforeAfter'
import Quote from './components/Quote'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <BeforeAfter />
        <Quote />
      </main>
      <Footer />
    </>
  )
}
