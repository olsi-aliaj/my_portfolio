import { useState, lazy, Suspense, useEffect } from 'react';

import scrollTop from '../../utils/helpers/scrollTop';
import useToggle from '../../utils/hooks/useToggle';
import useScrollInto from '../../utils/hooks/useScrollInto';
import useScrollSpy from '../../utils/hooks/useScrollSpy';

import logo1 from '../../assets/logo_fondo_blanco_4.webp';
import styles from './Header.module.css';

import Modal from '../Modal/Modal';
import Loader from '../Loader';

const ModalConfig = lazy(() => import('./ModalConfig'));
const AboutMe = lazy(() => import('../AboutMe/AboutMe'));

const Header = () => {
  const [modal, setModal] = useState(false);

  const { open, handleOpen, handleClose, handleToggle } = useToggle();
  const [Mobile, setMobile] = useState(false);
  const [activeNav, setActiveNav] = useState(false);
  const [isReadyForInstall, setIsReadyForInstall] = useState(false);
  const scrollTo = useScrollInto();
  useScrollSpy();

  useEffect(() => {
    function handleScroll() {
      setMobile(false);
      window.scrollY > 100 ? setActiveNav(true) : setActiveNav(false);
    }
    window.addEventListener('scroll', handleScroll);

    function handlePWAInit(event) {
      // Prevent the mini-infobar from appearing on mobile.
      /* event.preventDefault(); */
      console.log('👍', 'beforeinstallprompt', event);
      // Stash the event so it can be triggered later.
      window.deferredPrompt = event;
      // Remove the 'hidden' class from the install button container.
      setIsReadyForInstall(true);
    }

    window.addEventListener('beforeinstallprompt', handlePWAInit);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('beforeinstallprompt', handlePWAInit);
    };
  }, []);

  const toogleMobileNav = () => {
    setMobile(!Mobile);
  };
  const removeMobileNav = () => {
    setMobile(false);
  };

  const handleLink = (section) => {
    removeMobileNav();
    setMobile(false);
    scrollTo(section);
  };

  async function downloadApp() {
    console.log('👍', 'butInstall-clicked');
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
      // The deferred prompt isn't available.
      console.log('oops, no prompt event guardado en window');
      return;
    }
    // Show the install prompt.
    promptEvent.prompt();
    // Log the result
    const result = await promptEvent.userChoice;
    console.log('👍', 'userChoice', result);
    // Reset the deferred prompt variable, since
    // prompt() can only be called once.
    window.deferredPrompt = null;
    // Hide the install button.
    setIsReadyForInstall(false);
  }

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Modal openModal={modal} fnCloseModal={() => setModal(false)}>
          <AboutMe />
        </Modal>
        <Modal
          openModal={open}
          fnCloseModal={() => handleClose()}
          styleOverlay={styles.modalContentConfigOverlay}
        >
          <ModalConfig />
        </Modal>
      </Suspense>
      <header className={activeNav ? styles.headerActive : styles.header}>
        <nav className={styles.nav}>
          <button type="button" onClick={scrollTop}>
            <img
              width="200px"
              height="50px"
              src={logo1}
              alt="<OlsiAliaj/>"
              className={styles.logo}
            />
          </button>
          <ul className={styles.navLinks}>
            <li className="home">
              <a title="Home" href="#!" onClick={() => handleLink('home')}>
                home
              </a>
            </li>
            <li className="features">
              <a
                title="Skills"
                href="#!"
                onClick={() => handleLink('features')}
              >
                Skills
              </a>
            </li>
            <li className="Portfolio">
              <a
                title="Portfolio"
                href="#!"
                onClick={() => handleLink('portfolio')}
              >
                Portfolio
              </a>
            </li>
            <li className="about">
              <a title="About me" href="#!" onClick={() => setModal(true)}>
                about me
              </a>
            </li>
            <li className="contact">
              <a
                title="Contact"
                href="#!"
                onClick={() => handleLink('contact')}
              >
                contact
              </a>
            </li>
            <li>
              <a title="config" href="#!" onClick={() => handleOpen()}>
                <i className={styles.cogBtn} title="Theme Config" />
              </a>
            </li>
            {/*  <li>
              <button
                className={styles.homeBtn}
                type="button"
                onClick={() => setModal(true)}
              >
                APOYAME
              </button>
            </li> */}
          </ul>
          {/*  {Mobile && ( */}
          {true && (
            <ul
              className={`${styles.navMobileLinks} ${
                Mobile ? styles.navMobileLinksWidth : ''
              }`}
            >
              <li className="home">
                <a title="Home" href="#!" onClick={() => handleLink('home')}>
                  home
                </a>
              </li>
              <li className="features">
                <a
                  title="Skills"
                  href="#!"
                  onClick={() => handleLink('features')}
                >
                  skills
                </a>
              </li>
              <li className="portfolio">
                <a
                  title="Portfolio"
                  href="#!"
                  onClick={() => handleLink('portfolio')}
                >
                  portfolio
                </a>
              </li>
              <li className="about">
                <a
                  title="About me"
                  href="#!"
                  onClick={() => {
                    setMobile(false);
                    setModal(true);
                  }}
                >
                  about me
                </a>
              </li>
              {/* <li className="Recomendaciones">
                <a
                  title="contacto"
                  href="#!"
                  onClick={() => handleLink('clients')}
                >
                  Recomendaciones
                </a>
              </li> */}
              {/* <li className="blog">
                <a title="blog" href="#!" onClick={() => handleLink('blog')}>
                  blog
                </a>
              </li> */}
              {/* <li className="contact">
                <a
                  title="contact"
                  href="#!"
                  onClick={() => handleLink('contact')}
                >
                  contact
                </a>
              </li> */}
              <li>
                <a title="config" href="#!" onClick={() => handleOpen()}>
                  <i className={styles.cogBtn} title="Theme Config" />
                </a>
              </li>

              {/* Butoni instalimit */}
              {/* {isReadyForInstall ? (
                <li>
                  <button
                    className={styles.homeBtn}
                    type="button"
                    onClick={() => downloadApp(true)}
                  >
                    Instll APP
                  </button>
                </li>
              ) : (
                <li>
                  <button
                    className={styles.homeBtn}
                    type="button"
                    onClick={() => {
                      setMobile(false);
                      setModal(true);
                    }}
                  >
                    Install App
                  </button>
                </li>
              )} */}
            </ul>
          )}

          <button
            className={Mobile ? styles.closeBtn : styles.openBtn}
            onClick={toogleMobileNav}
            type="button"
            title="Menu"
            name="Menu"
          >
            <i
              className={
                Mobile ? styles['btn-close-icon'] : styles['btn-open-icon']
              }
            />
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
