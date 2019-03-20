import AppStyles from '../stylesheet/Appstyles';
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button,Image,ImageBackground,TouchableOpacity,BackHandler} from 'react-native';

const ScoreDisplay = (props) => (
<View style={styles.score}>
            <Text style={{fontSize:20}}>Score</Text>
            <Text style={{fontSize:20}}>0</Text>
        </View>
)

const styles = StyleSheet.create({
    score:{
      flexDirection: AppStyles.score.flexDirection,
      justifyContent: 'space-around',
      width: 100,
      position: 'relative',
    }
  });

  export default ScoreDisplay;