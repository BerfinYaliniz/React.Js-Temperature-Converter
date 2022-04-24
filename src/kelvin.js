import React, { Component } from "react";
import {Card,CardTitle,CardText} from "reactstrap"

export default class kelvin extends Component {
  render() {
    let convertedValue = this.props.currentTemperature + 273.15
    return (
      <div>

        <Card body style={{backgroundImage: "linear-gradient(to right, yellow,red)" }} inverse>
          <CardTitle tag="h5">{this.props.title}</CardTitle>
          <CardText>
          Kelvin : <b>{convertedValue} </b>
          </CardText>
          
        </Card>
      </div>
    );
  }
}