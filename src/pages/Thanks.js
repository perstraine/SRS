import styles from './Thanks.module.css'
import { useNavigate} from "react-router-dom";

export default function Thanks() {
    const navigate = useNavigate();
    return (
      <div id={styles.outerContainer}>
        <div id={styles.innerContainer}>
          <div id={styles.title}>Thank You!</div>
          <div id={styles.text}>
            One of our staff will be in touch with you soon.
          </div>
          <div
            id={styles.button}
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </div>
        </div>
      </div>
    );
}