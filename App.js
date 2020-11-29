import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
navigator.geolocation = require('@react-native-community/geolocation');
import Login from './components/Login';
import Signup from './components/Signup';
import Verify from './components/Verify';
import Main from './components/MainApp';
import Splash from './components/Splash';
import { Root } from 'native-base';
// import Home from './components/Home';
// import Incident from './components/Incident';

const RootStack = createStackNavigator();

export default function App() {
  return (
    <Root>
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Splash">
        <RootStack.Screen
          name="Login"
          component={Login}
          options={{headerLeft: null,
            headerShown: false,
          }}
        />
        <RootStack.Screen
          name="Signup"
          component={Signup}
          options={{headerLeft: null}}
        />
        <RootStack.Screen name="Verify" component={Verify} />
        <RootStack.Screen
          name="MainApp"
          component={Main}
          options={{
            headerShown: false,
            headerLeft: null
          }}
        />
        <RootStack.Screen
          name="Splash"
          component={Splash}
          options={{
            headerShown: false,
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  </Root>
  );
}
