import logo from './logo.svg';
import './App.css';
import WhatWeDo from './Components/WhatWeDo/WhatWeDo';
import ChoseYourTeam from './Components/WhatWeDo/ChoseYourTeam/ChoseYourTeam';

function App() {
  return (
    <div className="App">
      
      <WhatWeDo>
        {/* <h1>What We Do</h1> */}
      </WhatWeDo>
      <ChoseYourTeam></ChoseYourTeam>
      
    </div>
  );
}

export default App;
