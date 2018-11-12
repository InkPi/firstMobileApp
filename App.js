/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
//import {Platform, StyleSheet, Text, View, Image} from 'react-native';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

export default class App extends Component {

  constructor() {
    super()
    this.state = {}
    this.state.customStyles = {
      opacity: 0
    }

    setInterval(() => {
      this.setState({
        customStyles: {
          opacity: 1
        }
      })
    }, 1000)
  }

  render() {
    const imageInfo = {
      uri: 'https://calculate-this.com/sites/default/files/styles/large/public/field/image/pizza.png?itok=yGvUTlve'
    }
    // <Text style={styles.instructions}>To get started, edit App.js</Text>
    // <Text style={styles.instructions}>{instructions}</Text>
    return (
      <View style={styles.container}>
        <Text style={[styles.welcome, this.state.customStyles]}>Hello! Welcome to React Native!</Text>
        <Image source={imageInfo} style={{width: 400, height: 400}}/>
      </View>
    );
  }
}

/*React Native works on flexbox system*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
