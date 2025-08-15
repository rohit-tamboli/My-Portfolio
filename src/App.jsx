import styles from './App.module.css'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import Skill from './Components/Skill/Skill'

function App () {
  return (
    <div className={styles.App}>
      <Navbar/>
      <Hero/>
      <About/>
      <Skill/>
      <Contact/>
    </div>
  )
}

export default App
