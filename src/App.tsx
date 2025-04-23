import AppHeader from "./components/appHeader"
import HeroPage from "./pages/heroPage"
import './assets/styles/index.css'
import AboutPage from "./pages/aboutPage"
const App = () => {
  return (
    <>
      <AppHeader />
      <main>
        <HeroPage />
        <AboutPage />
      </main>
    </>
  )
}
export default App