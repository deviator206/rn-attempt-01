import { StyleSheet } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import Dashboard from './components/Dashboard';
import Login from './components/Login';

export default  createAppContainer(createStackNavigator({
  Login: {
    screen: Login,
  },
  Dashboard: {
    screen: Dashboard,
  },
}, {
  headerMode: 'none',
}));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 10,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
