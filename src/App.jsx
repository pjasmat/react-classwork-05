import React from 'react';
import HelloWorld from './HelloWorld';
import Counter from './Counter';
import FilteredList from './FilteredList';
import './App.css';

const produce = [
  { name: "Apple", type: "Fruit" },
  { name: "Banana", type: "Fruit" },
  { name: "Orange", type: "Fruit" },
  { name: "Strawberry", type: "Fruit" },
  { name: "Pear", type: "Fruit" },
  { name: "Lettuce", type: "Vegetable" },
  { name: "Cucumber", type: "Vegetable" },
  { name: "Eggplant", type: "Vegetable" },
  { name: "Onion", type: "Vegetable" },
  { name: "Squash", type: "Vegetable" },
  { name: "Bell pepper", type: "Vegetable" }
];

function App() {
  return (
    <div className="App">
      <HelloWorld name="Asmat" />
      <Counter />
      <FilteredList items={produce} />
    </div>
  );
}

export default App;
