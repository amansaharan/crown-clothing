import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import Header from './components/Header/Header';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;

// how to spread object properties
// const dog = {
//   name: 'Kalu',
//   age: 2,
//   location: 'Rohtak'
// };

// console.log(dog);

// const { name, ...otherprops } = dog;
// console.log('otherprops', { ...otherprops });

// const newDog = {
//   ...otherprops
// };
// console.log(newDog);
