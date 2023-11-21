console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line
let myCollection = [];

function addToCollection( collection, title, artist, yearPublished){
  const newAddition = {title: title, artist: artist, yearPublished: yearPublished};
  collection.push(newAddition);
  console.log('New album added to collection: ', newAddition);
  return newAddition;
}

// Coding for testing addToCollection;
console.log('Starting collection', myCollection);
console.log(myCollection.length);
addToCollection(myCollection, 'Chief', 'Eric Church', '2011');
console.log('Collection after 1 add:', myCollection);
console.log(myCollection.length);
addToCollection(myCollection, 'Carolina', 'Eric Church', '2009');
console.log('Collection after 1 add:', myCollection);
console.log(myCollection.length);







// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
