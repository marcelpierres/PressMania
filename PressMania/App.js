/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import AppStyles from './src/stylesheet/Appstyles';
import {createStackNavigator, createAppContainer, createMaterialBottomTabNavigator} from 'react-navigation';
import AppStackNavigator from './utilities/router';
import PressMania from './src/containers/PressMania';
import LoginScreen from './src/components/LoginScreen';
import  store from './src/store';
import {Provider} from 'react-redux';

/*const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});*/

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store ={store} >
      <MainScreen/>
      </Provider>
      
    );
  }
}


const MainScreen = createAppContainer(AppStackNavigator);

const styles = StyleSheet.create({
  container: {
    flex: AppStyles.container.flex,
    justifyContent: AppStyles.container.justifyContent,
    alignItems: AppStyles.container.alignItems
  },

});
