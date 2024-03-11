/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { Provider } from 'react-redux';
import Screen from './Redux/Screen';
import { store } from './Redux/store';


function App(): React.JSX.Element {


  return (
    <Provider store={store}>
    <Screen/>
    </Provider>
  );
}



export default App;
