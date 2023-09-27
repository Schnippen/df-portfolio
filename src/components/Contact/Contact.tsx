import React, { useState } from "react";
import styles from "./Contact.module.css";
import Map from "../../assets/map";

type ContactTypes = {
  myRef: React.MutableRefObject<HTMLElement | null>;
  id: string;
};

function Contact({ myRef, id }: ContactTypes) {
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
    console.log(form);
  };

  return (
    <footer className={styles.footer} ref={myRef} id={id}>
      <div className={styles.footer_title}>
        <h2>Contact</h2>
      </div>
      <section className={styles.contact_container}>
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
              <label
                className={styles.contact_form_input_label}
                htmlFor="email"
              >
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
            <button onClick={(e) => e.preventDefault()}> send</button>
          </div>
        </form>
      </section>
    </footer>
  );
}

export default Contact;

/*          <a
            href="https://forms.gle/oBfpBRTcQfAbfMT59"
            aria-label="join-mailing-list"
            target="_blank"
            rel="noreferrer"
          >
          
              <div className={styles.contact_map}>
        <Map />
      </div>


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
        <button onClick={(e) => e.preventDefault()}> send</button>
      </form>

          */
