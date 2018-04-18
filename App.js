import React from 'react';
import { Button, View, Text, ImageBackground } from 'react-native';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json
import Isiapp from './Isiapp';
class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
    };
  render() {
    return (
      <ImageBackground
      source={require('./src/img/JurnalKu.png')}
      style={{width: '100%', height: '100%'}}
    > 
          <View style={{ paddingTop: 500, alignItems: 'center', justifyContent: 'center' }}>
            <Button
              title="Get started ->"
              onPress={() => this.props.navigation.navigate('Details')}
            />
          </View>
          </ImageBackground>
    );
  }
}

class DetailsScreen extends React.Component {
   static navigationOptions = {
    header: null,
    };
  render() {
    return (
      <Isiapp />
    );
  }
}

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}