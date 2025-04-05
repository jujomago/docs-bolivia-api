import React, { useState, useEffect } from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import parse from "html-react-parser";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";
import Head from "@docusaurus/Head";
import JsonView from "react18-json-view";
import "react18-json-view/src/style.css";
import ImageViewer from "../components/imageViewer";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  const { API_URL } = siteConfig.customFields;

  const [searchVal, setSearchVal] = useState("");
  const [jsonPlace, setJsonObject] = useState(null);
  const [images, setImages] = useState([]);
  const [initialSearch, setInitialSearch] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/places/ids`)
      .then((res) => res.json())
      .then((json) => {
        const ids = json;
        const randomId = ids[Math.floor(Math.random() * ids.length)];
        setSearchVal(randomId);
      });
  }, []);

  useEffect(() => {
    if (searchVal && initialSearch) {
      handleSearch();
      setInitialSearch(false);
    }
  }, [searchVal, initialSearch]);

  const handleSearch = async () => {
    if (searchVal) {
      const response = await fetch(`${API_URL}/places/${searchVal}`);
      if (response.ok) {
        const json = await response.json();
        if (json.media.length) {
          setImages(json.media.map((media) => media.url));
        }
        setJsonObject(json);
        return;
      }
      setJsonObject(null);
    } else {
      console.log("No search value");
    }
  };
  const CLEAN_API_URL = API_URL.replace(/^(https?:\/\/)/, "");
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>

        <section className="resultado_grid">
          <div className="codeSection">
            <div className="searchBox">
              <div className="searchBox__url">{CLEAN_API_URL}/places/</div>
              <input
                type="text"
                value={searchVal}
                onChange={(e) => {
                  setSearchVal(e.target.value);
                }}
                onKeyUp={(e) => {
                  if (e.key === "Enter") {
                    handleSearch();
                  }
                }}
              />
              <button onClick={handleSearch}>Search</button>
            </div>
            <div className={`code ${jsonPlace ? "code--show" : ""}`}>
              <JsonView
                src={jsonPlace ?? {}}
                enableClipboard={false}
                theme="github"
              />
            </div>
          </div>
          <div>
            <div className={`cardPlace ${jsonPlace ? "cardPlace--show" : ""}`}>
              {jsonPlace && (
                <>
                  <h2>{jsonPlace.name}</h2>

                  {Boolean(jsonPlace.media.length) && (
                    <ImageViewer images={images} />
                  )}
                  {!Boolean(jsonPlace.media.length) && (
                    <img src={jsonPlace.default_photo} alt={jsonPlace.name} />
                  )}

                  <div className="info">
                    <p>
                      <b>Category: </b>
                      {jsonPlace.category_name}
                    </p>
                    <p>
                      <b>City: </b>
                      {jsonPlace.city_name}
                    </p>
                  </div>
                  <p className="tags">
                    <b>Tags :</b>
                    <br />
                    {jsonPlace.tags?.map((t) => t.name).join(" , ")}
                  </p>
                  {jsonPlace.latitude && jsonPlace.longitude && (
                    <a
                      href={`https://maps.google.com/?q=${jsonPlace.latitude},${jsonPlace.longitude}`}
                      target="_blank"
                      className="location"
                    >
                      Ver Ubicacion
                    </a>
                  )}

                  {jsonPlace.location?.length > 30 && (
                    <p className="locationDir">
                      <b>Location: </b> <br />
                      {parse(jsonPlace.location)}
                    </p>
                  )}
                  {(jsonPlace.description?.length > 30 ||
                    jsonPlace.description_html.length > 30) && (
                    <p className="description">
                      <b>Detail: </b> <br />
                      {jsonPlace.description_html.length > 30
                        ? parse(jsonPlace.description_html)
                        : jsonPlace.description}
                    </p>
                  )}
                </>
              )}
            </div>
          </div>
        </section>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      description={siteConfig.tagline}
      keywords={["api", "bolivia", "geography"]}
    >
      <Head>
        <meta property="og:image" content="/img/logo.png" />
      </Head>
      <HomepageHeader />
      {
        <main>
          <HomepageFeatures />
        </main>
      }
    </Layout>
  );
}
