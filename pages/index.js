/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import classes from '../styles/classes.module.css'
import Nav from '../components/nav';
import FT from '../components/ft';
import Project from '../components/project';
import Link from 'next/link';
import Footer from '../components/footer'
import { Component } from 'react';
import Svg from '../components/drawsvg'

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }
  async componentDidMount() {
    let __data = await fetch("/api/projects").then(r => r.json());
    this.setState({
      data: __data
    })
  }
   render() {
    return (
      <div>
        <Head>
          <title>Home | Ironclad Web Development</title>
        </Head>
        <section className={styles.sec1}>
          <div className={styles.slant2}></div>
          <div className={styles.slant1}></div>
          <div className={styles.slant3}></div>
          <div className={styles.header}>
            <div className={styles.headBlock}>
              <h1 className={styles.title}>{" "}<span style={{ color: "var(--y-med)" }}>Insert Cool Title</span>{" "}<br /></h1>
            </div>
            <div className={styles.iwrap}>
              <Svg />
            </div>
          </div>
        </section>        
      <section style={{ paddingBottom: 50 }}>
          <div className={classes.blockSlant} style={{
            clipPath: `polygon(0 0, 0 100%, 25% 0)`,
            background: "var(--b-dim)",
            maxHeight: 100,
            height: "15vh"
          }}></div>
          <FT title="Responsive" content="I make sure that every website I create looks nice and fits on all devices from miniature phones to massive computers." icon="/icons/responsive.svg" style={{ marginTop: 0 }} />
          <FT title="On-Time" content="You can call me lots of things, but you can't call me late. Time is priceless and I try my best to make use of every second. You can count on me to get your website done in a timely manner." icon="/icons/clock.svg" />
          <FT title="Sustainable Quality" content="Persistence, Equity, Skill, and Design are four elements I keep at my side when developing for others.  I will unleash my skills and ensure satisfaction." icon="/icons/quality.svg" />
          <FT title="Best Performance" content="I use some of the latest web development technologies to ensure that your site will run fast, perform well, and satisfy you and people viewing your website." icon="/icons/performance.svg" />
          <FT title="Customization" content="I'll make sure your website comes out in the right style!  Tell me what you want and I'll try my best to implement it.  I'll make sure your site is worthy to be on the internet." icon="/icons/design.svg" />
        </section>
        <section style={{ background: "var(--gr-dim)" }} id="about">
          <div className={classes.blockSlant} style={{
            clipPath: `polygon(0 0, 0% 100%, 100% 0)`,
            background: "var(--w-5)",
            maxHeight: 100,
            height: "15vh",
            transform: 'translatey(-1px)'
          }}></div>
          <div className={classes.overlayer}>
            <div className={styles.slant4 + " " + classes.overlayElement}></div>
            <div className={styles.slant6 + " " + classes.overlayElement}></div>
            <div className={styles.slant7 + " " + classes.overlayElement}></div>
            <div className={styles.abtCover + " " + classes.overlayElement}>
              <div className={classes.centerxy}>
                <h1 className={classes._header + " " + classes.displayDark} style={{margin: 0, padding:0}}>A Little Bit About Me</h1>
                <p className={classes.displayDark + " " + classes.centerx}>Hello, my name is Dijinn, I mostly read reddit and look at neofetch for 12 hours a day (i use arch, btw)</p>
                <Link href="/about" passHref>
                  <h2 className={classes.link} style={{ textAlign: "center" }}>Read More &gt;&gt;</h2>
                </Link>
              </div>

            </div>
          </div>
        </section>
        <section style={{ background: 'var(--b-med)' }}>
          <div className={classes.blockSlant} style={{
            clipPath: `polygon(0 0, 0% 100%, 100% 0)`,
            background: "var(--w-5)",
            maxHeight: 100,
            height: "15vh",
            transform: 'translatey(-1px)'
          }}></div>
        </section>
        <Footer />
        <Nav />
      </div>
    )
  }
}
