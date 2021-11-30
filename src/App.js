import React from 'react';
import styles from './App.module.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Navigation from './components/Navigation/Navigation';
import Articles from './components/Arcticles/Arcticles';
import SandP from './components/SandP/SandP';

function App() {

  return (
    <div>
      <main>
        <div className={styles.container}>
          <Navigation />
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/articles" component={Articles} />
            <Route path="/sandp" component={SandP} />
          </Switch>
        </div>
      </main>
    </div>
  );
}

export default App;
