import { useState, useEffect} from 'react';
import {Fade, Flip} from 'react-reveal'

import classes from './App.module.css';
import styles from './PanelOutside.module.css'

import Header from './Header/Header';
import StartSection from './StartSection/StartSection';
import Panel from './Panel/Panel';
import ShortInfoCard from './AdvCard/ShortInfoCard';
import CustomForm from './CustomForm/CustomForm';

// poopcorn images
import PoopcornIcon from './images/games/Poopcorn/poopcorn.png'
import PoopMackUp1 from './images/games/Poopcorn/poopcornmackup1.png'
import PoopMackUp2 from './images/games/Poopcorn/poopcornmackup2.png'

//wallrunner images
import WallRunIcon from './images/games/WallRunner/wallrunner.png'
import WallRunMackUp1 from './images/games/WallRunner/wallrunnermackup1.png'
import WallRunMackUp2 from './images/games/WallRunner/wallrunnermackup2.png'

//guys icons
import dima from './images/dimas.png'
import nikita from './images/nikita.png'

//adv icons
import Exp from './images/whymeIcons/exp.png'
import YoungGuys from './images/whymeIcons/loveandmen.png'
import Money from './images/whymeIcons/money.png'
import time from './images/whymeIcons/time.png'

import whiteLofo from './images/whiteLogo.png'
import FAQ from './images/faqs.svg'

//icons
import tiktok from './images/sicons/tiktok.svg'
import fiver from './images/sicons/fiver.svg'
import telega from './images/sicons/tg.svg'
import yt from './images/sicons/yt.svg'
import gp from './images/sicons/1.svg'
import fiver2 from './images/sicons/2.svg'

const socials = {
  
}

function App() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 32)setHidden(true)
      else setHidden(false)
    })
  }, [])

  return (
    <div className={classes.App}>
      <Header hidden={hidden}/>
      <StartSection />
      {/* About Our Team */}
      <Panel background={{
        color: '#ef4943'
      }}>
        <div className={styles.aboutUsInfo}>
          <Fade top cascade>
            <h2>WHAT IS A KAMEN CORPORATION?</h2>
          </Fade>
          <div className={styles.infoKamen}>
            <Fade bottom distance={'40px'}> 
              <ShortInfoCard 
                icon={dima} 
                imgHeight={120}
                imgWidth={120}
                caption={"Dima, 20 years"}
                italicCap={'Game developer'}
                info={'All jumps and punches in the game depend on him. Fights bugs and delays in the game, is responsible for saving gameplay'}
              />
            </Fade>
            <Fade bottom distance={'40px'} delay={300}>
              <ShortInfoCard icon={nikita} imgHeight={120} imgWidth={120} 
              caption={'Nikita, 20 years'} 
              italicCap={'Game designer and UI developer'}
              info={'Responsible for lines and bad jokes from NPS, gameplay and appearance of locations and characters'}/>
            </Fade>
          </div>
          <Fade cascade>
            <p>
              We create games in different genres: Action, Arcade, Fighting, Platformers, Puzzle, Racing, Shooter, Strategy. 
              We have already made several 2D and 3D games and worked with companies from different countries.
            </p>
          </Fade>
        </div>
      </Panel>
      {/* About Us */}
      <Panel background={{color: "#D14D48"}} >
        <div className={styles.aboutUsInfo + ' ' + styles.advantagesInfo}>
          <Fade cascade top>
            <h2>WHY CHOOSE US?</h2>
          </Fade>
          <div className={styles.advantages}>
            <Fade left distance={'20px'} duration={800}>
              <ShortInfoCard icon={Exp} caption={'3 years in game development'} info={'Constantly learning and creating beautiful things for you. Our experience allows us to create colorful and high-quality games in a short time.'}/>
            </Fade>
            <Fade right distance={'20px'} duration={800}>
              <ShortInfoCard icon={YoungGuys} caption={'Young and creative'} info={'Any idea you have in our hands is sure to win the love of the players. And we will help you to implement it in the best possible way'}/>
            </Fade>
            <Fade left distance={'20px'} duration={800}>
              <ShortInfoCard icon={Money} caption={'Good prices'} info={'Individual approach and high-quality games at a price lower than that of competitors will allow us to achieve maximum results in the shortest possible time.'}/>
            </Fade>
            <Fade right distance={'20px'} duration={800}>
              <ShortInfoCard icon={time} caption={'Speed and quality'} info={"Don't waste your time, trust us and enjoy the result that will exceed your expectations. We are ready to implement your most daring ideas"} />
            </Fade>
          </div>
        </div>
      </Panel>
      {/* Poopcorn */}
      <Panel  left={(
          <div>
            <Fade bottom distance={'20px'}>
              <header className={styles.gameDesHeader}>
                <img src={PoopcornIcon} alt='' height={128}/>
                <h2>POOPCORN</h2>
              </header>
            </Fade>
            <article className={styles.gameDescription}>
              <Fade cascade bottom>
                <p>Do you like popcorn? You must save the popcorn from the dirt and defeat the real evil!</p>
                <ul>
                  <li>Run for as long as possible and earn achievements</li>
                  <li>Collect coins to get cool skins</li>
                  <li>Improve your box to the max</li>
                  <li>Unlock new worlds</li>
                </ul>
                <p>Stretch your fingers and get ready to save the world!</p>
              </Fade>
            </article>
          </div>
        )} 
              right={(
          <div className={styles.imageStack}>
            <Fade bottom delay={300}>
              <div className={styles.gameScreenTop}>
                <img src={PoopMackUp1} alt='Poopcorn game mackup' height={450}/>
              </div>
            </Fade>
            <Fade bottom>
              <div className={styles.gameScreenBottom}>
                <img src={PoopMackUp2} alt='Poopcorn game mackup' height={450}/>
              </div>
            </Fade>
          </div>
        )}
        background={{
          color: '#ef4943'  
        }}/>
      {/* WallRunner */}
      <Panel left={(
        <div>
          <Fade bottom distance={'20px'} cascade>
            <header className={styles.gameDesHeader} style={{marginBottom: '25px'}}>
              <img src={WallRunIcon} alt='' height={128}/>
              <h2>POOPCORN</h2>
            </header>
          </Fade>
          <article className={styles.gameDescription}>
            <Fade cascade bottom>
              <p>Let's put you to the test! Take part in an endless chase by performing bizarre poses</p>
              <ul>
                <li>Catch crystals to buy skins</li>
                <li>Compete for the grand prize</li>
                <li>And most importantly, don't crash into walls!</li>
              </ul>
              <p>Set new records and improve your reaction speed </p>
            </Fade>
          </article>

      </div>
      )}
      right = {(
        <div>
          <div className={styles.imageStack}>
            <Fade bottom distance={'40px'} delay={300}>
              <div className={styles.gameScreenTop}>
                <img src={WallRunMackUp1} alt='Poopcorn game mackup' height={450}/>
              </div>
            </Fade>
            <Fade distance={'40px'} bottom>
              <div className={styles.gameScreenBottom}>
                <img src={WallRunMackUp2} alt='Poopcorn game mackup' height={450}/>
              </div>
            </Fade>
          </div>
        </div>
      )}
      background={{
        color: "#D14D48"
      }}
      font={{
        color: '#FFFFF1'
      }}
      flip={true}/>
      {/* About Our Team */}     
     {/* Form */}
      <Panel background={{
        color: '#ef4943'
      }}>
        <Fade bottom distance={'40px'}>
          <div style={{display: 'flex', flexDirection:'column'}}> 
            <CustomForm />
          </div>
        </Fade>
      </Panel>

      {/* Pre - Footer */}
      <footer className={classes.footer}>
        
        <div className={classes.footerMain}>
          <div>
            <img style={{marginRight: 30 + 'px'}} src={whiteLofo} height={90} alt=''/>
          </div>
          <div>
            <h1>Follow us!</h1>
            {/* <span className={classes.followUsUnderline}></span> */}
            <ul className={classes.social}>
              <li><a href='https://play.google.com/store/apps/dev?id=7504598280677274956&hl=ru&gl=US' target='_blank'><img src={gp} height={35}/></a></li>
              <li><a href='https://www.youtube.com/channel/UCHn17pcpX9tfE5PyKzaXMSw/featured' target='_blank'><img src={yt} height={35}/></a></li>
              <li><a href="https://vm.tiktok.com/ZSec3oTQX/" target='_blank'><img src={tiktok} height={35}/></a></li>
              <li><a href='https://t.me/NiKNexT_T' target='_blank'><img src={telega} height={35}/></a></li>
              <li><a href="https://www.fiverr.com/s2/fc22ea6a2a" target='_blank'><img src={fiver} height={35}/></a></li>

              {/* <li><a href='https://play.google.com/store/apps/dev?id=7504598280677274956&hl=ru&gl=US' target='_blank'>Google Play</a></li>
              <li><a href='https://www.youtube.com/channel/UCHn17pcpX9tfE5PyKzaXMSw/featured' target='_blank'>YouTube</a></li>
              <li><a href='https://t.me/NiKNexT_T' target='_blank'>Telegram</a></li>
              <li><a href="https://vm.tiktok.com/ZSec3oTQX/" target='_blank'>TikTok</a></li>
              <li><a href="https://www.fiverr.com/s2/fc22ea6a2a" target='_blank'>Fiverr</a></li> */}
            </ul>
          </div> 
        </div>

        <div className={classes.Footer}>
          <Fade>
           
              <p>Ⓒ 2019 - 2022 Kamen. All rights reserved.</p>
              <div>
                <a href={'#'} style={{marginRight: 10 + 'px'}}>Privacy Notice</a>
                <a href={'#'} >Terms of Service</a>
              </div>
            
          </Fade>        
        </div>

      </footer>
    </div>
  );
}

export default App;