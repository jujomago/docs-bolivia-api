import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./about.module.css";

const About = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Sobre mí | ${siteConfig.title}`}
      description="Información sobre el desarrollador y sus intereses tecnológicos"
    >
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.profile}>
            <img
              className={styles.profileImage}
              src="https://github.com/jujomago.png"
              alt="Foto de perfil de jujomago"
            />
            <div className={styles.profileInfo}>
              <div className={styles.jobTitle}>FullStack Web Engineer</div>
              <h1 className={styles.name}>
                Hola, soy Josue Mancilla (@jujomago)
              </h1>
              <p className={styles.bio}>
                Soy un apasionado desarrollador web con un fuerte interés en las
                tecnologías del ecosistema JavaScript. Mi enfoque principal está
                en crear experiencias web dinámicas y eficientes utilizando las
                herramientas más modernas.
              </p>
              <div className={styles.techSection}>
                <h2 className={styles.techTitle}>Mis tecnologías favoritas:</h2>
                <ul className={styles.techList}>
                  <li>JavaScript (JS)</li>
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>React</li>
                  <li>HTML</li>
                  <li>CSS</li>
                </ul>
              </div>
              <div className={styles.githubLink}>
                <a
                  href="https://github.com/jujomago"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.button}
                >
                  Visita mi GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
