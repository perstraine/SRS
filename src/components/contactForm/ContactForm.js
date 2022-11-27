import styles from './ContactForm.module.css'

export default function ContactForm() {
  const wew = "WEW";
    return (
      <div id={styles.outerContainer}>
        <div id={styles.innerContainer}>
          <p>
            For enquiries or quotes, please email{" "}
            <span id={styles.officeemail}>office@srsengineering.co.nz</span> or
            fill out the form below
          </p>
          <form
            id={styles.contactForm}
            action={process.env.REACT_APP_HEROTOFU}
            method="post"
          >
            <div id={styles.nameSection}>
              <div className={styles.formItem}>
                <label for="firstname">First Name*</label>
                <input
                  name="First Name"
                  id="firstnamename"
                  type="text"
                  required
                />
              </div>
              <div className={styles.formItem}>
                <label for="lastname">Last Name*</label>
                <input name="Last Name" id="lastname" type="text" required />
              </div>
            </div>
            <div className={styles.formItem} id={styles.email}>
              <label for="email">Email*</label>
              <input name="Email" type="email" required />
            </div>
            <div className={styles.formItem} id={styles.help}>
              <label for="help">What can we help you with?</label>
              <textarea name="Help" id="help" type="text" />
            </div>
            <div id={styles.submitHolder}>
              <button id={styles.submitButton} type="submit" value="Submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
}