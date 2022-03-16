import logo from './logo.svg';
import './App.css';

import PersonCard from './components/PersonCard';

const persons = [{
    "firstName" : "Doe",
    "lastName" : "Jane",
    "age" : 45,
    "hairColor" :  "Black"
  },
  {
    "firstName" : "Smith",
    "lastName" : "John",
    "age" : 88,
    "hairColor" :  "Brown"
  },
  {
    "firstName" : "Fillmore",
    "lastName" : "Millard",
    "age" : 50,
    "hairColor" :  "Black"
  },
  {
    "firstName" : "Smith",
    "lastName" : "Maria",
    "age" : 50,
    "hairColor" :  "Brown"
  },
];

function App() {
  return (
    <div className="App">
      {
        persons.map((person,indice)=>{
          return (<PersonCard person={person} key={indice}/>)
        })
        
      }
    </div>
  );
}

export default App;
