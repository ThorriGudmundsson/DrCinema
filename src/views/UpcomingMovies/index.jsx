import React from 'react';
import {
  View, Text,
} from 'react-native';
// import { NavigationEvents } from 'react-navigation';
import { connect } from 'react-redux';
import { getAllUpcomingMovies } from '../../services/upcomingMoviesService';
import UpcomingMoviesList from '../../components/UpcomingMoviesList';
import Hamburger from '../../components/Hamburger';

class UpcomingMovies extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {
      upcomingMovies: {},
      testsome:{},
    };
    // console.log(this.props);
  }

  async componentDidMount() {
    const upcomingMovies = await getAllUpcomingMovies();
    this.setState({
      upcomingMovies,
      testsome: upcomingMovies[0],

    });
  }

  render() {
    const { testsome, upcomingMovies } = this.state;
    console.log(testsome);
    return (
      <View>
        <UpcomingMoviesList
          upcomingMovies={upcomingMovies}
        />
        <Hamburger
          navigation={this.props.navigation}
          themecolor='#8a755b'
        />
      </View>
    );
  }
}

// const mapStateToProps = ({ cinema }) => ({ cinema });

export default UpcomingMovies


/* <Text> { testsome.title }</Text>
<Text> { testsome['release-dateIS'] }</Text>
*/
