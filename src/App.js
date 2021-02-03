import './App.scss';

function App() {
  return (
    <div id="drum-machine" class="d-flex flex-row justify-content-center align-items-center">
      <div id="display">

      </div>
      <div id="inputs" class="container">
        <div class="row no-gutters">
          <div class="col-sm">
            <button class="btn btn-primary drum-pad">Q</button>
          </div>
          <div class="col-sm">
            <button class="btn btn-primary drum-pad">W</button>
          </div>
          <div class="col-sm">
            <button class="btn btn-primary drum-pad">E</button>
          </div>
        </div>
        <div class="row no-gutters">
          <div class="col-sm">
        <button class="btn btn-primary drum-pad">A</button>
          </div>
          <div class="col-sm">
        <button class="btn btn-primary drum-pad">S</button>           
          </div>
          <div class="col-sm">
            <button class="btn btn-primary drum-pad">D</button>           
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
    </div>
  );
}

export default App;
