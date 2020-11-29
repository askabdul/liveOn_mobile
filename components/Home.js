import React from "react";
import { Container, Content, Footer, FooterTab, Button, Icon, Text, Badge } from 'native-base';
import { StyleSheet, View} from "react-native";


function Home({navigation}) {
    return (
      <Container
        style={{backgroundColor: '#F0EFEF', flex: 1, justifyContent: 'center'}}>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
          <Button
            vertical
            style={{backgroundColor: 'white', padding: 20, margin: 10}}
            onPress={() => navigation.navigate('Signs')}
            >
            <Icon
              name="book"
              type="FontAwesome"
              style={{color: '#1AA08A', fontSize: 50, padding: 10}}
            />
            <Text style={styles.iconText}>Road Signs</Text>
          </Button>
          <Button
            vertical
            style={{backgroundColor: 'white', padding: 30, margin: 10}}
            onPress={() => navigation.navigate('Incident')}>
            <Icon
              name="plus-square"
              type="FontAwesome"
              style={{color: '#1AA08A', fontSize: 50, padding: 10}}
            />
            <Text style={styles.iconText}>Incident</Text>
          </Button>
          <Button
            vertical
            style={{backgroundColor: 'white', padding: 30, margin: 10}}
            onPress={() => navigation.navigate('Cases')}>
            <Icon
              active
              name="list"
              type="FontAwesome"
              style={{color: '#1AA08A', fontSize: 50, padding: 10}}
            />
            <Text style={styles.iconText}>Cases</Text>
          </Button>
          <Button
            vertical
            style={{backgroundColor: 'white', padding: 30, margin: 10}}
            onPress={() => navigation.navigate('Settings')}>
            <Icon
              name="cog"
              type="FontAwesome"
              style={{color: '#1AA08A', fontSize: 50, padding: 10}}
            />
            <Text style={styles.iconText}>Settings</Text>
          </Button>
        </View>
      </Container>
    );
}


const styles = StyleSheet.create({
    icon: {
        color: "#B8AFAF"
    },

    iconText: {
        color: "#AC9D9D"
    }
})

export default Home;