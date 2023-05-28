import { useState, useRef } from 'react';
import styles from './Contact.module.css';
import { constants } from '../../utils/constants';
import useIsInViewportOnce from '../../utils/hooks/useIsInViewportOnce';
import me from '../../assets/me.webp';

const Contact = () => {
  const sectionRef = useRef();
  const isInViewportOnce = useIsInViewportOnce(sectionRef);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formValues, setFormValues] = useState({
    name: '',
    number: '',
    email: '',
    subject: '',
    message: '',
  });

  const submit = async (e) => {
    e.preventDefault();
    setSuccess(false);
    setError(false);
    console.log(formValues);
    setIsLoading(true);

    try {
      const response = await fetch(`https://formspree.io/f/mwkjjnvo`, {
        method: 'POST',
        body: JSON.stringify(formValues),
        /*    body: { fd: 'd' }, */
        headers: {
          Accept: 'application/json',
        },
      });
      console.log(response);
      if (response.status !== 200) {
        throw new Error();
      }

      if (response.status === 200) {
        setSuccess(true);
        alert('Message sent :)');
        setFormValues({
          name: '',
          number: '',
          email: '',
          subject: '',
          message: '',
        });
      }
    } catch (formError) {
      setError(true);
      console.log(formError);
      console.log(formError.response);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className={styles.contact} id="contact" ref={sectionRef}>
      <div
        className={`${styles.heading} ${
          isInViewportOnce ? 'useSlideInLeft' : 'useSlideInLeftEnter'
        }`}
      >
        <h4>CONTACT INFORMATION</h4>
        <h1>Let&apos;s work togather</h1>
      </div>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.box}>
            <div className={styles.img}>
              <img
                width="300px"
                height="400px"
                src={me}
                alt="Olsi Aliaj Profile"
              />
            </div>
            <div className={styles.details}>
              <h1>Olsi Aliaj</h1>
              <p>
                I am available on almost all social networks. Can Send me a
                message, I will reply to you within 24 hours. You can always
                contact me by the following means.
              </p>
              <br />
              <p>
                Number:{' '}
                <a
                  title="contact number whatsapp"
                  href={constants.profilesUrls.whatsapp}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {constants.profilesUrls.number}
                </a>
              </p>
              <p>
                Email:{' '}
                <a
                  title="contact email"
                  href={`mailto: ${constants.profilesUrls.email}`}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {constants.profilesUrls.email}
                </a>
              </p>
              <br />

              <span>CONTACT ME HERE</span>
              <div className={styles.socialContainer}>
                <a
                  title="Contact Linkedin"
                  href={constants.profilesUrls.linkedin}
                  className="btnShadow"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <i className="fa-brands fa-linkedin-in" />
                </a>

                <a
                  title="Contact Whatsapp"
                  href={constants.profilesUrls.whatsapp}
                  className="btnShadow"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <i className="fab fa-whatsapp" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <p>
            <i className="fas fa-envelope" /> Fill out this form and send me a
            message
          </p>
          <form onSubmit={submit} className={styles.form}>
            <div className={`${styles.input} ${styles.inputRow}`}>
              <input
                type="text"
                name="name"
                id="name"
                required
                value={formValues.name}
                onChange={handleChange}
              />
              <label htmlFor="name">Name</label>
            </div>
            <div className={`${styles.input} ${styles.inputRow}`}>
              <input
                type="number"
                name="number"
                id="number"
                value={formValues.number}
                onChange={handleChange}
              />
              <label htmlFor="number">Number </label>
            </div>
            <div className={styles.input}>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={formValues.email}
                onChange={handleChange}
              />
              <label htmlFor="email">EMAIL </label>
            </div>
            <div className={styles.input}>
              <input
                id="subject"
                type="text"
                name="subject"
                required
                value={formValues.subject}
                onChange={handleChange}
              />
              <label htmlFor="subject">SUBJECT </label>
            </div>
            <div className={styles.input}>
              <textarea
                type="text"
                name="message"
                id="message"
                cols="10"
                rows="10"
                required
                value={formValues.message}
                onChange={handleChange}
              />
              <label htmlFor="message">MESSAGE </label>
            </div>
            {!isLoading && (
              <button className={styles.submitBtn} type="submit">
                SEND MESSAGE
                <i className="fas fa-long-arrow-right" />
              </button>
            )}
            {isLoading && (
              <>
                <div className={styles.loader} />
                <p>Sending Form</p>
              </>
            )}
            {error && (
              <span className={styles.errorMsg}>
                Error submitting form, try again later
              </span>
            )}
            {success && (
              <span className={styles.successMsg}>Submitted form!</span>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
