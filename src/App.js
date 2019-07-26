import React from 'react';
import './App.css';
import Buttons from './components/Buttons'
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';
import BreedListContainer from './components/BreedListContainer';
import DogGameContainer from './components/DogGameContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <main>

            <Route exact path="/" render={() => (
              <div>
                <h1>Dog Spirit Animal App</h1>
                <div className="MainButtons">
                  <NavLink to="/studybreeds">
                    <Buttons buttonText={'Learn dog breeds'} buttonClass={"learnbutton"} />
                  </NavLink>
                  <NavLink to="/game">
                    <Buttons buttonText={'Test your skills and play a dog game'} buttonClass={"playgamebutton"} />
                  </NavLink>
                </div>
              </div>
            )} />

            <Route path="/game" component={DogGameContainer} />
            <Route path="/studybreeds" component={BreedListContainer} />

            {/* <DogImagesContainer /> */}
          </main>

          <footer>
            <p>Made with ❤ by Bassam, Meryl and Rick</p>
          </footer>

        </Router>
      </div>

    </Provider>
  );
}

export default App;