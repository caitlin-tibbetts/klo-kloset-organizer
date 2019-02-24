'use strict'
import React, {Component} from 'react';
import { StackNavigator } from 'react-navigation';
import {
    Platform, 
    ImageBackground, 
    View, 
    Image,
    Button,
    Alert,
    AppRegistry,
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';
import {RNCamera} from 'react-native-camera'
import Imagepicker from 'react-native-image-picker';
import styles from './Style'

export default class openCam extends React.Component 
{
  render() {
    return (
<View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          permissionDialogTitle={'Permission to use camera'}
          permissionDialogMessage={'We need your permission to use your camera phone'}
          onGoogleVisionBarcodesDetected={({ barcodes }) => {
            console.log(barcodes);
          }}
        />
        <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
            <Text style={{ fontSize: 14 }}> SNAP </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  takePicture = async function() {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
    }
  };
}