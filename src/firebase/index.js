import firebase from 'firebase';
// import 'firebase/firestore';

// firebase init goes here
const config = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  projectId: `${process.env.projectId}`,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
};
firebase.initializeApp(config);

// firebase utils
const db = firebase.firestore();

// firebase collections
const habitsCollection = db.collection('habits');

export { db, habitsCollection };
