import React from 'react';
import {
  View, Text,
} from 'react-native';
// import { NavigationEvents } from 'react-navigation';
import { connect } from 'react-redux';
import Hamburger from '../../components/Hamburger';
import MovieDetails from '../../components/MovieDetails';
import MovieTickets from '../../components/MovieTickets';
import * as movieService from '../../services/movieService';

class MovieDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      cinema: {},
      showSchedule: []
    };
  }

  async componentDidMount() {
    const { movies, cinema } = this.props;
    const movie = await movieService.getMovieByMongoId(movies, this.props.navigation.state.params.mongoId);
    const showSchedule = await movieService.getMovieShowsInCinema(movie, cinema);
    this.setState({
      movie,
      cinema,
      showSchedule,
    });
  }

  render() {
    const { movie, cinema, showSchedule } = this.state;
    // console.log(showSchedule);
    // console.log(showSchedule.schedule);
    const schedule = showSchedule.schedule;
    console.log(schedule);
    // console.log(cinema);
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
        <View>
          <Text>
            <MovieTickets
              schedule={schedule}
              cinema={cinema}
            />
          </Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({ movies, cinema }) => ({ movies, cinema });

export default connect(mapStateToProps)(MovieDetail);
