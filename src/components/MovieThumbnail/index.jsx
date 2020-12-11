import React from 'react';
import {
  Text, View, TouchableOpacity, FlatList, Image,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from './styles';

const MovieThumbnail = ({
  mongoId, cinemaId, title, poster, plot, durationMinutes, year, genres, navigation: { navigate },
}) => (
  <TouchableOpacity
    activeOpacity={0.7}
    onPress={() => navigate('MovieDetail', {
      mongoId,
      cinemaId,
    })}
  >
    <View style={styles.movieThumbnailContainer}>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={{ uri: poster }}
      />
      <View style={styles.textContainer}>
        <Text style={styles.thumbnailName}>{title} ({year})</Text>
        <View>
          <FlatList
            numColumns={1}
            data={genres}
            renderItem={({
              item: {
                Name,
              },
            }) => (
              <Text style={styles.thumbnailText}>{Name}</Text>
            )}
            keyExtractor={(genre) => genre.Name}
          />
        </View>
      </View>
    </View>
  </TouchableOpacity>
);

export default withNavigation(MovieThumbnail);
