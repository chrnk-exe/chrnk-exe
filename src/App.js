import { useState, useEffect} from 'react';
import {Fade, Flip} from 'react-reveal'

import classes from './App.css';
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
      
      <Panel  left={(
          <div>
            <header className={styles.gameDesHeader}>
              <img src={PoopcornIcon} alt='' height={128}/>
              <h2>POOPCORN</h2>
            </header>
            <article className={styles.gameDescription}>
              <p>Do you like popcorn? You must save the popcorn from the dirt and defeat the real evil!</p>
              <ul>
                <li>Run for as long as possible and earn achievements</li>
                <li>Collect coins to get cool skins</li>
                <li>Improve your box to the max</li>
                <li>Unlock new worlds</li>
              </ul>
              <p>Stretch your fingers and get ready to save the world!</p>
            </article>
          </div>
        )} 
              right={(
          <div className={styles.imageStack}>
            <div className={styles.gameScreenTop}>
              <img src={PoopMackUp1} alt='Poopcorn game mackup' height={450}/>
            </div>
            <div className={styles.gameScreenBottom}>
              <img src={PoopMackUp2} alt='Poopcorn game mackup' height={450}/>
            </div>
          </div>
        )}
        background={{
          color: '#ef4943'  
        }}/>

      <Panel left={(
        <div>
          <header className={styles.gameDesHeader} style={{marginBottom: '25px'}}>
            <img src={WallRunIcon} alt='' height={128}/>
            <h2>POOPCORN</h2>
          </header>
          <article className={styles.gameDescription}>
            <p>Let's put you to the test! Take part in an endless chase by performing bizarre poses</p>
            <ul>
              <li>Catch crystals to buy skins</li>
              <li>Compete for the grand prize</li>
              <li>And most importantly, don't crash into walls!</li>
            </ul>
            <p>Set new records and improve your reaction speed </p>
          </article>
      </div>
      )}
      right = {(
        <div>
          <div className={styles.imageStack}>
            <div className={styles.gameScreenTop}>
              <img src={WallRunMackUp1} alt='Poopcorn game mackup' height={450}/>
            </div>
            <div className={styles.gameScreenBottom}>
              <img src={WallRunMackUp2} alt='Poopcorn game mackup' height={450}/>
            </div>
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
      <Panel background={{
        color: '#ef4943'
      }}>
        <div className={styles.aboutUsInfo}>
          <h2>WHAT IS A KAMEN CORPORATION?</h2>
          <div className={styles.card}>
              <p>A few years ago, two friends decided to team up to create unique games for the whole world.</p>
          </div>
          <div className={styles.infoKamen}>
            <ShortInfoCard 
              icon={dima} 
              imgHeight={120}
              imgWidth={120}
              caption={"Dima, 20 years"}
              italicCap={'Game developer'}
              info={'All jumps and punches in the game depend on him. Fights bugs and delays in the game, is responsible for saving gameplay'}
            />
            <ShortInfoCard icon={nikita} imgHeight={120} imgWidth={120} 
            caption={'Nikita, 20 years'} 
            italicCap={'Game designer and UI developer'}
            info={'Responsible for lines and bad jokes from NPS, gameplay and appearance of locations and characters'}/>
          </div>
          <p>
              We create games in different genres: Action, Arcade, Fighting, Platformers, Puzzle, Racing, Shooter, Strategy. 
              We have already made several 2D and 3D games and worked with companies from different countries.
          </p>
        </div>
      </Panel>

      <Panel background={{color: "#D14D48"}} >
        <div className={styles.aboutUsInfo + ' ' + styles.advantagesInfo}>
          <h2>WHY CHOOSE US?</h2>
          <div className={styles.advantages}>
            <ShortInfoCard icon={Exp} caption={'3 years in game development'} info={'Constantly learning and creating beautiful things for you. Our experience allows us to create colorful and high-quality games in a short time.'}/>
            <ShortInfoCard icon={YoungGuys} caption={'Young and creative'} info={'Any idea you have in our hands is sure to win the love of the players. And we will help you to implement it in the best possible way'}/>
            <ShortInfoCard icon={Money} caption={'Good prices'} info={'Individual approach and high-quality games at a price lower than that of competitors will allow us to achieve maximum results in the shortest possible time.'}/>
            <ShortInfoCard icon={time} caption={'Speed and quality'} info={"Don't waste your time, trust us and enjoy the result that will exceed your expectations. We are ready to implement your most daring ideas"} />
          </div>
        </div>
      </Panel>
      <Panel background={{
        color: '#ef4943'
      }}>
        <div style={{display: 'flex', flexDirection:'column'}}> 
          <CustomForm />
        </div>
      </Panel>

      {/* Pre - Footer */}
      <Panel left={(
        <div>
          <img src={whiteLofo} alt='white footer logo'/>
        </div>
      )}
      right={(
        <div className={styles.gameDescription}>
          <ul>
            <li><a href="https://goo.su/aRHl" target='_blank' rel="noreferrer">Google Play</a></li>
            <li><a href="https://goo.su/azpR" target='_blank' rel="noreferrer">Fiverr</a></li>
          </ul>
        </div>
      )} background={{color: "#D14D48"}}/>
      <footer className={classes.footer}>
        <div>
          <p>Some info</p>
          <p>Some info</p>
        </div>
        <div>
          <p>Some info</p>
          <p>Some info</p>
        </div>
      </footer>
    </div>
  );
}

export default App;