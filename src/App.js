import React from 'react';
import './App.css';
import Buttons from './components/Buttons'
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';
//import DogList from './components/DogList';
// import DogImagesContainer from './components/DogImagesContainer';
import BreedListContainer from './components/BreedListContainer';


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
                  <NavLink to="/">
                    <Buttons buttonText={'Test your skills and play a dog game'} buttonClass={"playgamebutton"} />
                  </NavLink>
                </div>
              </div>
            )} />

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


// import React from 'react';
// import './App.css';
// import BreedlistContainer from './components/BreedlistContainer';
// //import DogImagesContainer from './components/DogImagesContainer';
// import { Route } from 'react-router-dom';
// import {Provider} from 'react-redux';
// import store from './store'

// function App() {
//   return (
//     <Provider store={store}>
//       <main className="App">
//         <h1> Dog Spirit Animal App</h1>

//           <div>
//             <Route exact path="/" component={BreedlistContainer} />
//             {/* <Route path="/dog-breeds/:breed" component={DogImagesContainer} /> */}
//           </div>

//       </main>
//     </Provider>
//   );
// }

// export default App;
