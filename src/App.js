import React from 'react';
import logo from './logo.svg';
import './App.css';
import "./fonts/digital-7.ttf"
/**
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
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
      </header>
    </div>
  );
}

export default App;
 **/

const CalcHistory = (props) => {
    return (

            <div className={"calcHistory"} id={"display"}>
                calcHistory
            </div>

    )
}

const CurrentInput = (props) =>{
    return(
            <div className={"currentInput"} id={"currentInput"}>
                <div className={"display"}>1 1 1 1 1 1 1 1 1 1</div>
            </div>
    )
}

const ActionButtons = (props) =>{
    return (
        <div className={"actionsbuttonswrapper"}>
                <button id={"clear"} className={"btn btn-primary btn-clear r1 c1"} onClick={props.handleClick} value={"clear"}
                        placeholder={" AC "}/>
                <button id={"divide"} className={"btn btn-primary btn-normal r1 c3 btn-op"} onClick={props.handleClick}
                        value={"divide"} placeholder={" / "}/>
                <button id={"multiply"} className={"btn btn-primary btn-normal r1 c4 btn-op"} onClick={props.handleClick}
                        value={"multiply"} placeholder={" * "}/>
                <button id={"seven"} className={"btn btn-primary btn-normal r2 c1 btn-number"} onClick={props.handleClick} value={7}
                        placeholder={" 7 "}/>
                <button id={"eight"} className={"btn btn-primary btn-normal r2 c2 btn-number"} onClick={props.handleClick} value={8}
                        placeholder={" 8 "}/>
                <button id={"nine"} className={"btn btn-primary btn-normal r2 c3 btn-number"} onClick={props.handleClick} value={9}
                        placeholder={" 9 "}/>
                <button id={"subtract"} className={"btn btn-primary btn-normal r2 c4 btn-op"} onClick={props.handleClick}
                        value={"subtract"} placeholder={" - "}/>
                <button id={"four"} className={"btn btn-primary btn-normal r3 c1 btn-number"} onClick={props.handleClick} value={4}
                        placeholder={" 4 "}/>
                <button id={"five"} className={"btn btn-primary btn-normal r3 c2 btn-number"} onClick={props.handleClick} value={5}
                        placeholder={" 5 "}/>
                <button id={"six"} className={"btn btn-primary btn-normal r3 c3 btn-number"} onClick={props.handleClick} value={6}
                        placeholder={" 6 "}/>
                <button id={"add"} className={"btn btn-primary btn-normal r3 c4 btn-op"} onClick={props.handleClick} value={"add"}
                        placeholder={" + "}/>
                <button id={"one"} className={"btn btn-primary btn-normal r4 c1 btn-number"} onClick={props.handleClick} value={1}
                        placeholder={" 1 "}/>
                <button id={"two"} className={"btn btn-primary btn-normal r4 c2 btn-number"} onClick={props.handleClick} value={2}
                        placeholder={" 2 "}/>
                <button id={"three"} className={"btn btn-primary btn-normal r4 c3 btn-number"} onClick={props.handleClick} value={3}
                        placeholder={" 3 "}/>


                <button id={"zero"} className={"btn btn-primary btn-zero r5 c1"} onClick={props.handleClick} value={0}
                        placeholder={" 0 "}/>
                <button id={"decimal"} className={"btn btn-primary btn-normal r5 c3 btn-number"} onClick={props.handleClick}
                        value={"decimal"} placeholder={" . "}/>


                <button id={"equals"} className={"btn btn-primary btn-equals r4 c4"} onClick={props.handleClick}
                        value={"equals"} placeholder={" = "}/>
            </div>

    )
}



class Calculator extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      currentResult: 0,
      currentAction: "0",
      calcHistory: "",
      showingResult: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event){

  }

  render(){
    return (
        <div className={"container-fluid"}>
          <div className={"my-auto calculator"}>
              <CalcHistory/>
              <CurrentInput/>
              <button id={"clear"} className={"btn btn-primary btn-clear clear"} onClick={this.handleClick} value={"clear"}
                      placeholder={" AC "}/>
              <button id={"divide"} className={"btn btn-primary btn-normal divide btn-op"} onClick={this.handleClick}
                      value={"divide"} placeholder={" / "}/>
              <button id={"multiply"} className={"btn btn-primary btn-normal multiply btn-op"} onClick={this.handleClick}
                      value={"multiply"} placeholder={" * "}/>
              <button id={"seven"} className={"btn btn-primary btn-normal r2 c1 btn-number"} onClick={this.handleClick} value={7}
                      placeholder={" 7 "}/>
              <button id={"eight"} className={"btn btn-primary btn-normal r2 c2 btn-number"} onClick={this.handleClick} value={8}
                      placeholder={" 8 "}/>
              <button id={"nine"} className={"btn btn-primary btn-normal r2 c3 btn-number"} onClick={this.handleClick} value={9}
                      placeholder={" 9 "}/>
              <button id={"subtract"} className={"btn btn-primary btn-normal r2 c4 btn-op"} onClick={this.handleClick}
                      value={"subtract"} placeholder={" - "}/>
              <button id={"four"} className={"btn btn-primary btn-normal r3 c1 btn-number"} onClick={this.handleClick} value={4}
                      placeholder={" 4 "}/>
              <button id={"five"} className={"btn btn-primary btn-normal r3 c2 btn-number"} onClick={this.handleClick} value={5}
                      placeholder={" 5 "}/>
              <button id={"six"} className={"btn btn-primary btn-normal r3 c3 btn-number"} onClick={this.handleClick} value={6}
                      placeholder={" 6 "}/>
              <button id={"add"} className={"btn btn-primary btn-normal r3 c4 btn-op"} onClick={this.handleClick} value={"add"}
                      placeholder={" + "}/>
              <button id={"one"} className={"btn btn-primary btn-normal r4 c1 btn-number"} onClick={this.handleClick} value={1}
                      placeholder={" 1 "}/>
              <button id={"two"} className={"btn btn-primary btn-normal r4 c2 btn-number"} onClick={this.handleClick} value={2}
                      placeholder={" 2 "}/>
              <button id={"three"} className={"btn btn-primary btn-normal r4 c3 btn-number"} onClick={this.handleClick} value={3}
                      placeholder={" 3 "}/>


              <button id={"zero"} className={"btn btn-primary btn-zero r5 c1"} onClick={this.handleClick} value={0}
                      placeholder={" 0 "}/>
              <button id={"decimal"} className={"btn btn-primary btn-normal r5 c3 btn-number"} onClick={this.handleClick}
                      value={"decimal"} placeholder={" . "}/>


              <button id={"equals"} className={"btn btn-primary btn-equals r4 c4"} onClick={this.handleClick}
                      value={"equals"} placeholder={" = "}/>


          </div>

        </div>
    )
  }
}


export default Calculator;
