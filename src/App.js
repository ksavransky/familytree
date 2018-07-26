import React, { Component } from 'react';
import Tree from './Tree.js'
import './App.css';


const seedData = [
  {
    id: 1,
    title: 'Super Parent',
    attributes: {
      name: 'Bob',
      age: '120',
      height: '6ft'
    },
    children: [
      {
        id: 2,
        title: 'Child1',
        attributes: {
          name: 'Bob Jr',
          age: '100',
          height: '6.5ft'
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
        title: 'Child2'
      },
      {
        id: 5,
        title: 'Child3',
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
