import React, { Component } from 'react'
import Home from './HomeComponent'
import Reservation from './ReservationComponent'
import { View, Platform, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createAppContainer } from 'react-navigation'

const HomeNavigator = createStackNavigator(
  {
    Home: { screen: Home }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerTransparent: 'true',
      headerStyle: {
        backgroundColor: 'rgba(0,0,0,0.4)'
      },
      headerTitleStyle: {
        textAlign: 'center',
        color: '#fff',
        flex: 1,
        marginRight: 60
      },
      headerLeft: (
        <Icon
          name='football-ball'
          type='font-awesome-5'
          color='#c0c0c0'
          iconStyle={{ marginLeft: 100 }}
          onPress={() => navigation.toggleDrawer()}
        />
      )
    })
  }
)

const ReservationNavigator = createStackNavigator(
  {
    Reservation: { screen: Reservation }
  },
  {
    // FIXME: change color scheme
    defaultNavigationOptions: ({ navigation }) => ({
      headerTransparent: 'true',
      headerStyle: {
        backgroundColor: 'rgba(0,0,0,0.4)'
      },
      headerTitleStyle: {
        textAlign: 'center',
        color: '#fff',
        flex: 1,
        marginRight: 60
      },
      headerLeft: (
        <Icon
          name='calendar-alt'
          type='font-awesome-5'
          color='#c0c0c0'
          iconStyle={{ marginLeft: 60 }}
          onPress={() => navigation.toggleDrawer()}
        />
      )
    })
  }
)

const MainNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeNavigator,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Icon name='home' type='font-awesome' size={24} color={tintColor} />
        )
      }
    },
    Reservation: {
      screen: ReservationNavigator,
      navigationOptions: {
        drawerLabel: 'Reserve a Private Room',
        drawerIcon: ({ tintColor }) => (
          <Icon
            name='calendar-alt'
            type='font-awesome-5'
            size={24}
            color={tintColor}
          />
        )
      }
    }
  },
  {
    // TODO: change color scheme
    drawerBackgroundColor: '#ddd',
    contentOptions: {
      activeBackgroundColor: '#ccc',
      activeTintColor: '#0b99d6'
    }
  }
)

const AppNavigator = createAppContainer(MainNavigator)

class Main extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight
        }}
      >
        <AppNavigator />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  stackIcon: {
    marginLeft: 10,
    color: '#c0c0c0'
  }
})

export default Main
