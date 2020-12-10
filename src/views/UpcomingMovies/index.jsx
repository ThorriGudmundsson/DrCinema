import React from 'react';
import {
  View, Text,
} from 'react-native';
// import { NavigationEvents } from 'react-navigation';
import { connect } from 'react-redux';
import { storeUpcomingMovies } from '../../actions/movieActions';
// import { getAllUpcomingMovies } from '../../services/upcomingMoviesService';
import UpcomingMoviesList from '../../components/UpcomingMoviesList';
import Hamburger from '../../components/Hamburger';

class UpcomingMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      upcomingMovies: [],
    };
  }

  async componentDidMount() {
    const { storeUpcomingMovies } = this.props;
    await storeUpcomingMovies();
    const { movies } = this.props;
    const upcomingMovies = [];
    await movies.forEach((item) => {
      upcomingMovies.push({
        mongoId: item['_id'],
        title: item.title,
        poster: item.poster,
        release: item['release-dateIS'],
      });
    });

    // do this here becaus of sort not a funtion error in parameters
    await upcomingMovies.sort((a, b) => a.release.localeCompare(b.release));
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

const mapStateToProps = ({ movies }) => ({ movies });

export default connect(mapStateToProps, { storeUpcomingMovies })(UpcomingMovies);


/* <Text> { testsome.title }</Text>
<Text> { testsome['release-dateIS'] }</Text>
*/
