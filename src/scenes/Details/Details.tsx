import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {HomeStyles, Colors} from '@src/utils/styles';
import {useGetIcon} from '@src/hooks';
import {goBackIconControlProps} from './DetailsControlprops';

const Details: React.FC<{
  route: any;
  navigation: any;
}> = ({route, navigation}) => {
  const {Item} = route.params;
  return (
    <View style={[HomeStyles.container]}>
      <TouchableOpacity
        style={HomeStyles.logoutBtn}
        onPress={() => navigation.navigate('HomeStack')}>
        {useGetIcon(goBackIconControlProps)}
      </TouchableOpacity>
      <View style={[styles.father]}>
        <Text style={styles.title}>{Item.name}</Text>
        <Text style={styles.text}>City: {Item.city}</Text>
        <Image
          source={{uri: Item.logo}}
          style={{width: 250, height: 230, borderRadius: 5}}
        />
        <Text style={styles.text}>Telephone: {Item.telephone}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  father: {
    padding: 10,
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: Colors.light,
    fontStyle: 'italic',
    marginVertical: 20,
  },
  title: {
    fontSize: 40,
    color: Colors.light,
    fontStyle: 'italic',
    marginVertical: 20,
  },
});
export default Details;
