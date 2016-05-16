var React = require('react');


var PersonDisplay = React.createClass({

  displayBooleanValue: function(personDetail){
    if(personDetail){
      return "yes";
    } else {
      return "no";
    }
  },

  render: function(){
    
    return(
      <div>
        <h3> {this.props.personDetails.name} </h3>
        <ul>
          <li>Hair Colour: {this.props.personDetails.hairColour}</li>
          <li>Eye Colour: {this.props.personDetails.eyeColour}</li>
          <li>Is bald: {this.displayBooleanValue(this.props.personDetails.isBald)}</li>
          <li>Has a beard: {this.displayBooleanValue(this.props.personDetails.hasBeard)}</li>
          <li>Has a moustache: {this.displayBooleanValue(this.props.personDetails.hasMoustache)}</li>
          <li>Wears glasses: {this.displayBooleanValue(this.props.personDetails.wearsGlasses)}</li>
          <li> Wears a hat: {this.displayBooleanValue(this.props.personDetails.wearsHat)}</li>
        </ul>
        <button type="submit"> Discard </button>
      </div>
    )
    

  }
})




module.exports = PersonDisplay;