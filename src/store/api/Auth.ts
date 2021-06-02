import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
interface MyFormValues {
  name: string;
  email: string;
  password: string;
  repeatpassword: string;
}
interface MySigninValues {
  email: string;
  password: string;
}
export const SignUp = (
  payload: MyFormValues,
): Promise<FirebaseAuthTypes.UserCredential> => {
  return auth().createUserWithEmailAndPassword(payload.email, payload.password);
};

export const SignIn = (
  payload: MySigninValues,
): Promise<FirebaseAuthTypes.UserCredential> => {
  return auth().signInWithEmailAndPassword(payload.email, payload.password);
};
