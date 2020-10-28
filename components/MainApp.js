import React from "react";
import { Container, Content, Footer, FooterTab, Button, Icon, Text, Badge } from 'native-base';
import { StyleSheet, View} from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Incident from "./Incident";
import Settings from "./Settings";
import Cases from "./Cases";
import Drawer from "./DrawerContent"



const Tabs = createBottomTabNavigator();
// const Home = createStackNavigator()
// const Incident = createStackNavigator()

function Main() {
    return (
        <Tabs.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Home') {
                iconName = focused
                  ? 'home'
                  : 'home';
              } else if (route.name === 'Incident') {

                iconName = focused ? 'plus-square' : 'plus-square';

              }else if (route.name === 'Cases') {

                  iconName = focused ? 'list' : 'list';

              }else if (route.name === 'Settings') {

                  iconName = focused ? 'cog' : 'cog'

              }
  
              // You can return any component that you like here!
              return (
                      <Icon name={iconName} type="FontAwesome" size={size} color={color} />
              );
            },
          })}
          tabBarOptions={{
            activeTintColor: '#1AA08A',
            inactiveTintColor: '#AC9D9D',
          }}>
            <Tabs.Screen name="Home" component={Home}/>
            <Tabs.Screen name="Incident" component={Incident}/>
            <Tabs.Screen name="Cases" component={Cases}/>
            <Tabs.Screen name="Settings" component={Settings}/>

        </Tabs.Navigator>
    )
}




export default Main

// export default () => {
//     <NavigationContainer>
//         <Tabs.Navigator
//         screenOptions={({ route }) => ({
//             tabBarIcon: ({ focused, color, size }) => {
//               let iconName;
  
//               if (route.name === 'Home') {
//                 iconName = focused
//                   ? 'ios-information-circle'
//                   : 'ios-information-circle-outline';
//               } else if (route.name === 'Settings') {
//                 iconName = focused ? 'ios-list-box' : 'ios-list';
//               }
  
//               // You can return any component that you like here!
//               return <Ionicons name={iconName} size={size} color={color} />;
//             },
//           })}
//           tabBarOptions={{
//             activeTintColor: 'tomato',
//             inactiveTintColor: 'gray',
//           }}>
//             <Tabs.Screen name="Home" component={Home}></Tabs.Screen>
//             <Tabs.Screen name="Incident" component={Incident}></Tabs.Screen>
//         </Tabs.Navigator>
//     </NavigationContainer>
//         }



// function Main({}) {
//     return(


        // <Container style={{backgroundColor: "#F0EFEF", flex: 1, justifyContent: "center"}}>
        //         {/* <Header Title="this is it"/> */}
        //     <Content style={{marginVertical: 200}}>
                

        //         {/* <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-evenly", alignItems: "center"}}>
        //             <Button vertical style={{backgroundColor: "white", padding: 40, margin: 10}}>
        //                 <Icon name="home" type="FontAwesome" style={{color: "#1AA08A", fontSize: 50, padding: 10}}/>
        //                 <Text style={styles.iconText}>Home</Text>
        //             </Button>
        //             <Button vertical style={{backgroundColor: "white", padding: 40,margin: 10}}
        //             onPress={() => navigation.navigate("Incident")}>
        //                 <Icon name="plus-square" type="FontAwesome" style={{color: "#1AA08A", fontSize: 50, padding: 10}}/>
        //                 <Text style={styles.iconText}>Incident</Text>
        //             </Button>
        //             <Button vertical style={{backgroundColor: "white", padding: 40, margin: 10}}>
        //                 <Icon active name="list" type="FontAwesome" style={{color: "#1AA08A", fontSize: 50, padding: 10}}/>
        //                 <Text style={styles.iconText}>Cases</Text>
        //             </Button>
        //             <Button vertical style={{backgroundColor: "white", padding: 40, margin: 10}}>
        //                 <Icon name="cog" type="FontAwesome" style={{color: "#1AA08A", fontSize: 50, padding: 10}}/>
        //                 <Text style={styles.iconText}>Settings</Text>
        //             </Button>
        //         </View> */}
        //     </Content>
        //     <Footer style={{ shadowRadius: 20,
        //         shadowOpacity: 0.2, backgroundColor: "white"}}>
        //         <FooterTab >
        //             <Button active vertical>
        //                 <Icon name="home" type="FontAwesome" style={{color: "#1AA08A"}}/>
        //                 <Text style={styles.iconText}>Home</Text>
        //             </Button>
        //             <Button vertical
        //             onPress={() => navigation.navigate("Incident")}>
        //                 <Icon name="plus-square" type="FontAwesome" style={styles.icon}/>
        //                 <Text>Incident</Text>
        //             </Button>
        //             <Button badge vertical>
        //                 <Badge style={{backgroundColor: "#1AA08A"}}><Text>51</Text></Badge>
        //                 <Icon active name="list" type="FontAwesome" style={styles.icon}/>
        //                 <Text>Cases</Text>
        //             </Button>
        //             <Button vertical>
        //                 <Icon name="cog" type="FontAwesome" style={styles.icon}/>
        //                 <Text>Settings</Text>
        //             </Button>
        //         </FooterTab>
        //     </Footer>
        // </Container>
//     )
// }


// const styles = StyleSheet.create({
//     icon: {
//         color: "#B8AFAF"
//     },

//     iconText: {
//         color: "#AC9D9D"
//     }
// })

// export default Main;