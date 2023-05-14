import logo from './logo.svg';
import './App.css';

import {Article,Brand,CTA,Navbar, Skill} from './components';
import {Blog,footer,Features,Header,AddHeader,Work} from './containers'

function App() {
  return (
    <div className="App">
    <div className='wrapper'>
    <div className='gradient_bg'>
        <Navbar></Navbar>
        <Header></Header>
        <AddHeader></AddHeader>
     
    </div>
    </div>
    
    <Work></Work>
    <Skill></Skill>
    
    </div>
  );
}

export default App;
