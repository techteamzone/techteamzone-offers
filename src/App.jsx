import Header from "./components/Header"
import Hero from "./components/Hero"
import Grid from "./components/Grid"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-white">
      <Header />
      <Hero />
      <div id="offers">
        <Grid />
      </div>
      <Footer />
    </div>
  )
}
