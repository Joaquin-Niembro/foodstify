import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {HomeStyles} from '@src/utils/styles';
import Title from '@src/components/SignUp/Title';
import {Constants} from '@src/utils/constants';
import {titleStyleControlProps} from '../SignUp/controlledProps';
import {logoutIconControlProps} from './HomeControlledProps';
import {connect} from 'react-redux';
import {useGetIcon} from '@src/hooks';
import {get_restaurants_fetch, sign_out_fetch} from '@src/store/actions';
import HorizontalRestaurantsMenu from '@src/components/Home/HorizontalRestaurantsMenu';
import RecommendedList from '@src/components/Home/RecommendedList';
const Home: React.FC<{
  navigation: any;
  Auth: any;
  Restaurants: any;
  get_restaurants_fetch: any;
  sign_out_fetch: any;
}> = ({
  navigation,
  Auth,
  get_restaurants_fetch,
  Restaurants,
  sign_out_fetch,
}) => {
  useEffect(() => {
    get_restaurants_fetch();
  }, []);
  
  return (
    <View style={HomeStyles.container}>
      <View style={HomeStyles.upLevel}>
        <Title
          title={Constants.title1}
          subtitle={Constants.title2}
          styling={titleStyleControlProps}
        />
        {Auth.user && (
          <TouchableOpacity
            style={HomeStyles.logoutBtn}
            onPress={sign_out_fetch}>
            {useGetIcon(logoutIconControlProps)}
          </TouchableOpacity>
        )}
      </View>
      {Restaurants && <HorizontalRestaurantsMenu Restaurants={Restaurants} />}
      <Text style={HomeStyles.recommendedText}>Recommended</Text>
      {Restaurants && <RecommendedList Recommended={Restaurants} />}
    </View>
  );
};
const mapStateToProps = (state: any) => {
  return {
    Auth: state.Auth,
    Restaurants: state.Restaurants.restaurants,
  };
};

const mapDispatchToProps = {get_restaurants_fetch, sign_out_fetch};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
