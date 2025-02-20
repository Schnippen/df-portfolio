import React, { useState } from "react";
import styles from "./Contact.module.css";
import { analytics } from "../../utils/analytics";
import { AnalyticsEvent } from "../../utils/constans";
import { IconType } from "react-icons";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaAirbnb } from "react-icons/fa";

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

    const validateEmail = (email: string): boolean => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();

      if (!validateEmail(form.email)) {
        alert("Please enter a valid email address");
        return;
      }

      if (!form.subject.trim()) {
        alert("Please enter a subject");
        return;
      }

      if (!form.message.trim()) {
        alert("Please enter a message");
        return;
      }
      alert("Email sent successfully!");
      analytics.event(AnalyticsEvent.mail_click, {
        email: form.email,
        text: form.message,
        subject: form.subject,
      });
      (e.target as HTMLFormElement).submit();
    };

    const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      const { name, value } = e.target;
      setForm({
        ...form,
        [name]: value,
      });
    };

    return (
      <form
        action="https://formsubmit.co/dfojcik35@gmail.com"
        method="POST"
        className={styles.contact_form}
        onSubmit={handleSubmit}
      >
        <div className={styles.contact_form_container}>
          <div className={styles.contact_form_input}>
            <span className={styles.contact_form_input_span}></span>
            <input
              type="email"
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
          <button
            type="submit"
            className={styles.button}
            title="Send an e-mail"
          >
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
    {
      title: "Github",
      tooltip: "Link to Github",
      href: "https://github.com/Schnippen",
      Icon: BsGithub,
    },
    {
      title: "Linked in",
      tooltip: "Link to Linked in",
      href: "https://www.linkedin.com/in/damian-fojcik-483371218/",
      Icon: BsLinkedin,
    },
    {
      title: "Airbnb",
      tooltip: "Link to Airbnb",
      href: "https://www.airbnb.com/users/show/296076814?locale=en",
      Icon: FaAirbnb,
    },
  ];
  const SocialLink = ({
    text,
    tooltip,
    href,
    Icon,
  }: {
    text: string;
    tooltip: string;
    href: string;
    Icon: IconType;
  }) => {
    return (
      <li className={styles.socialLink} title={tooltip}>
        <Icon className={styles.icon_small} />
        <a
          href={href}
          target="_blank"
          //style
          rel="noreferrer"
          onClick={() =>
            analytics.event(AnalyticsEvent.social_click, { type: tooltip })
          }
        >
          {" "}
          {text}
        </a>
      </li>
    );
  };

  return (
    <footer className={styles.footer_container} ref={myRef} id={id}>
      <div className={styles.footer}>
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
                  Icon={item.Icon}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}

export default Contact;
