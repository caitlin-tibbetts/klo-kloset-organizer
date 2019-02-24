import React, {Component} from 'react';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
     flex: 1,
     justifyContent: 'center',
     backgroundColor: '#FFFFFF'
    },
    buttonContainer: {
        marginRight: 30,
        marginLeft: 30,
        backgroundColor: '#EA8979',
        borderColor: '#FFFFFF',
        borderWidth: 20,
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        overflow: 'hidden',
        padding: 12,
        textAlign:'center',
        fontFamily: 'Avenir'
    },
    textContainer:{
        fontFamily: 'Avenir',
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 100
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
      capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        color: '#000',
        padding: 10,
        margin: 40
    }
  });