import {createStackNavigator, createAppContainer, createMaterialTopTabNavigator} from 'react-navigation';
import PressMania from '../src/PressMania';
import LoginScreen from '../src/components/LoginScreen';

const AppStackNavigator = createMaterialTopTabNavigator({
    Welcome:{screen: LoginScreen} ,
    Home: {screen: PressMania}
  }, {
    initialRouteName: 'Welcome',
    tabBarPosition: 'bottom',
    tabBarOptions:{
    activeTintColor: 'black',
    inactiveTintColor: 'grey',
    style:{
        backgroundColor:'white'
    }
    }
  });

  export default AppStackNavigator