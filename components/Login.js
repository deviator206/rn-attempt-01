import * as React from 'react';
import { AsyncStorage, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  componentDidMount () {
    
  }

  onPressForgotPassword () {
     const userName =  AsyncStorage.getItem('userName');
     console.log(JSON.stringify(userName),"::: ");

  }

  onPressLogin () {
    AsyncStorage.setItem('userName', 'testuser');
    this.props.navigation.navigate('Dashboard')
    console.log("Login clicked")
  }

  render() {
    return (
      <View >
        <Text style={styles.paragraph}>
          Login !
        </Text>
         <View >
        <TextInput
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
          placeholder={'Username'}
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />
        
        <Button
          title={'Login'}
          style={styles.input}
          onPress={this.onPressLogin.bind(this)}
        />

        <View>
          <Button
          title={'Forgot Password'}
          style={styles.input}
          onPress={this.onPressLogin.bind(this)}
        />
        </View>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
   input: {
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
});
