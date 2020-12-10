import React from 'react';
import {
  View,
} from 'react-native';
import { connect } from 'react-redux';
import Hamburger from '../../components/Hamburger';
import MovieDetails from '../../components/MovieDetails';
import MovieTickets from '../../components/MovieTickets';
import * as movieService from '../../services/movieService';
import * as cinemaService from '../../services/cinemaService';

class MovieDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      cinema: {},
      showSchedule: [],
    };
  }

  async componentDidMount() {
    const { movies, cinemas } = this.props;
    const movie = await movieService.getMovieByMongoId(movies, this.props.navigation.state.params.mongoId);
    const cinema = await cinemaService.getCinemaById(this.props.navigation.state.params.cinemaId, cinemas)
    const showSchedule = await movieService.getMovieShowsInCinema(movie, cinema);
    this.setState({
      movie,
      cinema,
      showSchedule,
    });
  }

  render() {
    const { movie, cinema, showSchedule } = this.state;
    const schedule = showSchedule.schedule;
    console.log(schedule);
    return (
      <View style={{ flex: 1 }}>
        <Hamburger
          navigation={this.props.navigation}
          themecolor="#ccc"
        />
        <MovieDetails
          title={movie.title}
          poster={movie.poster}
          plot={movie.plot}
          durationMinutes={movie.durationMinutes}
          year={movie.year}
          genres={movie.genres}
        />
        <MovieTickets
          schedule={schedule}
          cinema={cinema}
        />
      </View>
    );
  }
}

const mapStateToProps = ({ movies, cinemas }) => ({ movies, cinemas });

export default connect(mapStateToProps)(MovieDetail);
