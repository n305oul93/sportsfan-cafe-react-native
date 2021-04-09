import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, ScrollView, Button } from 'react-native'
import { Card } from 'react-native-elements'
import { baseUrl } from '../shared/baseUrl'

class Pricing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dayPassUrl: 'images/gamerooms/gameroom-pool-table-sm.jpg',
      officeMembershipUrl: 'images/meetings/meeting-room-sm.jpg',
      cafeMembershipUrl: 'images/cafe/cafe-1-sm.jpg'
    }
  }

  static navigationOptions = {
    title: 'Pricing'
  }

  render() {
    return (
      <ScrollView>
        <Text style={styles.priceText}>Reserve Your Space Today</Text>
        <View style={styles.topCard}>
          <Card
            featuredSubtitle='Day Pass'
            image={{ uri: baseUrl + this.state.dayPassUrl }}
          >
            <Text style={styles.cardText}>$20/day</Text>
            <Text style={styles.cardText}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi,
              error.
            </Text>
            <Button
              title='Reserve'
              color='#3a73a5'
              onPress={() => this.props.navigation.navigate('Reservation')}
            />
          </Card>

          <Card
            featuredSubtitle='Office Membership'
            image={{ uri: baseUrl + this.state.officeMembershipUrl }}
          >
            <Text style={styles.cardText}>$50/month</Text>
            <Text style={styles.cardText}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi,
              error.
            </Text>
            <Button
              title='Reserve'
              color='#3a73a5'
              onPress={() => this.props.navigation.navigate('Reservation')}
            />
          </Card>

          <Card
            featuredSubtitle='Cafe Club Membership'
            image={{ uri: baseUrl + this.state.cafeMembershipUrl }}
          >
            <Text style={styles.cardText}>$99/month</Text>
            <Text style={styles.cardText}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi,
              error.
            </Text>
            <Button
              title='Reserve'
              color='#3a73a5'
              onPress={() => this.props.navigation.navigate('Reservation')}
            />
          </Card>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  priceText: {
    textAlign: 'center',
    marginTop: 15,
    fontSize: 16
  },
  topCard: {
    marginTop: 10,
    marginHorizontal: 40
  },
  cardText: {
    marginBottom: 10
  }
})

export default Pricing
