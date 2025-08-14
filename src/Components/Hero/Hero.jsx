import './Hero.css'
import { getImageUrl } from '../../utils'

const Hero = () => {
  return (
    <section className="container">
        <div className="content">
            <h1 className="title">Hi, I'm Rohit Tamboli</h1>
            <h3 className="heading">Full-Stack Developer</h3>
            <p className="description">I'm a Full-Stack Developer specializing in building scalable web applications, with expertise in React, Node.js, Express, and MongoDB.</p>
            <a href="https://drive.google.com/file/d/lklR-cIOkMyD2bXS9C0T1v_VztEaa/view?usp=sharing" className="contentBtn">Resume</a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" className="heroImg"/>
        <div className="topBlur"/>
        <div className="bottomBlur"/>
    </section> 
  )
}

export default Hero
