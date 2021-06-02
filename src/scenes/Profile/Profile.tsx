import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {useEffectAfterMount} from '@src/hooks';
import {ProfileStyles} from '@src/utils/styles';
import {Avatar, RadioButton} from 'react-native-paper';
const Profile: React.FC<{
  Auth: {user: any | null};
  navigation: any;
}> = ({Auth, navigation}) => {
  const [checked, setChecked] = React.useState('first');
  useEffectAfterMount(() => {
    if (!Auth.user) {
      navigation.navigate('Signup');
    }
  }, [Auth]);
  const handleCheck = () => {
    let status;
    checked === 'first' ? (status = '') : (status = 'first');
    setChecked(status);
  };
  return (
    <View style={ProfileStyles.container}>
      <Text style={ProfileStyles.title}>Profile</Text>
      <View style={ProfileStyles.subcontainer}>
        <Avatar.Icon
          size={45}
          icon="account-settings"
          color="white"
          style={ProfileStyles.iconContainer}
        />
        <View style={ProfileStyles.logContainer}>
          <Text style={ProfileStyles.loggedIn}>Logged In: </Text>
          <RadioButton
            value="first"
            status={checked === 'first' ? 'checked' : 'unchecked'}
            onPress={handleCheck}
          />
        </View>
        <View>
          <Text style={ProfileStyles.loggedIn}>User: {Auth.user.email} </Text>
        </View>
      </View>
    </View>
  );
};
const mapStateToProps = (state: any) => {
  return {
    Auth: state.Auth,
  };
};
export default connect(mapStateToProps, {})(Profile);
