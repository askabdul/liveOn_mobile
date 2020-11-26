import React from "react";
import { Container, Content, Footer, FooterTab, Button, Icon, Badge } from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import { View, Text, StyleSheet, TouchableOpacity} from "react-native"
import MenuDrawer from 'react-native-side-drawer'
import services from "./../services"



export default class Settings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      User: null,
    };
  }

  componentDidMount = async () => {
    this.setState({
      User: JSON.parse(await AsyncStorage.getItem('User')),
    });
    // alert(JSON.stringify(this.state.User.token));
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
        <TouchableOpacity
          onPress={this.toggleOpen}
          style={{backgroundColor: '#1AA08A', padding: 10}}>
          <Text style={{color: '#fff', fontWeight: 'bold'}}>Close Drawer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection: 'row'}} onPress={this.logOut}>
          <Icon name="lock" type="FontAwesome" />
          <Text style={{marginHorizontal: 20, marginVertical: 8}}>SIGNOUT</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.toggleOpen}>
          <Text>Close</Text>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <MenuDrawer
          open={this.state.open}
          drawerContent={this.drawerContent()}
          drawerPercentage={60}
          animationTime={250}
          overlay={true}
          opacity={0.4}>
          <Button onPress={this.toggleOpen} style={styles.body}>
            <Icon name="bars" type="FontAwesome" />
          </Button>
        </MenuDrawer>
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
    justifyContent: 'space-between',
    alignItems: 'center',
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
