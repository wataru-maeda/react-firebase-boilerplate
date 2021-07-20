import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/performance'
import 'firebase/analytics'
import config from './config'

firebase.initializeApp(config.firebase)
firebase.analytics()

export const auth = firebase.auth()
export const storage = firebase.storage().ref()
export const performance = firebase.performance()
export const firestore = firebase.firestore()

export default firebase
