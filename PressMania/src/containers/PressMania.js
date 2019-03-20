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
import AppStyles from '../stylesheet/Appstyles';
import ScoreDisplay from '../components/scoredisplay';
import {Provider,connect} from 'react-redux';
var Sound = require('react-native-sound');
type Props = {};
class PressMania extends Component {
  static navigationOptions ={
    headerRight: (
      <ScoreDisplay/>
    )
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
  componentDidMount(){
    this.hello = new Sound('honk1.mp3', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
    });
  }
  
  
  handlePress() {
    this.hello.play((success) => {
      if (!success) {
        console.log('Sound did not play')
      }
    })
  }

  render() {
    return ( 
      <View style={styles.container}>
        <TouchableOpacity onPress={() => {this.props.increaseCounter(); this.hello.play();}}>
        <Image source={require('../assets/button-image.png')}
        style={styles.imageStyle}/>
        </TouchableOpacity>
      </View>
      
    );
  }
}


const mapDispatchToProps = (dispatch) =>{
  return {
      increaseCounter: () => dispatch({ type: 'INCREASE_COUNTER' }),
      decreaseCounter: () => dispatch({ type: 'DECREASE_COUNTER' }),
  }
}

export default connect(null,mapDispatchToProps)(PressMania);

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
