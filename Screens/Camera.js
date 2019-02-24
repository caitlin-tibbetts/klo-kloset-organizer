"use strict"
import React, {Component} from 'react';
import { StackNavigator } from 'react-navigation';
import {
    Platform, 
    ImageBackground, 
    View, 
    Button,
    Alert
} from 'react-native';
import { 
    Header, 
    Content,
    List,
    ListItem, 
    Form, 
    Picker,
    Icon
} from 'native-base';
import styles from './Style'

export default class Camera extends React.Component 
{
    constructor(props) {
        super(props);
        this.state = {
          selected: undefined
        };
      }
      onValueChangeClothingType(value: string) {
        this.setState({
          selected: value
        });
      }

      onValueChangePattern(value: boolean) {
        this.setState({
          selected: value
        });
      }

      render() {
        return (
        <View style={styles.container}>
            <Header />
            <Content>
            <List>
                <ListItem>
                <Form>
                    <Picker
                    mode="dropdown"
                    placeholder="Type of Clothing"
                    placeholderStyle={{ color: "#2874F0" }}
                    note={false}
                    selectedValue={this.state.selected}
                    onValueChange={this.onValueChangeClothingType.bind(this)}
                    >
                    <Picker.Item label="Top" value="key0" />
                    <Picker.Item label="Bottom" value="key1" />
                    <Picker.Item label="Full Body" value="key2" />
                    </Picker>
                </Form>
                </ListItem>
                <ListItem>
                <Form>
                    <Picker
                    mode="dropdown"
                    placeholder="Pattern"
                    placeholderStyle={{ color: "#2874F0" }}
                    note={false}
                    selectedValue={this.state.selected}
                    onValueChange={this.onValueChangePattern.bind(this)}
                    >
                    <Picker.Item label="Yes" value="true" />
                    <Picker.Item label="No" value="false" />
                    </Picker>
                </Form>
                </ListItem>
            </List>
            </Content>
            <View style={styles.buttonContainer}>
                <Button 
                    onPress={() => this.props.navigation.navigate('Home')}
                    title="Save"
                    color="#FFFFFF"
                />
            </View>
        </View>
        );
      }
}