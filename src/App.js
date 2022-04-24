import Kelvin from "./kelvin";
import Fahrenheit from "./fahrenheit";
import Celcius from "./celcius";
import React, { Component } from "react";
import { Container, Col, Row, Button } from "reactstrap";

class App extends Component {
  state = { currentTemperature: 0 };
  increaseTemperature = () => {
    this.setState({ currentTemperature: this.state.currentTemperature + 1 });
    
  };
  render() {
 
    let celciusTitle = "Celcius";
    let fahrenheitTitle = "Fahrenheit";
    let kelvinTitle = "Kelvin";
    return (
      <div  >
        <header>
          <Container className="mt-4">
            <Row>
              <div>
                <h2>Weather Temperature </h2>
                <b>Temperature now : {this.state.currentTemperature} Celcius</b>
                <br></br>
                <br></br>
                <Button color="secondary" onClick={() => this.increaseTemperature()}>
                  Increase Temperature
                </Button>
                <br></br>
                <br></br>
              </div>
            </Row>

            <Row>
              <Col xs="3">
                <Celcius
                  currentTemperature={this.state.currentTemperature}
               
                />
              </Col>
              <Col xs="3">
                <Fahrenheit
                  currentTemperature={this.state.currentTemperature}
               
                />
              </Col>
              <Col xs="3">
                <Kelvin
                  currentTemperature={this.state.currentTemperature}
           
                />
              </Col>
            </Row>
          </Container>
        </header>
      </div>
    );
  }
}
export default App;