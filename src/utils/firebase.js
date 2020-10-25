import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/performance'
import 'firebase/analytics'

const config = {
  apiKey: 'YOUR-API-KEY',
  authDomain: 'YOUR-AUTH-DOMAIN',
  databaseURL: 'YOUR-DATABASE-URL',
  projectId: 'YOUR-PRODUCT-ID',
  storageBucket: 'YOUR-STORAGE-BUCKET',
  messagingSenderId: 'YOUR-MESSAGING-SENDER-ID',
  appId: 'YOUR-APP-ID',
}

firebase.initializeApp(config)
firebase.analytics()

export const auth = firebase.auth()
export const storage = firebase.storage().ref()
export const performance = firebase.performance()

export default firebase
