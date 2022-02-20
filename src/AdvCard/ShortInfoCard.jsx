import React from 'react'
import classes from './card.module.css'

const ShortInfoCard = ({icon,caption, info, italicCap, imgHeight=80, imgWidth=80}) => {
  return (
    <div className={classes.card}>
        <img src={icon} height={imgHeight} width={imgWidth} alt='advantage icon'/>
        <div className={classes.captions}>
            <p className={classes.caption}>{caption}</p>
            <p className={classes.btwCaption}>{italicCap}</p>
            <p>{info}</p>
        </div>
    </div>
  )
}

export default ShortInfoCard