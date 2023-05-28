import { useState, lazy, Suspense } from 'react';
import logo1 from '../../assets/logo_fondo_blanco_1.webp';
import line from '../../assets/llline.svg';

import styles from './Footer.module.css';
import scrollTop from '../../utils/helpers/scrollTop';

import Modal from '../Modal/Modal';
import Loader from '../Loader';

const AboutMe = lazy(() => import('../AboutMe/AboutMe'));

const Footer = () => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <Modal
        openModal={modal}
        fnCloseModal={() => setModal(false)}
        styleContent={styles.modalContent}
      >
        <Suspense fallback={<Loader />}>
          <AboutMe />
        </Suspense>
      </Modal>
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className="img">
            <img
              width="300px"
              height="300px"
              src={logo1}
              className={styles.logoImg}
              alt=""
            />
          </div>
          <p>
            {' '}
            💻 - Built by{' '}
            <button
              type="button"
              onClick={() => setModal(true)}
              className={styles.userBtn}
            >
              @OlsiAliaj{' '}
            </button>{' '}
            with 🖤 in 2023
          </p>
          <img src={line} alt="" className={styles.svg} />
          <img src={line} alt="" className={styles.svg} />
          <img src={line} alt="" className={styles.svg} />
          <img src={line} alt="" className={styles.svg} />

          <button
            title="Back to top"
            name="Back to top"
            type="button"
            className={styles.floatBtn}
            onClick={scrollTop}
          >
            <i className="fas fa-angle-double-up" />
          </button>
        </div>
      </footer>
    </>
  );
};

export default Footer;
