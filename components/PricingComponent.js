import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import { Card, Button } from 'react-native-elements'

class Pricing extends Component {
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
            image={require('../components/images/gamerooms/gameroom-pool-table-sm.jpg')}
          >
            <Text style={styles.cardText}>$20/day</Text>
            <Text style={styles.cardText}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi,
              error.
            </Text>
            {/* FIXME: can't change button color */}
            <Button
              title='Reserve'
              color='#462345'
              onPress={() => this.props.navigation.navigate('Reservation')}
            />
          </Card>

          <Card
            featuredSubtitle='Virtual Office Membershio'
            image={require('../components/images/meetings/meeting-room-sm.jpg')}
          >
            <Text style={styles.cardText}>$50/month</Text>
            <Text style={styles.cardText}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi,
              error.
            </Text>
            <Button
              title='Reserve'
              color='#5637dd'
              onPress={() => this.props.navigation.navigate('Reservation')}
            />
          </Card>

          <Card
            featuredSubtitle='Cafe Club Membership'
            image={require('../components/images/cafe/cafe-1-sm.jpg')}
          >
            <Text style={styles.cardText}>$99/month</Text>
            <Text style={styles.cardText}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi,
              error.
            </Text>
            <Button
              title='Reserve'
              color='#5637dd'
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
