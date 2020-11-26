import React, {useEffect} from 'react';

import {StyleSheet, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 3000);
  }, []);

  return (
    <LinearGradient colors={['#fff', '#fff']} style={styles.home}>
      <Image
        source={require('./../images/logo4.jpeg')}
        resizeMode="contain"
        style={{width: 200}}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  home: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default Splash