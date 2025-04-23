import AppHeader from "./components/appHeader"
import HeroPage from "./pages/heroPage"
import './assets/styles/index.css'
import AboutPage from "./pages/aboutPage"
import SkillsPage from "./pages/skillsPage"
import ExperiencePage from "./pages/experiencePage"
const App = () => {
  return (
    <>
      <AppHeader />
      <main>
        <HeroPage />
        <AboutPage />
        <SkillsPage />
        <ExperiencePage />
      </main>
    </>
  )
}
export default App