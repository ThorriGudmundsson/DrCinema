import React from 'react';
import {
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { storeUpcomingMovies } from '../../actions/upcomingMoviesActions';
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
    const { upcomingMovies } = this.props;
    const cleanedUpcomingMovies = [];
    await upcomingMovies.forEach((item) => {
      let trailer = false;
      if (item.trailers[0] && item.trailers[0].results[0]) {
        trailer = item.trailers[0].results[0].key;
      }

      cleanedUpcomingMovies.push({
        mongoId: item['_id'],
        title: item.title,
        poster: item.poster,
        release: item['release-dateIS'],
        trailer: trailer,
      });
    });

    // Do this here because of sort not a funtion error in parameters
    await cleanedUpcomingMovies.sort((a, b) => b.release.localeCompare(a.release));
    this.setState({
      upcomingMovies: cleanedUpcomingMovies,
    });
  }

  render() {
    const { upcomingMovies } = this.state;
    return (
      <View>
        <UpcomingMoviesList
          upcomingMovies={upcomingMovies}
        />
        <Hamburger
          navigation={this.props.navigation}
        />
      </View>
    );
  }
}

const mapStateToProps = ({ upcomingMovies }) => ({ upcomingMovies });

export default connect(mapStateToProps, { storeUpcomingMovies })(UpcomingMovies);
