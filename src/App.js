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

// component that renders the drum pads
function Pad(props) {
   useEffect(() => {
     // variable that stores the audio file passed to the drum pad
     audio.current = document.getElementById(props.keyLabel)
  })

  let audio = useRef(null);
  //  method that handles playing the audio file when the pad is clicked and updating the display
  const clickHandler = () => {
    if (audio.current != null) {
      audio.current.currentTime = 0
      audio.current.play()
      props.updateDisplay(props.soundName)
    }
  }
  // event listener that handles the same drum pad functions as clickHandler when the appropriate key is pressed as well as adding a class for css styling
  document.addEventListener('keydown', function(event) {
    if (audio.current != null) {
      if (event.key.toUpperCase() === props.keyLabel) {
        audio.current.currentTime = 0
        audio.current.play()
        props.updateDisplay(props.soundName)
        document.getElementById(props.buttonId).classList.add("active")
      }
    }
  })

// event listener that removes the css styling added by the previous listener
  document.addEventListener('keyup', function() {
    document.getElementById(props.buttonId).classList.remove("active")
  })

  return (
    <div class="col-sm">
      <button id={props.buttonId} class="drum-pad" onClick={clickHandler}>
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
    <div id="drum-machine">
      <div id="drum-machine-wrapper">
        <div id="inputs" class="container">
          <tr>
            <td>
              <Pad keyLabel="Q" buttonId="tom-0-button" soundName="Tom 0" soundFile={tom0} updateDisplay={updateDisplay}/>
            </td>
            <td>
              <Pad keyLabel="W" buttonId="tom-1-button" soundName="Tom 1" soundFile={tom1} updateDisplay={updateDisplay}/>
            </td>
            <td>
              <Pad keyLabel="E" buttonId="tom-2-button" soundName="Tom 2" soundFile={tom2} updateDisplay={updateDisplay}/>
            </td>
          </tr>
          <tr>
            <td>
              <Pad keyLabel="A" buttonId="tom-3-button" soundName="Tom 3" soundFile={tom3} updateDisplay={updateDisplay}/>
            </td>
            <td>
              <Pad keyLabel="S" buttonId="clap-button" soundName="Clap" soundFile={clap} updateDisplay={updateDisplay}/>
            </td>
            <td>
              <Pad keyLabel="D" buttonId="snare-0-button" soundName="Snare 0" soundFile={snare0} updateDisplay={updateDisplay}/>
            </td>
          </tr>
          <tr>
            <td>
              <Pad keyLabel="Z" buttonId="kick0-button" soundName="Kick 0"  soundFile={kick0} updateDisplay={updateDisplay}/>
            </td>
            <td>
              <Pad keyLabel="X" buttonId="kick1-button" soundName="Kick 1"  soundFile={kick1} updateDisplay={updateDisplay}/>
            </td>
            <td>
              <Pad keyLabel="C" buttonId="snare-1-button" soundName="Snare 1" soundFile={snare1} updateDisplay={updateDisplay}/>
            </td>
          </tr>
        </div>
        <div id="display">
          <h2>{lastPadPressed}</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
