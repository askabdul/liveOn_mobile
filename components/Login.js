import React from "react";
import { TextInput, View, Text, TouchableOpacity, StyleSheet} from "react-native";
import { Button } from "native-base"


export default function Login({navigation}) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={{color: "#2DC2A9", fontSize: 32}}>WELCOME !</Text>
      </View>
      <View>
        <TextInput placeholder="Email/Phone" placeholderTextColor="#B7B9B9"
        style={{width: 320, height: 51, borderRadius: 8, backgroundColor: "#ffffff", marginBottom: 33, paddingLeft: 20 }}/>

        <TextInput placeholder="Password" placeholderTextColor="#B7B9B9"
        style={{width: 320, height: 51, borderRadius: 8, backgroundColor: "#ffffff", paddingLeft: 20}} secureTextEntry/>
      </View>

      <View style={{marginBottom: 100}}>
        <Button rounded light style={{width: 270, height: 55,backgroundColor: "white", color: "green"}}
        onPress={() => navigation.navigate("MainApp")}>
                <Text style={{color: "#1AA08A", fontSize: 20, fontWeight: "bold", marginLeft: 100}}>Login</Text>
        </Button>
      <View style={{marginBottom: 70}}>
        <TouchableOpacity>
          <Text style={{color: "#8A8281", paddingBottom: 10, marginLeft: 90, paddingTop: 20}}
          onPress={() => navigation.navigate("Signup")}>REGISTER</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{color: "#8A8281", textAlign: "center"}}>FORGOT PASSWORD ?</Text>
        </TouchableOpacity>
      </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0EFEF",
    alignItems: "center", 
    justifyContent: "space-evenly"
  }
})

