import logo from './mars.png';
import './App.css';
import {Steps, Hints} from 'intro.js-react'
import React, {useState} from 'react'
import 'intro.js/introjs.css';
import { RepositoryMetrics } from 'repository-metrics';



let tutorial = {
  stepsEnabled: false,
  initialStep: 0,
  steps: [
    
    {
      element: ".world",
      intro: "Text container 🌗",
      position: 'right'
    },
    {
      element: ".App-link",
      intro: "Link to react docs 🌖",
      position: 'right'

    },
    {
      element: "#github",
      intro: "Repository-metrics 🌕",
      position: 'right',
    }
  ],
  hintsEnabled: true,
  hints: [

    {
      element: ".world",
      hint: "Hint 2",
      hintPosition: "top-right"
    },
    {
      element: ".App-link",
      hint: "Hint 3",
      hintPosition: "top-right"
    }
  ]
};



function App() {

  
const [ToggleSteps, setToggleSteps] = useState(tutorial.stepsEnabled)
const [OnExit, setOnExit] = useState(false)

function OnExitIntro() {
  setOnExit()
}

  return (
    <React.Fragment>

      <Steps
          enabled={ToggleSteps}
          steps={tutorial.steps}
          initialStep={tutorial.initialStep}
          onExit={OnExitIntro}
          onComplete={OnExitIntro}
        />
        <Hints enabled={tutorial.hintsEnabled} hints={tutorial.hints} />
    
    <div className="App">
      
      <header className="App-header">
      <button className='glow-on-hover' onClick={setToggleSteps}>Tutorial 💬</button>
        <img src={logo} className="App-logo" alt="logo" />
        <p className='world'>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

      <div id='github'>
        <RepositoryMetrics  owner='Ivan-Corporation' repo='intro.js-with-react-hooks' theme='dark'/>
        </div>
      </header>
    </div>
    </React.Fragment>
  );
}

export default App;
