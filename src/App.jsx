import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeatureSection'
import Workflow from './components/Workflow'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto px-6">
        <HeroSection />
        <FeatureSection id="skills" />
        <Workflow id="process" />
        <Testimonials id="projects" />
        <Footer />
      </div>
    </>
  )
}

export default App;