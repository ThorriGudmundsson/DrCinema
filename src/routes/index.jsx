import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Cinemas from '../views/Cinemas';
import CinemaDetail from '../views/CinemaDetail';
import MovieDetail from '../views/MovieDetail';
import UpcomingMovies from '../views/UpcomingMovies';
import SimpleMovieDetail from '../views/SimpleMovieDetail';

const StackNavigator = createStackNavigator({
  Cinemas: {
    screen: Cinemas,
    navigationOptions: {
      title: 'Kvikmyndahúsin',
      headerStyle: {
        backgroundColor: '#800517',

      },
      headerTintColor: '#7DFDFE',
      headerTitleStyle: {
        fontWeight: 'normal',
      },

    },
  },
  CinemaDetail: {
    screen: CinemaDetail,
    navigationOptions: {
      title: 'Komdu í bío',
      headerStyle: {
        backgroundColor: '#121875',

      },
      headerTintColor: '#d0e4f5',
      headerTitleStyle: {
        fontWeight: 'normal',
      },

    },
  },
  MovieDetail: {
    screen: MovieDetail,
    navigationOptions: {
      title: 'Nánari upplýsingar',
      headerStyle: {
        backgroundColor: '#333',
      },
      headerTintColor: '#7DFDFE',
      headerTitleStyle: {
        fontWeight: 'normal',
      },
    },
  },
  UpcomingMovies: {
    screen: UpcomingMovies,
    navigationOptions: {
      title: 'Væntanlegar í bíó',
      headerStyle: {
        backgroundColor: '#8a755b',


      },
      headerTintColor: '#262018',
      headerTitleStyle: {
        fontWeight: 'normal',
      },

    },
  },
  SimpleMovieDetail: {
    screen: SimpleMovieDetail,
    navigationOptions: {
      title: 'Upplýsingar',
      headerStyle: {
        backgroundColor: '#333',
      },
      headerTintColor: '#7DFDFE',
      headerTitleStyle: {
        fontWeight: 'normal',
      },
    },
  },
});

export default createAppContainer(StackNavigator);
