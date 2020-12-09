import React from 'react';
import {  } from '../UpcomingMovies/index';
import {
  View, Text,
} from 'react-native';
// import { NavigationEvents } from 'react-navigation';
import { connect } from 'react-redux';
import Hamburger from '../../components/Hamburger';

class Movies extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {
      movies: {},
    };
    // console.log(this.props);
  }

  async componentDidMount() {
    // const cinema = await getCinemaById(this.props.navigation.state.params.id);
    this.setState({
      // cinema,
    });
  }

  render() {
    //const { cinema } = this.state;
    return (
      <View>
        <Text>All í bío</Text>
        <Hamburger
          navigation={this.props.navigation}
          themecolor='#ccc'
        />
      </View>
    );
  }
}

// const mapStateToProps = ({ cinema }) => ({ cinema });

export default Movies;
