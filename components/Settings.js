import React from 'react';
import {
  Button,
  Icon
} from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import ImagePicker from 'react-native-image-picker';
import UserAvatar from 'react-native-user-avatar';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import MenuDrawer from 'react-native-side-drawer';
import services from './../services';

export default class Settings extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
      User: '',
    };
  }

  componentDidMount = async () => {
    this.setState({
      User: JSON.parse(await AsyncStorage.getItem('User')),
    });
    alert(JSON.stringify(this.state.User));
  };

  logOut = async (tokenId) => {
    tokenId = this.state.User.token;
    await services.axios
      .post(services.endpoints.LOG_OUT + `?access_token=${tokenId}`)
      .then();
    await AsyncStorage.removeItem('User');
    await AsyncStorage.setItem('isAuth', 'false');
    await this.props.navigation.navigate('Login');
  };

  toggleOpen = () => {
    this.setState({open: !this.state.open});
  };

  drawerContent = () => {
    return (
      <View style={styles.animatedBox}>
        <View style={{flexDirection: 'row', marginLeft: 20, marginBottom: 30}}>
          <UserAvatar
            imageStyle={{
              width: 120,
              height: 120,
              borderRadius: 100
            }}
            size={100}
            name="Avishay Bar"
            src="https://dummyimage.com/100x100/000/fff"
            // style={{
            //   borderRadius: 0,
            //   shadowRadius: 10,
            //   shadowOpacity: 0.2,
            // }}
          />
          <Text
            style={{marginVertical: 50, marginHorizontal: 20, fontSize: 18}}>
            {this.state.User.firstname} {this.state.User.lastname}
          </Text>
        </View>
        <View style={{backgroundColor: "#8A8484", height: 1, width: '100%', marginBottom: 90}}/>
        <View
          style={{
            alignItems: 'flex-start',
            marginBottom: 50,
            marginHorizontal: 30,

          }}>
          <TouchableOpacity style={{flexDirection: 'row', marginBottom: 20}}>
            <Icon name="user" type="FontAwesome" style={{color: '#8A8484'}} />
            <Text
              style={{
                marginHorizontal: 20,
                marginVertical: 8,
                color: '#8A8484',
              }}>
              PROFILE
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{flexDirection: 'row', marginBottom: 20}}
            onPress={this.logOut}>
            <Icon name="sign-out" type="FontAwesome" style={{color: '#8A8484'}} />
            <Text
              style={{
                marginHorizontal: 20,
                marginVertical: 8,
                color: '#8A8484',
              }}>
              SIGNOUT
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flexDirection: 'row', marginBottom: 20}}
          onPress={() => this.props.navigation.navigate('Cases')}>
            <Icon name="list" type="FontAwesome" style={{color: '#8A8484'}} />
            <Text
              style={{
                marginHorizontal: 20,
                marginVertical: 8,
                color: '#8A8484',
              }}>
              CASES
            </Text>
          </TouchableOpacity>
        </View>
        {/* <TouchableOpacity
          onPress={this.toggleOpen}
          style={{
            color: '#1AA08A',
            padding: 10,
            marginLeft: 130,
            marginTop: 150,
          }}>
          <Text style={{color: '#fff', fontWeight: 'bold'}}>Close Drawer</Text>
          <Icon
            name="times"
            type="FontAwesome"
            style={{color: '#8A8484', fontSize: 50}}
          />
        </TouchableOpacity> */}
      </View>
    );
  };

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <MenuDrawer
          open={this.state.open}
          drawerContent={this.drawerContent()}
          drawerPercentage={80}
          animationTime={250}
          overlay={false}
          // opacity={0.9}
          >
          <Button onPress={this.toggleOpen} style={styles.body}>
            <Icon name="bars" type="FontAwesome" />
          </Button>
        </MenuDrawer>
        {/* <View>
          <Text>Gone are days when  wkhk hk lashgklahfgklhfk ghskfhgk hfgk slkdfh</Text>
        </View> */}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  icon: {
    color: '#B8AFAF',
  },

  iconText: {
    color: '#AC9D9D',
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: 30,
    zIndex: 0,
  },
  animatedBox: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'baseline',
    backgroundColor: '#ffffff',
    padding: 10,
  },
  body: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#1AA08A',
    margin: 10,
  },
});
