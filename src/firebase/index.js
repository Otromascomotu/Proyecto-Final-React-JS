import firebase from 'firebase/app'
import 'firebase/firestore'

const app=firebase.initializeApp({
    apiKey: "AIzaSyALngWGt1BataRgB4Bq6F-Utn2D4DRdy5g",
    authDomain: "proyectofinalreactlaverde.firebaseapp.com",
    projectId: "proyectofinalreactlaverde",
    storageBucket: "proyectofinalreactlaverde.appspot.com",
    messagingSenderId: "448360332990",
    appId: "1:448360332990:web:1b113807db5abc140668ef"
});
    export function getFirebase(){
        return app;
    }

    export function getFirestore(){
        return firebase.firestore(app)
    }
