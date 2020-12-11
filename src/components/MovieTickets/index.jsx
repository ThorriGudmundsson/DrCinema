import React from 'react';
import {
  View, Text, FlatList, Linking, TouchableOpacity,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import styles from './style';

const MovieTickets = ({
  schedule, cinema,
}) => (
  <View>
    <Text style={styles.showTimeText}>
      <Ionicons name="md-arrow-dropleft" style={styles.arrow} />
      {' '}{cinema.name} - Sýningatímar {' '}
      <Ionicons name="md-arrow-dropright" style={styles.arrow} />
    </Text>
    <View>
      <FlatList
        horizontal
        data={schedule}
        renderItem={({
          item: {
            time, purchase_url,
          },
        }) => (
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => { Linking.openURL(`${purchase_url}`); }}
          >
            <Text style={{ color: '#aaa' }}>
              <Ionicons name="ios-time" style={styles.icon} /> {' '}
              {time.replace(/ *\([^)]*\) */g, '').replace('.', ':')}
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={(schedule) => schedule.time}
      />
    </View>
  </View>
);

export default withNavigation(MovieTickets);
