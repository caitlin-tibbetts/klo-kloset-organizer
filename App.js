/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

 'use strict'

import React, {Component} from 'react';
import {
  Platform, 
  StyleSheet, 
  Text, 
  View, 
  Button,
  NavigatorIOS
} from 'react-native';
import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';
import Main from './Main';
import Search from './Search';
import Camera from './Camera';
import Log from './Log';
import genOutfit from './genOutfit';
import OpenCam from './openCam';


const MainNavigator = createStackNavigator({
  Home: {screen: Main},
  Browse: {screen: Search},
  OpenCam: {screen: OpenCam},
  Camera: {screen: Camera},
  Log: {screen: Log},
  Generate: {screen: genOutfit}
});

const App = createAppContainer(MainNavigator);

export default App;
