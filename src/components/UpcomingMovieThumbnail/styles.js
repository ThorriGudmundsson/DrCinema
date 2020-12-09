import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  image: {
    width: 120,
    height: 120,
    marginRight: 10,
  },
  thumbnailName: {
    width: 200,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffff',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  thumbnailText: {
    fontSize: 16,
    fontWeight: 'normal',
    color: '#262018',
    flexDirection: 'column',

  },

  ThumbnailContainer: {
    flexDirection: 'row',
    width: 'auto',
    height: 'auto',
    backgroundColor: '#8a755b',
    borderWidth: 1,
    borderColor: 'white',
    margin: 4,
    padding: 8,
  },
});
