"use strict"
import React, {Component} from 'react';
import { StackNavigator } from 'react-navigation';
import {
    Platform, 
    ImageBackground, 
    Text, 
    View, 
    Button,
    Alert
} from 'react-native';
import styles from './Style'

export default class Search extends React.Component 
{
    render()
    {
        return(
            <View style={styles.container}>
                <Text>This is where the user's entire wardrobe will be sorted from A to Z, color, or clothing type.</Text>
            </View>
        )
    }
}
