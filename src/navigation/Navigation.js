import React from 'react';
import {createDrawerNavigator} from 'react-navigation';
import MainCurrenciesScreen from '../modules/currencies/MainCurrenciesScreen';
import MainScreen from '../modules/main/MainScreen';

const RootStack = createDrawerNavigator ({
    Main: {screen: MainScreen, navigationOptions:{title: 'Main'}},
    MainCurrencies: {screen: MainCurrenciesScreen, navigationOptions:{title: 'Currencies'}},
  },
  {
    initialRouteName: 'Main',
    headerMode: 'none'
  }
);

export default RootStack;