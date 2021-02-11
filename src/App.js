import React, {useState, useEffect, useRef} from 'react'
import './App.scss'
import tom0 from './audio/tomAnalogHigh0.wav'
import tom1 from './audio/tomAnalogHigh1.wav'
import tom2 from './audio/tomAnalogHigh2.wav'
import tom3 from './audio/tomSynth.wav'
import clap from './audio/clapAnalog.wav'
import snare0 from './audio/snareBrightAndEarly.wav'
import snare1 from './audio/snareAnalog.wav'
import kick0 from './audio/kickSynth.wav'
import kick1 from './audio/kickAnalog.wav'

function Pad(props) {
   useEffect(() => {
     audio.current = document.getElementById(props.keyLabel)
  })

  let audio = useRef(null);

  const clickHandler = () => {
    console.log(audio.current)
    if (audio.current != null) {
      audio.current.play()
      props.updateDisplay(props.soundName)
    }
  }

  return (
    <div class="col-sm">
      <button id={props.buttonId} class="btn btn-primary drum-pad" onClick={clickHandler}>
        <audio src={props.soundFile} type="audio/x-wav" id={props.keyLabel} class="clip"/>
        {props.keyLabel}
      </button>
    </div>
  )
}

function App() {
  const [lastPadPressed, setLastPadPressed] = useState("")

  const updateDisplay = (pad) => {
    setLastPadPressed(pad)
  }

  return (
    <div id="drum-machine" class="d-flex justify-content-center align-items-center">
      <div id="drum-machine-wrapper" class="d-flex flex-row">
        <div id="inputs" class="container">
          <div class="row no-gutters">
            <Pad keyLabel="Q" buttonId="tom-0-button" soundName="Tom 0" soundFile={tom0} updateDisplay={updateDisplay}/>
            <Pad keyLabel="W" buttonId="tom-1-button" soundName="Tom 1" soundFile={tom1} updateDisplay={updateDisplay}/>
            <Pad keyLabel="E" buttonId="tom-2-button" soundName="Tom 2" soundFile={tom2} updateDisplay={updateDisplay}/>
          </div>
          <div class="row no-gutters">
            <Pad keyLabel="A" buttonId="tom-3-button" soundName="Tom 3" soundFile={tom3} updateDisplay={updateDisplay}/>
            <Pad keyLabel="S" buttonId="clap-button" soundName="Clap" soundFile={clap} updateDisplay={updateDisplay}/>
            <Pad keyLabel="D" buttonId="snare-0-button" soundName="Snare 0" soundFile={snare0} updateDisplay={updateDisplay}/>
          </div>
          <div class="row no-gutters">
            <Pad keyLabel="Z" buttonId="kick0-button" soundName="Kick 0"  soundFile={kick0} updateDisplay={updateDisplay}/>
            <Pad keyLabel="X" buttonId="kick1-button" soundName="Kick 1"  soundFile={kick1} updateDisplay={updateDisplay}/>
            <Pad keyLabel="C" buttonId="snare-1-button" soundName="Snare 1" soundFile={snare1} updateDisplay={updateDisplay}/>
          </div>
        </div>
        <div id="display">
          <h2>{lastPadPressed}</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
