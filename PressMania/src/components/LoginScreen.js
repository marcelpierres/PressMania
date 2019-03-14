import React, { Component } from 'react';
import { Text, View ,StyleSheet,Button} from 'react-native';

 class LoginScreen extends Component {
   static navigationOptions ={
     header: null
   }
    render() {
      return (
        <View style={styles.container}>
          <Button title="PLAY" onPress={() => this.props.navigation.navigate('Home')}>

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

export default LoginScreen;
