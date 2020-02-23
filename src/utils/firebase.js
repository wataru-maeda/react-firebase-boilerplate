import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'

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

export const auth = firebase.auth()
export const storage = firebase.storage().ref()

export default firebase
