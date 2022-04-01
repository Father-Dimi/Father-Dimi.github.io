import Head from 'next/head'
import styles from '../styles/Hire.module.css'
import classes from '../styles/classes.module.css'
import Nav from '../components/nav';
import { terms } from '../scripts/terms'
import Footer from '../components/footer';

export default function Terms() {
  let tms = terms.slice(0, terms.length - 1);
  return (<div className={classes.container}>
    <Head>
      <title>Terms | Ironclad Web Development</title>
    </Head>
    <h1 className={classes._header}>Terms of Service</h1>
    <div className={classes.blockContainer}>
      {tms.map(term => typeof term === "string" ? <h2 className={styles.header} key={term} style={{ marginTop: 50 }}>{term}</h2> : <p key={term[1]}>{term[0]}</p>)}
    </div>

    <Footer />
    <Nav stay={true} />
  </div>);
}