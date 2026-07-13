import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeatureSection'
import Workflow from './components/Workflow'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('portfolio-theme') || 'dark'
    }

    return 'dark'
  })

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', theme === 'dark')
    root.style.colorScheme = theme
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'bg-neutral-950 text-neutral-100' : 'bg-stone-50 text-neutral-900'}`}>
      <Navbar
        theme={theme}
        toggleTheme={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))}
      />
      <div className="max-w-6xl mx-auto px-6">
        <HeroSection />
        <FeatureSection id="skills" />
        <Workflow id="process" />
        <Testimonials id="projects" />
        <Footer />
      </div>
    </div>
  )
}

export default App;