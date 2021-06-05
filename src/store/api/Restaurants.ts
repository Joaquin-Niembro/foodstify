import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';

export function getRestaurants(): Promise<
  FirebaseFirestoreTypes.QuerySnapshot<FirebaseFirestoreTypes.DocumentData>
> {
  return firestore().collection('restaurants').get();
}
