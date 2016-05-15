var React = require('react');
var ReactDOM = require('react-dom');
var GuessWhoMain = require('./components/GuessWhoMain.jsx')


window.onload = function(){
  console.log("app started");
  ReactDOM.render(
    <GuessWhoMain></GuessWhoMain>, 
    document.getElementById('app')
  );

}