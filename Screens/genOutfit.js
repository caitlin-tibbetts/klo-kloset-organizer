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

export default class genOutfit extends React.Component 
{
    render()
    {
        return(
            <View style={styles.container}>
                <Text>A generation of clothes that match with each other will be randomized and presented here.</Text>
            </View>
        )
    }
}
