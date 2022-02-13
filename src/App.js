import { useState, useEffect} from 'react';
import classes from './App.css';
import Header from './Header/Header';
import StartSection from './StartSection/StartSection';
import Panel from './Panel/Panel';

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
      <Panel>

      </Panel>
    </div>
  );
}

export default App;
