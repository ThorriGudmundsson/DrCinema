import React from 'react';
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
    return (
      <View>
        <CinemaList
          cinemas={this.state.cinemas}
          // onPress={this.onCinemaPress()}
        />
      </View>
    );
  }
}

export default connect()(Cinemas);
