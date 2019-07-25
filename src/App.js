import React from 'react';
import './App.css';
import Buttons from './components/Buttons'
import store from './store';
import { Provider } from 'react-redux';
import { Route, NavLink } from 'react-router-dom';
import BreedListContainer from './components/BreedListContainer';
import DogImagesContainer from './components/DogImagesContainer';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <main>

          <h1>Dog Spirit Animal App</h1>
          <div>
            <NavLink to="/studybreeds">
              <Buttons buttonText={'Learn dog breeds'} buttonClass={"learnbutton"} />
            </NavLink>
            <NavLink to="/">
              <Buttons buttonText={'Test your skills and play a dog game'} buttonClass={"playgamebutton"} />
            </NavLink>
            
            <div>
            <Route exact path="/" component={BreedListContainer} />
            Route path="/dog-breeds/:breed" component={DogImagesContainer} />
          </div>

          </div>
        </main>
        <footer>
          <p>Made with ❤ by Bassam, Meryl and Rick</p>
        </footer>


      </div>
    </Provider>
  );
}

export default App;
