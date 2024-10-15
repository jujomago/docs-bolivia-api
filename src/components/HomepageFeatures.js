import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "You can use it for free",
    Svg: require("../../static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        This API can be used freely by anyone, the images and texts of the
        tourist places were collected from different sources.
      </>
    ),
  },
  {
    title: "Regular updates",
    Svg: require("../../static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        The data will be updated over time, if you want to add a specific place,
        write me a message to my email
      </>
    ),
  },
  {
    title: "Contributing",
    Svg: require("../../static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        This is a big project that needs a lot of input and the code is growing
        too, so if you want to join just contact me.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
