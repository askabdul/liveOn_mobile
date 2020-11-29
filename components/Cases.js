import React from 'react';
import {View} from 'react-native';
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Text,
  Icon,
  Button,
  Body,
  Title,
} from 'native-base';
export default function Cases({navigation}) {
  return (
    <Container>
      <Header>
        <Body>
          <Title style={{color: '#2DC2A9', fontSize: 22}}>Reported Cases</Title>
        </Body>
      </Header>
      <Content>
        <List>
          <ListItem
            style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text>Accident at Circle</Text>
            <View>
              <Button
                onPress={() => navigation.navigate('Tracking')}
                rounded
                light
                style={{width: 81, height: 30, border: 'red'}}>
                <Text style={{color: '#fff', textAlign: 'center'}}>Track</Text>
              </Button>
            </View>
            <Icon type="FontAwesome" name="angle-right" />
          </ListItem>
          <ListItem
            style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text>Accident at Circle</Text>
            <View>
              <Button
                rounded
                light
                style={{width: 81, height: 30, borderColor: 'red'}}>
                <Text style={{color: '#fff', textAlign: 'center'}}>Track</Text>
              </Button>
            </View>
            <Icon type="FontAwesome" name="angle-right" />
          </ListItem>
          <ListItem
            style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text>Accident at Dansoman</Text>
            <View>
              <Button
                rounded
                light
                style={{width: 81, height: 30, borderColor: 'red'}}>
                <Text style={{color: '#fff', textAlign: 'center'}}>Track</Text>
              </Button>
            </View>
            <Icon type="FontAwesome" name="angle-right" />
          </ListItem>
          <ListItem
            style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text>Accident at Dansoman</Text>
            <View>
              <Button
                rounded
                light
                style={{width: 81, height: 30, borderColor: 'red'}}>
                <Text style={{color: '#fff', textAlign: 'center'}}>Track</Text>
              </Button>
            </View>
            <Icon type="FontAwesome" name="angle-right" />
          </ListItem>
          <ListItem
            style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text>Accident at Dansoman</Text>
            <View>
              <Button
                rounded
                light
                style={{width: 81, height: 30, borderColor: 'red'}}>
                <Text style={{color: '#fff', textAlign: 'center'}}>Track</Text>
              </Button>
            </View>
            <Icon type="FontAwesome" name="angle-right" />
          </ListItem>
        </List>
      </Content>
    </Container>
  );
}
