import styles from './Footer.module.css'
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
      <div className={styles.outerContainer}>
        <div className={styles.innerContainer}>
          <div className={styles.links}>
            <Link to="/" className={styles.link}>
              Home
            </Link>
            <Link to="/about" className={styles.link}>
              About Us
            </Link>
            <Link to="/suspendedceiling" className={styles.link}>
              Suspended Ceilings
            </Link>
            <Link to="/wallandpartition" className={styles.link}>
              Walls and Partitions
            </Link>
            <Link to="/services" className={styles.link}>
              Services
            </Link>
            <Link to="/specialist" className={styles.link}>
              Specialist
            </Link>
            <Link to="/contact" className={styles.link}>
              Contact Us
            </Link>
          </div>
          <div className={styles.copyright}>
            Copyright © 2023 SRS Engineering Limited. All Rights Reserved.
          </div>
        </div>
      </div>
    );
}