import React, { useState } from "react";
import styles from "./Projects.module.css";
import { BsGithub } from "react-icons/bs";
import { HiOutlineExternalLink } from "react-icons/hi";
import DevIcons from "../../../assets/DevIcons";
import {
  DescriptionAnytownRealEstate,
  DescriptionTarot,
} from "../../../assets/Descriptions";

import GooglePlayImage from "../../../assets/images/GooglePlayStore.png";
import { landingPagePhotos } from "../../../assets/images/landingPage/landingPagePhotos";
import { mobileProjectPhotos } from "../../../assets/images/mobileProject/mobileProjectPhotos";
import { realEstateProjectPhotos } from "../../../assets/images/realEstateProject/realEstateProjectPhotos";
import PhotoGallery from "./PhotoGallery";
import AccordeonParagraph from "../../AccordeonParagraph";
import MediaButton from "../../Buttons/MediaButton";

const ButtonGooglePlayStore = () => {
  return (
    <a
      href="https://play.google.com/store/apps/details?id=com.mobiletarotandroid"
      className={styles.google_play_store}
    >
      <img
        src={GooglePlayImage}
        alt="Get on Google Play"
        height="80"
        width="206.7"
      ></img>
    </a>
  );
};

const MobileProjectTechnologicalStackArray = [
  <AccordeonParagraph
    title="React Native"
    paragraphText="The app is built using React Native, ensuring
                  cross-platform compatibility and a smooth user experience on
                  both Android and iOS devices."
  />,
  <AccordeonParagraph
    title="Mobx State Management"
    paragraphText="I needed a flexible solution for global state management. Due to the startup roots of this project, I encountered many concept changes during development. Because it requires less boilerplate, I could adapt to the changes rapidly."
  />,
  <AccordeonParagraph
    title="Firestore NoSQL Database"
    paragraphText="Firestore's flexible pricing model aligns with project's growth, ensuring cost-effectiveness as scale. It makes cross-platform development seamless. The freedom to store both structured and unstructured data offers flexibility, during dynamic early development stages."
  />,
  <AccordeonParagraph
    title="Firebase Authorization"
    paragraphText="Firebase Authentication streamlines user registration and login, offering various authentication methods, including email/password and social media logins, simplifying the onboarding process."
  />,
  <AccordeonParagraph
    title="Advanced Error Detection"
    paragraphText="Sentry provides real-time error tracking and reporting. It captures errors, exceptions, and crashes that occur in your application and sends detailed error reports to the Sentry platform."
  />,
  <AccordeonParagraph
    title="Mixpanel for User Analytics"
    paragraphText="By monitoring events such as sign-ups, feature usage, and conversions, user analytics helps businesses understand how customers engage with their offerings, empowering data-driven decision-making."
  />,
  <AccordeonParagraph
    title="Revenue Cat Monetization"
    paragraphText="Successfully monetized in-app products with in app using RevenueCat which provides a  backend and wrapper around Apple's StoreKit, Google Play Billing, and web-based payments."
  />,
];
const LandingPageTechnologicalStackArray = [
  <AccordeonParagraph
    title="React"
    paragraphText="Facing a pressing need for a landing page to promote my mobile application startup, I turned to React as the go-to solution for its rapid development. React's agility and efficiency allowed me to swiftly create a dynamic and responsive landing page."
  />,
  <AccordeonParagraph
    title="Responsive Design with Media Queries"
    paragraphText="Knowing that most potential customers will get to the landing page via mobile applications, leveraging React, the landing page adapts to different screen sizes, delivering an optimal user experience on smartphones, tablets, or desktops."
  />,
  <AccordeonParagraph
    title="Analytics Integration"
    paragraphText="The integration of analytics allows for quick data gathering and analysis, empowering me to make informed choices about the platform direction for my startup project."
  />,
];
const AnyTownTechnologicalStackArray = [
  <AccordeonParagraph
    title="React"
    paragraphText="Facing a pressing need for a landing page to promote my mobile application startup, I turned to React as the go-to solution for its rapid development. React's agility and efficiency allowed me to swiftly create a dynamic and responsive landing page."
  />,
  <AccordeonParagraph
    title="Responsive Design with Media Queries"
    paragraphText="Knowing that most potential customers will get to the landing page via mobile applications, leveraging React, the landing page adapts to different screen sizes, delivering an optimal user experience on smartphones, tablets, or desktops."
  />,
  <AccordeonParagraph
    title="Web scraping"
    paragraphText="To populate the platform with property listings, I employed web scraping techniques to extract data from popular real estate listing website."
  />,
];
const TechnologicalStackList = ({ array }: { array: React.JSX.Element[] }) => {
  return (
    <ul className={styles.project_list}>
      {array.map((item, index) => (
        <div key={item.key}>{item}</div>
      ))}
    </ul>
  );
};

function Projects() {
  return (
    <section className={styles.projects_container}>
      <article className={styles.projects_article}>
        <h2>Tarot Reader</h2>
        <div className={styles.projects_article_container}>
          <div className={styles.project_photo_gallery}>
            <PhotoGallery
              photos={mobileProjectPhotos}
              delay={3000}
              alt={"Screenshot of Tarot Reader App"}
            />
          </div>
          <div className={styles.projects_article_item}>
            <h3 className={styles.project_paragraph_title}>
              Project Overview:
            </h3>
            <p className={styles.project_paragraph}>
              This unique app offers personalized tarot readings, catering to
              users specific questions.
              <br />
              <br />
              The core functionality revolves around delivering customized tarot
              insights to users, making their spiritual journey more accessible
              and engaging.
              <br /> <br />
              During developement of Tarot Reader mobile app, I took on various
              roles to bring this project to life, enhancing my my skills in
              programming, monetization, and marketing.
            </p>
            <h3 className={styles.project_paragraph_title}>
              Technological Stack:
            </h3>
            <TechnologicalStackList
              array={MobileProjectTechnologicalStackArray}
            />
            <div className={styles.projects_article_links}>
              <ButtonGooglePlayStore />
            </div>
          </div>
        </div>
      </article>
      <article className={styles.projects_article}>
        <h2>Tarot Reader Landing Page</h2>
        <div className={styles.projects_article_container}>
          <div className={styles.projects_article_item}>
            <p className={styles.project_paragraph}>
              Landing page serves as a crucial component of my app's marketing
              strategy, offering a compelling introduction to potential users.
              <br />
              <br />
              What sets this landing page apart is its integration of analytics
              and platform preference analysis, helping me make data-driven
              decisions about whether to prioritize the Android Google Play
              Store or the Mac App Store for future app releases.
              <br /> <br />
              During developement of Tarot Reader mobile app, I took on various
              roles to bring this project to life, enhancing my my skills in
              programming, monetization, and marketing.
            </p>
            <h3 className={styles.project_paragraph_title}>Core ideas:</h3>
            <TechnologicalStackList
              array={LandingPageTechnologicalStackArray}
            />
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
              delay={3000 * 100}
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
              <br />
              <br />
              The primary objective of this project was to emulate popular real
              estate listing websites like Zillow or Otodom, offering users a
              platform to explore property listings.
              <br />
              <br />
              To populate the website with data, I implemented web scraping
              techniques to collect information from these real estate portals.
            </p>
            <h3 className={styles.project_paragraph_title}>Core ideas:</h3>
            <TechnologicalStackList array={AnyTownTechnologicalStackArray} />
            <div className={styles.projects_article_links}>
              <MediaButton
                link="https://github.com/Schnippen"
                Icon={BsGithub}
                tooltip="Github"
              />
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Projects;

/*   const handleNavigateItem = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    event.preventDefault();
    event.stopPropagation();
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
    navigate(`/Item/${item.offerID}`, { state: item });
  }; 
  
  <img
              src={Screenshot1}
              alt="Tarot Reader App screenshot"
              className={styles.project_image}
            />


  */
