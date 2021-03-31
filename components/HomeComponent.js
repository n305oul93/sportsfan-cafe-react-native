import React, { Component } from 'react'
import { View, Text, ImageBackground, StyleSheet, Button } from 'react-native'
import { baseUrl } from '../shared/baseUrl'
// import thorpeness from '../components/images/thorpeness.jpg'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      thorpeness: 'images/thorpeness.jpg'
    }
  }

  static navigationOptions = {
    title: 'Sports Fan Cafè'
  }

  render() {
    return (
      <ImageBackground
        source={{ uri: baseUrl + this.state.thorpeness }}
        style={styles.image}
        blurRadius={2}
      >
        <Text style={styles.smallTitle}>Dallas Premier Sports Cafè</Text>
        <Text style={styles.title}>Sports, Fun & Food</Text>
        <View style={styles.titleButton}>
          <Button
            title='Request a Room'
            color='#3a73a5'
            onPress={() => this.props.navigation.navigate('Reservation')}
          />
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
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center'
  }
})

export default Home
