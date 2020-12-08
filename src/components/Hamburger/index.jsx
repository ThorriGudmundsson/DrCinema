import React from 'react';
import {
  Text, View, TouchableOpacity,
} from 'react-native';
// import { withNavigation } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

const Hamburger = () => (
  <View
    style={styles.HamburgerContainer}
  >
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => alert('ekki reddy')}
      >

      <Ionicons name="ios-menu"
      style={styles.HamburgerIcon}
     />
    </TouchableOpacity>
  </View>
);


export default Hamburger;
