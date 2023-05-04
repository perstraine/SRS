import styles from './ServicesSection.module.css'
import { Link } from 'react-router-dom';

export default function ServicesSection() {
    return (
      <div id={styles.outer}>
        <div id={styles.inner}>
          <Link to="/suspendedceiling" className={styles.link}>
            <div className={styles.tile} tile={"ceiling"}>
              <div className={styles.tileText}>
                <div>Suspended Ceilings</div>
              </div>
            </div>
          </Link>

          <Link to="/wallandpartition" className={styles.link}>
            <div className={styles.tile} tile={"wall"}>
              <div className={styles.tileText}>
                <div>Walls and Partitions</div>
              </div>
            </div>
          </Link>

          <Link to="/services" className={styles.link}>
            <div className={styles.tile} tile={"services"}>
              <div className={styles.tileText}>
                <div>Services</div>
              </div>
            </div>
          </Link>

          <Link to="/specialist" className={styles.link}>
            <div className={styles.tile} tile={"specialist"}>
              <div className={styles.tileText}>
                <div>Specialist</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    );
}