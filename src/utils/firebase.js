import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/performance'
import 'firebase/analytics'

const config = {
  apiKey: 'AIzaSyBBNLnLuFLMkRuiVGmqRTKRXkgEYPj2un4',
  authDomain: 'react-firebase-boilerpla-ce757.firebaseapp.com',
  databaseURL: 'https://react-firebase-boilerpla-ce757.firebaseio.com',
  projectId: 'react-firebase-boilerpla-ce757',
  storageBucket: 'react-firebase-boilerpla-ce757.appspot.com',
  messagingSenderId: '698838279601',
  appId: '1:698838279601:web:9a2229262fea8f9a490990',
}

firebase.initializeApp(config)
firebase.analytics()

export const auth = firebase.auth()
export const storage = firebase.storage().ref()
export const performance = firebase.performance()
export const firestore = firebase.firestore()

export default firebase
