import React from "react";

import {View, StyleSheet, TouchableOpacity, Dimensions } from "react-native"
import MapView, {Marker} from 'react-native-maps';
import AsyncStorage from "@react-native-community/async-storage"
import Geolocation from "@react-native-community/geolocation";
// navigator.geolocation = require('@react-native-community/geolocation');


import MapViewDirections from 'react-native-maps-directions';
import ActionButton from 'react-native-action-button';
import getDistance from 'geolib/es/getDistance';
import convertDistance from 'geolib/es/convertDistance';
import services from "./../services";
import {Icon } from "native-base";
import { log } from "react-native-reanimated";
const { width, height } = Dimensions.get("window");
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = ASPECT_RATIO * LATITUDE_DELTA


export default class TrackInfo extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             initialRegion: {
                 latitude: 0,
                 longitude: 0,
                 latitudeDelta: 0,
                 longitudeDelta: 0
             }
        }
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
           console.log(this.state);
           
        }, error => console.log(error),
        {enableHighAccuracy: true, timeout: 20000, maximumAge: 2000}
        );
    }
    

    render() {
        const {initialRegion} = this.state
        return (
            <View style={styles.container}>
                
            <MapView
                style={styles.map}
                initialRegion={initialRegion}
                showsUserLocation={true}
                >
                    <Marker coordinate={this.state} />
                </MapView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
    },
    map: {
        flex: 1,
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width
    //   ...StyleSheet.absoluteFillObject
    },
});