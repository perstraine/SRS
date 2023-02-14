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
  const [drop, setDrop] = useState(false)
  const [isOpen, setIsOpen] = useState("false");
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
          <div
            id={styles.hamburger}
            isOpen={isOpen}
            onClick={() => {
              setIsOpen("true");
            }}
          >
            {"\u2630"}
          </div>

          <div id={styles.navbarModal} isOpen={isOpen}>
            <div
              id={drop ? styles.activeDrop : styles.inactiveDrop}
              onMouseEnter={() => {
                setDrop(true);
              }}
              onMouseLeave={() => {
                setDrop(false);
              }}
            >
              <div
                className={styles.dropItem}
                onClick={() => {
                  setActive("/suspendedceiling");
                  navigate("/suspendedceiling");
                  setIsOpen("false");
                }}
              >
                Suspended Ceiling
              </div>
              <div
                className={styles.dropItem}
                onClick={() => {
                  setActive("/wallandparition");
                  navigate("/wallandpartition");
                  setIsOpen("false");
                }}
              >
                Wall & Partition
              </div>
              <div
                className={styles.dropItem}
                onClick={() => {
                  setActive("/services");
                  navigate("/services");
                  setIsOpen("false");
                }}
              >
                Services
              </div>
              <div
                className={styles.dropItem}
                onClick={() => {
                  setActive("/specialist");
                  navigate("/specialist");
                  setIsOpen("false");
                }}
              >
                Specialist
              </div>
            </div>
            <div id={styles.navbar} isOpen={isOpen}>
              <div
                id={styles.close}
                isOpen={isOpen}
                onClick={() => {
                  setIsOpen("false");
                }}
              >
                {"\u2716"}
              </div>
              <div
                id={active === "/" ? styles.active : null}
                className={styles.navItem}
                onClick={() => {
                  setActive("/");
                  navigate("/");
                  setIsOpen("false");
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
              </div>
              <div
                id={active === "/mission" ? styles.active : null}
                className={styles.navItem}
                onClick={() => {
                  setActive("/mission");
                  navigate("/mission");
                  setIsOpen("false");
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
                  setIsOpen("false");
                }}
              >
                Contact
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}