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
      color: 'red'
    }

    setInterval(() => {
      if (this.state.customStyles.color == 'red') {
        this.setState({
          customStyles: {
            color: 'green'
          }
        })
    } else {
      this.setState({
        customStyles: {
          color: 'red'
        }
      })
    }
    }, 1000)
  }

  render() {
    const imageInfo = {
      uri: 'https://calculate-this.com/sites/default/files/styles/large/public/field/image/pizza.png?itok=yGvUTlve'
    }
    const donutImage = {
      uri: 'http://pluspng.com/img-png/doughnut-png-hd-various-flavours-600.png'
    }
    // <Text style={styles.instructions}>To get started, edit App.js</Text>
    // <Text style={styles.instructions}>{instructions}</Text>
    return (
      <View style={styles.container}>
        <View style={styles.half1}>
          <Text style={[styles.welcome, this.state.customStyles]}>Hello! Welcome to React Native!</Text>
        </View>
        <View style={styles.half2}>
          <View style={[styles.half21, styles.half2x]}>
            <Text style={{color: 'white'}}>Pizza</Text>
            <Image source={imageInfo} style={{width: 100, height: 100}}/>
          </View>
          <View style={[styles.half22, styles.half2x]}>
            <Text>Donut</Text>
            <Image source={donutImage} style={{width: 100, height: 100}}/>
          </View>
        </View>
      </View>
    );
  }
}

/*React Native works on flexbox system*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //for columns View:
    //flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
  half1: {
    flex: 1,
    backgroundColor: 'white',
  },
  half2: {
    flex: 2,
    flexDirection: 'row',
    backgroundColor: 'green',
  },
  half2x: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  half21: {
    backgroundColor: 'brown',
  },
  half22: {
    backgroundColor: 'pink',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 50,
    color: 'orange',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
