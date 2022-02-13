import React from 'react'
import classes from './Header.module.css'
import logo from '../images/logo.png'

const Header = () => {
  return (
    <header className={classes.appHeader}>
        <div className={classes.headerLeft}>
          <div className={classes.headerLogo}>
            <img src={logo} alt='' height={60} width={64}/>
          </div>  
          <div className={classes.headerMenuItem}>
              <span className={classes.headerDivider}></span>
          </div>
          <div className={classes.headerMenu}>
            <div className={classes.headerMenuItem}>
                Menu Item 1
            </div>
            <div className={classes.headerMenuItem}>
                Menu Item 2
            </div>
            <div className={classes.headerMenuItem}>
                Menu Item 3
            </div>
            <div className={classes.headerMenuItem}>
                Menu Item 4
            </div>
          </div>
        </div>
        <div className={classes.headerRight}>
            <div> 
                <button className={classes.headerContactButton}>
                    Contact Us!
                </button>
            </div>
            <div className={classes.headerMenuItem}>
                Something else
            </div>
        </div>
      </header>
  )
}

export default Header