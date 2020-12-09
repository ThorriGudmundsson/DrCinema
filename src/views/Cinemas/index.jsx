import React from 'react';
import {  } from '../../routes/index';
import {
  View,
} from 'react-native';
// import { NavigationEvents } from 'react-navigation';
import { connect } from 'react-redux';
import { getAllCinemas } from '../../services/cinemaService';
// import { getAllCinemasAction } from '../../actions/cinemaActions';
// import PropTypes from 'prop-types';
// import data from '../../resources/data.json';
import CinemaList from '../../components/CinemaList';
import Hamburger from '../../components/Hamburger';

class Cinemas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cinemas: [],
    };
    // console.log(this.props);
    // this.onCinemaPress = this.onCinemaPress.bind(this);
  }

  async componentDidMount() {
    const cinemas = await getAllCinemas();
    this.setState({
      cinemas,
    });
  }

  // async onCinemaPress() {
  //   // let cinemas = this.state;
  //   const { getAllCinemasAction } = this.props;
  //   const allCinemas = await getAllCinemasAction();
  //   console.log(allCinemas[0]);
  // }

  render() {
    // const { cinemas } = this.state.cinemas;
    const { cinemas } = this.state;
    return (
      <View>
        <CinemaList
          cinemas={cinemas}
          // onPress={this.onCinemaPress()}
        />
        <Hamburger
          navigation={this.props.navigation}
          themecolor='#800517'
        />
      </View>
    );
  }
}

export default connect()(Cinemas);
