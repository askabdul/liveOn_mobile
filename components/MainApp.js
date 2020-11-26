import React from 'react';
import { Icon } from 'native-base';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './Home';
import Incident from './Incident';
import Settings from './Settings';
import Cases from './Cases';
import DrawerContent from './DrawerContent';
import TrackInfo from './TrackInfo';
import Signs from './Signs'

const SettingsStack = createStackNavigator();
const CasesStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const HomeStack =createDrawerNavigator();


function SettingScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="Settings"
        component={Settings}
      />
      {/* <SettingsStack.Screen name="DrawerContent" component={DrawerContent} /> */}
    </SettingsStack.Navigator>
  );
}


function CasesStackScreen() {
  return (
    <CasesStack.Navigator initialRouteName="Cases">
      <CasesStack.Screen
        name=" Cases"
        component={Cases}
        options={{
          headerShown: false,
          headerLeft: null
        }}
      />
      <CasesStack.Screen name="Tracking" component={TrackInfo} />
    </CasesStack.Navigator>
  );
}



function Homedisplay() {
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Signs" component={Signs}/>
    </HomeStack.Navigator>
  )
}

function Draw() {
  return (
      <Drawer.Navigator >
        <Drawer.Screen name="Settings" component={SettingScreen} 
        options={{
          headerShown: false,
          headerLeft: null
        }}/>
        {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
      </Drawer.Navigator>
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
      <Tabs.Screen
      initialRouteName="Home" name="Home" component={Homedisplay} />
      <Tabs.Screen name="Incident" component={Incident} />
      <Tabs.Screen
        name="Cases"
        component={CasesStackScreen}
      />
      <Tabs.Screen
      initialRouteName="Settings"
        name="Settings"
        component={Draw}
      />
    </Tabs.Navigator>
  );
}

export default Main;
