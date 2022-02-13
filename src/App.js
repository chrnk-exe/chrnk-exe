import classes from './App.css';
import Header from './Header/Header';
import StartSection from './StartSection/StartSection';
import Panel from './Panel/Panel';

function App() {
  return (
    <div className={classes.App}>
      <Header />
      <StartSection />
      <Panel>
        
      </Panel>
    </div>
  );
}

export default App;
