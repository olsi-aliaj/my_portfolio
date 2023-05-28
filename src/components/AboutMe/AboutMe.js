import { useState } from 'react';
import hero from '../../assets/me.webp';
import styles from './AboutMe.module.css';
import { constants } from '../../utils/constants';
import CVDocument from '../../assets/cv-olsi-aliaj.pdf';

const skills = [
  {
    name: 'HTML',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg',
    href: 'https://www.w3.org/html/',
  },
  {
    name: 'CSS',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg',
    href: 'https://www.w3schools.com/css/',
  },
  {
    name: 'Javascript',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    name: 'React',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg',
    href: 'https://reactjs.org/',
  },
  {
    name: 'PHP',
    img: 'https://www.vectorlogo.zone/logos/php/php-icon.svg',
    href: 'https://www.php.net/',
  },
  {
    name: 'Microsoft Sql Server',
    img: 'https://cyclr.com/wp-content/uploads/2022/03/ext-550.png',
    href: 'https://www.microsoft.com/en-us/sql-server/sql-server-downloads',
  },
  {
    name: 'MySQL',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg',
    href: 'https://www.mysql.com/',
  },
  {
    name: 'Postman',
    img: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg',
    href: 'https://postman.com',
  },

  {
    name: 'Git',
    img: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg',
    href: 'https://git-scm.com/',
  },
  {
    name: 'Docker',
    img: 'https://www.vectorlogo.zone/logos/docker/docker-icon.svg',
    href: 'https://www.docker.com/',
  },
  {
    name: 'GitHub',
    img: 'https://www.vectorlogo.zone/logos/github/github-icon.svg',
    href: 'https://github.com/',
  },
  {
    name: 'Bitbucket',
    img: 'https://www.vectorlogo.zone/logos/bitbucket/bitbucket-icon.svg',
    href: 'https://bitbucket.org/',
  },
  {
    name: 'Figma',
    img: 'https://www.vectorlogo.zone/logos/figma/figma-icon.svg',
    href: 'https://www.figma.com/',
  },
  {
    name: 'Wordpress',
    img: 'https://www.vectorlogo.zone/logos/wordpress/wordpress-icon.svg',
    href: 'https://wordpress.org/',
  },
  {
    name: 'shopify',
    img: 'https://www.vectorlogo.zone/logos/shopify/shopify-icon.svg',
    href: 'https://www.shopify.com/',
  },
  {
    name: 'BigCommerce',
    img: 'https://www.vectorlogo.zone/logos/bigcommerce/bigcommerce-icon.svg',
    href: 'https://www.bigcommerce.com/',
  },
  {
    name: 'Bootstrap',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg',
    href: 'https://getbootstrap.com',
  },
  {
    name: 'Sass',
    img: 'https://www.vectorlogo.zone/logos/sass-lang/sass-lang-icon.svg',
    href: 'https://sass-lang.com/',
  },
  {
    name: 'Json',
    img: 'https://www.vectorlogo.zone/logos/json/json-ar21.svg',
    href: 'https://www.json.org/json-en.html',
  },
  {
    name: 'Jira Software',
    img: 'https://www.vectorlogo.zone/logos/atlassian_jira/atlassian_jira-icon.svg',
    href: 'https://www.atlassian.com/software/jira',
  },
  {
    name: 'WLanguage',
    img: 'https://windev.com/storage/en_US/img/wlanguage/logo-wlanguage.png',
    href: 'https://help.windev.com/en-US/?9000196&name=wlanguage',
  },
];
function About() {
  return (
    <div className={styles.me}>
      <h2>Who am I and more about me?</h2>
      <p>
        Hello! I am Olsi Aliaj, a dedicated and passionate Web Developer with a
        strong background in business informatics and computer science. I am
        driven by a deep passion for problem-solving and the thrill of
        overcoming technical challenges. With expertise in both front-end and
        back-end development, I strive to create exceptional user experiences
        and contribute to the advancement of web technologies.
      </p>
      <h2>Career Goals and Aspirations</h2>
      <p>
        Looking ahead, I am eager to be a part of projects that involve
        innovative technologies and have a positive impact on users lives. I am
        constantly seeking opportunities to further enhance my skills and stay
        up to date with the latest trends in web development. By incorporating
        new tools and techniques, I aim to create compelling digital experiences
        that drive business success and exceed user expectations.
      </p>
      <h2>Interests and Hobbies</h2>
      <p>
        Beyond my professional pursuits, I find joy in various outdoor
        activities. Whether it is swimming, mountain climbing, or cycling
        off-road, these hobbies allow me to recharge and bring a fresh
        perspective to my work. They also highlight my adventurous spirit,
        determination, and ability to push boundaries.
      </p>
    </div>
  );
}

function Skills() {
  return (
    <>
      <h2>Skills – Technologies - Tools</h2>
      <div className={styles.skillsContainer}>
        {skills.map((skill, index) => (
          <a
            key={index}
            className={styles.a}
            href={skill.href}
            title={`${skill.name} Site`}
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src={skill.img} alt="css3" width="40" height="40" />
            {skill.name}
          </a>
        ))}
      </div>
    </>
  );
}

function CoreValues() {
  return (
    <div className={styles.me}>
      <h2>Core Values and Principles</h2>
      <p>
        I am known for my fast learning abilities, attention to detail, and
        strong problem-solving skills. I believe in the power of enthusiasm and
        its ability to drive excellence. Additionally, I thrive in collaborative
        environments and understand the importance of teamwork in achieving
        remarkable results.
      </p>
    </div>
  );
}

function Conclusion() {
  return (
    <div className={styles.me}>
      <h2>Consclusion</h2>
      <p>
        Thank you for taking the time to learn more about me. I am excited about
        the prospect of contributing my skills and expertise to meaningful
        projects that align with my passion for web development. If you are
        looking for a dedicated and adaptable team player with a strong drive
        for success, I would love to connect with you.
      </p>
    </div>
  );
}

function CV() {
  return (
    <a
      className="Contact_submitBtn__duqtY btnShadow"
      href={CVDocument}
      target="_blank"
      rel="noopener noreferrer"
    >
      Click here to view my CV
    </a>
  );
}

// function Experience() {
//   return (
//     <div className={styles.me}>
//       <h2>Who am I and more about me?</h2>
//       <ul className={styles.navLinks}>
//         <li className="home">homee</li>
//       </ul>
//     </div>
//   );
// }

function AboutMe() {
  const [activeSection, setActiveSection] = useState(0);
  return (
    <section className={styles.aboutMe} id="about">
      <div className={styles.aboutContainer}>
        <div className={styles.AboutLeft}>
          <span>Updated on May 23, 2023</span>
          <div className={styles.leftImg}>
            <img src={hero} alt="Olsi Aliaj Profile" className={styles.img} />
            <h1>{'<Olsi Aliaj/>'}</h1>
            {/* <a
              title="Buy me a coffe"
              className={styles.supportBtn}
              href={constants.profilesUrls.buymeacoffee}
              target="_blank"
              rel="noreferrer noopener"
            >
              APOYAME
            </a> */}
            {/* <button className={styles.supportBtn} type="button">
              APOYAME
            </button> */}
            {/* <p>Desarrollo software con ❤️ y ☕️</p>
            <p> &#x1F1F2;&#x1F1FD;</p> */}
          </div>
        </div>
        <div className={styles.AboutRight}>
          <div>
            {/* <span>Actualizado el 5 de Marzo, 2022</span> */}
            <ul className={styles.tabs}>
              <li className={activeSection === 0 ? styles.active : null}>
                <button
                  type="button"
                  onClick={() => setActiveSection(0)}
                  className={styles.tabBtn}
                  aria-label="about"
                >
                  about
                </button>
                {/* <span className={styles.divider}>|</span> */}
              </li>
              <li className={activeSection === 1 ? styles.active : null}>
                <button
                  type="button"
                  onClick={() => setActiveSection(1)}
                  className={styles.tabBtn}
                  aria-label="skills"
                >
                  skills
                </button>
                {/* <span className={styles.divider}>|</span> */}
              </li>
              <li className={activeSection === 2 ? styles.active : null}>
                <button
                  type="button"
                  onClick={() => setActiveSection(2)}
                  className={styles.tabBtn}
                  aria-label="CoreValues"
                >
                  Core Values
                </button>
                {/* <span className={styles.divider}>|</span> */}
              </li>
              {/* <li className={activeSection === 3 ? styles.active : null}>
                <button
                  type="button"
                  onClick={() => setActiveSection(3)}
                  className={styles.tabBtn}
                  aria-label="experience"
                >
                  experience
                </button>
                { <span className={styles.divider}>|</span> }
              </li> */}
              <li className={activeSection === 4 ? styles.active : null}>
                <button
                  type="button"
                  onClick={() => setActiveSection(4)}
                  className={styles.tabBtn}
                  aria-label="Conclusion"
                >
                  Conclusion
                </button>
                {/* <span className={styles.divider}>|</span> */}
              </li>

              <li className={activeSection === 5 ? styles.active : null}>
                <button
                  type="button"
                  onClick={() => setActiveSection(5)}
                  className={styles.tabBtn}
                  aria-label="cv"
                >
                  CV
                </button>
                {/* <span className={styles.divider}>|</span> */}
              </li>
              {/* <li>
                <span>Actualizado el 5 de Marzo, 2022</span>
              </li> */}
            </ul>
            <hr />
          </div>
          <div className={styles.tabContent}>
            {activeSection === 0 && <About />}
            {activeSection === 1 && <Skills />}
            {activeSection === 2 && <CoreValues />}
            {/* {activeSection === 3 && <Experience />} */}
            {activeSection === 4 && <Conclusion />}
            {activeSection === 5 && <CV />}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
