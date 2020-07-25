import React from 'react';
import './App.css';
import "./fonts/digital-7.ttf"


const OPERATORS = [" / ", " * ", " + ", " - "]

const CalcHistory = (props) => {
    return (
            <div className={"calcHistory"} id={"calcHistory"}>
                {props.calcHistory}
            </div>
    )
}

const CurrentInput = (props) =>{
    return(
            <div className={"currentInput"} id={"display"}>
                <div className={"display"}>{props.currentAction}</div>
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
      showingResult: false,
      lastAction : "0"

    }
    this.handleNumberClick = this.handleNumberClick.bind(this);
    this.handleOperation = this.handleOperation.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleZero = this.handleZero.bind(this);
    this.handleDecimal = this.handleDecimal.bind(this);
    this.handleEquals = this.handleEquals.bind(this);
  }

  handleNumberClick(event){

      if((this.state.currentAction).length >= 15){
          return NaN;
      }

      let value = event.target.value;
      if(this.state.showingResult){
          this.setState(
              Object.assign({}, {currentResult: 0, currentAction: event.target.value,
                  calcHistory: event.target.value, showingResult: false, lastAction : value})
          );
      }
      else{
          if(this.state.lastAction === "0" && (this.state.currentAction).length === 1){
              if((this.state.calcHistory).length > 0){
                  this.setState(state => {
                      return {
                          currentResult: 0,
                          currentAction: value,
                          calcHistory: ((state.calcHistory).slice(0, (state.calcHistory).length -1)).concat(value),
                          showingResult: false,
                          lastAction: value
                      }
                  })
              }
              else{
                  this.setState(
                      Object.assign({}, {currentAction: value, currentResult: 0,
                          calcHistory: event.target.value, showingResult: false, lastAction : value}));
              }
          }
          else if(OPERATORS.includes(this.state.lastAction)){
              this.setState(state =>{
                  return {
                      currentResult: 0,
                      currentAction : value,
                      calcHistory: state.calcHistory.concat(value),
                      showingResult: false,
                      lastAction : value
                  }
              });
          }
          else{
              this.setState(state => {
                  return {
                      currentAction: state.currentAction.concat(value),
                      calcHistory: state.calcHistory.concat(value),
                      currentResult: 0,
                      showingResult: false,
                      lastAction : value
                  }
              });
          }
      }
  }

  handleOperation(event){
      let value = event.target.value;
      let lastInput = this.state.lastAction
      let secondLastInput = this.state.calcHistory[(this.state.calcHistory).length -2];
      let thirdLastInput = this.state.calcHistory[(this.state.calcHistory).length -5];
      let regex = /[0-9]|\./;
      let regexOP = /\+|\-|\*|\//;

      if(this.state.showingResult){
          this.setState(state =>{
              return {
                  currentAction: value,
                  calcHistory: (state.currentResult).toString(10).concat(value),
                  currentResult: 0,
                  showingResult: false,
                  lastAction : value
              }
          });
      }

      else if(regex.test(lastInput)){
          this.setState(state => {
             return{
                 currentAction:value,
                 calcHistory: (state.calcHistory).concat(value),
                 currentResult: 0,
                 showingResult: false,
                 lastAction : value
             }
          });
      }

      else if((value === " + " || value === " / " || value === " * ") && regexOP.test(secondLastInput)){
          if(regexOP.test(thirdLastInput)){
              this.setState(state => {
                  return {
                      currentAction: value,
                      calcHistory: (state.calcHistory.slice(0, (this.state.calcHistory).length - 6)).concat(value),
                      currentResult: 0,
                      showingResult: false,
                      lastAction: value
                  };
              });
          }
          else{
              this.setState(state => {
                  return {
                      currentAction: value,
                      calcHistory: (state.calcHistory.slice(0, (this.state.calcHistory).length - 3)).concat(value),
                      currentResult: 0,
                      showingResult: false,
                      lastAction: value
                  };
              });
          }
      }
      else{
          if((value === " - ") && (regexOP.test(secondLastInput))){
              if(regexOP.test(thirdLastInput)){
                  this.setState(state => {
                      return {
                          currentAction: value,
                          calcHistory: (state.calcHistory.slice(0, (this.state.calcHistory).length - 6)).concat(value),
                          currentResult: 0,
                          showingResult: false,
                          lastAction: value
                      };
                  });
              }
              else{
                  this.setState(state => {
                      return{
                          currentAction:value,
                          calcHistory: (state.calcHistory).concat(value),
                          currentResult: 0,
                          showingResult: false,
                          lastAction : value
                      }
                  });
              }
          }
      }
  }


  handleClear(){

      this.setState({
          currentAction: "0",
          calcHistory: "",
          currentResult: 0,
          showingResult: false,
          lastAction: "0"
      });
  }

  handleZero(){

      if((this.state.currentAction).length >= 15){
          return NaN;
      }

      if(this.state.showingResult){
          this.setState({
              currentAction: "0",
              calcHistory: "",
              currentResult: 0,
              showingResult: false,
              lastAction: "0"
          });
      }

      else{
          if(this.state.lastAction === "0" && (this.state.currentAction).length === 1) {
              return NaN;
          }
          else if(OPERATORS.includes(this.state.lastAction)){
              this.setState(state =>{
                  return {
                      currentResult: 0,
                      currentAction : "0",
                      calcHistory: state.calcHistory.concat("0"),
                      showingResult: false,
                      lastAction : "0"
                  }
              });
          }
          else{
              this.setState(state => {
                  return {
                      currentAction: state.currentAction.concat("0"),
                      calcHistory: state.calcHistory.concat("0"),
                      currentResult: 0,
                      showingResult: false,
                      lastAction : "0"
                  }
              });
          }
      }
  }

  handleDecimal(){
      if((this.state.currentAction).length >= 15){
          return NaN;
      }

      if(this.state.showingResult){
          this.setState({
              currentAction: "0.",
              calcHistory: "0.",
              currentResult: 0,
              showingResult: false,
              lastAction: "."
          });
      }
      else{
          if((this.state.currentAction).includes(".")){
              return NaN;
          }
          else{
              if(OPERATORS.includes(this.state.lastAction)){
                  this.setState(state => {
                      return {
                          currentAction: "0.",
                          calcHistory: (state.calcHistory).concat("0."),
                          currentResult: 0,
                          showingResult: false,
                          lastAction: "."
                      }
                  });
              }
              else{
                  if(this.state.currentAction === "0"){
                      this.setState(state => {
                          return {
                              currentAction: (state.currentAction).concat("."),
                              calcHistory: (state.calcHistory).concat("0."),
                              currentResult: 0,
                              showingResult: false,
                              lastAction: "."
                          }
                      });
                  }
                  else{
                      this.setState(state => {
                          return {
                              currentAction: (state.currentAction).concat("."),
                              calcHistory: (state.calcHistory).concat("."),
                              currentResult: 0,
                              showingResult: false,
                              lastAction: "."
                          }
                      });
                  }
              }
          }
      }
  }

  handleEquals(){
      let index = (this.state.calcHistory).length - 1;
      let copyCalcHistory = this.state.calcHistory.slice(0,)

      if(this.state.lastAction === " = "){
          return NaN;
      }

      let regex = /[0-9]|\./

      while(!regex.test(copyCalcHistory[index--])){}

      let preparedCalcHistory = copyCalcHistory.slice(0, index + 2);
      let result = eval(preparedCalcHistory);
      let resultStr = result.toString();

      this.setState(state => {
          return {
              currentAction: resultStr,
              calcHistory: state.calcHistory.concat(" = " + resultStr),
              currentResult: result,
              showingResult: true,
              lastAction: " = "
          }
      });

  }


  render(){
    return (
        <div className={"container-fluid"}>
          <div className={"my-auto calculator"}>
              <CalcHistory calcHistory={this.state.calcHistory}/>
              <CurrentInput currentAction={this.state.currentAction}/>
              <button id={"clear"} className={"btn btn-primary btn-clear clear"} onClick={this.handleClear} value={"clear"}
                      placeholder={" AC "}> AC </button>
              <button id={"divide"} className={"btn btn-primary btn-normal divide btn-op"} onClick={this.handleOperation}
                      value={" / "} placeholder={" / "}> / </button>
              <button id={"multiply"} className={"btn btn-primary btn-normal multiply btn-op"} onClick={this.handleOperation}
                      value={" * "} placeholder={" * "}> * </button>
              <button id={"seven"} className={"btn btn-primary btn-normal r2 c1 btn-number"} onClick={this.handleNumberClick} value={"7"}
                      placeholder={" 7 "}> 7 </button>
              <button id={"eight"} className={"btn btn-primary btn-normal r2 c2 btn-number"} onClick={this.handleNumberClick} value={"8"}
                      placeholder={" 8 "}> 8 </button>
              <button id={"nine"} className={"btn btn-primary btn-normal r2 c3 btn-number"} onClick={this.handleNumberClick} value={"9"}
                      placeholder={" 9 "}> 9 </button>
              <button id={"subtract"} className={"btn btn-primary btn-normal r2 c4 btn-op"} onClick={this.handleOperation}
                      value={" - "} placeholder={" - "}> - </button>
              <button id={"four"} className={"btn btn-primary btn-normal r3 c1 btn-number"} onClick={this.handleNumberClick} value={"4"}
                      placeholder={" 4 "}> 4 </button>
              <button id={"five"} className={"btn btn-primary btn-normal r3 c2 btn-number"} onClick={this.handleNumberClick} value={"5"}
                      placeholder={" 5 "}> 5 </button>
              <button id={"six"} className={"btn btn-primary btn-normal r3 c3 btn-number"} onClick={this.handleNumberClick} value={"6"}
                      placeholder={" 6 "}> 6 </button>
              <button id={"add"} className={"btn btn-primary btn-normal r3 c4 btn-op"} onClick={this.handleOperation} value={" + "}
                      placeholder={" + "}> + </button>
              <button id={"one"} className={"btn btn-primary btn-normal r4 c1 btn-number"} onClick={this.handleNumberClick} value={"1"}
                      placeholder={" 1 "}> 1 </button>
              <button id={"two"} className={"btn btn-primary btn-normal r4 c2 btn-number"} onClick={this.handleNumberClick} value={"2"}
                      placeholder={" 2 "}> 2 </button>
              <button id={"three"} className={"btn btn-primary btn-normal r4 c3 btn-number"} onClick={this.handleNumberClick} value={"3"}
                      placeholder={" 3 "}> 3 </button>
              <button id={"zero"} className={"btn btn-primary btn-zero r5 c1"} onClick={this.handleZero} value={"0"}
                      placeholder={" 0 "}> 0 </button>
              <button id={"decimal"} className={"btn btn-primary btn-normal r5 c3 btn-number"} onClick={this.handleDecimal}
                      value={"."} placeholder={"."}>.</button>
              <button id={"equals"} className={"btn btn-primary btn-equals r4 c4"} onClick={this.handleEquals}
                      value={" = "} placeholder={" = "}>=</button>
          </div>
        </div>
    )
  }
}


export default Calculator;
