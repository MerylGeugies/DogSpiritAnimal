import React from 'react';
import './App.css';
import Buttons from './components/Buttons'
import store from './store';
import { Provider } from 'react-redux';
import DogList from './component/DogList'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <main>
          <DogList></DogList>
          <h1>Dog Spirit Animal APP</h1>
          <Buttons buttonText={'Learn dog breeds'} buttonClass={"learnbutton"} handleclick={() => alert('let\'s learn some dog breeds!')} />
          <Buttons buttonText={'Test your skills and play a dog game'} buttonClass={"playgamebutton"} handleclick={() => alert('let\'s play a dog game!')} />
        </main>
        <footer>
          <p>Made with ❤ by Bassam, Meryl and Rick</p>
        </footer>


      </div>
    </Provider>
  );
}

export default App;
