import React from 'react'
import classes from './StartSection.module.css'
import { Fade, Slide } from 'react-reveal'
import left from '../images/leftKamen.png'
import right from '../images/rightKamen.png'
import A from '../images/letters/a.png'
import M from '../images/letters/m.png'
import K from '../images/letters/k.png'
import E from '../images/letters/e.png'
import N from '../images/letters/n.png'

const letters = [K,A,M,E,N]

const StartSection = () => {
  return (
    <div className={classes.startSection}>
      <Slide right delay={1000} duration={1200}>
        <div className={classes.leftPart}>
          <div className={classes.kamenLogo}>
            <Fade left>
              <div className={classes.startLeft}>
                <img height={220} src={left} alt=''/>
              </div>
            </Fade>
            <Fade right>
              <div className={classes.startRight}>
                <img height={228} src={right}  alt=''/>
              </div>
            </Fade>
          </div>
          <div className={classes.letters}>
            {
              letters.map((letter, index) => (
                <Fade delay={2000 + index * 75} bottom cascade key={letter}>
                  <img src={letter} alt='' height={86}/>
                </Fade>
              ))
            }
          </div>
        </div>
      </Slide>
      <div className={classes.rightPart}>
        <div className={classes.startSectionContent}>
        <Fade left delay={1200} duration={1500} distance={200 + 'px'}>
            <h1>KAMEN</h1>
            {/* <h2>Corporation</h2> */}
            <p>
            We are game and application developers from Russia. 
            Our goal is to create incredible, fantastic, fun and high-quality games!
            </p>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default StartSection