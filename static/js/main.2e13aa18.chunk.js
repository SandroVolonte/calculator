(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],[,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_Sandr_WebstormProjects_calculator_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5),C_Users_Sandr_WebstormProjects_calculator_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(6),C_Users_Sandr_WebstormProjects_calculator_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),C_Users_Sandr_WebstormProjects_calculator_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(8),C_Users_Sandr_WebstormProjects_calculator_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(7),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),_App_css__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(15),_App_css__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_6__),_fonts_digital_7_ttf__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(16),_fonts_digital_7_ttf__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(_fonts_digital_7_ttf__WEBPACK_IMPORTED_MODULE_7__),OPERATORS=[" / "," * "," + "," - "],CalcHistory=function(t){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"calcHistory",id:"calcHistory"},t.calcHistory)},CurrentInput=function(t){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"currentInput",id:"display"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"display"},t.currentAction))},Calculator=function(_React$Component){Object(C_Users_Sandr_WebstormProjects_calculator_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__.a)(Calculator,_React$Component);var _super=Object(C_Users_Sandr_WebstormProjects_calculator_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__.a)(Calculator);function Calculator(t){var e;return Object(C_Users_Sandr_WebstormProjects_calculator_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,Calculator),(e=_super.call(this,t)).state={currentResult:0,currentAction:"0",calcHistory:"",showingResult:!1,lastAction:"0"},e.handleNumberClick=e.handleNumberClick.bind(Object(C_Users_Sandr_WebstormProjects_calculator_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(e)),e.handleOperation=e.handleOperation.bind(Object(C_Users_Sandr_WebstormProjects_calculator_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(e)),e.handleClear=e.handleClear.bind(Object(C_Users_Sandr_WebstormProjects_calculator_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(e)),e.handleZero=e.handleZero.bind(Object(C_Users_Sandr_WebstormProjects_calculator_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(e)),e.handleDecimal=e.handleDecimal.bind(Object(C_Users_Sandr_WebstormProjects_calculator_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(e)),e.handleEquals=e.handleEquals.bind(Object(C_Users_Sandr_WebstormProjects_calculator_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(e)),e}return Object(C_Users_Sandr_WebstormProjects_calculator_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(Calculator,[{key:"handleNumberClick",value:function(t){if(this.state.currentAction.length>=15)return NaN;var e=t.target.value;this.state.showingResult?this.setState(Object.assign({},{currentResult:0,currentAction:t.target.value,calcHistory:t.target.value,showingResult:!1,lastAction:e})):"0"===this.state.lastAction&&1===this.state.currentAction.length?this.state.calcHistory.length>0?this.setState((function(t){return{currentResult:0,currentAction:e,calcHistory:t.calcHistory.slice(0,t.calcHistory.length-1).concat(e),showingResult:!1,lastAction:e}})):this.setState(Object.assign({},{currentAction:e,currentResult:0,calcHistory:t.target.value,showingResult:!1,lastAction:e})):OPERATORS.includes(this.state.lastAction)?this.setState((function(t){return{currentResult:0,currentAction:e,calcHistory:t.calcHistory.concat(e),showingResult:!1,lastAction:e}})):this.setState((function(t){return{currentAction:t.currentAction.concat(e),calcHistory:t.calcHistory.concat(e),currentResult:0,showingResult:!1,lastAction:e}}))}},{key:"handleOperation",value:function(t){var e=this,_=t.target.value,a=this.state.lastAction,r=this.state.calcHistory[this.state.calcHistory.length-2],c=this.state.calcHistory[this.state.calcHistory.length-5],l=/\+|\-|\*|\//;this.state.showingResult?this.setState((function(t){return{currentAction:_,calcHistory:t.currentResult.toString(10).concat(_),currentResult:0,showingResult:!1,lastAction:_}})):/[0-9]|\./.test(a)?this.setState((function(t){return{currentAction:_,calcHistory:t.calcHistory.concat(_),currentResult:0,showingResult:!1,lastAction:_}})):" + "!==_&&" / "!==_&&" * "!==_||!l.test(r)?" - "===_&&l.test(r)&&(l.test(c)?this.setState((function(t){return{currentAction:_,calcHistory:t.calcHistory.slice(0,e.state.calcHistory.length-6).concat(_),currentResult:0,showingResult:!1,lastAction:_}})):this.setState((function(t){return{currentAction:_,calcHistory:t.calcHistory.concat(_),currentResult:0,showingResult:!1,lastAction:_}}))):l.test(c)?this.setState((function(t){return{currentAction:_,calcHistory:t.calcHistory.slice(0,e.state.calcHistory.length-6).concat(_),currentResult:0,showingResult:!1,lastAction:_}})):this.setState((function(t){return{currentAction:_,calcHistory:t.calcHistory.slice(0,e.state.calcHistory.length-3).concat(_),currentResult:0,showingResult:!1,lastAction:_}}))}},{key:"handleClear",value:function(){this.setState({currentAction:"0",calcHistory:"",currentResult:0,showingResult:!1,lastAction:"0"})}},{key:"handleZero",value:function(){if(this.state.currentAction.length>=15)return NaN;if(this.state.showingResult)this.setState({currentAction:"0",calcHistory:"",currentResult:0,showingResult:!1,lastAction:"0"});else{if("0"===this.state.lastAction&&1===this.state.currentAction.length)return NaN;OPERATORS.includes(this.state.lastAction)?this.setState((function(t){return{currentResult:0,currentAction:"0",calcHistory:t.calcHistory.concat("0"),showingResult:!1,lastAction:"0"}})):this.setState((function(t){return{currentAction:t.currentAction.concat("0"),calcHistory:t.calcHistory.concat("0"),currentResult:0,showingResult:!1,lastAction:"0"}}))}}},{key:"handleDecimal",value:function(){if(this.state.currentAction.length>=15)return NaN;if(this.state.showingResult)this.setState({currentAction:"0.",calcHistory:"0.",currentResult:0,showingResult:!1,lastAction:"."});else{if(this.state.currentAction.includes("."))return NaN;OPERATORS.includes(this.state.lastAction)?this.setState((function(t){return{currentAction:"0.",calcHistory:t.calcHistory.concat("0."),currentResult:0,showingResult:!1,lastAction:"."}})):"0"===this.state.currentAction?this.setState((function(t){return{currentAction:t.currentAction.concat("."),calcHistory:t.calcHistory.concat("0."),currentResult:0,showingResult:!1,lastAction:"."}})):this.setState((function(t){return{currentAction:t.currentAction.concat("."),calcHistory:t.calcHistory.concat("."),currentResult:0,showingResult:!1,lastAction:"."}}))}}},{key:"handleEquals",value:function handleEquals(){var index=this.state.calcHistory.length-1,copyCalcHistory=this.state.calcHistory.slice(0);if(" = "===this.state.lastAction)return NaN;for(var regex=/[0-9]|\./;!regex.test(copyCalcHistory[index--]););var preparedCalcHistory=copyCalcHistory.slice(0,index+2),result=eval(preparedCalcHistory),resultStr=result.toString();this.setState((function(t){return{currentAction:resultStr,calcHistory:t.calcHistory.concat(" = "+resultStr),currentResult:result,showingResult:!0,lastAction:" = "}}))}},{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"container-fluid"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"my-auto calculator"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(CalcHistory,{calcHistory:this.state.calcHistory}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(CurrentInput,{currentAction:this.state.currentAction}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"clear",className:"btn btn-primary btn-clear clear",onClick:this.handleClear,value:"clear",placeholder:" AC "}," AC "),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"divide",className:"btn btn-primary btn-normal divide btn-op",onClick:this.handleOperation,value:" / ",placeholder:" / "}," / "),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"multiply",className:"btn btn-primary btn-normal multiply btn-op",onClick:this.handleOperation,value:" * ",placeholder:" * "}," * "),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"seven",className:"btn btn-primary btn-normal r2 c1 btn-number",onClick:this.handleNumberClick,value:"7",placeholder:" 7 "}," 7 "),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"eight",className:"btn btn-primary btn-normal r2 c2 btn-number",onClick:this.handleNumberClick,value:"8",placeholder:" 8 "}," 8 "),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"nine",className:"btn btn-primary btn-normal r2 c3 btn-number",onClick:this.handleNumberClick,value:"9",placeholder:" 9 "}," 9 "),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"subtract",className:"btn btn-primary btn-normal r2 c4 btn-op",onClick:this.handleOperation,value:" - ",placeholder:" - "}," - "),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"four",className:"btn btn-primary btn-normal r3 c1 btn-number",onClick:this.handleNumberClick,value:"4",placeholder:" 4 "}," 4 "),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"five",className:"btn btn-primary btn-normal r3 c2 btn-number",onClick:this.handleNumberClick,value:"5",placeholder:" 5 "}," 5 "),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"six",className:"btn btn-primary btn-normal r3 c3 btn-number",onClick:this.handleNumberClick,value:"6",placeholder:" 6 "}," 6 "),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"add",className:"btn btn-primary btn-normal r3 c4 btn-op",onClick:this.handleOperation,value:" + ",placeholder:" + "}," + "),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"one",className:"btn btn-primary btn-normal r4 c1 btn-number",onClick:this.handleNumberClick,value:"1",placeholder:" 1 "}," 1 "),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"two",className:"btn btn-primary btn-normal r4 c2 btn-number",onClick:this.handleNumberClick,value:"2",placeholder:" 2 "}," 2 "),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"three",className:"btn btn-primary btn-normal r4 c3 btn-number",onClick:this.handleNumberClick,value:"3",placeholder:" 3 "}," 3 "),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"zero",className:"btn btn-primary btn-zero r5 c1",onClick:this.handleZero,value:"0",placeholder:" 0 "}," 0 "),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"decimal",className:"btn btn-primary btn-normal r5 c3 btn-number",onClick:this.handleDecimal,value:".",placeholder:"."},"."),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"equals",className:"btn btn-primary btn-equals r4 c4",onClick:this.handleEquals,value:" = ",placeholder:" = "},"=")))}}]),Calculator}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);__webpack_exports__.a=Calculator},,,,,function(t,e,_){t.exports=_(17)},,,,,function(t,e,_){},function(t,e,_){},function(t,e,_){t.exports=_.p+"static/media/digital-7.1e670d88.ttf"},function(t,e,_){"use strict";_.r(e);var a=_(0),r=_.n(a),c=_(3),l=_.n(c),n=(_(14),_(4));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(n.a,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.2e13aa18.chunk.js.map