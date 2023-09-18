import React from "react";
import Block from "../components/Blocks/Block";
function ProjectPage() {
  const Text = () => {
    return (
      <p>
        Tarot Reader is an exceptional mobile application developed using React
        Native, which seamlessly merges the timeless art of tarot reading with
        cutting-edge technologies including Firebase, Firestore, and AI. This
        app delivers a highly personalized and captivating tarot reading
        experience, empowering users to seek guidance and gain profound insights
        from the mystical cards. Through a digitally represented tarot deck and
        advanced AI algorithms, the app offers meaningful interpretations that
        transcend traditional methods. Users can pose questions and receive
        accurate guidance, as the app harnesses the power of AI to analyze their
        queries and card selections, providing them with personalized and
        enlightening interpretations. In terms of security and user management,
        Tarot Reader leverages Firebase Authentication to ensure a secure login
        and registration process. Developers themselves can effortlessly create
        and manage their individual accounts within the app, ensuring a seamless
        and personalized experience. Furthermore, the integration of Firestore,
        a robust and scalable NoSQL database powered by Firebase, enables the
        storage and retrieval of user data. This encompasses various aspects
        such as account balance, user preferences, and personalized settings,
        guaranteeing a seamless and personalized user experience. Tarot Reader
        boasts an intuitive and visually captivating user interface, enhanced by
        smooth animations and seamless transitions. The app strives to create an
        immersive environment that engages both experienced tarot enthusiasts
        and newcomers to the practice, offering an unparalleled level of
        interactivity and a truly captivating journey.
      </p>
    );
  };

  return (
    <main style={{ marginTop: "120px", height: "100%" }}>
      <Block childComponent={<Text />}></Block>
    </main>
  );
}

export default ProjectPage;
