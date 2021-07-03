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

const RecommendeList: React.FC<{
  Recommended: any[];
  navigation: any;
  Promotions?: Boolean;
  menus?: Boolean;
}> = ({Recommended, navigation, Promotions = false, menus = false}) => {
  const RecommendedRestaurants = Recommended.filter(
    e => e._data.recommended === true,
  );
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.listContainer}
        data={Promotions ? Recommended : RecommendedRestaurants}
        keyExtractor={e => e._data.name}
        horizontal={true}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => navigation.navigate('Details', {Item: item._data})}>
            <Image
              source={{
                uri: Promotions
                  ? item._data.promotion
                  : menus
                  ? item._data.menu
                  : item._data.logo,
              }}
              style={{width: 250, height: 230, borderRadius: 5}}
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
    fontStyle: 'italic',
  },
  itemContainer: {
    backgroundColor: Colors.lightBlue,
    marginRight: 15,
    padding: 15,
    borderRadius: 30,
    paddingTop: 30,
  },
});
export default RecommendeList;
