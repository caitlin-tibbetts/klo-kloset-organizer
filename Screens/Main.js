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

export default class Main extends React.Component 
{
    render()
    {
        return (
            <View style={styles.container}>
                <Text style={styles.textContainer}>welcome to klo</Text>
                    <View style={styles.buttonContainer}>
                        <Button 
                        onPress={() => this.props.navigation.navigate('Generate')}
                        title="Generate"
                        color="#FFFFFF"
                        />
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button 
                        onPress={() => this.props.navigation.navigate('OpenCam')}
                        title="Camera"
                        color="#FFFFFF"
                        />
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button 
                        onPress={() => this.props.navigation.navigate('Log')}
                        title="Log"
                        color="#FFFFFF"
                        />
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button 
                        onPress={() => this.props.navigation.navigate('Browse')}
                        title="Browser"
                        color="#FFFFFF"
                        />
                    </View>
          </View>
        );
        
    }

}
