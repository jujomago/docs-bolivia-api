import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./about.module.css";
import EmojiText from "../components/EmojiText";

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
              <div className={styles.jobTitle}>Full Stack Developer</div>
              <h1 className={styles.name}>
                <EmojiText text="Hola, soy Josue Mancilla  :wave:" />
              </h1>
              <p className={styles.bio}>
                <EmojiText text="I'm a passionate web developer :computer: with a strong interest in JavaScript ecosystem technologies. My main focus is on creating dynamic and efficient web experiences using the most modern tools. :rocket:" />
              </p>
              <div className={styles.techSection}>
                <h2 className={styles.techTitle}>
                  <EmojiText text="My favorite technologies :heart:" />
                </h2>
                <ul className={styles.techList}>
                  <li>
                    <EmojiText text="JavaScript (JS) :yellow_heart:" />
                  </li>
                  <li>
                    <EmojiText text="Node.js :green_heart:" />
                  </li>
                  <li>
                    <EmojiText text="Express :fast_forward:" />
                  </li>
                  <li>
                    <EmojiText text="React :atom_symbol:" />
                  </li>
                  <li>
                    <EmojiText text="HTML :page_facing_up:" />
                  </li>
                  <li>
                    <EmojiText text="CSS :art:" />
                  </li>
                </ul>
              </div>
              <div className={styles.githubLink}>
                <a
                  href="https://github.com/jujomago"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.button}
                >
                  <EmojiText text="Visit my GitHub" />
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
