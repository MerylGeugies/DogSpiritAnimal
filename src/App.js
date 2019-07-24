import React from 'react';
import './App.css';
// import Buttons from './components/Buttons'
import store from './store';
import { Provider } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import DogList from './components/DogList';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <main>

          {/* <Route exact path="/daggame" component={DogGame1} /> */}
          <h1>Dog Spirit Animal APP</h1>
          <div>
            <Link to="/studybreeds"><p className="link">Learn dog breeds</p></Link>
            <Link to="/"><p className="link">Test your skills and play a dog game</p></Link>

          </div>
          <Route exact path="/studybreeds" component={DogList} />
        </main>
        <footer>
          <p>Made with ❤ by Bassam, Meryl and Rick</p>
        </footer>


      </div>
    </Provider >
  );
}

export default App;
