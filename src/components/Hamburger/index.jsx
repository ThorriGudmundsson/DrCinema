import React from 'react';
import {
  Text, View, TouchableOpacity, Modal,
} from 'react-native';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';
//import { storeAllMovies } from '../../actions/movieActions';
import styles from './styles';



class Hamburger extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menuIsOpen: false,
      navigate: props.navigation.navigate,
    };
  }

  christmas() {
    const rn = this.props.navigation.state.routeName;
    if (rn === 'CinemaDetail' || rn === 'MovieDetail') {
      this.state.navigate('SimpleMovieDetail', { mongoId: '5fd25829034403e09d26045b' });}
    else if (rn === 'UpcomingMovies') {
      this.state.navigate('SimpleMovieDetail', { mongoId: '5fd22904034403e09d1f4199' });}
    else {
      alert('hohoho')
    }
    //this.state.navigate('SimpleMovieDetail', { mongoId: '5fd25829034403e09d26045b' });
  }

  render() {
    const { menuIsOpen, navigate } = this.state;
    return (
      <View
        style={styles.HamburgerContainer}
      >
      {/*<View
        style={styles.HamburgerContainerIOS}
      >*/}
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
              onPress={() => { this.setState({ menuIsOpen: false }); this.christmas(); }}

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
  navigation: PropTypes.shape({
    navigate: PropTypes.function,
  }).isRequired,
};
