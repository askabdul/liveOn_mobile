import React from "react";
import { Button, Icon, Text, List, ListItem, Toast } from 'native-base';
import { StyleSheet, View, Modal, TouchableOpacity, TouchableHighlight, Dimensions} from "react-native"
import Geolocation from "@react-native-community/geolocation";
import UserAvatar from 'react-native-user-avatar';
import services from "./../services";
import ImagePicker from 'react-native-image-picker';
import Loading from 'react-native-whc-loading';
const { width, height } = Dimensions.get("window");
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = ASPECT_RATIO * LATITUDE_DELTA


class Incident extends React.Component {

  state = {
    photo: null,
    modalVisible: false,
    responseUnit: [],
    unitId: "",
    proceedBtn: false,
    initialRegion: {
      latitude: 0,
      longitude: 0,
      latitudeDelta: 0,
      longitudeDelta: 0
  },
    img: "",
  }

  componentDidMount = () => {
    Geolocation.getCurrentPosition(position => {
        const lat = parseFloat(position.coords.latitude)
        const lng = parseFloat(position.coords.longitude)
        // console.log(position);
       this.setState({
           initialRegion : {
               latitude: lat,
               longitude: lng,
               latitudeDelta: LATITUDE_DELTA,
               longitudeDelta: ASPECT_RATIO * LATITUDE_DELTA
           }
       })
      //  console.log(this.state);
       
    }, error => console.log(error),
    {enableHighAccuracy: true, timeout: 20000, maximumAge: 2000}
    );
    this.getResUnit
}

  checkToProceed = () => {
    if(this.state.photo == null) {
      Toast.show({
				text: "please take or pick photo",
				position: "bottom",
        type: "warning",
			})
    }
    else {
      this.setModalVisible(true);
      this.getResUnit()
    }
  }


  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  handleChoosePhoto = () => {
    const options = {
       title: 'Choose',
    // customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

    ImagePicker.showImagePicker(options, Response => {
      // console.log("response = ", Response.uri );

      let photo = { uri: Response.uri}
      let formdata = new FormData();

      formdata.append("file", {uri: photo.uri, name: 'photo.jpg', type: 'image/jpeg'})
      console.log(formdata);
      // services.axios.post(services.endpoints.POST_IMG, {
      //   file: formdata,
      //   headers: {
      //     'Content-Type': 'multipart/form-data',
      //   }
      // }).then((res) => {
      //   if(res.data) {
      //     console.log(res);
      //   }
      // }).catch((err) => {
      //   if(err) {
      //     console.log(err)
      //   }
      // })
     

      if(Response.uri) {
        this.setState({
          photo: Response,
          proceedBtn: true
        })
      this.refs.loading.close()
      }
    })
   
  }

  sendCase = () => {
    services.axios.post(services.endpoints.SEND_CASE, {
      location: {
        lat: this.state.initialRegion.latitude,
        lng: this.state.initialRegion.longitude
      },
      unitId: this.state.unitId
    }).then((res) => {
      if(res.data) {
      this.refs.loading.show()
      this.setState({
        photo: null,
        modalVisible: false,
        proceedBtn: false
      })
      this.refs.loading.close()
      Toast.show({
        text: "Sent Succesfully",
        position: "top",
        type: "success",
        duration: 5000
      })
      }
    })
  }

  getResUnit = () => {
    services.axios.get(services.endpoints.GETRESUNIT).then((res) => {
      if(res.data) {
        this.setState({
          responseUnit: res.data
        })
      }
        this.state.responseUnit.map((unit) => {
          console.log(unit);
          this.setState({
            unitId: unit.id
          })
        })
    }).catch((err) => {
      if(err.response) {
        console.log(err);
      }
    })
  }

  send = () => {
    Toast.show({
				text: "Sent Succesfully",
				position: "top",
        type: "success",
			})
    this.setState({
      photo: null
    })
    this.setState({
      modalVisible: false
    })
    this.setState({
      proceedBtn: false
    })
  }

  
  render() {
    const { photo, modalVisible } = this.state;
    
    return (
      <View
        style={{
          backgroundColor: '#F0EFEF',
          flex: 1,
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>
        <Loading
          ref="loading"
          backgroundColor="transparent"
          indicatorColor="white"
        />
        <View>
          {photo && (
            <UserAvatar
              imageStyle={{
                backgroundColor: 'red',
                width: 300,
                height: 300,
                borderRadius: 20,
                shadowRadius: 10,
                shadowOpacity: 0.2,
              }}
              size={300}
              name="Avishay Bar"
              src={photo.uri}
            />
          )}
        </View>
        <View>
          <Button
            vertical
            style={{backgroundColor: 'white', margin: 10}}
            onPress={
              this.handleChoosePhoto
              // this.sendCase
              // this.getResUnit
              }>
            <Icon
              name="camera"
              type="FontAwesome"
              style={{
                color: '#1AA08A',
                fontSize: 30,
                padding: 20,
                marginVertical: 30,
              }}
            />
          </Button>
        </View>
        <View>
          {this.state.proceedBtn && (
            <Button
              rounded
              light
              onPress={() => {
                this.checkToProceed();
              }}
              style={{
                width: 270,
                height: 55,
                backgroundColor: 'white',
                color: 'green',
              }}>
              <Text
                style={{
                  color: '#1AA08A',
                  fontSize: 20,
                  fontWeight: 'bold',
                  marginLeft: 80,
                }}>
                Proceed
              </Text>
            </Button>
          )}
        </View>
        <View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('you did not send the request');
            }}>
            <View style={styles.modalView}>
              <View>
                <List>
                  <ListItem
                    style={{
                      alignItems: "center",
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                    }}>
                    {this.state.responseUnit.map((unit) => (
                      <TouchableOpacity key={unit.id} onPress={this.sendCase}>
                        <Text style={{marginVertical: 5}}>{unit.name}</Text>
                      </TouchableOpacity>
                    ))}
                  </ListItem>
                </List>
                <TouchableHighlight
                  style={styles.openButton}
                  onPress={() => {
                    this.setModalVisible(!modalVisible);
                  }}>
                  <Text style={styles.textStyle}>Cancel</Text>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
    icon: {
        color: "#B8AFAF"
    },

    iconText: {
        color: "#AC9D9D"
    },

    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      marginVertical: 100,
      padding: 30,
      marginTop: 80,
      marginHorizontal: 30,
      width: 350,
      backgroundColor: "white",
      borderRadius: 20,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 0
      },
      shadowOpacity: 0.025,
      shadowRadius: 0.5,
      elevation: 5
    },
    openButton: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
      backgroundColor: "#B8AFAF"
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
})

export default Incident;