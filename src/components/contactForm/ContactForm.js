import styles from './ContactForm.module.css'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
export default function ContactForm() {
  const navigate = useNavigate();
  const submitForm = (items) => {
    const object = {}
    for (let i = 0; i < 4; i++) {
      object[items[i].name] = items[i].value;
    }
    console.log(object);
    axios.post("/.netlify/functions/sendgrid", object).then(()=>{navigate('/thanks')}).catch((error) => {
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
            fill out the form below.
          </p>
          <div id={styles.phone}>
            You can also contact us at{" "}
            <span id={styles.officeemail}>021 0225 6165</span>.
          </div>
          <p>*Required</p>
          <form
            id={styles.contactForm}
            onSubmit={(e) => {
              e.preventDefault();
              submitForm(e.target);
            }}
          >
            <div id={styles.nameSection}>
              <div className={styles.formItem}>
                <label for="firstname">First Name*</label>
                <input name="fname" id="firstname" type="text" required />
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