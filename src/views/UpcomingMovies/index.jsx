import React from 'react';
import {  } from '../../components/UpcomingMovieThumbnail/index';
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
    };
    // console.log(this.props);
  }

  async componentDidMount() {
    const data = await getAllUpcomingMovies();

    const upcomingMovies = [];
    data.forEach((item) => {
      upcomingMovies.push({
        id: item.id,
        title: item.title,
        poster: item.poster,
        release: item['release-dateIS'],
      });
    });
    this.setState({
      upcomingMovies,
    });
  }

  render() {
    const { upcomingMovies } = this.state;
    // console.log(testsome['release-dateIS'])
    return (
      <View>
        <UpcomingMoviesList
          upcomingMovies={upcomingMovies}
        />
        <Hamburger
          navigation={this.props.navigation}
          themecolor="#8a755b"
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
