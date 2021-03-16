import React, { Component } from 'react'
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Picker,
  Switch,
  Button,
  Modal
} from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'

class Reservation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      numberOfDays: 1,
      numberOfGuest: 1,
      date: new Date(),
      showCalendar: false,
      showReservationModal: false
    }
  }

  static navigationOptions = {
    title: 'Reserve a Private Room'
  }

  toggleReservationModal() {
    this.setState({ showReservationModal: !this.state.showReservationModal })
  }

  handleReservation() {
    console.log(JSON.stringify(this.state))
    this.toggleReservationModal()
  }

  resetForm() {
    this.setState({
      numberOfDays: 1,
      numberOfGuest: 1,
      date: new Date(),
      showCalendar: false,
      showReservationModal: false
    })
  }

  // FIXME: change color scheme
  render() {
    return (
      <ScrollView>
        <View style={styles.formTopRow}>
          <Text style={styles.formLabel}>Number of Days</Text>
          <Picker
            style={styles.formItem}
            selectedValue={this.state.numberOfDays}
            onValueChange={itemValue =>
              this.setState({ numberOfDays: itemValue })
            }
          >
            <Picker.Item label='1' value='1' />
            <Picker.Item label='2' value='2' />
            <Picker.Item label='3' value='3' />
            <Picker.Item label='4' value='4' />
            <Picker.Item label='5' value='5' />
            <Picker.Item label='6' value='6' />
          </Picker>
        </View>
        <View style={styles.formRow}>
          <Text style={styles.formLabel}>Number of Guest</Text>
          <Picker
            style={styles.formItem}
            selectedValue={this.state.numberOfGuest}
            onValueChange={itemValue =>
              this.setState({ numberOfGuest: itemValue })
            }
          >
            <Picker.Item label='1' value='1' />
            <Picker.Item label='2' value='2' />
            <Picker.Item label='3' value='3' />
            <Picker.Item label='4' value='4' />
            <Picker.Item label='5' value='5' />
            <Picker.Item label='6' value='6' />
          </Picker>
        </View>
        <View style={styles.formRow}>
          <Text style={styles.formLabel}>Date</Text>
          <Button
            onPress={() =>
              this.setState({ showCalendar: !this.state.showCalendar })
            }
            title={this.state.date.toLocaleDateString('en-US')}
            color='#5637dd'
            accessibilityLabel='Tap me to select a reservation date'
          />
        </View>
        {this.state.showCalendar && (
          // TODO: check docs for props
          <DateTimePicker
            style={styles.formItem}
            value={this.state.date}
            mode={'date'}
            display='default'
            onChange={(event, selectedDate) => {
              selectedDate &&
                this.setState({ date: selectedDate, showCalendar: false })
            }}
          />
        )}
        <View style={styles.formRow}>
          <Button
            onPress={() => this.handleReservation()}
            title='Search'
            color='#5637dd'
            accessibilityLabel='Tap me to search for available dates'
          />
        </View>
        <Modal
          animationType={'slide'}
          transparent={false}
          visible={this.state.showReservationModal}
          onRequestClose={() => this.toggleReservationModal()}
        >
          <View style={styles.reservationModal}>
            <Text style={styles.reservationModalTitle}>
              Search Private Room Reservations
            </Text>
            <Text style={styles.reservationModalText}>
              Number of Days: {this.state.numberOfDays}
            </Text>
            <Text style={styles.reservationModalText}>
              Number of Guest: {this.state.numberOfGuest}
            </Text>
            <Text style={styles.reservationModalText}>
              Date: {this.state.date.toLocaleDateString('en-US')}
            </Text>
            <Button
              onPress={() => {
                this.toggleReservationModal()
                this.resetForm()
              }}
              color='#5637dd'
              title='Reserve'
            />
          </View>
        </Modal>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  formTopRow: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
    marginTop: 80,
    marginRight: 20,
    marginBottom: 20,
    marginLeft: 20
  },
  formRow: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
    margin: 20
  },
  formLabel: {
    fontSize: 18,
    flex: 2
  },
  formItem: {
    flex: 2
  },
  reservationModal: {
    justifyContent: 'center',
    margin: 20
  },
  reservationModalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor: '#5637dd',
    textAlign: 'center',
    color: '#fff',
    marginBottom: 20
  },
  reservationModalText: {
    fontSize: 18,
    margin: 10
  }
})

export default Reservation
