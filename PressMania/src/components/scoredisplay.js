import AppStyles from '../stylesheet/Appstyles';
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button,Image,ImageBackground,TouchableOpacity,BackHandler} from 'react-native';
import {connect} from 'react-redux';
const ScoreDisplay = (props) => (
<View style={styles.score}>
            <Text style={{fontSize:20}}>Score</Text>
            <Text style={{fontSize:20}}>{props.counter}</Text>
        </View>
)
state = {
  counter: 3
}

const styles = StyleSheet.create({
    score:{
      flexDirection: AppStyles.score.flexDirection,
      justifyContent: 'space-around',
      width: 100,
      position: 'relative',
    }
  });

  function mapStateToProps(state) {
    return {
        counter: state.counter
    }
}

  export default connect(mapStateToProps, null)(ScoreDisplay);