import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List'
import AddToList from './components/AddToList';

export interface IState {
  robots: {
    name: string,
    imgUrl: string,
    favNum?: number,
    item?: string,
    note?: string
  }[]
}

function App() {

  const [robots, setRobots] = React.useState<IState["robots"]>([
      {
        name: "Rob",
        imgUrl: "https://robohash.org/Rob",
        favNum: 6,
        item: "A fish",
        note: "A party ain't no party without a party fish."
      },
      {
        name: "Rick",
        imgUrl: "https://robohash.org/Rick",
        favNum: 70000001,
        item: "A spoon"
      },
      {
        name: "Ralf",
        imgUrl: "https://robohash.org/Ralf",
        favNum: -1,
        item: "A flat tire",
        note: "I got a unfixed flat tire that needs fixing."
      }    
    ])

  return (
    <div className="App">
      <h1>Robot Party!</h1>
      <List robots={robots} />
      <AddToList robots={robots} setRobots={setRobots} />
    </div>
  );
}

export default App;
