import React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Version can be specified in package.json
import { TabNavigator, TabBarTop } from 'react-navigation'; // Version can be specified in package.json
import Input from './Input';
import RiwayatJurnal from './RiwayatJurnal';
class HomeScreen extends React.Component {
  render() {
    return (
      <Input />
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
     <RiwayatJurnal />
    );
  }
}

export default TabNavigator(
  {
    Input: { screen: HomeScreen },
    List: { screen: SettingsScreen },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Input') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'List') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarComponent: TabBarTop,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: 'gray',
    },
    animationEnabled: true,
    swipeEnabled: true,
  }
);
