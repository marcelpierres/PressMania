import {createStackNavigator, createAppContainer, createMaterialTopTabNavigator} from 'react-navigation';
import PressMania from '../src/PressMania';
import LoginScreen from '../src/components/LoginScreen';

const AppStackNavigator = createStackNavigator({
    Welcome:{screen: LoginScreen} ,
    Home: {screen: PressMania}
  }, {
    initialRouteName: 'Welcome',
    
  });

  export default AppStackNavigator