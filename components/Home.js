import React from "react";
import { Container, Content, Footer, FooterTab, Button, Icon, Text, Badge } from 'native-base';
import { StyleSheet, View} from "react-native";


function Home({navigation}) {
<<<<<<< HEAD
    return (
      <Container
        style={{backgroundColor: '#F0EFEF', flex: 1, justifyContent: 'center'}}>
        {/* <Header Title="this is it"/> */}
        {/* <Content style={{marginVertical: 200}}> */}
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
          <Button
            vertical
            style={{backgroundColor: 'white', padding: 40, margin: 10}}>
            <Icon
              name="home"
              type="FontAwesome"
              style={{color: '#1AA08A', fontSize: 50, padding: 10}}
            />
            <Text style={styles.iconText}>Home</Text>
          </Button>
          <Button
            vertical
            style={{backgroundColor: 'white', padding: 40, margin: 10}}
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
            style={{backgroundColor: 'white', padding: 40, margin: 10}}>
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
            style={{backgroundColor: 'white', padding: 40, margin: 10}}>
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
=======
    return(
        <Container style={{backgroundColor: "#F0EFEF", flex: 1, justifyContent: "center"}}>
                {/* <Header Title="this is it"/> */}
            {/* <Content style={{marginVertical: 200}}> */}
                <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-evenly", alignItems: "center"}}>
                    <Button vertical style={{backgroundColor: "white", padding: 20, margin: 10}}>
                        <Icon name="home" type="FontAwesome" style={{color: "#1AA08A", fontSize: 50}}/>
                        <Text style={styles.iconText}>Home</Text>
                    </Button>
                    <Button vertical style={{backgroundColor: "white", padding: 20,margin: 10}}
                    onPress={() => navigation.navigate("Incident")}>
                        <Icon name="plus-square" type="FontAwesome" style={{color: "#1AA08A", fontSize: 50}}/>
                        <Text style={styles.iconText}>Incident</Text>
                    </Button>
                    <Button vertical style={{backgroundColor: "white", padding: 20, margin: 10}}>
                        <Icon active name="list" type="FontAwesome" style={{color: "#1AA08A", fontSize: 50}}/>
                        <Text style={styles.iconText}>Cases</Text>
                    </Button>
                    <Button vertical style={{backgroundColor: "white", padding: 20, margin: 10}}>
                        <Icon name="cog" type="FontAwesome" style={{color: "#1AA08A", fontSize: 50}}/>
                        <Text style={styles.iconText}>Settings</Text>
                    </Button>
                </View>
            {/* </Content> */}
            {/* <Footer style={{ shadowRadius: 20,
                shadowOpacity: 0.2, backgroundColor: "white"}}>
                <FooterTab >
                    <Button active vertical>
                        <Icon name="home" type="FontAwesome" style={{color: "#1AA08A"}}/>
                        <Text style={styles.iconText}>Home</Text>
                    </Button>
                    <Button vertical
                    onPress={() => navigation.navigate("Incident")}>
                        <Icon name="plus-square" type="FontAwesome" style={styles.icon}/>
                        <Text>Incident</Text>
                    </Button>
                    <Button badge vertical>
                        <Badge style={{backgroundColor: "#1AA08A"}}><Text>51</Text></Badge>
                        <Icon active name="list" type="FontAwesome" style={styles.icon}/>
                        <Text>Cases</Text>
                    </Button>
                    <Button vertical>
                        <Icon name="cog" type="FontAwesome" style={styles.icon}/>
                        <Text>Settings</Text>
                    </Button>
                </FooterTab>
            </Footer> */}
        </Container>
    )
>>>>>>> ce90186ce3ea34ac6b9a65055012796cb79be904
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