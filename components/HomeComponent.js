import React, { Component } from 'react'
import { View, Text, ImageBackground, StyleSheet, Button } from 'react-native'
import thorpeness from '../components/images/thorpeness.jpg'

class Home extends Component {
  static navigationOptions = {
    title: 'Sports Fan Cafè'
  }

  render() {
    return (
      <ImageBackground source={thorpeness} style={styles.image} blurRadius={2}>
        <Text style={styles.smallTitle}>Dallas Premier Sports Cafè</Text>
        <Text style={styles.title}>Sports, Fun & Food</Text>
        <View style={styles.titleButton}>
          <Button title='Request a Room' color='#188af5' />
        </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  smallTitle: {
    color: '#fcfcfc',
    fontSize: 20,
    textAlign: 'center'
  },
  title: {
    color: '#fcfcfc',
    fontSize: 40,
    textAlign: 'center'
  },
  titleButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30
  },
  image: {
    // background: linear - gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.9)),
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center'
  }
})

export default Home
