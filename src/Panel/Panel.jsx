import React from 'react'
import classes from './Panel.module.css'

const Panel = ({left, right, background, flip=false, children, font}) => {
  if(children === undefined){
    if(!flip)
  return (
    <section className={classes.wrapBlock} style={{
      backgroundColor: background?.color,
      color: font?.color ? font.color : '#FFFFF1',
      fontSize: font?.size
    }}>
      <div className={classes.panelLeft}>
        {left}
      </div>
      <div className={classes.panelRight}>
        {right}
      </div>  
    </section>
  )
  else return (
    <section className={classes.wrapBlock} style={{
      backgroundColor: background?.color,
      color: font?.color ? font.color : '#FFFFF1',
      fontSize: font?.size
    }}>
      <div className={classes.panelLeft}>
        {right}
      </div>
      <div className={classes.panelRight}>
        {left}
      </div>  
    </section>
  )
  } else {
    return (
      <section className={classes.wrapBlock} style={{
        backgroundColor: background?.color,
        color: font?.color ? font.color : '#FFFFF1',
        fontSize: font?.size
      }}>
        {children} 
      </section>
    )
  }
  
}

export default Panel