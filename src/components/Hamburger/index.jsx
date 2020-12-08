import React from 'react';
import {  } from '../../views/Cinemas/index';
import {
  Text, View, TouchableOpacity, Modal
} from 'react-native';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';


class Hamburger extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props)
    this.state = {
      menuIsOpen: false,
    };
  }


    render() {

  const {menuIsOpen} = this.state;
  return (
    <View
      style={styles.HamburgerContainer}
    >
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => this.setState({ menuIsOpen: !menuIsOpen })}
      >
        <Ionicons name="ios-menu" style={styles.HamburgerIcon} />
      </TouchableOpacity>

      <Modal
        visible={menuIsOpen}
        transparent
        animationType={'fade'}
      >
        <TouchableOpacity
          style={styles.modalOver}
          onPress={() => this.setState({ menuIsOpen: false })}
        />
        <View style={styles.menuPosition}>
          <TouchableOpacity
            activeOpacity={0.9}
            style={styles.menuButton}
            onPress={() => { this.setState({ menuIsOpen: false }); console.log('hohoh')}}
          >
            <Text> Kvikmyndahúsin </Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.9}
            style={styles.menuButton}
            onPress={() => { this.setState({ menuIsOpen: false }); console.log('Það eru jólinn')}}
          >
            <Text> Myndirnar </Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.9}
            style={styles.menuButton}
            onPress={() => this.setState({ menuIsOpen: false })}
          >
            <Text> Væntanlegar </Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.9}
            style={styles.menuButton}
            onPress={() => this.setState({ menuIsOpen: false })}
          >
            <Text> something </Text>
          </TouchableOpacity>
        </View>

      </Modal>
    </View>
    );
}
}

export default Hamburger;
//this.props.navigation.navigate('Gummistest')
