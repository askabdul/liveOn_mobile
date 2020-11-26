import React from "react"
import { Container, Header, Content, List, ListItem, Icon, Button, Body, Title } from 'native-base';


import { View, Text, Image } from "react-native"

export default class Signs extends React.Component {
    render() {
        return (
          <Container style={{flex: 1}}>
            <Header style={{flexDirection: 'row', }}>
              <Icon
                name="arrow-left"
                type="FontAwesome"
                style={{padding: 20, fontSize: 18, color: "#fff"}}
                onPress={() => this.props.navigation.goBack()}
              />
              <Body>
                <Title style={{color: '#2DC2A9', fontSize: 22}}>
                  Road Signs and Meanings
                </Title>
              </Body>
            </Header>
            <Content>
              <List>
                <ListItem style={{justifyContent: "space-evenly"}}>
                <Image
                    source={require('./../images/nouturn.webp')}
                    resizeMode="contain"
                    style={{width: 100, height: 100}}
                />
                  <Text style={{fontSize: 20, fontWeight: "bold"}}>No U-turn</Text>
                </ListItem>
                <ListItem style={{justifyContent: "space-evenly"}}>
                <Image
                    source={require('./../images/noleft.gif')}
                    resizeMode="contain"
                    style={{width: 100, height: 100}}
                />
                  <Text style={{fontSize: 20, fontWeight: "bold"}}>No Left-turn</Text>
                </ListItem>
                <ListItem style={{justifyContent: "space-evenly"}}>
                <Image
                    source={require('./../images/noright.png')}
                    resizeMode="contain"
                    style={{width: 100, height: 100}}
                />
                  <Text style={{fontSize: 20, fontWeight: "bold"}}>No Right-turn</Text>
                </ListItem>
                <ListItem style={{justifyContent: "space-evenly"}}>
                <Image
                    source={require('./../images/nopark.png')}
                    resizeMode="contain"
                    style={{width: 100, height: 100}}
                />
                  <Text style={{fontSize: 20, fontWeight: "bold"}}>No Parking</Text>
                </ListItem>
              </List>
            </Content>
          </Container>
        );
    }
}