import { useState } from 'react';
import styles from './Portfolio.module.css';
import Modal from '../Modal/Modal';
import ModalCard from './ModalCard';

const Card = ({ project }) => {
  const { id, category, date, title, image } = project;
  const [modal, setModal] = useState(false);
  // eslint-disable-next-line import/no-dynamic-require
  const img = require(`../../assets/portafolio/${image}`);

  return (
    <>
      <Modal openModal={modal} fnCloseModal={() => setModal(false)}>
        <ModalCard project={project} />
      </Modal>
      <div
        className={styles.card}
        onClick={() => setModal(true)}
        onKeyPress={() => setModal(true)}
        role="button"
        tabIndex={0}
      >
        <div className={styles.img}>
          <img src={img} alt="" />
        </div>
        <div className={styles.category}>
          <span>{category}</span>
          <span>
            <i className="fas fa-calendar-alt" />•{` ${date}`}
          </span>
        </div>
        <div>
          <h2>{title}</h2>

          <span className={styles.arrow}>
            <i className="fas fa-arrow-right" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Card;
