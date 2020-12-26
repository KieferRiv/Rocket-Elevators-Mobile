// React Native Pass Value From One Screen to Another Using React Navigation
// https://aboutreact.com/react-native-pass-value-from-one-screen-to-another-using-react-navigation/

import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View, Text, TextInput, Button} from 'react-native';

const SecondPage = ({route}) => {
  
  const [status, setstatus] = useState('Enter the new status');
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ status: 'Online' })
    };
  function changeStatus(){fetch('https://localhost:5001/api/Elevators/'+ route.params.paramKey+'', {mode: 'no-cors'}, requestOptions)
  .then(response => response.json())
  .then(data => this.setState({ postId: data.id }));
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.heading}>
          Rocket Elevators
        </Text>
        <Text style={styles.textStyle}>
          This elevator id is: {route.params.paramKey},
          With the status: {route.params.paramKey2}

        </Text>
        <Text style={styles.textStyle}>
          The Elevator New status is:

        </Text>
        

      </View>
      <Button title="Change the elevator status to operational"  ></Button>
      <Button title="Get The New Status"  ></Button>
      <Text style={{textAlign: 'center', color: 'grey'}}>
       
      </Text>
    </SafeAreaView>
  );
};

export default SecondPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 25,
    textAlign: 'center',
    marginVertical: 10,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 10,
  },
});