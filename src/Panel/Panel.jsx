import React from 'react'
import classes from './Panel.module.css'

const Panel = ({children}) => {
  return (
    <section className={classes.wrapBlock}>{children}</section>
  )
}

export default Panel