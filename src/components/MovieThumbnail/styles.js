import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  image: {
    width: 70,
    height: 70,
    margin: 10,
  },
  thumbnailName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffff',
    flexDirection: 'column',
    margin: 8,
  },
  thumbnailText: {
    fontSize: 16,
    fontWeight: 'normal',
    color: '#7DFDFE',
    flexDirection: 'column',
    padding: 8,
  },
  movieThumbnailContainer: {
    flexDirection: 'row',
    flexGrow: 0.1,
    width: 'auto',
    backgroundColor: '#121875',
    borderWidth: 2,
    borderColor: 'black',
    margin: 4,
  },
});
