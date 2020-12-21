import React, { Component } from 'react';
import { View, Text, Button,TextInput, TouchableOpacity, StyleSheet } from 'react-native';


const LandingScreen = ({ navigation }) => {
  
  return (
    <View >
      <Text>Public Landing Screen</Text>
      
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Sign In')}
      />
    </View>
  );
};
 
export default LandingScreen;