import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp({
    /// この間を自分のアプリ情報に変える
    apiKey: 'AIzaSyCBzSqtMkB5VIoNRvrMq4_9BCPYIPky7Hk',
    authDomain: 'dietcom-befe2.firebaseapp.com',
    databaseURL: 'https://dietcom-befe2-default-rtdb.firebaseio.com',
    projectId: 'dietcom-befe2',
    storageBucket: 'dietcom-befe2.appspot.com',
    messagingSenderId: '531479964201',
    appId: '1:531479964201:web:3315c620bf69e3d3160a38',
    measurementId: 'G-DWHWN3QS0N',
    // -------------------------------
  })
}

export default firebase
