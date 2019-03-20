import {createStackNavigator, createAppContainer, createMaterialTopTabNavigator} from 'react-navigation';
import PressMania from '../src/PressMania';
import LoginScreen from '../src/components/LoginScreen';

const AppStackNavigator = createStackNavigator({
    Home: {screen: PressMania}
  }, {
    initialRouteName: 'Home',
    
  });

  export default AppStackNavigator