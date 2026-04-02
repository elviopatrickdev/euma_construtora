import NavBar from "../components/NavBar"
import Hero from "../components/Hero"
import Services from "../components/Services"
import About from "../components/About"
import Destaques from "../components/Destaques"
import Testimonials from "../components/Testimonials"
import Faqs from "../components/Faqs"
import Contact from "../components/Contact"
import Footer from "../components/Footer"


function Homepage() {

  return (
    <div>
        <NavBar />
        <Hero />
        <Services />
        <About />
        <Destaques />
        <Testimonials />
        <Faqs />
        <Contact />
        <Footer />
    </div>
  )

}

export default Homepage
