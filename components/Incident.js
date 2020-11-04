import React from "react";
import { Container, Content, Footer, FooterTab, Button, Icon, Text, Badge } from 'native-base';
import { StyleSheet, View} from "react-native"
import UserAvatar from 'react-native-user-avatar';

function Incident({navigation}) {
    return (
      <View
        style={{
          backgroundColor: '#F0EFEF',
          flex: 1,
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>
        {/* <Header Title="this is it"/> */}
        <View>
          <UserAvatar
          imageStyle={{backgroundColor: "red", width: 300}}
            size={300}
            name="Avishay Bar"
            src="https://dummyimage.com/100x100/000/fff"
            // style={{
            //   borderRadius: 0.5,
            //   shadowRadius: 10,
            //   shadowOpacity: 0.2,
            // }}
          />
        </View>
        <View>
          <Button vertical style={{backgroundColor: 'white', margin: 10}}>
            <Icon
              name="camera"
              type="FontAwesome"
              style={{
                color: '#1AA08A',
                fontSize: 30,
                padding: 30,
                marginTop: 30,
              }}
            />
          </Button>
        </View>
        <View>
          <Button
            rounded
            light
            style={{
              width: 270,
              height: 55,
              backgroundColor: 'white',
              color: 'green',
            }}>
            <Text
              style={{
                color: '#1AA08A',
                fontSize: 20,
                fontWeight: 'bold',
                marginLeft: 80,
              }}>
              Proceed
            </Text>
          </Button>
        </View>
      </View>
    );
}


const styles = StyleSheet.create({
    icon: {
        color: "#B8AFAF"
    },

    iconText: {
        color: "#AC9D9D"
    }
})

export default Incident;