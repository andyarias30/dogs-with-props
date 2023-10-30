
import './App.css';
import Dog from './components/Dog';

const dogs = [
  {name:'Duki' , age: 4 , breed: 'bully'},
  {name:'Suki' , age: 12 , breed: 'cuban'},
  {name:'Lolo' , age: 5, breed: 'bully'},
  {name:'Trevor' , age: 20, breed: 'pitbull'},

]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dogs:</h1>
        {dogs.map(dog => <Dog age={dog.age} name={dog.name} breed={dog.breed} />)}
      </header>
    </div>
  );
}

export default App;
