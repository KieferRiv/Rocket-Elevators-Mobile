import React, { Component } from "react";
import ReactDOM from "react-dom";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
class App extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  componentDidMount() {
    fetch("https://localhost:5001/api/Elevators/"+route.params.paramKey+"")
      .then(res => res.json())
      .then(json => this.setState({ data: json }));
  }

  render() {
    return (
     
        <div>
          <ul>
            {this.state.data.map(el => (
              <li>
                
                {"Elevator Number :" + el.id} {"Has a :" + el.status + "status"}
                
              </li>
            ))}
          </ul>
        </div>
      
    );
  }
}

export default App;

