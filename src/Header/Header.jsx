import React from 'react'
import classes from './Header.module.css'
import logo from '../images/logo.png'

const Header = ({hidden}) => {
  return (
    <header className={hidden ? classes.appHeader + ' ' + classes.headerHidden : classes.appHeader}>
        <div className={classes.headerLeft}>
          <div className={classes.headerLogo}>
            <img className={hidden 
                            ? classes.headerImageHidden
                            : classes.headerImage} 
                            src={logo} 
                            alt=''/>
          </div>  
          <div className={classes.headerMenuItem}>
              <span className={classes.headerDivider}></span>
          </div>
          <div className={classes.headerMenu}>
            <div className={classes.headerMenuItem}>
                Home
            </div>
            <div className={classes.headerMenuItem}>
                Games
            </div>
            <div className={classes.headerMenuItem}>
                Web Site
            </div>
          </div>
        </div>
        <div className={classes.headerRight}>
            <div className={classes.headerMenuItem}> 
                {'<>'}Russian
            </div>
            <div className={classes.headerMenuItem}>
                {'<>'}English
            </div>
        </div>
      </header>
  )
}

export default Header