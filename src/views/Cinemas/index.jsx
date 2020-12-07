import React from 'react';
import {
  View, TouchableHighlight, Text,
} from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { getAllCinemas } from '../../services/cinemaService';
// import PropTypes from 'prop-types';
import data from '../../resources/data.json';
// import { AntDesign } from '@expo/vector-icons';
// import { SearchBar } from 'react-native-elements';
// import ContactList from '../../components/Contacts/ContactList';
// import { getAllContacts, sortContacts } from '../../services/contactServices';
// import styles from './styles';

class Cinemas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cinemas: [],
    };
  }

  componentDidMount() {
    const cinemas =
    this.setState({
      cinemas: data.cinemas,
    });
  }

  render() {
    return (
      <View>
        <Text>
          Hello from Cinemas view!
        </Text>
      </View>
    )
  }
}

export default Cinemas;
