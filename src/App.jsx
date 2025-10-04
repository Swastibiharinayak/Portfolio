import Footer from './components/footer/Footer'
import Hero from './components/Hero'
import Nav from './components/Nav/Nav'
import "./index.css"

export default function App(){
  return (
    <div id='app'>
      <Nav />
      <Hero/>
      <Footer/>
    </div>
  )
}
