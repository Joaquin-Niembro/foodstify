import React from 'react';
import {View, Text} from 'react-native';
import {SignUpStyles} from '@src/utils/styles';
import {Constants} from '@src/utils/constants';
import {
  titleStyleControlProps,
  subtitleStyleControlProps,
  mailIconControlProps,
  lockIconControlProps,
  inputStyleControlProps,
  SignUpBtnControlProps,
  SignInGoBtnControlProps,
} from '../SignUp/controlledProps';
import Title from '@src/components/SignUp/Title';
import CustomInput from '@src/components/shared/CustomInput';
import CustomButton from '@src/components/shared/CustomButton';
import Line from '@src/components/SignUp/Line';
import {Formik} from 'formik';
import {connect} from 'react-redux';
import {sign_in_fetch} from '@src/store/actions';
import {useEffectAfterMount} from '@src/hooks';
interface MyFormValues {
  email: string;
  password: string;
}
const SignIn: React.FC<{
  navigation: any;
  sign_in_fetch: any;
  Auth: any;
}> = ({navigation, sign_in_fetch, Auth}) => {
  useEffectAfterMount(() => {
    if (Auth.user) {
      navigation.navigate('HomeNav');
    }
  }, [Auth]);

  const initialValues: MyFormValues = {
    email: '',
    password: '',
  };
  return (
    <View style={SignUpStyles.container}>
      <Title
        title={Constants.title1}
        subtitle={Constants.title2}
        styling={titleStyleControlProps}
      />
      <Title
        title={Constants.subtitle3}
        subtitle={Constants.subtitle4}
        styling={subtitleStyleControlProps}
      />
      <View style={SignUpStyles.subContainer}>
        <Formik
          initialValues={initialValues}
          onSubmit={values => sign_in_fetch(values)}>
          {({values, handleChange, errors, handleSubmit}) => (
            <>
              <CustomInput
                isIcon={true}
                onChangeText={handleChange('email')}
                value={values.email}
                iconProps={mailIconControlProps}
                styling={inputStyleControlProps}
                placeholder="E-Mail"
              />
              <CustomInput
                isIcon={true}
                onChangeText={handleChange('password')}
                value={values.password}
                iconProps={lockIconControlProps}
                styling={inputStyleControlProps}
                placeholder="Password"
                secureTextEntry={true}
              />
              <CustomButton
                styling={SignUpBtnControlProps}
                title="Sign In"
                onPress={handleSubmit}
              />
            </>
          )}
        </Formik>
      </View>
      <Line />
      <View style={SignUpStyles.bottomContainer}>
        <Text style={SignUpStyles.bottomText}>{Constants.accountAffirm}</Text>
        <CustomButton
          styling={SignInGoBtnControlProps}
          title="Sign Up"
          onPress={() => navigation.navigate('Signup')}
        />
      </View>
    </View>
  );
};
const mapStateToProps = (state: any) => {
  return {
    Auth: state.Auth,
  };
};
const mapDispatchToProps = {
  sign_in_fetch,
};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
