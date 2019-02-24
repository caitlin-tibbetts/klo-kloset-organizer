import React, {Component} from 'react';
import { StackNavigator } from 'react-navigation';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';

const Main = () => (
    <View style={styles.container}>
        <Button 
        title="Browse"
        color="#EA8979"
        />
        <Button 
        title="Camera"
        color="#EA8979"
        />
        <Button 
        title="Log"
        color="#EA8979"
        />
        <Button 
        title="Generate"
        color="#EA8979"
        />
      </View>
)

const App = StackNavigator({
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerTitle: 'Home'
      }
    }
})

/*type Props = {};
export default class Main extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Button 
        title="Browse"
        color="#EA8979"
        />
        <Button 
        title="Camera"
        color="#EA8979"
        />
        <Button 
        title="Log"
        />
        <Button title="Generate">Generate</Button>
      </View>
    );
  }
}*/

export default App