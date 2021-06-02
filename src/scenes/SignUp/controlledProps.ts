import {SignUpStyles, Colors} from '@src/utils/styles';

const titleStyleControlProps = {
  Container: SignUpStyles.titleContainer,
  Title: SignUpStyles.title,
  Subtitle: SignUpStyles.subTitle,
};
const subtitleStyleControlProps = {
  Container: {marginTop: 40},
  Title: SignUpStyles.title2,
  Subtitle: SignUpStyles.subTitle2,
};
const personIconControlProps = {
  library: 'Ionicons',
  name: 'person',
  size: 20,
  color: '#fdd000',
  styling: SignUpStyles.inputIcon,
};
const mailIconControlProps = {
  library: 'Ionicons',
  name: 'mail',
  size: 20,
  color: '#fdd000',
  styling: SignUpStyles.inputIcon,
};
const lockIconControlProps = {
  library: 'Ionicons',
  name: 'lock-closed',
  size: 20,
  color: '#fdd000',
  styling: SignUpStyles.inputIcon,
};
const inputStyleControlProps = {
  Container: SignUpStyles.inputContainer,
  Input: SignUpStyles.input,
};

const SignUpBtnControlProps = {
  Container: SignUpStyles.btnPrimary,
  Title: {color: Colors.white, fontWeight: 'bold', fontSize: 18},
};
const SignInGoBtnControlProps = {
  Container: {},
  Title: {color: Colors.yellow, fontWeight: 'bold', marginHorizontal: 5},
};
export {
  titleStyleControlProps,
  subtitleStyleControlProps,
  personIconControlProps,
  inputStyleControlProps,
  mailIconControlProps,
  lockIconControlProps,
  SignUpBtnControlProps,
  SignInGoBtnControlProps,
};
