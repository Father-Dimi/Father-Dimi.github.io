/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import classes from '../styles/classes.module.css';
import styles from '../styles/comps/footer.module.css';
import {useState} from 'react';
import Swal from 'sweetalert2';
export default function Footer() {
  const [__email, setEmail] = useState("");
  return (<footer className={styles.footer}>
    <div className={styles.sideCont}>
      <div className={styles.logoFlex + " " + classes.centerx}>
        <img src="/ironclad/head-white.svg" className={styles.logo} alt="IroncladDev Logo" />
        <img src="/ironclad/text-white.svg" className={styles.logoText} alt="Logo Text"/>
      </div>

    </div>
    <div className={styles.flexMain}>
      <div className={styles.ftCont}>
        <div className={styles.linkCol}>
          <div><Link href="/" passHref>
            <span className={styles.link}>Home</span>
          </Link></div>
          <div><Link href="/about" passHref>
            <span className={styles.link}>About Me</span>
          </Link></div></div>
      </div>

      <hr className={styles.breaker} />
  
      <div className={styles.copyright}>
        &copy; Dijinn Judd {(new Date).getFullYear()}
      </div>
    </div>
  </footer>);
}
