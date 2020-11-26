import React from "react";

import {View, StyleSheet, TouchableOpacity, Dimensions } from "react-native"
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
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


export default class TrackInfo extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             latitude: 0,
             longitude: 0,
             error: null
        }
    }

    componentDidMount = () => {
        Geolocation.getCurrentPosition(position => {
            const lat = parseFloat(position.coords.latitude)
            const lng = parseFloat(position.coords.longitude)
           this.setState({
               latitude: lat,
               longitude: lng,
               error: null
           })
           
        }, error => this.setState({error: error.message}),
        {enableHighAccuracy: true, timeout: 20000, maximumAge: 2000}
        );
    }
    

    render() {
        return (
            <View style={styles.container}>
                
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: this.state.latitude,
                    longitude: this.state.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
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