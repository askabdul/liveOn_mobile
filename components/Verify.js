import React from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { Icon, Button } from 'native-base';


function Verify({navigation}) {

    return (
        <View style={{flex: 1, backgroundColor: "#ffffff", justifyContent: "center", alignItems: "center"}}>
            {/* <View style={{alignItems: "center"}}>
                <Icon name='lock' type="FontAwesome" 
                style={{fontSize: 70, marginBottom: 60}}/>
                <Text style={{textAlign: "center", paddingHorizontal: 15}}>
                    ENTER THE PASSCODE IN THE MESSAGE TO CONFIRM YOUR ACCOUNT
                </Text>
            </View> */}
            <View style={{justifyContent: "space-evenly", flexDirection: "row"}}>
                <TextInput maxLength={1}
                style={styles.input} />
                <TextInput maxLength={1} 
                    style={styles.input}/>
                <TextInput maxLength={1}
                    style={styles.input}/>
                <TextInput maxLength={1} 
                    style={styles.input} />
            </View>
            <View style={{marginVertical: 50}}>
                <Button bordered light style={{borderRadius: 50, width: 270,height:50, marginBottom: 10,alignItems: "center" }}
                    onPress={() => navigation.navigate("MainApp")}>
                    <Text style={{marginLeft: 95, color: "#1AA08A", fontSize: 22}}
                    >Confirm
                    {/* <Icon name='arrow-right' type="FontAwesome" /> */}
                    </Text>
                </Button>
                <TouchableOpacity style={{alignSelf: "center"}}>
                    <Text style={{color: "#AC9D9D"}}>Generate new code</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    input: {
        fontWeight: "600", 
        padding: 10,
        marginHorizontal: 10, 
        height: 55, 
        alignSelf:"center", 
        width: "15%", 
        borderRadius: 8, 
        borderWidth: 0.5, 
        // borderBottomWidth: 2, 
        textAlign:"center",
        fontSize: 20
    }
})

export default  Verify