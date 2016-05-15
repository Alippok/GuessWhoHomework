var React = require('react');


var GuessWhoMain = React.createClass({
  getInitialState: function(){
    return {peopleList: [], selectedPerson: null}
  },

  fetchPeople: function(){
    var request = new XMLHttpRequest;
    request.open("GET", "/api/people");
    request.onload = function(){
      var data = JSON.parse(request.responseText);
      this.setState({peopleList: data, selectedPerson: data[Math.floor(Math.random() * data.length)]});
    }.bind(this);
    request.send();
  },

  componentDidMount: function(){
    this.fetchPeople();
  },

  render: function(){
    console.log(this.state)
    return <h4> Welcome to Guess Who </h4>
  }


});


module.exports = GuessWhoMain;