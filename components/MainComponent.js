import React, { Component } from 'react'
import Home from './HomeComponent'
import Reservation from './ReservationComponent'
import Pricing from './PricingComponent'
import Photos from './PhotosComponent'
import Menu from './MenuComponent'
import { View, Platform, StyleSheet, ImageBackground } from 'react-native'
import { Icon } from 'react-native-elements'
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createAppContainer } from 'react-navigation'
import { baseUrl } from '../shared/baseUrl'

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
          color='#d9dcd6'
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
          color='#d9dcd6'
          iconStyle={{ marginLeft: 60 }}
          onPress={() => navigation.toggleDrawer()}
        />
      )
    })
  }
)

const PricingNavigator = createStackNavigator(
  {
    Pricing: { screen: Pricing }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerBackground: () => (
        <ImageBackground
          source={{ uri: baseUrl + photoBkgPicture }}
          style={{ width: '100%', height: '100%' }}
        ></ImageBackground>
      ),
      headerTitleStyle: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
        flex: 1,
        marginRight: 60
      },
      headerLeft: (
        <Icon
          name='dollar-sign'
          type='font-awesome-5'
          color='#fff'
          iconStyle={{ marginLeft: 150 }}
          onPress={() => navigation.toggleDrawer()}
        />
      )
    })
  }
)

const PhotosNavigator = createStackNavigator(
  {
    Photos: { screen: Photos }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerBackground: () => (
        <ImageBackground
          source={{ uri: baseUrl + pricingBkgPicture }}
          style={{ width: '100%', height: '100%' }}
        ></ImageBackground>
      ),
      headerTitleStyle: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
        flex: 1,
        marginRight: 60
      },
      headerLeft: (
        <Icon
          name='images'
          type='font-awesome-5'
          color='#fff'
          iconStyle={{ marginLeft: 130 }}
          onPress={() => navigation.toggleDrawer()}
        />
      )
    })
  }
)

const MenuNavigator = createStackNavigator(
  {
    Menu: { screen: Menu }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerBackground: () => (
        <ImageBackground
          source={{ uri: baseUrl + menuBkgPicture }}
          style={{ width: '100%', height: '100%' }}
        ></ImageBackground>
      ),
      headerTitleStyle: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
        flex: 1,
        marginRight: 60
      },
      headerLeft: (
        <Icon
          name='utensils'
          type='font-awesome-5'
          color='#fff'
          iconStyle={{ marginLeft: 130 }}
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
    Pricing: {
      screen: PricingNavigator,
      navigationOptions: {
        drawerLabel: 'Room Pricing',
        drawerIcon: ({ tintColor }) => (
          <Icon
            name='dollar-sign'
            type='font-awesome-5'
            size={24}
            color={tintColor}
          />
        )
      }
    },
    Photos: {
      screen: PhotosNavigator,
      navigationOptions: {
        drawerLabel: 'Room Photos',
        drawerIcon: ({ tintColor }) => (
          <Icon
            name='images'
            type='font-awesome-5'
            size={24}
            color={tintColor}
          />
        )
      }
    },
    Menu: {
      screen: MenuNavigator,
      navigationOptions: {
        drawerLabel: 'Menu',
        drawerIcon: ({ tintColor }) => (
          <Icon
            name='utensils'
            type='font-awesome-5'
            size={24}
            color={tintColor}
          />
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
    drawerBackgroundColor: '#d9dcd6',
    contentOptions: {
      activeBackgroundColor: '#ccc',
      activeTintColor: '#2F6690'
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

const photoBkgPicture = 'images/fireside-chairs.jpg'
const pricingBkgPicture = 'images/balconies/balcony-1-xl.jpg'
const menuBkgPicture = 'images/cafe/cafe-4-sm.jpg'

const styles = StyleSheet.create({
  stackIcon: {
    marginLeft: 10,
    color: '#c0c0c0'
  }
})

export default Main
