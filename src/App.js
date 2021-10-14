import './App.css';
import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [ ],
      searchField: ''
    };
  }

  // This allows us to use a component option. that then allows us to fetch from our JSON API
  // Then we take the response and turn it into JSON, then we set those users within the JSON to our 
  // monsters this.state empty array.
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  // Use arrow function to bind this to our arrow function so that we can access the .this of the App class.
  handleChange = (e) => {
    this.setState( { searchField: e.target.value } )
  };

  render() {
    // everything within {} is a JS expression.
    // className is JSX version of class in HTML. But becasue we have a class in JS we use className
    // JSX is JS to run HTML
    // JSX Syntax. The button changes to setState of string to the new message.
    
    // we are creating our filteredMonsters based off of the onChange field given by JSX.
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1> Monsters Rolodex </h1>
        <SearchBox
          placeholder='search monsters'
          handleChange={ this.handleChange }
        />
        <CardList monsters={filteredMonsters}> 
          
        </CardList>
      </div>
    );
  }
}

export default App;
