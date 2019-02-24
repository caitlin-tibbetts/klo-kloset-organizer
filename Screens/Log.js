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

export default class Log extends React.Component 
{
    render()
    {
        return(
            <View style={styles.container}>
                <Text>A log of outfits generated and worn throughout the week will be logged here.</Text>
            </View>
        )
    }
}
