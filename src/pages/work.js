import Nav from '../components/nav'
import Footer from '../components/footer';
import classes from '../styles/classes.module.css'
import styles from '../styles/work.module.css'
import Link from 'next/link';
import Project from '../components/project';
import Head from 'next/head'
import { useState, Component } from 'react';


export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    fetch("/api/projects").then(r => r.json()).then(d => {
      this.setState({
        data: d
      })
    })
  }
  render() {
    return (
      <div>
        <Head>
          <title>My Work | Ironclad Web Development</title>
        </Head>
        <div>
          <section className={classes.overlayer} style={{ background: 'var(--b-dim)' }}>
            <div className={classes.overlayElement + " " + classes.slant} style={{
              background: 'var(--b-med)',
              clipPath: `polygon(0 0, 0% 100%, 100% 0)`
            }}></div>
            <div className={classes.overlayElement + " " + classes.slant} style={{
              background: 'rgba(0,0,0,0.2)',
              clipPath: `polygon(50% 0, 100% 100%, 100% 0)`
            }}></div>
            <div className={classes.overlayElement + " " + classes.slant} style={{
              background: 'rgba(0,0,0,0.2)',
              clipPath: `polygon(0 0, 50% 100%, 0 100%)`
            }}></div>
            <div className={classes.overlayElement + " " + styles.abtCover}>
              <div className={styles.centralBox}>
                <h1 className={classes._header + " " + classes.displayDark}>My Showcase</h1>
                <h2 className={classes.textCenter + " " + classes.displayDark} style={{ marginTop: 25 }}>The best of my work</h2>
              </div>
            </div>
            <div className={classes.overlayElement + " " + classes.slant} style={{
              background: 'var(--w-5)',
              clipPath: `polygon(0 100%, 100% 100%, 0 75%)`
            }}></div>
          </section>

          <section>
            {this.state.data.map(x => <Project title={x.title} key={x._id} desc={x.desc} link={x.link} image={x.cover} />)}

          </section>

          <section style={{ background: 'var(--b-med)' }}>
            <div className={classes.blockSlant} style={{
              clipPath: `polygon(0 0, 0% 100%, 100% 0)`,
              background: "var(--w-5)",
              maxHeight: 100,
              height: "15vh",
              transform: 'translatey(-1px)'
            }}></div>
            <div className={classes.overlayer}>
              <div className={styles.slant8 + " " + classes.overlayElement}></div>
              <div className={styles.slant9 + " " + classes.overlayElement}></div>
              <div className={styles.abtCover + " " + classes.overlayElement}>
                <div className={classes.centerxy}>
                  <h1 className={classes.displayDark + " " + classes._header} style={{padding: 0}}>Your site is waiting to be built</h1>
                  <p className={classes.displayDark + " " + classes.textCenter + " " + classes.centerx}>I&apos;m totally looking forward to creating your totally amazing website.  Are you ready?</p>
                  <Link href="/hire" passHref>
                    <button className={classes.button + " " + classes.blockBtn}>Hire Me</button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <Footer />
        </div>

        <Nav stay={false} />
      </div>
    );
  }
}