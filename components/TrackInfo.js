import React from "react";

import {View, StyleSheet, TouchableOpacity, Dimensions } from "react-native"
import MapView , { PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import ActionButton from 'react-native-action-button';
import getDistance from 'geolib/es/getDistance';
import convertDistance from 'geolib/es/convertDistance';
import services from "./../services";
import {Icon } from "native-base";


export default class TrackInfo extends React.Component {

    render() {
        return (
            <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={styles.map}
                region={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
                >
                </MapView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      height: "100%",
      width: 450,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject
    },
});