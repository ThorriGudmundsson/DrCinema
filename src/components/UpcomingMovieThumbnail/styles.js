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
    color: '#262018',
    flexDirection: 'column',
    padding: 8,
  },
  ThumbnailContainer: {
    flexDirection: 'row',
    width: 'auto',
    height: 'auto',
    backgroundColor: '#8a755b',
    borderWidth: 1,
    borderColor: 'white',
    margin: 4,
  },
});
