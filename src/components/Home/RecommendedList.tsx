import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Colors} from '@src/utils/styles';

const RecommendeList: React.FC<{Recommended: any[]}> = ({Recommended}) => {
    const RecommendedRestaurants = Recommended.filter(
        e => e._data.recommended === true,
      );
    return (
    <View style={styles.container}>
      <FlatList
        style={styles.listContainer}
        data={RecommendedRestaurants}
        keyExtractor={e => e._data.name}
        horizontal={true}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.itemContainer}>
            <Image
              source={{uri: item._data.menu}}
              style={{width: 250, height: 230}}
            />
            <Text style={styles.itemTitle}>{item._data.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },

  listContainer: {
    marginTop: 20,
  },
  itemTitle: {
    color: Colors.dark,
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
    bottom: -5,
    fontStyle: 'italic'
  },
  itemContainer: {
    backgroundColor: Colors.lightBlue,
    marginRight: 15,
    padding: 15,
    borderRadius: 30,
    paddingTop: 30
  },
});
export default RecommendeList;
