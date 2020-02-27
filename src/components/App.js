
import React from 'react';
import Header from './Header';
import '../scss/App.scss';
import ListOfAllItems from './ListOfAllItems';

function App() {
  return (
    <div className="App">
      <Header />
      <ListOfAllItems />
    </div>
  );
}


export default App;