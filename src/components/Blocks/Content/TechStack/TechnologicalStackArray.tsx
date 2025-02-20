import { AccordeonParagraph } from "../../../AccordeonParagraph";

export const MobileTarotProjectTechnologicalStackArray = [
  (index: number, isOpened: boolean, onToggle: () => void) => (
    <AccordeonParagraph
      index={index}
      isOpened={isOpened}
      onToggle={onToggle}
      title="React Native"
      paragraphText="The app is built using React Native, ensuring cross-platform compatibility and a smooth user experience on both Android and iOS devices."
    />
  ),
  (index: number, isOpened: boolean, onToggle: () => void) => (
    <AccordeonParagraph
      index={index}
      isOpened={isOpened}
      onToggle={onToggle}
      title="Revenue Cat Monetization"
      paragraphText="The core idea is simple: users receive in-app currency, which they spend on tarot readings. The app includes in-app purchases (currency), integrated with RevenueCat and Google Play Billing."
    />
  ),
  (index: number, isOpened: boolean, onToggle: () => void) => (
    <AccordeonParagraph
      index={index}
      isOpened={isOpened}
      onToggle={onToggle}
      title="Mobx State Management"
      paragraphText="Since this was a small test project, I went with MobX for state management—it was a perfect fit for the job."
    />
  ),
  (index: number, isOpened: boolean, onToggle: () => void) => (
    <AccordeonParagraph
      index={index}
      isOpened={isOpened}
      onToggle={onToggle}
      title="Firestore & Firebase"
      paragraphText="For authentication and the database, I initially used Firebase & Firestore, but looking back, Supabase would have been a better choice due to its clearer documentation and smoother workflows."
    />
  ),
  (index: number, isOpened: boolean, onToggle: () => void) => (
    <AccordeonParagraph
      index={index}
      isOpened={isOpened}
      onToggle={onToggle}
      title="Advanced Error Detection"
      paragraphText="Sentry handled real-time error tracking, which was super useful during testing—especially when working with my tester friend. This was also back when GPT's capabilities were more limited, and it often lost context despite clear instructions."
    />
  ),
  (index: number, isOpened: boolean, onToggle: () => void) => (
    <AccordeonParagraph
      index={index}
      isOpened={isOpened}
      onToggle={onToggle}
      title="Mixpanel for User Analytics"
      paragraphText="After the first release, tools like Mixpanel helped me analyze user behavior, leading to a more user-friendly UI and better decision-making based on real data."
    />
  ),
  /*  (index: number, isOpened: boolean, onToggle: () => void) => (
    <AccordeonParagraph
      index={index}
      isOpened={isOpened}
      onToggle={onToggle}
      title="iOS version"
      paragraphText="The iOS version? Oh yeah, I submitted it for review… and let's just say Apple wasn't exactly thrilled."
    />
  ), */
];

export const LandingPageTechnologicalStackArray = [
  (index: number, isOpened: boolean, onToggle: () => void) => (
    <AccordeonParagraph
      index={index}
      isOpened={isOpened}
      onToggle={onToggle}
      title="React"
      paragraphText="Facing a pressing need for a landing page to promote my mobile application startup, I turned to React as the go-to solution for its rapid development."
    />
  ),
  (index: number, isOpened: boolean, onToggle: () => void) => (
    <AccordeonParagraph
      index={index}
      isOpened={isOpened}
      onToggle={onToggle}
      title="Next.js"
      paragraphText="I chose Next.js for its server-side rendering, routing, and dynamic loading—perfect for a fast, SEO-friendly web app."
    />
  ),
  (index: number, isOpened: boolean, onToggle: () => void) => (
    <AccordeonParagraph
      index={index}
      isOpened={isOpened}
      onToggle={onToggle}
      title="Responsive Design with Media Queries"
      paragraphText="The landing page adapts seamlessly to all screen sizes for the best user experience."
    />
  ),
  (index: number, isOpened: boolean, onToggle: () => void) => (
    <AccordeonParagraph
      index={index}
      isOpened={isOpened}
      onToggle={onToggle}
      title="Analytics Integration"
      paragraphText="Analytics integration enables data-driven decisions to refine and grow the platform."
    />
  ),
  (index: number, isOpened: boolean, onToggle: () => void) => (
    <AccordeonParagraph
      index={index}
      isOpened={isOpened}
      onToggle={onToggle}
      title="SEO"
      paragraphText="Strategically incorporated Keywords, improved site speed, created an organized site structure"
    />
  ),
];

export const AnyTownTechnologicalStackArray = [
  (index: number, isOpened: boolean, onToggle: () => void) => (
    <AccordeonParagraph
      index={index}
      isOpened={isOpened}
      onToggle={onToggle}
      title="React & Next.js"
      paragraphText="This project marked my first dive into React and Next.js,  providing me with an immersive introduction to modern front-end development"
    />
  ),
  (index: number, isOpened: boolean, onToggle: () => void) => (
    <AccordeonParagraph
      index={index}
      isOpened={isOpened}
      onToggle={onToggle}
      title="Web scraping"
      paragraphText="To fill the platform with property listings, I used web scraping techniques with Puppeteer andset up cron jobs to automate the data scraping process, keeping our property listings current and accurate."
    />
  ),
  (index: number, isOpened: boolean, onToggle: () => void) => (
    <AccordeonParagraph
      index={index}
      isOpened={isOpened}
      onToggle={onToggle}
      title="Supabase backend"
      paragraphText="Exploring alternatives to Firebase I  discovered Supabase.
    I gained practical experience working with Postgres database, Authentication, instant APIs."
    />
  ),
  (index: number, isOpened: boolean, onToggle: () => void) => (
    <AccordeonParagraph
      index={index}
      isOpened={isOpened}
      onToggle={onToggle}
      title="Responsive Design with Media Queries"
      paragraphText="Website dynamically adjusts to diverse screen sizes, ensuring an optimal user experience ."
    />
  ),
];
