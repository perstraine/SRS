import styles from './HomeHeader.module.css'
import logo from './assets/Logo.png'
import { useNavigate ,useLocation} from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default function HomeHeader() {
  const whatwedo = [
    "/suspendedceiling",
    "/wallandpartition",
    "/services",
    "/specialist",
  ];
    const navigate = useNavigate();
    const location = useLocation();
  const [active, setActive] = useState(location.pathname)
  const [drop, setDrop] = useState(false)
  const [isopen, setIsOpen] = useState("false");
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
            isopen={isopen}
            onClick={() => {
              setIsOpen("true");
            }}
          >
            {"\u2630"}
          </div>
        </div>
        <div id={styles.navbarContainer} isopen={isopen}>
          <div
            id={styles.navPlaceholder}
            onClick={() => {
              setIsOpen("false");
              setDrop(false);
            }}
          ></div>
          <div id={styles.navbar} isopen={isopen}>
            <div
              id={styles.close}
              onClick={() => {
                setIsOpen("false");
                setDrop(false);
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
                setDrop(false);
              }}
            >
              <div className={styles.navItemText}>Home</div>
            </div>
            <div
              id={whatwedo.includes(active) ? styles.active : null}
              className={styles.navItem}
              onClick={() => {
                setDrop(!drop);
              }}
            >
              <div className={styles.navItemText}>
                What We Do <FontAwesomeIcon icon={faAngleDown} />
              </div>
            </div>
            <div id={drop ? styles.showDrop : styles.hideDrop}>
              <div
                className={
                  active === "/suspendedceiling" ? styles.activeDropItem : null
                }
                onClick={() => {
                  setActive("/suspendedceiling");
                  navigate("/suspendedceiling");
                  setIsOpen("false");
                  setDrop(false);
                }}
              >
                <div className={styles.dropItemText}>Suspended Ceiling</div>
              </div>
              <div
                className={
                  active === "/wallandpartition" ? styles.activeDropItem : null
                }
                onClick={() => {
                  setActive("/wallandpartition");
                  navigate("/wallandpartition");
                  setIsOpen("false");
                  setDrop(false);
                }}
              >
                <div className={styles.dropItemText}>Wall & Partition</div>
              </div>
              <div
                className={
                  active === "/services" ? styles.activeDropItem : null
                }
                onClick={() => {
                  setActive("/services");
                  navigate("/services");
                  setIsOpen("false");
                  setDrop(false);
                }}
              >
                <div className={styles.dropItemText}>Services</div>
              </div>
              <div
                className={
                  active === "/specialist" ? styles.activeDropItem : null
                }
                onClick={() => {
                  setActive("/specialist");
                  navigate("/specialist");
                  setIsOpen("false");
                  setDrop(false);
                }}
              >
                <div className={styles.dropItemText}>Specialist</div>
              </div>
            </div>
            <div
              id={active === "/about" ? styles.active : null}
              className={styles.navItem}
              onClick={() => {
                setActive("/about");
                navigate("/about");
                setIsOpen("false");
                setDrop(false);
              }}
            >
              <div className={styles.navItemText}>About Us</div>
            </div>
            <div
              id={active === "/contact" ? styles.active : null}
              className={styles.navItem}
              onClick={() => {
                setActive("/contact");
                navigate("/contact");
                setIsOpen("false");
                setDrop(false);
              }}
            >
              <div className={styles.navItemText}>Contact Us</div>
            </div>
          </div>
        </div>
      </div>
    );
}