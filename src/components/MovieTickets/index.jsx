import React from 'react';
import {
  View, Text, FlatList, Linking
} from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from './style';

const MovieTickets = ({
  schedule, cinema,
}) => (
  <View style={styles.listContainer}>
    <View style={{ flex: 1 }}>
      <FlatList
        numColumns={1}
        data={schedule}
        renderItem={({
          item: {
            time, purchase_url,
          },
        }) => (
          <View>
            <Text>
              {time.replace(/ *\([^)]*\) */g, '').replace('.', ':')}
            </Text>
            <Text
              style={styles.websiteStyle}
              onPress={() => { Linking.openURL(`${purchase_url}`); }}
            >
              {purchase_url}
            </Text>
          </View>
        )}
        keyExtractor={(schedule) => schedule.time}
      />
    </View>
  </View>
);

export default withNavigation(MovieTickets);
