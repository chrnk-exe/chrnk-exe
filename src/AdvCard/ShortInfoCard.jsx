import React from 'react'
import classes from './card.module.css'

const ShortInfoCard = ({icon,caption, info}) => {
  return (
    <div className={classes.card}>
        <img src={icon} height={64} width={64} alt='advantage icon'/>
        <div className={classes.captions}>
            <p className={classes.caption}>{caption}</p>
            <p>{info}</p>
        </div>
    </div>
  )
}

export default ShortInfoCard