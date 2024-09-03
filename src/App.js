import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

 class App extends Component{
  constructor(props){
    super(props);
    this.handlePClicado = this.handlePClicado.bind(this);
    this.state = {
      name: 'Henrique Marques'
    };
  }
  handlePClicado(){
    this.setState({name: 'Matheus Marques'})
  }
  render(){ 
    const {name} = this.state;
    return(
         <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p onClick ={this.handlePClicado} >
               {name}
             </p>
              <a
               className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                >
                Learn React
            </a>
            </header>
         </div>
        );
  }
} 
//function App() {
//  
//}

export default App;
