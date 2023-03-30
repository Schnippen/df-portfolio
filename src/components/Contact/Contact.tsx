import React from "react";
import styles from "./Contact.module.css";

function Contact() {
  return (
    <section className={styles.contact_container}>
      <form action="" className={styles.contact_form}>
        <div className={styles.contact_form_container}>
          <div className={styles.contact_form_input}>
            <input type="text" placeholder="email" />
          </div>
          <div className={styles.contact_form_input}>
            <input type="text" placeholder="subject" />
          </div>
          <div className={styles.contact_form_textarea}>
            <textarea placeholder="message" />
          </div>
        </div>
      </form>
      <div className={styles.contact_map}>mapa</div>
    </section>
  );
}

export default Contact;
