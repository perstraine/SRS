import styles from './Header.module.css'
import logo from './assets/Logo.png'
import { useNavigate ,useLocation} from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
    const navigate = useNavigate();
    const location = useLocation();
    const [active, setActive] = useState(location.pathname)
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
          </div>
          <div id={styles.motto}>Your Seismic Restraint Specialists</div>
        </div>
        <div id={styles.navbar}>
          <div
            id={active === "/" ? styles.active : null}
            className={styles.navItem}
                    onClick={() => {
                setActive('/')
              navigate("/");
            }}
          >
            About
          </div>
          <div
            id={active === "/contact" ? styles.active : null}
            className={styles.navItem}
                    onClick={() => {
                setActive('/contact')
                navigate("/contact");
            }}
          >
            Contact
          </div>
        </div>
      </div>
    );
}