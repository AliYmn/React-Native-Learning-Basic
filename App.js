import React from 'react';
import { AppLoading } from 'expo';
import { Container, Header, Content, Card, CardItem, Text, Body, Button } from "native-base";
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import allReducers from './index.js';
const store = createStore(allReducers);

import Counter from './counter.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Provider store={store}>
        <Counter />
      </Provider>
    );
  }
}