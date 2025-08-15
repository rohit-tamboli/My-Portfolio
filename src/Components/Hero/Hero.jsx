import { getImageUrl } from '../../utils'
import styles from './Hero.module.css';
 
const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Rohit Tamboli</h1>
            <h3 className={styles.heading}>Full-Stack Developer</h3>
            <p className={styles.description}>I'm a Full-Stack Developer specializing in building scalable web applications, with expertise in React, Node.js, Express, and MongoDB.</p>
            <a href="https://drive.google.com/file/d/lklR-cIOkMyD2bXS9C0T1v_VztEaa/view?usp=sharing" className={styles.contentBtn}>Resume</a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" className={styles.heroImg}/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
  ) 
}

export default Hero
