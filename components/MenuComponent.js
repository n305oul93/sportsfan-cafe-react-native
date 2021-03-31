import React, { Component } from 'react'
import {
  Text,
  View,
  ScrollView,
  Button,
  Modal,
  Image,
  StyleSheet
} from 'react-native'
import { Card } from 'react-native-elements'
import { baseUrl } from '../shared/baseUrl'

class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      breakfastBkgPicture: 'images/cafe/cafe-6-sm.jpg',
      breakfastMenu: 'images/cafe/breakfast-menu.jpg',
      lunchBkgPicture: 'images/cafe/cafe-3.jpg',
      lunchMenu: 'images/cafe/lunch-menu.jpg',
      menu: '',
      showMenuModal: false
    }
  }

  toggleMenuModal() {
    this.setState({ showMenuModal: !this.state.showMenuModal })
  }

  static navigationOptions = {
    title: 'Menu'
  }

  render() {
    return (
      <ScrollView>
        <View>
          <Card
            featuredSubtitle='Breakfast Menu'
            image={{ uri: baseUrl + this.state.breakfastBkgPicture }}
          >
            <Text style={styles.cardText}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi,
              error.
            </Text>
            <Button
              title='See Menu'
              color='#3a73a5'
              onPress={() => {
                this.toggleMenuModal()
                this.setState({ menu: this.state.breakfastMenu })
              }}
            />
          </Card>

          <Card
            featuredSubtitle='Lunch Menu'
            image={{ uri: baseUrl + this.state.lunchBkgPicture }}
          >
            <Text style={styles.cardText}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi,
              error.
            </Text>
            <Button
              title='See Menu'
              color='#3a73a5'
              onPress={() => {
                this.toggleMenuModal()
                this.setState({ menu: this.state.lunchMenu })
              }}
            />
          </Card>
        </View>
        <Modal
          animationType={'slide'}
          transparent={false}
          visible={this.state.showMenuModal}
          onRequestClose={() =>
            this.setState({ showMenuModal: !this.state.showMenuModal })
          }
        >
          <View style={styles.menuModal}>
            <Image
              source={{ uri: baseUrl + this.state.menu }}
              style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
            />
            <Button
              onPress={() => {
                this.toggleMenuModal()
              }}
              color='#3a73a5'
              title='Close'
            />
          </View>
        </Modal>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  menuModal: {
    justifyContent: 'center',
    marginBottom: 60,
    marginHorizontal: 10
  },
  cardText: {
    marginBottom: 10
  }
})

export default Menu
