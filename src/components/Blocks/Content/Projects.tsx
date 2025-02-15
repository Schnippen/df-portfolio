import React, { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { HiOutlineExternalLink } from "react-icons/hi";
import { landingPagePhotos } from "../../../assets/images/landingPage/landingPagePhotos";
import { realEstateProjectPhotos } from "../../../assets/images/realEstateProject/realEstateProjectPhotos";
import PhotoGallery from "./PhotoGallery";
import MediaButton from "../../Buttons/MediaButton";
import Separator from "../../Separator";
import MobileTarotProject from "./Projects/MobileTarotProject";
import styles from "./Projects.module.css";
import { RiichiMahjongProject } from "./Projects/RiichiMahjongProject";
/* const LandingPageTechnologicalStackArray = [
  <AccordeonParagraph
    title="React"
    paragraphText="Facing a pressing need for a landing page to promote my mobile application startup, I turned to React as the go-to solution for its rapid development. React's agility and efficiency allowed me to swiftly create a dynamic and responsive landing page."
  />,
  <AccordeonParagraph
    title="Next.js"
    paragraphText="When it came to building a high-performance web application, I turned to Next.js. Its seamless server-side rendering, routing, and dynamic loading capabilities made it the ideal choice for creating a lightning-fast and SEO-friendly web experience."
  />,
  <AccordeonParagraph
    title="Responsive Design with Media Queries"
    paragraphText="Knowing that most potential customers will get to the landing page via mobile applications, leveraging React, the landing page adapts to different screen sizes, delivering an optimal user experience on smartphones, tablets, or desktops."
  />,
  <AccordeonParagraph
    title="Analytics Integration"
    paragraphText="The integration of analytics allows for quick data gathering and analysis, empowering me to make informed choices about the platform direction for my startup project."
  />,
  <AccordeonParagraph
    title="SEO"
    paragraphText="Strategically incorporated Keywords, improved site speed, created an organized site structure"
  />,
];
const AnyTownTechnologicalStackArray = [
  <AccordeonParagraph
    title="React & Next.js"
    paragraphText="This project marked my first dive into React and Next.js,  providing me with an immersive introduction to modern front-end development"
  />,
  <AccordeonParagraph
    title="Supabase backend"
    paragraphText="Exploring alternatives to Firebase I  discovered Supabase.
    I gained practical experience working with Postgres database, Authentication, instant APIs."
  />,
  <AccordeonParagraph
    title="Responsive Design with Media Queries"
    paragraphText="Websitedynamically adjusts to diverse screen sizes, ensuring an optimal user experience ."
  />,
  <AccordeonParagraph
    title="Web scraping"
    paragraphText="To fill the platform with property listings, I used web scraping techniques with Puppeteer andset up cron jobs to automate the data scraping process, keeping our property listings current and accurate."
  />,
]; */

function Projects() {
  return (
    <section className={styles.projects_container}>
      <RiichiMahjongProject />
      <MobileTarotProject />
      <article className={styles.projects_article}>
        <h2>Tarot Reader Landing Page</h2>
        <div className={styles.projects_article_container}>
          <div className={styles.projects_article_item}>
            <p className={styles.project_paragraph}>
              Landing page and product blog serves as a crucial component of my
              app's marketing strategy, offering a compelling introduction to
              potential users.
              <Separator />
              What sets this landing page apart is its integration of analytics
              and platform preference analysis, helping me make data-driven
              decisions about whether to prioritize the Android Google Play
              Store or the Mac App Store for future app releases.
              <Separator />
              During developement of Tarot Reader mobile app, I took on various
              roles to bring this project to life, enhancing my my skills in
              programming, monetization, and marketing.
            </p>
            <h3 className={styles.project_paragraph_title}>Core ideas:</h3>
            {/* <TechnologicalStackList
              array={LandingPageTechnologicalStackArray}
            /> */}
            <div className={styles.projects_article_links}>
              <MediaButton
                link="www.tarotreader.app"
                Icon={HiOutlineExternalLink}
                tooltip="Visit Tarot Reader Landing Page"
              />
            </div>
          </div>
          <div className={styles.project_photo_gallery}>
            <PhotoGallery
              photos={landingPagePhotos}
              delay={3000}
              alt={"Tarot Reader Ladning Page Screenshot"}
            />
          </div>
        </div>
      </article>
      <article className={styles.projects_article}>
        <h2>Any Town Real Estate</h2>
        <div className={styles.projects_article_container}>
          <div className={styles.project_photo_gallery}>
            <PhotoGallery
              photos={realEstateProjectPhotos}
              delay={3000}
              alt={"Tarot Reader Ladning Page Screenshot"}
            />
          </div>
          <div className={styles.projects_article_item}>
            <p className={styles.project_paragraph}>
              "Anytown Real Estate" marked my introduction to programming and
              React development. This project served as a valuable stepping
              stone in my journey as a developer, providing hands-on experience
              in building custom components and exploring the fundamentals of
              web development.
              <Separator />
              The primary objective of this project was to emulate popular real
              estate listing websites like Zillow or Otodom, offering users a
              platform to explore property listings.
              <Separator />
              To populate the website with data, I implemented web scraping
              techniques to collect information from these real estate portals.
            </p>
            <h3 className={styles.project_paragraph_title}>Core ideas:</h3>
            {/* <TechnologicalStackList array={AnyTownTechnologicalStackArray} /> */}
            <div className={styles.projects_article_links}>
              <MediaButton
                link="https://github.com/Schnippen"
                Icon={BsGithub}
                tooltip="Github"
              />
              <MediaButton
                link="estate-next.vercel.app"
                Icon={HiOutlineExternalLink}
                tooltip="Visit AnyTown Real Estate"
              />
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Projects;
