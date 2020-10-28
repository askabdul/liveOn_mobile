import React from "react";

import { TextInput, View, Text, TouchableOpacity} from "react-native";
import { Button } from "native-base"


export default function Register({navigation}) {
  return (
    <View style={{backgroundColor: "#F0EFEF", flex: 1, alignItems: "center", justifyContent: "space-evenly"}}>
      <View>
        <Text style={{color: "#2DC2A9", fontSize: 32}}>REGISTER</Text>
      </View>
      <View>
        <TextInput placeholder="First Name" placeholderTextColor="#B7B9B9"
        style={{width: 320, height: 51, borderRadius: 8, backgroundColor: "#ffffff", marginBottom: 33, paddingLeft: 20 }}/>

        <TextInput placeholder="Last Name" placeholderTextColor="#B7B9B9"
        style={{width: 320, height: 51, borderRadius: 8, backgroundColor: "#ffffff", marginBottom: 33, paddingLeft: 20 }}/>

        <TextInput placeholder="Email" placeholderTextColor="#B7B9B9"
        style={{width: 320, height: 51, borderRadius: 8, backgroundColor: "#ffffff", marginBottom: 33, paddingLeft: 20 }}/>

        <TextInput placeholder="Password" placeholderTextColor="#B7B9B9"
        style={{width: 320, height: 51, borderRadius: 8, backgroundColor: "#ffffff", marginBottom: 33, paddingLeft: 20}} secureTextEntry/>

        <TextInput placeholder="Phone" placeholderTextColor="#B7B9B9"
        style={{width: 320, height: 51, borderRadius: 8, backgroundColor: "#ffffff",  paddingLeft: 20 }}/>
      </View>

      <View>
        <Button rounded light style={{width: 270, height: 55,backgroundColor: "white", color: "green"}}
        onPress={() => navigation.navigate("Verify")}>
                <Text style={{color: "#1AA08A", fontSize: 20, fontWeight: "bold", marginLeft: 90}}>Register</Text>
        </Button>
        <View style={{marginBottom: 70}}>
        <TouchableOpacity 
        onPress={() => navigation.navigate("Login")}>
          <Text style={{color: "#8A8281", paddingBottom: 10, marginLeft: 100, paddingTop: 20}}>LOGIN</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}