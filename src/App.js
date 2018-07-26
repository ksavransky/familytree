import React, { Component } from 'react';
import Tree from './Tree.js'
import './App.css';


const seedData = [
  {
    id: 1,
    title: 'Eddard',
    attributes: {
      name: 'Eddard Stark',
      age: '60 - deceased',
      height: '6.5ft',
      position: "King's Hand"
    },
    children: [
      {
        id: 2,
        title: 'Robb',
        attributes: {
          name: 'Robb Stark',
          age: '25 - deceased',
          height: '6ft',
          position: 'Vengeful Son'
        },
        children: [
          {
            id: 3,
            title: 'GrandChild1'
          }
        ]
      },
      {
        id: 4,
        title: 'Sansa',
        attributes: {
          name: 'Sansa Stark',
          age: '20',
          height: '5ft',
          position: 'Future Queen?'
        }
      },
      {
        id: 5,
        title: 'Jon',
        attributes: {
          name: 'Jon Snow',
          age: '25',
          height: '5.9ft',
          position: 'King of the North'
        },
        children: [
          {
            id: 6,
            title: 'GrandChild2',
            children: [
              {
                id: 7,
                title: 'GreatGrandChild1'
              }
            ]
          },
          {
            id: 8,
            title: 'GrandChild3'
          }
        ]
      }
    ]
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Tree data={seedData}/>
      </div>
    );
  }
}

export default App;
