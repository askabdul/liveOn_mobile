import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer"
import Cases from "./Cases";
import MainApp from "./MainApp"


const AppDrawer = createDrawerNavigator()
const AppDrawerScreen = () => (
  <AppDrawer.Navigator>
    <AppDrawer.Screen name="Cases" component={Cases} />
  </AppDrawer.Navigator>
)

export default <AppDrawerScreen />



// import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity} from "react-native"
// import { Icons } from "native-base"
// import {DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

// export default class DrawerContent extends React.Component {
//     render(){
//         return (
//             <View style={styles.container}>
//                 <SafeAreaView style={{flex: 1}}>
//                     <TouchableOpacity style={{alignItems: "flex-end", margin: 16}}
//                     onPress={this.props.navigation.openDrawer}>
//                         <Icons type="FontAwesome" name="bars" size={24} color="#16192"/>
//                     </TouchableOpacity>
//                     <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
//                         <Text style={styles.text}>
//                             {this.props.name} Screen
//                         </Text>
//                     </View>
//                 </SafeAreaView>
//             </View>
//         )
//     }
// }


// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#ffffff"
//     },

//     text: {
//         color: "skyblue",
//         fontSize: 20,
//         fontWeight: "500"
//     }
// })

