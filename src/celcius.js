import React, { Component } from "react";
import {Card,CardTitle,CardText} from "reactstrap"

class celcius extends Component {
 
 
  render() {
    return (
      <div>
        <Card body style={ {backgroundImage: "linear-gradient(to right, #c471ed, #f64f59)" }} inverse>
          <CardTitle tag="h5">{this.props.title}</CardTitle>
          <CardText>
           Celcius : <b>{this.props.currentTemperature} </b>
          </CardText>
        </Card>
      
      </div>
    );
  }
}

export default celcius;