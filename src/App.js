import './App.scss';

function App() {
  return (
    <div id="drum-machine" class="d-flex justify-content-center align-items-center">
      <div id="drum-machine-wrapper" class="d-flex flex-row">
        <div id="inputs" class="container">
          <div class="row no-gutters">
            <div class="col-sm">
              <button id="Tom 1" class="btn btn-primary drum-pad">
                <audio src="/audio/tomAnalogHigh0.wav" id="Q" class="clip">
                  Your browser does not support this audio format
                </audio>
                Q
              </button>
            </div>
            <div class="col-sm">
              <button id="Tom 2" class="btn btn-primary drum-pad">
                <audio src="/audio/tomAnalogHigh0.wav" id="W" class="clip"/>W
              </button>
            </div>
            <div class="col-sm">
              <button id="Tom 3" class="btn btn-primary drum-pad">
                <audio src="/audio/tomAnalogHigh0.wav" id="E" class="clip"/>E
              </button>
            </div>
          </div>
          <div class="row no-gutters">
            <div class="col-sm">
              <button class="btn btn-primary drum-pad">
                A
              </button>
            </div>
            <div class="col-sm">
              <button class="btn btn-primary drum-pad">
                S
              </button>           
            </div>
            <div class="col-sm">
              <button class="btn btn-primary drum-pad">
                D
              </button>           
            </div>
          </div>
          <div class="row no-gutters">
            <div class="col-sm">
              <button class="btn btn-primary drum-pad">Z</button>
            </div>
            <div class="col-sm">
              <button class="btn btn-primary drum-pad">X</button>           
            </div>
            <div class="col-sm">
              <button class="btn btn-primary drum-pad">C</button>           
            </div>
          </div>
        </div>
        <div id="display">
          <h2>Display placeholder</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
