import React from 'react';
import {
  View, Text,
} from 'react-native';
// import { NavigationEvents } from 'react-navigation';
import { connect } from 'react-redux';
import { getCinemaById } from '../../services/cinemaService';
import CinemaDetails from '../../components/CinemaDetail/index';

class CinemaDetail extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {
      cinema: {},
    };
    // console.log(this.props);
  }

  /*async componentDidMount() {
    const cinema = await getCinemaById(this.props.navigation.state.params.id);
    this.setState({
      cinema,
    });
  }*/

  render() {
    const { cinema } = this.state;
    console.log(cinema)
    return (
      <View>
        <Text>{cinema.name}</Text>
        <Text>{cinema.description}</Text>
        <Text>{cinema.address}</Text>
        <Text>{cinema.phone}</Text>
        <Text>{cinema.website}</Text>

        <CinemaDetails
          cinemas={cinema}
        />
      </View>
    );
  }
}

// const mapStateToProps = ({ cinema }) => ({ cinema });

export default connect(null, { getCinemaById })(CinemaDetail);
