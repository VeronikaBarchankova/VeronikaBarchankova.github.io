import React from "react"
import ReactDOM from "react-dom";

export default function Keyboard () {
  return (
      <div className="main-container">
        <div className="row">
          <div className="col" id="Escape">Esc</div>
          <div className="col" id="F1">F1</div>
          <div className="col" id="F2">F2</div>
          <div className="col" id="F3">F3</div>
          <div className="col" id="F4">F4</div>
          <div className="col" id="F5">F5</div>
          <div className="col" id="F6">F6</div>
          <div className="col" id="F7">F7</div>
          <div className="col" id="F8">F8</div>
          <div className="col" id="F9">F9</div>
          <div className="col" id="F10">F10</div>
          <div className="col" id="F11">F11</div>
          <div className="col" id="F12">F12</div>
          <div className="col" id="Home">Home</div>
          <div className="col" id="End">End</div>
        </div>
        <div className="row">
          <div className="col symb" id="Backquote"><span>~</span>`</div>
          <div className="col symb" id="Digit1"><span>!</span>1</div>
          <div className="col symb" id="Digit2"><span>@</span>2</div>
          <div className="col symb" id="Digit3"><span>#</span>3</div>
          <div className="col symb" id="Digit4"><span>$</span>4</div>
          <div className="col symb" id="Digit5"><span>%</span>5</div>
          <div className="col symb" id="Digit6"><span>^</span>6</div>
          <div className="col symb" id="Digit7"><span>&</span>7</div>
          <div className="col symb" id="Digit8"><span>*</span>8</div>
          <div className="col symb" id="Digit9"><span>(</span>9</div>
          <div className="col symb" id="Digit0"><span>)</span>0</div>
          <div className="col symb" id="Minus"><span>_</span>-</div>
          <div className="col symb" id="Equal"><span>+</span>=</div>
          <div className="col backspace" id="Backspace">Backspace</div>
        </div>
        <div className="row">
          <div className="col tab" id="Tab">Tab</div>
          <div className="col col-key" id="KeyQ">q</div>
          <div className="col col-key" id="KeyW">w</div>
          <div className="col col-key" id="KeyE">e</div>
          <div className="col col-key" id="KeyR">r</div>
          <div className="col col-key" id="KeyT">t</div>
          <div className="col col-key" id="KeyY">y</div>
          <div className="col col-key" id="KeyU">u</div>
          <div className="col col-key" id="KeyI">i</div>
          <div className="col col-key" id="KeyO">o</div>
          <div className="col col-key" id="KeyP">p</div>
          <div className="col" id="BracketLeft"><span>>&#123;</span><span>[</span></div>
          <div className="col" id="BracketRight"><span>&#125;</span><span>]</span></div>
          <div className="col slace" id="Backslash"><span>|</span><span>\</span></div>
        </div>
        <div className="row">
          <div className="col capsloack" id="CapsLock">caps <span>lock</span></div>
          <div className="col col-key" id="KeyA">a</div>
          <div className="col col-key" id="KeyS">s</div>
          <div className="col col-key" id="KeyD">d</div>
          <div className="col col-key" id="KeyF">f</div>
          <div className="col col-key" id="KeyG">g</div>
          <div className="col col-key" id="KeyH">h</div>
          <div className="col col-key" id="KeyJ">j</div>
          <div className="col col-key" id="KeyK">k</div>
          <div className="col col-key" id="KeyL">l</div>
          <div className="col" id="Semicolon"><span>:</span><span>;</span></div>
          <div className="col" id="Quote"><span>"</span><span>'</span></div>
          <div className="col enter" id="Enter">Enter</div>
        </div>
        <div className="row">
          <div className="col shift" id="ShiftLeft">Shift</div>
          <div className="col" id="IntlBackslash"><span>|</span><span>\</span></div>
          <div className="col col-key" id="KeyZ">z</div>
          <div className="col col-key" id="KeyX">x</div>
          <div className="col col-key" id="KeyC">c</div>
          <div className="col col-key" id="KeyV">v</div>
          <div className="col col-key" id="KeyB">b</div>
          <div className="col col-key" id="KeyN">n</div>
          <div className="col col-key" id="KeyM">m</div>
          <div className="col" id="Comma"><span>&lt;</span><span>,</span></div>
          <div className="col" id="Period"><span>&gt;</span><span>.</span></div>
          <div className="col" id="Slash"><span>?</span><span>/</span></div>
          <div className="col shift" id="ShiftRight">Shift</div>
        </div>
        <div className="row">
          <div className="col ctrl" id="ControlLeft">Ctrl</div>
          <div className="col" id="WinLeft">win</div>
          <div className="col" id="AltLeft">Alt</div>
          <div className="col space" id="Space"> </div>
          <div className="col" id="AltRight">Alt</div>
          <div className="col" id="WinRight">win</div>
          <div className="col" id="ContextMenu">
            <div className="rightclickopt">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="col" id="ControlRight">Ctrl</div>
        </div>
      </div>
  );
}

ReactDOM.render(<Keyboard />, document.getElementById('root'));
