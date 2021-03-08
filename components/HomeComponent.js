import React, { Component } from 'react'
import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import thorpeness from '../components/images/thorpeness.jpg'

class Home extends Component {
  static navigationOptions = {
    title: 'Home'
  }

  render() {
    return (
      <ImageBackground source={thorpeness} style={styles.image}>
        <Text style={styles.title}>Sports Fan Cafe Home Page!</Text>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    color: 'red',
    fontSize: 40,
    textAlign: 'center'
  },
  image: {
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center'
  }
})

export default Home
