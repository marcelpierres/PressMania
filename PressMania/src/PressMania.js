/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button,BackHandler} from 'react-native';


type Props = {};
export default class PressMania extends Component {
  static navigationOptions ={
    header: null
  }
  //disable hardware backbutton
  //WARNING! To be deprecated in React v17. Use componentDidMount instead.
  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', function() {
      // this.onMainScreen and this.goBack are just examples, you need to use your own implementation here
      // Typically you would use the navigator here to go to the last state.
    
      
      return true;
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Button title="Back to Menu" onPress={() => this.props.navigation.navigate('Welcome')}>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
