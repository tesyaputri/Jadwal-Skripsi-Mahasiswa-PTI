import React, { Component } from 'react';
import { Alert, Button, Text, View, Image, StyleSheet, TextInput, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Version can be specified in package.json
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'; // Version can be specified in package.json

import HomeScreen from './HomeScreen'; //memanggil file HomeScreen
//import DetailsScreen from './DetailsScreen';
import DataScreen from './DataScreen'; //memanggil file DataScreen
import LoginScreen from './LoginScreen';

export default class MainApp extends React.Component {
  render() {
    return (
      <Route /> //memanggil StackNavigator Route
    );
  }
}

const HomeStack = StackNavigator({
  Home: { screen: HomeScreen }, //memanggil class HomeScreen yang ada di file HomeScreen 

},
{
  navigationOptions:
  {
    header: false,
  }
}
);

const LoginStack = StackNavigator({
  Login: { screen: LoginScreen }, //memanggil class HomeScreen yang ada di file HomeScreen 
},
{
  navigationOptions:
  {
    header: false,
  }
}
);

const DataStack = StackNavigator({
  Data: { screen: DataScreen }, //memanggil class DataScreen yang ada di file DataScreen
  //Details: { screen: DetailsScreen },
  //Flat: { screen: FlatList },
},
{
  navigationOptions:
  {
    header: false,
  }
}
);

const TabScreen =  TabNavigator(
  {
    Home: { screen: HomeStack }, //memanggil stack navigator HomeStack
    Data: { screen: DataStack }, //memanggil stack navigator DataStack
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-heart${focused ? '' : '-outline'}`;
        } else if (routeName === 'Data') {
          iconName = `ios-keypad${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'top',
    tabBarOptions: {
      activeTintColor: '#90CAF9',
      inactiveTintColor: 'gray',
    },
    animationEnabled: false,
    swipeEnabled: true,
  }
);
const Route = StackNavigator({
  Login: { screen: LoginStack }, //memanggil class HomeScreen yang ada di file HomeScreen 
  Tabs: {screen : TabScreen}
},
{
  navigationOptions:
  {
    header: false,
    gesturesEnabled: false,
  }
}
);