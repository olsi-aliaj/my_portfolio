import { useState, lazy, Suspense, useRef } from 'react';

import PortfolioData from './PortfolioData';
import useIsInViewportOnce from '../../utils/hooks/useIsInViewportOnce';
import styles from './Portfolio.module.css';

import Card from './Card';
import Modal from '../Modal/Modal';
import Loader from '../Loader';

const AllPortfolioProjects = lazy(() => import('../AllPortfolioProjects'));

const Portfolio = () => {
  const sectionRef = useRef();
  const isInViewportOnce = useIsInViewportOnce(sectionRef);
  const [modal, setModal] = useState(false);
  return (
    <>
      <Modal
        openModal={modal}
        fnCloseModal={() => setModal(false)}
        styleContent={styles.modalContent}
      >
        <Suspense fallback={<Loader />}>
          <AllPortfolioProjects />
        </Suspense>
      </Modal>
      <section className={styles.portafolio} id="portfolio" ref={sectionRef}>
        <div className="container">
          <div
            className={`${styles.heading} ${
              isInViewportOnce ? 'useSlideInLeft' : 'useSlideInLeftEnter'
            }`}
          >
            <h4>VISIT THE MOST RECENT PROJECTS IN MY PORTFOLIO</h4>
            <h1>My portfolio</h1>
          </div>
          <button
            type="button"
            className={styles.seeAllBtn}
            onClick={() => setModal(true)}
            aria-label="ver todos los proyectos"
          >
            SEE ALL THE PROJECTS
          </button>
          <div className={styles.contentGrid}>
            {/* {PortfolioData.slice(0) //clonar array para poder usar reverse()
              .reverse()
              .slice(0, 3)
              .map((project, index) => (
                <Card key={index} project={project} />
              ))} */}
            <Card project={PortfolioData[2]} />
            <Card project={PortfolioData[4]} />
            <Card project={PortfolioData[1]} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
