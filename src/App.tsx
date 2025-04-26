import AppHeader from "./components/appHeader"
import HeroPage from "./pages/heroPage"
import './assets/styles/index.css'
import AboutPage from "./pages/aboutPage"
import SkillsPage from "./pages/skillsPage"
import ExperiencePage from "./pages/experiencePage"
import WorkPage from "./pages/workPage"
import TestimonialsPage from "./pages/testimonialsPage"
import AppFooter from "./components/appFooter"
import { useState } from "react"
import Drawer from "./components/drawer"
const App = () => {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  return (
    <div className="">
      <Drawer
        isOpenDrawer={isOpenDrawer}
        setIsOpenDrawer={setIsOpenDrawer}
      />
      <AppHeader
        isOpenDrawer={isOpenDrawer}
        setIsOpenDrawer={setIsOpenDrawer}
      />
      <main>
        <HeroPage />
        <AboutPage />
        <SkillsPage />
        <ExperiencePage />
        <WorkPage />
        <TestimonialsPage />
      </main>
      <AppFooter />
    </div>
  )
}
export default App