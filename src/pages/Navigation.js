import { useLocation, Outlet } from 'react-router-dom';
import styles from '../pagestyle/Navigation.module.css'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

export default function Navigation() {
    const location = useLocation();
    // console.log(location.pathname)
    if (location.pathname === "/") {
        return (
          <>
            <div className={styles.wrapper}>
              <Outlet />
              <div className={styles.footer}><Footer/></div>
            </div>
          </>
      );
  }
  if (location.pathname === "/wew") {
    return(<Outlet/>)
  }
    return (
      <>
        <div className={styles.wrapper}>
          <Header />
          <Outlet />
          <div className={styles.footer}><Footer/></div>
        </div>
      </>
    );
}