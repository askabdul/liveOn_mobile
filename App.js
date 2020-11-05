import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './components/Login';
import Signup from './components/Signup';
import Verify from './components/Verify';
import Main from './components/MainApp';
import Splash from './components/Splash';
// import Home from './components/Home';
// import Incident from './components/Incident';

const RootStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Splash">
        <RootStack.Screen
          name="Login"
          component={Login}
          options={{headerLeft: null}}
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
          }}
        />
        <RootStack.Screen
          name="Splash"
          component={Splash}
          options={{
            headerShown: false,
          }}
        />
        {/* <RootStack.Screen name="Home" component= {Home} />
        <RootStack.Screen name="Incident" component= {Incident} /> */}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
