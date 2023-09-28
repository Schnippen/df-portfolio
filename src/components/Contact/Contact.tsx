import React, { useState } from "react";
import styles from "./Contact.module.css";
import Map from "../../assets/map";
import { a } from "react-spring";

type ContactTypes = {
  myRef: React.MutableRefObject<HTMLElement | null>;
  id: string;
};

function Contact({ myRef, id }: ContactTypes) {
  const Form = () => {
    const [form, setForm] = useState({
      email: "",
      subject: "",
      message: "",
    });

    const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      setForm({
        ...form,
        [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement)
          .value,
      });
    };
    return (
      <form action="" className={styles.contact_form}>
        <div className={styles.contact_form_container}>
          <div className={styles.contact_form_input}>
            <span className={styles.contact_form_input_span}></span>
            <input
              type="text"
              id="email"
              name="email"
              onChange={handleChange}
            />
            <label className={styles.contact_form_input_label} htmlFor="email">
              E-mail
            </label>
          </div>
          <div className={styles.contact_form_input}>
            <span className={styles.contact_form_input_span}></span>
            <input
              type="text"
              id="subject"
              name="subject"
              onChange={handleChange}
            />
            <label
              className={styles.contact_form_input_label}
              htmlFor="subject"
            >
              Subject
            </label>
          </div>
          <div className={styles.contact_form_textarea}>
            <span className={styles.contact_form_textarea_span}></span>
            <textarea id="message" name="message" onChange={handleChange} />
            <label
              className={styles.contact_form_textarea_label}
              htmlFor="message"
            >
              Message
            </label>
          </div>
        </div>
        <div className={styles.button_container}>
          <button onClick={(e) => e.preventDefault()} className={styles.button} title="Send an e-mail">
            Send
          </button>
        </div>
      </form>
    );
  };

  const FooterHeader = () => {
    return (
      <div className={styles.footer_title}>
        <h2>Contact</h2>
      </div>
    );
  };

  const SocialLinkArray = [
    { title: "Github", tooltip: "Link to Github" },
    { title: "Linked in", tooltip: "Link to Linked in" },
    { title: "Airbnb", tooltip: "Link to Airbnb" },
  ];
  const SocialLink = ({ text, tooltip }: { text: string; tooltip: string }) => {
    return (
      <li className={styles.socialLink} title={tooltip}>
        <a
          href=""
          target="_blank"
          //style
        >
          {text}
        </a>
      </li>
    );
  };

  return (
    <footer className={styles.footer} ref={myRef} id={id}>
      <FooterHeader />
      <section className={styles.contact_container}>
        <Form />
        <div className={styles.contact_media}>
          <div className={styles.media_container}>
            <h3>Social:</h3>
            {SocialLinkArray.map((item, index) => (
              <SocialLink
                key={index}
                text={item.title}
                tooltip={item.tooltip}
              />
            ))}
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Contact;
