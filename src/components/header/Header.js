import styles from './Header.module.css'
import logo from './assets/Logo.png'
import { useNavigate ,useLocation} from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
    const navigate = useNavigate();
    const location = useLocation();
  const [active, setActive] = useState(location.pathname)
  console.log(active);
  const [drop, setDrop] = useState(false)
    return (
      <div id={styles.headerContainer}>
        <div id={styles.logomotto}>
          <div id={styles.logoContainer}>
            <img
              id={styles.logo}
              src={logo}
              alt="Logo"
              onClick={() => {
                navigate("/");
              }}
            />
            <div id={styles.motto}>Your Seismic Restraint Specialists</div>
          </div>

          <div id={styles.navbar}>
            <div
              id={active === "/" ? styles.active : null}
              className={styles.navItem}
              onClick={() => {
                setActive("/");
                navigate("/");
              }}
            >
              Home
            </div>
            <div
              className={styles.navItem}
              onMouseEnter={() => {
                setDrop(true);
              }}
              onMouseLeave={() => {
                setDrop(false);
              }}
            >
              What We Do <FontAwesomeIcon icon={faAngleDown} />
              <div id={drop ? styles.activeDrop : styles.inactiveDrop}>
                <div
                  className={styles.dropItem}
                  onClick={() => {
                    setActive("/suspendedceiling");
                    navigate("/suspendedceiling");
                  }}
                >
                  Suspended Ceiling
                </div>
                <div
                  className={styles.dropItem}
                  onClick={() => {
                    setActive("/wallandparition");
                    navigate("/wallandpartition");
                  }}
                >
                  Wall & Partition
                </div>
                <div
                  className={styles.dropItem}
                  onClick={() => {
                    setActive("/services");
                    navigate("/services");
                  }}
                >
                  Services
                </div>
                <div
                  className={styles.dropItem}
                  onClick={() => {
                    setActive("/specialist");
                    navigate("/specialist");
                  }}
                >
                  Specialist
                </div>
              </div>
            </div>
            <div
              id={active === "/mission" ? styles.active : null}
              className={styles.navItem}
              onClick={() => {
                setActive("/mission");
                navigate("/mission");
              }}
            >
              Our Mission
            </div>
            <div
              id={active === "/contact" ? styles.active : null}
              className={styles.navItem}
              onClick={() => {
                setActive("/contact");
                navigate("/contact");
              }}
            >
              Contact
            </div>
          </div>
        </div>
      </div>
    );
}