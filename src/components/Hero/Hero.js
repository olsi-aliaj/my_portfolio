import { useState, useEffect, useRef } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import hero from '../../assets/hero8.svg';
import styles from './Hero.module.css';
import { constants } from '../../utils/constants';
import useIsInViewport from '../../utils/hooks/useIsInViewport';

function Hero() {
  const sectionRef = useRef();
  const isInViewport = useIsInViewport(sectionRef);
  const [activeNav, setActiveNav] = useState(false);
  useEffect(() => {
    function handleScroll() {
      window.scrollY > 100 ? setActiveNav(true) : setActiveNav(false);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <section
      className={
        activeNav ? `${styles.hero} ${styles.heroActive}` : styles.hero
      }
      id="home"
      ref={sectionRef}
    >
      {/*       <div className={styles.boxP}>ss</div>
      <div className={styles.boxS}>f</div> */}
      {/*       <div className="container f_flex top">
       */}{' '}
      <div className={styles.heroContainer}>
        <div className={styles.heroLeft}>
          <h4
            className={isInViewport ? 'useSlideInLeft' : 'useSlideInLeftEnter'}
          >
            HELLO WORLD!
          </h4>
          <h1>
            Hi, I&#39;m{' '}
            <span>
              OLSI <br /> ALIAJ
            </span>
          </h1>

          <h2>
            a
            <Typewriter
              words={[
                ' Profesional Coder',
                ' Frontend Developer',
                ' Software Developer',
              ]}
              loop={5}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>
          <h3>
            With my background in developing and delivering innovative software
            solutions, I am well-versed in problem-solving, critical thinking,
            and communication.
            {/* Experiencia en Creación, prototipado y desarrollo de
            productos digitales innovadores centrados en el usuario. */}
          </h3>
          <div className={styles.socialSkills}>
            <div className={`col_1 ${isInViewport ? styles.slideIn : ''}`}>
              <h5>FIND ME HERE</h5>
              <div className={styles.socialContainer}>
                <a
                  title="Linkedin contact"
                  href={constants.profilesUrls.linkedin}
                  className={styles.socialBtn}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Linkedin Profile"
                >
                  <i className="fa-brands fa-linkedin-in" />
                </a>
                <a
                  title="Whatsapp contact"
                  href={constants.profilesUrls.whatsapp}
                  className="btnShadow"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <i className="fab fa-whatsapp" />
                </a>
                {/* <a
                  title="Facebook contact"
                  href={constants.profilesUrls.facebook}
                  className={styles.socialBtn}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Facebook Profile"
                >
                  <i className="fa-brands fa-facebook-f" />
                </a> */}
              </div>
            </div>
            <div className={`col_1 ${isInViewport ? styles.slideIn : ''}`}>
              <h5>LEARNING</h5>
              <figure className={styles.skillBtn}>
                <img
                  width="50px"
                  height="50px"
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                  alt="Js"
                />
              </figure>
              <figure className={styles.skillBtn}>
                <img
                  width="50px"
                  height="50px"
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                  alt="react"
                />
              </figure>
              {/* <figure className={styles.skillBtn}>
                <img
                  width="50px"
                  height="50px"
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                  alt="NodeJs"
                />
              </figure> */}
              {/* <figure className={styles.skillBtn}>
                <img
                  width="50px"
                  height="50px"
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                  alt="Js"
                />
              </figure> */}
            </div>
          </div>
        </div>
        <div className={styles.heroRight}>
          <div className={styles.rightImg}>
            <img
              width="300px"
              height="400px"
              src={hero}
              alt="hero"
              className={styles.img}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
