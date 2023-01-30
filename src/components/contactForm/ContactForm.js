import styles from './ContactForm.module.css'
import axios from "axios";
export default function ContactForm() {

  const submitForm = (items) => {
    const object = {}
    for (let i = 0; i < 4; i++) {
      object[items[i].name] = items[i].value;
    }
    console.log(object);
    axios.post("/.netlify/functions/sendgrid", object).catch((error) => {
      console.log(error);
    })
  }
    return (
      <div id={styles.outerContainer}>
        <div id={styles.innerContainer}>
          <div id={styles.title}>Contact Us</div>
          <p>
            For enquiries or quotes, please email{" "}
            <span id={styles.officeemail}>office@srsengineering.co.nz</span> or
            fill out the form below
          </p>
          <form
            id={styles.contactForm}
            // action={process.env.REACT_APP_HEROTOFU}
            // method="post"
            onSubmit={(e) => {
              e.preventDefault()
              submitForm(e.target);
            }}
          >
            <div id={styles.nameSection}>
              <div className={styles.formItem}>
                <label for="firstname">First Name*</label>
                <input
                  name="fname"
                  id="firstname"
                  type="text"
                  required
                />
              </div>
              <div className={styles.formItem}>
                <label for="lastname">Last Name*</label>
                <input name="lname" id="lastname" type="text" required />
              </div>
            </div>
            <div className={styles.formItem} id={styles.email}>
              <label for="email">Email*</label>
              <input name="email" type="email" required />
            </div>
            <div className={styles.formItem} id={styles.help}>
              <label for="help">What can we help you with?</label>
              <textarea name="help" id="help" type="text" />
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