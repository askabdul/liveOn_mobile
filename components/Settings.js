import React from "react";
import { Container, Content, Footer, FooterTab, Button, Icon, Badge } from 'native-base';

import { View, Text, StyleSheet } from "react-native"

export default function Settings() {
    return(
        <Container style={{backgroundColor: "#F0EFEF", flex: 1, justifyContent: "center"}}>
                {/* <Header Title="this is it"/> */}
            {/* <Content style={{marginVertical: 200}}> */}
                <View style={{justifyContent: "center", paddingLeft: 100}}>
                    <Button vertical style={{backgroundColor: "white", padding: 40, margin: 10}}>
                        <Icon name="user" type="FontAwesome" style={{color: "#1AA08A", fontSize: 50, padding: 10}}/>
                        <Text style={styles.iconText}>Profile</Text>
                    </Button>
                    <Button vertical style={{backgroundColor: "white", padding: 40,margin: 10}}
                    onPress={() => navigation.navigate("Incident")}>
                        <Icon name="plus-square" type="FontAwesome" style={{color: "#1AA08A", fontSize: 50, padding: 10}}/>
                        <Text style={styles.iconText}>Cases</Text>
                    </Button>
                    <Button vertical style={{backgroundColor: "white", padding: 40, margin: 10}}>
                        <Icon active name="list" type="FontAwesome" style={{color: "#1AA08A", fontSize: 50, padding: 10}}/>
                        <Text style={styles.iconText}>logout</Text>
                    </Button>
                 
                </View>
           
        </Container>
    )
}
const styles = StyleSheet.create({
    icon: {
        color: "#B8AFAF"
    },

    iconText: {
        color: "#AC9D9D"
    }
})
