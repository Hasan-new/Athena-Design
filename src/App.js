import logo from './logo.svg';
import './App.css';
import WhatWeDo from './Components/WhatWeDo/WhatWeDo';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      {/* <WhatWeDo></WhatWeDo> */}
    </div>
  );
}

export default App;
