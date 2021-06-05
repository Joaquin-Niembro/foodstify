import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const HorizonatlRestaurantsMenu: React.FC<{
  Restaurants: any[];
}> = ({Restaurants}) => {
  return (
    <View>
      <FlatList
        horizontal={true}
        data={Restaurants}
        keyExtractor={e => e.id}
        renderItem={({item}) => (
          <TouchableOpacity
            style={[styles.itemContainer, {backgroundColor: item._data.bc}]}>
            <View
              style={{
                backgroundColor: '#5b6259',
                padding: 7,
                borderRadius: 20,
              }}>
              <AntDesign name={item._data.icon} color={'#FFF'} size={25} />
            </View>
            <Text style={[styles.itemName, {color: '#5b6259'}]}>
              {item._data.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    width: 150,
    height: 50,
    borderRadius: 25,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 25,
    marginRight: 10,
  },
  itemName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
export default HorizonatlRestaurantsMenu;
