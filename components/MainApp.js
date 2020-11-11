import React from 'react';
import {
  Container,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  Text,
  Badge,
} from 'native-base';
import {StyleSheet, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './Home';
import Incident from './Incident';
import Settings from './Settings';
import Cases from './Cases';
import DrawerContent from './DrawerContent';
import TrackInfo from './TrackInfo';

const SettingsStack = createStackNavigator();

function SettingScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="Settings"
        component={Settings}
        options={{headerLeft: null}}
      />
      <SettingsStack.Screen name="DrawerContent" component={DrawerContent} />
    </SettingsStack.Navigator>
  );
}

const CasesStack = createStackNavigator();

function CasesStackScreen() {
  return (
    <CasesStack.Navigator initialRouteName="Cases">
      <CasesStack.Screen
        name=" Cases"
        component={Cases}
        options={{headerLeft: null}}
      />
      <CasesStack.Screen name="Tracking" component={TrackInfo} />
    </CasesStack.Navigator>
  );
}

const Tabs = createBottomTabNavigator();

function Main() {
  return (
    <Tabs.Navigator
      screenOptions={({route}) => ({
         color : "red",
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Incident') {
            iconName = focused ? 'plus-square' : 'plus-square';
          } else if (route.name === 'Cases') {
            iconName = focused ? 'list' : 'list';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'cog' : 'cog';
          }

          // You can return any component that you like here!
          return (
            <>
              <Icon
                name={iconName}
                type="FontAwesome"
                size={size}
                color={color}
              />
            </>
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: '#1AA08A',
        inactiveTintColor: '#AC9D9D',
      }}>
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="Incident" component={Incident} />
      <Tabs.Screen
        name="Cases"
        component={CasesStackScreen}
        options={{headerLeft: null}}
      />
      <Tabs.Screen
        name="Settings"
        component={SettingScreen}
        options={{headerLeft: null}}
      />
    </Tabs.Navigator>
  );
}

export default Main;
