// import React from "react";

// import { Button, View } from 'react-native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';
// import Main from "./MainApp"
// import Verify from "./Verify"
// const Drawer = createDrawerNavigator();


// export default function DrawerContent() {
//     return (
//             <Drawer.Screen name="Screen" component={Verify} />
//       );
//     }
    
   
import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native'
import MenuDrawer from 'react-native-side-drawer'
 
export default class Example extends React.Component {

  // static navigationOptions = function (props) {
  //   return {
  //     title: "jgjgjg",
  //     headerLeft: <Button onPress={() => this.props.navigation.navigate(this.toggleOpen)} title="hghfgfg"/>
  //   }
  // }
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
 
  toggleOpen = () => {
    this.setState({ open: !this.state.open });
  };
 
  drawerContent = () => {
    return (
      <TouchableOpacity onPress={this.toggleOpen} style={styles.animatedBox}>
        <Text>Close</Text>
      </TouchableOpacity>
    );
  };
 
  render() {
    return (
      <View style={styles.container}>
        <MenuDrawer 
          open={this.state.open} 
          drawerContent={this.drawerContent()}
          drawerPercentage={60}
          animationTime={250}
          overlay={true}
          opacity={0.4}
        >
          <TouchableOpacity onPress={this.toggleOpen} style={styles.body}>
            <Text>Open</Text>
          </TouchableOpacity>
        </MenuDrawer>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    // marginTop: 30,
    zIndex: 0
  },
  animatedBox: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 10
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray'
  }
})
