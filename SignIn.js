// React Native Pass Value From One Screen to Another Using React Navigation
// https://aboutreact.com/react-native-pass-value-from-one-screen-to-another-using-react-navigation/

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
} from 'react-native';

const FirstPage = ({navigation}) => {
  const [email, setemail] = useState('');
  function _userLogin() {
    
    console.log(email);
    if (email) {
      fetch("https://localhost:5001/api/Customers/"+email+"")
      .then(
        function(response) {
          
          if (response.status !== 200) {
            console.log('didnt return 200');
            
            return;
          }
          else  navigation.navigate('SecondPage', {
            paramKey: email,
          })
              console.log(response.status)
               return;
        }
      )
    }
  }
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.heading}>
          Rocket Elevators
        </Text>
        <Text style={styles.textStyle}>
          Enter you email
        </Text>
        {/*Input to get the value from the user*/}
        <TextInput
          value={email}
          onChangeText={(email) => setemail(email)}
          placeholder={'Enter your customer email'}
          style={styles.inputStyle}
        />
        
        {/* On click of the button we will send the data as a Json
          From here to the Second Screen using navigation */}
        <Button title="Login" onPress={() => _userLogin("Menu")} ></Button>
      </View>
      <Text style={{textAlign: 'center', color: 'grey'}}>
        www.kieferriv.com
      </Text>
    </SafeAreaView>
  );
};

export default FirstPage;

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
  inputStyle: {
    width: '80%',
    height: 44,
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#DBDBD6',
  },
});