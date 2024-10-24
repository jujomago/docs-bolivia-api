import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./about.module.css";
import EmojiText from "../components/EmojiText";

const About = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`About the Project | ${siteConfig.title}`}
      description="Information about the Bolivia API project"
    >
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.profile}>
            <img
              className={styles.profileImage}
              src="https://github.com/jujomago.png"
              alt="Profile picture of Josue Mancilla"
            />
            <div className={styles.profileInfo}>
              <h1 className={styles.name}>
                <EmojiText text="Bolivia API" />
              </h1>
              <p className={styles.bio}>
                <EmojiText text="Bolivia API is a project that provides data about turistic places, cities, departments, and other aspects of Bolivia. It's designed for developers and businesses that need access to geographic, statistical, and cultural information about the country." />
              </p>
              <div className={styles.techSection}>
                <h2 className={styles.techTitle}>
                  <EmojiText text="Main Features :sparkles:" />
                </h2>
                <ul className={styles.techList}>
                  <li>
                    <EmojiText text="Accurate geographic data :world_map:" />
                  </li>
                  <li>
                    <EmojiText text="Up-to-date information :calendar:" />
                  </li>
                  <li>
                    <EmojiText text="Access through REST endpoints :gear:" />
                  </li>
                  <li>
                    <EmojiText text="Clear and detailed documentation :book:" />
                  </li>
                </ul>
              </div>
              <p className={styles.developer}>
                <EmojiText text="This project was developed by Josue Mancilla, a Full Stack Developer passionate about creating modern web solutions. :computer:" />
              </p>
              <div className={styles.githubLink}>
                <a
                  href="https://github.com/jujomago"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.button}
                >
                  <EmojiText text="Check out my GitHub" />
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
