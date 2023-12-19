import { initializeApp, getApps, FirebaseApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore, Firestore } from 'firebase/firestore'
import { getAuth, Auth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECTID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINGSENDERID,
  appId: process.env.NEXT_PUBLIC_APPID,
}

let firebaseApp = FirebaseApp
let auth = Auth
let firestore = getFirestore

if (typeof window !== 'undefined' && !getApps().length) {
  firebaseApp = initializeApp(firebaseConfig)
  auth = getAuth()
  firestore = getFirestore()
}

export { firebaseApp, auth, firestore }
