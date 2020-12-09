import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Cinemas from '../views/Cinemas';
import CinemaDetail from '../views/CinemaDetail';
// import {  } from '../../App';

import Movies from '../views/Movies';
import UpcomingMovies from '../views/UpcomingMovies';

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
        backgroundColor: '#333',

      },
      headerTintColor: '#7DFDFE',
      headerTitleStyle: {
        fontWeight: 'normal',
      },

    },
  },
  Movies,
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
});

export default createAppContainer(StackNavigator);
