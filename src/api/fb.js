import firebase from 'firebase/app'
import 'firebase/firestore'

const config = {
  apiKey: "AIzaSyB0T3KzJKHegY45l62wV925cp5l1z71Hgc",
  authDomain: "mobx-demo-shop.firebaseapp.com",
  databaseURL: "https://mobx-demo-shop.firebaseio.com",
  projectId: "mobx-demo-shop",
  storageBucket: "mobx-demo-shop.appspot.com",
  messagingSenderId: "695899721309",
  appId: "1:695899721309:web:17405c359dab0a430887b4",
  measurementId: "G-XVNJNTEZ9X"
};

firebase.initializeApp(config)
// firebase.analytics()

export default firebase