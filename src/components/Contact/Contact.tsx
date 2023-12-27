import React, { useState } from "react";
import styles from "./Contact.module.css";

type ContactTypes = {
  myRef: React.MutableRefObject<HTMLElement | null>;
  mediaRef: React.MutableRefObject<HTMLElement | null>;
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
      <form
        action="https://formsubmit.co/dfojcik35@gmail.com"
        method="POST"
        className={styles.contact_form}
      >
        <div className={styles.contact_form_container}>
          <div className={styles.contact_form_input}>
            <span className={styles.contact_form_input_span}></span>
            <input
              type="text"
              id="email"
              name="email"
              onChange={handleChange}
              required
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
              required
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
            <textarea
              id="message"
              name="message"
              onChange={handleChange}
              required
            />
            <label
              className={styles.contact_form_textarea_label}
              htmlFor="message"
            >
              Message
            </label>
          </div>
        </div>
        <div className={styles.button_container}>
          <input
            type="submit"
            name="submit"
            value="Send"
            onClick={(e) => alert("Email sent")}
            className={styles.button}
            title="Send an e-mail"
          />
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
    {
      title: "Github",
      tooltip: "Link to Github",
      href: "https://github.com/Schnippen",
    },
    {
      title: "Linked in",
      tooltip: "Link to Linked in",
      href: "https://www.linkedin.com/in/damian-fojcik-483371218/",
    },
    /* { title: "Airbnb", tooltip: "Link to Airbnb" }, */
  ];
  const SocialLink = ({
    text,
    tooltip,
    href,
  }: {
    text: string;
    tooltip: string;
    href: string;
  }) => {
    return (
      <li className={styles.socialLink} title={tooltip}>
        <a
          href={href}
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
                href={item.href}
              />
            ))}
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Contact;
