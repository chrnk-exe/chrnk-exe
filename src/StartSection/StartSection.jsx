import React from 'react'
import classes from './StartSection.module.css'
import { Fade, Slide } from 'react-reveal'
import left from '../images/leftKamen.png'
import right from '../images/rightKamen.png'

const StartSection = () => {
  return (
    <div className={classes.startSection}>
      <Slide right delay={1000}>
        <div className={classes.leftPart}>
          <Fade left>
            <div className={classes.startLeft}>
              <img height={212} src={left}/>
            </div>
          </Fade>
          <Fade right>
            <div className={classes.startRight}>
              <img height={220} src={right}/>
            </div>
          </Fade>
        </div>
      </Slide>
      <div className={classes.rightPart}>
        <div className={classes.startSectionContent}>
          dawndauiwdwapudawui
        </div>
      </div>
    </div>
  )
}

export default StartSection