import React from "react";

import { TextInput, View, Text, TouchableOpacity, KeyboardAvoidingView} from "react-native";
import { Button, Toast } from "native-base"
import Loading from 'react-native-whc-loading';
import services from "./../services";
import LinearGradient from 'react-native-linear-gradient'

import AsyncStorage from "@react-native-community/async-storage"


export default class Register extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       firstname: "",
       lastname: "",
       email: "",
       password: "",
       phone: ""
    }
  }

  signUp = () => {
    if(this.state.firstname === ''){
			Toast.show({
                text: "First Name required",
                position: "bottom"
            })
		}else if(this.state.lastname === ''){
			Toast.show({
                text: "Last Name required",
                position: "bottom"
            })
		}else if(this.state.email === ''){
			Toast.show({
                text: "Email required",
                position: "bottom"
            })
		}else if( this.state.password === ''){
			Toast.show({
                text: "Password required",
                position: "bottom"
            })
		}else if(this.state.phone === ''){
			Toast.show({
                text: "Phone # required",
                position: "bottom"
            })
		} else {
        this.refs.loading.show()
        services.axios.post(services.endpoints.SIGNUP,{
				  firstname: this.state.firstname,
			  	lastname: this.state.lastname,
			  	password: this.state.password,
          email: this.state.email,
          phone: this.state.phone,
			}).then((res) => {
        if(res.data){
					this.refs.loading.close()
					AsyncStorage.setItem('User', JSON.stringify(res.data.data))
					AsyncStorage.setItem('isAuth', 'true')
          this.props.navigation.navigate('Verify')
          this.setState({
            firstname: '',
            lastname: '',
            password: '',
            email: '',
            phone: '',
          });
        }
      }).catch((err) => {
        if(err.response){
          Toast.show({
            text: err.response.data.error.message,
            position: "bottom"
        })
					console.log(err)
					this.refs.loading.close()
				}
      })
    }
  }

  
  
    render () {
      return (
        <KeyboardAvoidingView
          behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
          style={{
            backgroundColor: '#F0EFEF',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}>
  				<Loading ref="loading" backgroundColor='transparent' indicatorColor='white' />
          {/* <View>
            <Text style={{color: '#2DC2A9', fontSize: 32}}>REGISTER</Text>
          </View> */}
          <View>
            <TextInput
              onChangeText = {(firstname) => this.setState({firstname})}
              value = { this.state.firstname }
              placeholder="First Name"
              placeholderTextColor="#B7B9B9"
              style={{
                width: 320,
                height: 51,
                borderRadius: 8,
                backgroundColor: '#ffffff',
                marginBottom: 20,
                paddingLeft: 20,
              }}
            />
    
            <TextInput
            onChangeText = {(lastname) => this.setState({lastname})}
            value = { this.state.lastname }
              placeholder="Last Name"
              placeholderTextColor="#B7B9B9"
              style={{
                width: 320,
                height: 51,
                borderRadius: 8,
                backgroundColor: '#ffffff',
                marginBottom: 20,
                paddingLeft: 20,
              }}
            />
    
            <TextInput
              onChangeText = {(email) => this.setState({email})}
              value = { this.state.email }
              placeholder="Email"
              autoCapitalize='none'
              keyboardType={'email-address'}
              placeholderTextColor="#B7B9B9"
              style={{
                width: 320,
                height: 51,
                borderRadius: 8,
                backgroundColor: '#ffffff',
                marginBottom: 20,
                paddingLeft: 20,
              }}
            />
    
            <TextInput
              onChangeText = {(password) => this.setState({password})}
              value = { this.state.password }
              placeholder="Password"
              placeholderTextColor="#B7B9B9"
              style={{
                width: 320,
                height: 51,
                borderRadius: 8,
                backgroundColor: '#ffffff',
                marginBottom: 20,
                paddingLeft: 20,
              }}
              secureTextEntry
            />
    
            <TextInput
              keyboardType={'phone-pad'}
              returnKeyType='done'
              autoCapitalize='none'
              autoCorrect={false}
              secureTextEntry={false}
              onChangeText = {(phone) => this.setState({phone})}
			        value = { this.state.phone }
              placeholder="Phone"
              placeholderTextColor="#B7B9B9"
              style={{
                width: 320,
                height: 51,
                borderRadius: 8,
                backgroundColor: '#ffffff',
                paddingLeft: 20,
              }}
            />
          </View>
          <View>
            <Button
              rounded
              light
              style={{
                width: 270,
                height: 50,
                backgroundColor: 'white',
                color: 'green',
              }}
              // onPress={() => this.props.navigation.navigate('Verify')}
              onPress={this.signUp}>
              <Text
                style={{
                  color: '#1AA08A',
                  fontSize: 18,
                  fontWeight: 'bold',
                  marginLeft: 90,
                }}>
                Register
              </Text>
            </Button>
            <View style={{marginBottom: 70}}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                <Text
                  style={{
                    color: '#8A8281',
                    paddingBottom: 10,
                    marginLeft: 100,
                    paddingTop: 20,
                  }}>
                  LOGIN
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      );
    }
}