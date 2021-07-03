import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {HomeStyles} from '@src/utils/styles';
import Title from '@src/components/SignUp/Title';
import {titleStyleControlProps} from '../Promotions/PromotionControlledProps';
import {get_restaurants_fetch} from '@src/store/actions';
import {connect} from 'react-redux';
import RecommendedList from '@src/components/Home/RecommendedList';

const Menus: React.FC<{
  navigation: any;
  Restaurants: any;
  get_restaurants_fetch: any;
}> = ({navigation, Restaurants, get_restaurants_fetch}) => {
  useEffect(() => {
    get_restaurants_fetch();
  }, []);
  return (
    <View style={HomeStyles.container}>
      <Title title={'Me'} subtitle={'nus'} styling={titleStyleControlProps} />
      <Text
        style={{
          color: 'white',
          fontSize: 25,
          textAlign: 'justify',
          padding: 5,
        }}>
        These are the Menus avaliable, please click on the menu and you will be
        able to see the Reastaurant´s information and order the corresponding
        dishes.
      </Text>
      <View style={{marginTop: 5}}>
        {Restaurants && (
          <RecommendedList
            Recommended={Restaurants}
            navigation={navigation}
            menus={true}
          />
        )}
      </View>
    </View>
  );
};

const mapStateToProps = (state: any) => {
  return {
    Restaurants: state.Restaurants.restaurants,
  };
};

const mapDispatchToProps = {get_restaurants_fetch};
export default connect(mapStateToProps, mapDispatchToProps)(Menus);
