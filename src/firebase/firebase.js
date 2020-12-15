import Firebase from 'firebase';

const firebaseConfig = {
   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
   appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Init firebase
try {
   Firebase.initializeApp(firebaseConfig);
} catch (err) {
   console.log(err);
}

const database = Firebase.database();

export { Firebase, database as default };

//
//
/// EXAMPLES
//
//

// const db = Firebase.database();

// db.ref('expenses').on('value', (snapshot) => {
//    const expenses = [];
//    snapshot.forEach((childSnapshot) => {
//       expenses.push({
//          id: childSnapshot.key,
//          ...childSnapshot.val(),
//       });
//    });
//    console.log(expenses);
// });

// db.ref('expenses')
//    .once('value')
//    .then((snapshot) => {
//       const expenses = [];
//       snapshot.forEach((childSnapshot) => {
//          expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val(),
//          });
//       });
//       console.log(expenses);
//    });

// db.ref('expenses').push({
//    description: 'Gas',
//    note: 'Methane ozydazer',
//    amount: 502200,
//    createdAt: 7730000,
// });
// db.ref()
//    .set({
//       name: 'Sampsa',
//       number: 69,
//       boom: { location: 'boom!' },
//       isHandsome: true,
//    })
//    .then(() => console.log('Completed!'))
//    .catch((e) => console.log('Failed... ', e));

// db.ref('isHandsome')
//    .remove()
//    .then(() => console.log('Completed!'))
//    .catch((e) => console.log('Failed... ', e));
