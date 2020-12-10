import React from 'react';
import {
  Text, View, TouchableOpacity, Modal,
} from 'react-native';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

class Hamburger extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menuIsOpen: false,
      navigate: props.navigation.navigate,
    };
  }

  render() {
    const { menuIsOpen, navigate } = this.state;
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
          animationType="fade"
        >
          <TouchableOpacity
            style={styles.modalOver}
            onPress={() => this.setState({ menuIsOpen: false })}
          />
          <View style={styles.menuPosition}>
            <TouchableOpacity
              activeOpacity={0.9}
              style={styles.menuButton}
              onPress={() => { this.setState({ menuIsOpen: false }); navigate('Cinemas'); }}
            >
              <Text> Kvikmyndahúsin </Text>
            </TouchableOpacity>

            {/* <TouchableOpacity
              activeOpacity={0.9}
              style={styles.menuButton}
              onPress={() => { this.setState({ menuIsOpen: false }); navigate('Movies'); }}
            >
              <Text> Myndirnar </Text>
            </TouchableOpacity> */}

            <TouchableOpacity
              activeOpacity={0.9}
              style={styles.menuButton}
              onPress={() => { this.setState({ menuIsOpen: false }); navigate('UpcomingMovies'); }}
            >
              <Text> Væntanlegar </Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.9}
              style={styles.menuButton}
              onPress={() => {this.setState({ menuIsOpen: false }); alert('HoHoHoo');}}
            >
              <Text> Það eru jólin </Text>
            </TouchableOpacity>
          </View>

        </Modal>
      </View>
    );
  }
}

export default Hamburger;

Hamburger.propTypes = {
  navigation: PropTypes.arrayOf(PropTypes.shape({
    navigate: PropTypes.function,
  })).isRequired,
};
