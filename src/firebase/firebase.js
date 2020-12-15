import Firebase from 'firebase';

const firebaseConfig = {
   apiKey: 'AIzaSyB3TrQDaPH_U7dn5SjngK0aQStLhr_31eY',
   authDomain: 'expensify-e9230.firebaseapp.com',
   databaseURL: 'https://expensify-e9230-default-rtdb.europe-west1.firebasedatabase.app',
   projectId: 'expensify-e9230',
   storageBucket: 'expensify-e9230.appspot.com',
   messagingSenderId: '550358023096',
   appId: '1:550358023096:web:64b56864671b271b9eed4d',
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
