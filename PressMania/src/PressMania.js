/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button,Image,ImageBackground,TouchableOpacity,BackHandler} from 'react-native';
import AppStyles from './stylesheet/Appstyles';
import ScoreDisplay from './components/scoredisplay';
import {Provider} from 'react-redux';
type Props = {};
export default class PressMania extends Component {
  static navigationOptions ={
    headerRight: (
      <ScoreDisplay/>
    )
  }
  state = {
    counter: 0
  }
  //disable hardware backbutton
  //WARNING! To be deprecated in React v17. Use componentDidMount instead.
  /*componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', function() {
      // this.onMainScreen and this.goBack are just examples, you need to use your own implementation here
      // Typically you would use the navigator here to go to the last state.
    
      
      return true;
    });
  }*/
  render() {
    return (
      
      
        
      <View style={styles.container}>
        <TouchableOpacity >
        <Image source={require('./assets/button-image.png')}
        style={styles.imageStyle}/>
        </TouchableOpacity>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: AppStyles.container.flex,
    justifyContent: AppStyles.container.justifyContent,
    alignItems: AppStyles.container.alignItems,
    backgroundColor: AppStyles.container.backgroundColor,
  },
  imageStyle:{
    height:AppStyles.imageStyle.height,
    width: AppStyles.imageStyle.width,
  },
  score:{
    flexDirection: AppStyles.score.flexDirection,
    justifyContent: 'space-around',
    width: 100,
    position: 'relative',
  }
});
