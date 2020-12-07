import React from 'react';
import {
  View, TouchableHighlight, Text,
} from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { getAllCinemas } from '../../services/cinemaService';
// import PropTypes from 'prop-types';
// import data from '../../resources/data.json';
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
    const cinemas = getAllCinemas();
    this.setState({
      cinemas,
    });
  }

  render() {
    const firstCinema = this.state.cinemas[0];
    return (
      <View>
        <Text>
          {firstCinema}
        </Text>
      </View>
    );
  }
}

export default Cinemas;
