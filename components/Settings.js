import React from "react";
import { Container, Content, Footer, FooterTab, Button, Icon, Badge } from 'native-base';

import { View, Text, StyleSheet, TouchableOpacity} from "react-native"

export default function Settings({navigation}) {
    return (
        <View style={{flex:1, alignItems: "center", justifyContent: "center"}}>
        
            <TouchableOpacity
            onPress={() => navigation.navigate("DrawerContent")}>
                <Text>This display is for the settings page</Text>
            </TouchableOpacity>
        </View>
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
