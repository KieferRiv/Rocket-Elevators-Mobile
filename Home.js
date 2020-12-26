import React, { Component } from "react";
import ReactDOM from "react-dom";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
class App extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  componentDidMount() {
    fetch("https://localhost:5001/api/Elevators/Getelevatorsstatus")
      .then(res => res.json())
      .then(json => this.setState({ data: json }));
  }

  render() {
    return (
     
        <div>
          <ul>
            {this.state.data.map(el => (
              <li>
                <TouchableOpacity onPress={() =>
                  this.props.navigation.navigate('Elevator', {
                  paramKey: el.id, paramKey2: el.status
                })} >
                {"Elevator Number :" + el.id} {"Has a status of:" + el.status }
                </TouchableOpacity>
              </li>
            ))}
          </ul>
        </div>
      
    );
  }
}

export default App;

