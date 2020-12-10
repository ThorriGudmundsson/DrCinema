import React from 'react';
import {
  View, Text, FlatList, Linking, TouchableOpacity
} from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from './style';
import { Ionicons } from '@expo/vector-icons';

const MovieTickets = ({
  schedule, cinema,
}) => (
  <View style={{ flex: 1 }}>
    <Text style={styles.showTimeText}>Sýningatímar:</Text>
    <View>
      <FlatList
        numColumns={4}
        data={schedule}
        renderItem={({
          item: {
            time, purchase_url,
          },
        }) => (
          <View>
            <TouchableOpacity
              visible={false}
              style={styles.buttonStyle}
              onPress={() => { Linking.openURL(`${purchase_url}`); }}
            >
              <Text style={{color: 'grey'}}>
                <Ionicons name="ios-time" style={styles.icon} /> {' '}
                {time.replace(/ *\([^)]*\) */g, '').replace('.', ':')}
              </Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(schedule) => schedule.time}
      />
    </View>
  </View>
);

export default withNavigation(MovieTickets);
