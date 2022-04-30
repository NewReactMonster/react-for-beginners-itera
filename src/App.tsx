import React from 'react';
import './App.css';


const Footer:React.FC<FooterAnimals> = (props) => (
  <footer>Footer {props.age}</footer>
)
const Navigation = () => (
  <nav><ul><li><a href="#">CLICK ME</a></li></ul></nav>
)
type FooterAnimals = {
  age: string;
}

const App = () => (
  <div className="App">
  <h1>Hello world!</h1>
  <Footer age='100 years old'/>
  <Navigation/>
</div>
)
export default App;
