import AppHeader from "./components/appHeader"
import HeroPage from "./pages/heroPage"
import './assets/styles/index.css'
const App = () => {
  return (
    <>
      <AppHeader />
      <body>
        <HeroPage />
      </body>
    </>
  )
}
export default App