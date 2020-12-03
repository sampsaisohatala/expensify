import React from 'react';

console.log('destructuring');

//
//  Object destructuring
//

/*
const book = {
   title: 'Ego is the enemy',
   author: 'J.K Rowling',
   publisher: {
      name: 'Otava',
   },
};
const { title, author } = book;
const { name: publisherName = 'Self published' } = book.publisher;

console.log(`${title} was writting by ${author}`);
console.log(publisherName);
*/

//
//  Array destructuring
//

const address = ['Tarkka-ampujankatu 69', 'Oulu', '90120'];
const [street, city = 'Helsinki', zipcode] = address;
console.log(`${street}, ${city}, ${zipcode}`);

const item = ['Coffee', '2€', '2.5€', '2.8€'];
const [name, , mediumPrice] = item;
console.log(`${name} costs ${mediumPrice}!`);

export default function destructuring() {
   return (
      <div>
         <h1>destructuring</h1>
      </div>
   );
}
