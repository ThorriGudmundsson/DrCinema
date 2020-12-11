import React from 'react';
import {
  View, Text
} from 'react-native';
// import { NavigationEvents } from 'react-navigation';
import { connect } from 'react-redux';
import Hamburger from '../../components/Hamburger';
import MovieDetails from '../../components/MovieDetails';
import MovieTickets from '../../components/MovieTickets';
import * as movieService from '../../services/movieService';

class SimpleMovieDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      //cinema: {},
      release: '',
    };
  }

  async componentDidMount() {
    const { movies, cinema, release } = this.props;
    console.log(this.props.navigation.state.params.mongoId);
    const movie = await movieService.getMovieByMongoId(movies, this.props.navigation.state.params.mongoId);




    //const showSchedule = await movieService.getMovieShowsInCinema(movie, cinema);
    //
    this.setState({
      movie,
      release: this.props.navigation.state.params.release,
      //cinema,
      //showSchedule,
    });
    //console.log(this.props.navigation.state.params.release);
  }

  render() {
    const { movie, release } = this.state;

    return (
      <View style={{ flex: 1 }}>
        <Hamburger navigation={this.props.navigation} />

        <MovieDetails
          title={movie.title}
          poster={movie.poster}
          plot={movie.plot}
          durationMinutes={movie.durationMinutes}
          year={movie.year}
          genres={movie.genres}
          release={release}
        />

      </View>
    );
  }
}

const mapStateToProps = ({ movies, cinema }) => ({ movies, cinema });

export default connect(mapStateToProps)(SimpleMovieDetail);
