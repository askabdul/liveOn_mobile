import React from "react";
import { TextInput, View, Text, TouchableOpacity, StyleSheet} from "react-native";
import { Button, Toast } from "native-base";
import Loading from 'react-native-whc-loading';
import services from "./../services";

import AsyncStorage from "@react-native-community/async-storage"





export default class Login extends React.Component{
  constructor(props) {
    super(props)
  
    this.state = {
      email: '',
			password: ''
    }
  }

  signIn = async() => {
		if(this.state.email === '' ){
			Toast.show({
				text: "Email required",
				position: "bottom"
			})
		}else if(this.state.password === ''){
			Toast.show({
				text: "Password required",
				position: "bottom"
			})
		}else {
			this.refs.loading.show()
			services.axios.post(services.endpoints.LOGIN,{
				email: this.state.email,
				password:  this.state.password
			})
			.then((res) => {
				if(res){
					console.log(res)
					this.refs.loading.close()
					AsyncStorage.setItem('User', JSON.stringify(res.data.data))
					AsyncStorage.setItem('isAuth', 'true')
					services.axios.defaults.headers.common['Authorization'] = res.data.data.id
					this.props.navigation.navigate('MainApp')
				}
			}).catch((err) => {
				this.refs.loading.close()
				if(err.response){
					this.refs.loading.close()
					Toast.show({
		                text: err.response.data.error.message,
		                position: "bottom",
		                type: 'danger',
		                textStyle: {
    						    textAlign: 'center'
  						}
		            })
					console.log(err.response.data.error.message)
					console.log(err)
				}
			})
		}
	}
  
  render(){
    return (
      <View style={styles.container}>
  				<Loading ref="loading" backgroundColor='transparent' indicatorColor='white' />
        <View>
          <Text style={{color: '#2DC2A9', fontSize: 32}}>WELCOME !</Text>
        </View>
        <View>
          <TextInput
            placeholder="Email/Phone"
            placeholderTextColor="#B7B9B9"
            keyboardType={'email-address'}
            returnKeyType='done'
            autoCapitalize='none'
            onChangeText = {(email) => this.setState({email})}
            value = { this.state.email }
            style={{
              width: 320,
              height: 51,
              borderRadius: 8,
              backgroundColor: '#ffffff',
              marginBottom: 30,
              paddingLeft: 20,
            }}
          />
  
          <TextInput
            placeholder="Password"
            placeholderTextColor="#B7B9B9"
            onChangeText = {(password) => this.setState({password})}
			      value = { this.state.password }
            style={{
              width: 320,
              height: 51,
              borderRadius: 8,
              backgroundColor: '#ffffff',
              paddingLeft: 20,
            }}
            secureTextEntry
          />
        </View>
  
        <View style={{marginBottom: 100}}>
          <Button
            rounded
            light
            style={{
              width: 270,
              height: 55,
              backgroundColor: 'white',
              color: 'green',
            }}
            // onPress={() => this.props.navigation.navigate('MainApp')}
            onPress={this.signIn }>
            <Text
              style={{
                color: '#1AA08A',
                fontSize: 20,
                fontWeight: 'bold',
                marginLeft: 100,
              }}>
              Login
            </Text>
          </Button>
          <View style={{marginBottom: 70}}>
            <TouchableOpacity>
              <Text
                style={{
                  color: '#8A8281',
                  paddingBottom: 10,
                  marginLeft: 90,
                  paddingTop: 20,
                }}
                onPress={() => this.props.navigation.navigate('Signup')}>
                REGISTER
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{color: '#8A8281', textAlign: 'center'}}>
                FORGOT PASSWORD ?
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0EFEF",
    alignItems: "center", 
    justifyContent: "space-evenly"
  }
})

