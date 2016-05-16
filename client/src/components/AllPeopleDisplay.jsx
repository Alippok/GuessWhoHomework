//will display all people's characteristics with option for user to remove a person if does not fit answer

var React = require('react');
var PersonDisplay = require('./PersonDisplay.jsx');


var AllPeopleDisplay = React.createClass({
  

  render: function(){

    var peopleList = this.props.allPeopleDetails.map(function(person){
      return <PersonDisplay key={person._id} personDetails={person}></PersonDisplay>
    });
    return (
      <div>
        <h4> All People </h4>
        {peopleList}
      </div>
    )
  }
})


module.exports = AllPeopleDisplay;