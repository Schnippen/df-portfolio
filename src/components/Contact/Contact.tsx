import React,{useState} from "react";
import styles from "./Contact.module.css";

type ContactTypes = {
  myRef: React.MutableRefObject<HTMLElement | null>;
};

function Contact({ myRef }: ContactTypes) {
  const [form,setForm]=useState({
    email:"",
    subject:"",
    message:"",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement)
        .value,
    });
    console.log(form);
  };

  return (
    <section className={styles.contact_container} ref={myRef}>
      <h2>Contact</h2>
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
            <input type="text" id="subject" name="subject" />
            <label
              className={styles.contact_form_input_label}
              htmlFor="subject"
            >
              Subject
            </label>
          </div>
          <div className={styles.contact_form_textarea}>
            <textarea id="message" name="message" />
            <label
              className={styles.contact_form_textarea_label}
              htmlFor="message"
            >
              Message
            </label>
          </div>
        </div>
      </form>
      <div className={styles.contact_map}>mapa</div>
    </section>
  );
}

export default Contact;
