import React from 'react';
import {createStackNavigator} from 'react-navigation';
import MainCurrenciesScreen from '../modules/currencies/MainCurrenciesScreen';

const RootStack = createStackNavigator ({
    MainCurrencies: MainCurrenciesScreen,
  },
  {
    initialRouteName: 'MainCurrencies',
    headerMode: 'none'
  }
);

export default RootStack;