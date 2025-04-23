import AppHeader from "./components/appHeader"
import HeroPage from "./pages/heroPage"
import './assets/styles/index.css'
import AboutPage from "./pages/aboutPage"
import SkillsPage from "./pages/skillsPage"
import ExperiencePage from "./pages/experiencePage"
import WorkPage from "./pages/workPage"
import TestimonialsPage from "./pages/testimonialsPage"
const App = () => {
  return (
    <>
      <AppHeader />
      <main>
        <HeroPage />
        <AboutPage />
        <SkillsPage />
        <ExperiencePage />
        <WorkPage />
        <TestimonialsPage />
      </main>
    </>
  )
}
export default App