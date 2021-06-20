import React from 'react';
import {View, Text} from 'react-native';
import {SignUpStyles} from '@src/utils/styles';
import {Constants} from '@src/utils/constants';
import Title from '@src/components/SignUp/Title';
import CustomInput from '@src/components/shared/CustomInput';
import CustomButton from '@src/components/shared/CustomButton';
import Line from '@src/components/SignUp/Line';
import {
  titleStyleControlProps,
  subtitleStyleControlProps,
  personIconControlProps,
  inputStyleControlProps,
  mailIconControlProps,
  lockIconControlProps,
  SignUpBtnControlProps,
  SignInGoBtnControlProps,
} from './controlledProps';
import {Formik} from 'formik';
import {connect} from 'react-redux';
import {sign_up_fectch} from '@src/store/actions';

interface MyFormValues {
  name: string;
  email: string;
  password: string;
  repeatpassword: string;
}
const SignUp: React.FC<{
  navigation: any;
  sign_up_fectch: any;
  Auth: any;
}> = ({navigation, sign_up_fectch, Auth}) => {
  const initialValues: MyFormValues = {
    name: '',
    email: '',
    password: '',
    repeatpassword: '',
  };
  return (
    <View style={SignUpStyles.container}>
      <Title
        title={Constants.title1}
        subtitle={Constants.title2}
        styling={titleStyleControlProps}
      />
      <Title
        title={Constants.subtitle1}
        subtitle={Constants.subtitle2}
        styling={subtitleStyleControlProps}
      />
      <View style={SignUpStyles.subContainer}>
        <Formik
          initialValues={initialValues}
          onSubmit={values => sign_up_fectch(values)}>
          {({values, handleChange, errors, handleSubmit}) => (
            <>
              <CustomInput
                isIcon={true}
                onChangeText={handleChange('name')}
                value={values.name}
                iconProps={personIconControlProps}
                styling={inputStyleControlProps}
                placeholder="Name"
              />
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
              <CustomInput
                isIcon={true}
                onChangeText={handleChange('repeatpassword')}
                value={values.repeatpassword}
                iconProps={lockIconControlProps}
                styling={inputStyleControlProps}
                placeholder="Repeat Password"
                secureTextEntry={true}
              />
              <CustomButton
                styling={SignUpBtnControlProps}
                title="Sign Up"
                onPress={handleSubmit}
              />
            </>
          )}
        </Formik>
      </View>
      <Line />
      <View style={SignUpStyles.bottomContainer}>
        <Text style={SignUpStyles.bottomText}>{Constants.accountQuestion}</Text>
        <CustomButton
          styling={SignInGoBtnControlProps}
          title="Sign In"
          onPress={() => navigation.navigate('Signin')}
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
const mapDispatchToProps = {sign_up_fectch};
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
