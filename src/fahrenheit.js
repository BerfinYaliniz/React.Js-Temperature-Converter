import React, { Component } from "react";
import {Card,CardTitle,CardText} from "reactstrap"

export default class fahrenheit extends Component {
  
  render() {
    let convertedValue = (this.props.currentTemperature*1.8) +32
    return (
      <div>
        <Card body style={{backgroundImage: "linear-gradient(to right, pink,red" }} inverse>
          <CardTitle tag="h5">{this.props.title}</CardTitle>
          <CardText>
         Fahrenheit : <b> {convertedValue} </b>
          </CardText>

        </Card>
      </div>
    );
  }
}