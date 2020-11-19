import logo from './logo.svg';
import './App.css';
import WhatWeDo from './Components/WhatWeDo/WhatWeDo';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import Achievements from './Components/Achievements/Achievements';
import ChoseYourTeam from './Components/ChoseYourTeam/ChoseYourTeam';
import GetYourDesign from './Components/GetYourDesign/GetYourDesign';


function App() {
  return (
    <div className="App">      
      <Navbar></Navbar>
      <Header></Header>
      <WhatWeDo></WhatWeDo>
      <Achievements></Achievements>
      <ChoseYourTeam></ChoseYourTeam>
      <GetYourDesign></GetYourDesign>
    </div>
  );
}

export default App;
