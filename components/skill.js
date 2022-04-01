/* eslint-disable @next/next/no-img-element */
import classes from '../styles/classes.module.css'
import styles from '../styles/comps/skill.module.css'
import Fade from './fade'

export default function Skill(props) {
  return (
    <Fade classes={styles.skill}>
      <img src={props.icon} alt="Language Icon" className={styles.lang + " " + (props.dark && styles.dark)} />
      <div className={classes.displayDark + " " + styles.dsc}>
        <strong className={styles.title}>{props.lang}</strong>
        <p style={{margin:0, fontSize: 15}}>{props.text}</p>
      </div>
    </Fade>
  )
}