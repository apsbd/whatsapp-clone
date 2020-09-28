import * as firebase from 'firebase'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: 'AIzaSyDwci_QZsVP1Aid1JzdhZ9_bg43I6PK6rA',
    authDomain: 'whatsapp-clone-c02d0.firebaseapp.com',
    databaseURL: 'https://whatsapp-clone-c02d0.firebaseio.com',
    projectId: 'whatsapp-clone-c02d0',
    storageBucket: 'whatsapp-clone-c02d0.appspot.com',
    messagingSenderId: '81434704521',
    appId: '1:81434704521:web:771b6a30f63ff38abf2458',
}

firebase.initializeApp(firebaseConfig)

const fireStore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider, fireStore, timestamp }
