import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {HomeStyles} from '@src/utils/styles';
import Title from '@src/components/SignUp/Title';
import {Constants} from '@src/utils/constants';
import {titleStyleControlProps} from './PromotionControlledProps';
import RecommendedList from '@src/components/Home/RecommendedList';
import {get_restaurants_fetch} from '@src/store/actions';
import {connect} from 'react-redux';

const Promotions: React.FC<{
  navigation: any;
  Restaurants: any;
  get_restaurants_fetch: any;
}> = ({navigation, Restaurants, get_restaurants_fetch}) => {
  useEffect(() => {
    get_restaurants_fetch();
  }, []);
  return (
    <View style={HomeStyles.container}>
      <Title
        title={Constants.title3}
        subtitle={Constants.title4}
        styling={titleStyleControlProps}
      />
      <Text style={{
          color: 'white',
          fontSize: 25,
          textAlign: 'justify',
          padding: 5
      }}>
        These are the Promotions avaliable, please click on the promo and you
        will be able to see the Reastaurant´s information and order the
        Promotion.
      </Text>
      <View style={{marginTop: 5}}>
        {Restaurants && (
          <RecommendedList
            Recommended={Restaurants}
            navigation={navigation}
            Promotions={true}
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
export default connect(mapStateToProps, mapDispatchToProps)(Promotions);
