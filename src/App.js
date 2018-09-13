//@flow

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import MainCurrenciesScreen from "./modules/currencies/MainCurrenciesScreen";
import RootStack from './navigation/Navigation';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings(['Require cycle:']);

type Props = {};
const store = configureStore({});

export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    );
  }
}

