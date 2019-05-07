import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.onBackClicked = this.onBackClicked.bind(this);
  }

  onBackClicked () {
    console.log('back clicked');
    this.props.navigation.navigate('Login')
  }

  componentDidMount () {
  }
  render() {
    return (
      <View style={styles.container}>
        <Button
          title={'Back'}
          style={styles.input}
          onPress={this.onBackClicked.bind(this)}
        />
        <Text style={styles.paragraph}>
          Dashboard Page
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 10,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
