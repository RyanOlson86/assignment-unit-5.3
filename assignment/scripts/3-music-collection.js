console.log("***** Music Collection *****");
// Safe Zone -- Write code below this line
let myCollection = [];
console.log('Starting collection:', myCollection);

// Function to collect an existing array (collection), and 3 strings (title, artist, yearPublished)
function addToCollection(collection, title, artist, yearPublished) {
  // Create newAddition object with title, artist and yearPublished
  const newAddition = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
  };
  collection.push(newAddition); // push object to collection
  return newAddition; // return object added to collection
} // end addToCollection function


// Loop to show all objects in collection as a string
function showCollection(collection) {
  for (let i = 0; i < collection.length; i++) {
    console.log(`${collection[i].title} by ${collection[i].artist}, published in ${collection[i].yearPublished}`);
  } 
} // end showCollection function

// Function to search collection by artist(string)
function findByArtist(collection, artist) {
  let results = [];
  for (let album of collection) {
    if (album.artist === artist) {
      results.push(album);
    }
  }
  return results;
}

// Function to search collection by year(string)
function findByYear(collection, year) {
  let results = [];
  for (let album of collection) {
    if (album.yearPublished === year) {
      results.push(album);
    }
  }
  return results;
}

//Function for Artist AND Year search
// Need to use Object.value to get year from searchCriteria to pass Prime test because
// yearPublished is passed to the function in some test cases
function search(collection, searchCriteria) {
  //checks if searchCriteria is empty, undefined or missing info - return full collection
  if (
    typeof searchCriteria === "undefined" ||
    Object.values(searchCriteria).length === 0 ||
    Object.values(searchCriteria)[0] == "" ||
    Object.values(searchCriteria)[1] == ""
  ) {
    return collection; // return input collection if no search object, object is empty or missing artist/year
  } else {
    let artistSearch = findByArtist(collection, Object.values(searchCriteria)[0]);
    //artistSearch is an array of objects if artist is in collection, else it is empty
    if (artistSearch.length > 0) {
      return findByYear(artistSearch, Object.values(searchCriteria)[1]);
    } else return artistSearch;
  }
}

// //Function for Artist AND Year search
// --- THIS CODE DOES NOT PASS PRIME TESTING, ALTHOUGH PASSES CONSOLE.LOG TESTING ---
// Prime test passes yearPublished to search function NOT year
//
// function search(collection, searchCriteria) {
//   //checks if searchCriteria is empty, undefined or missing info - return full collection
//   if (
//     typeof searchCriteria === "undefined" ||
//     Object.keys(searchCriteria).length === 0 ||
//     searchCriteria.artist == "" ||
//     searchCriteria.year == ""
//   ) {
//     return collection; // return input collection if no search object, object is empty or missing artist/year
//   } else {
//     let artistSearch = findByArtist(collection, searchCriteria.artist);
//     //artistSearch is an array of objects if artist is in collection, else it is empty
//     if (artistSearch.length > 0) {
//       return findByYear(artistSearch, searchCriteria.year);
//     } else return artistSearch;
//   }
// }

// Coding for testing addToCollection;
console.log('--- Start adding 6 albums to collection ---');
console.log(addToCollection(myCollection, "Chief", "Eric Church", "2011"));
console.log(addToCollection(myCollection, "Carolina", "Eric Church", "2009"));
console.log(addToCollection(myCollection, "Blacksheep", "Yelawolf", "2021"));
console.log(addToCollection(myCollection, "Licensed to Ill", "Beastie Boys", "1986"));
console.log(addToCollection(myCollection, "Americana", "The Offspring", "1998"));
console.log(addToCollection(myCollection, "Sunset Man", "James Otto", "2008"));
console.log('Collection after adding albums:', myCollection);

//Test for showCollection function
console.log('--- Test for showCollection ---');
showCollection(myCollection);

// Test for findByArtist
console.log('--- Test for findByArtist ---');
console.log("Test for Eric Church (expect array with 2 objects):", findByArtist(myCollection, "Eric Church"));
console.log("Test for artist not in collection (expect empty array):", findByArtist(myCollection, "Tim"));

//Test for advanced search
console.log("--- Test for search function ---");
console.log("test missing object(expect full collection)", search(myCollection));
console.log("test empty object(expect full collection)", search(myCollection, {}));
console.log("test missing artist(expect full collection)", search(myCollection, { artist: "", year: "2011" }));
console.log("test missing year(expect full collection)", search(myCollection, { artist: "Eric Church", year: "" }));
console.log("test Eric Church and 2011 (expect 1 result)", search(myCollection, { artist: "Eric Church", year: "2011" }));
console.log("test for Eric Church(right artist) and 1900(wrong year) (expect empty)", search(myCollection, { artist: "Eric Church", year: "1900" }));
console.log("test for Taylor Swift(wrong artist) and 2011(right year) (expect empty)", search(myCollection, { artist: "Eric Church", year: "1900" }));
console.log("test no matching artist/year(expect empty)", search(myCollection, { artist: "Taylor Swift", year: "2000" }));

// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== "undefined" ? myCollection : undefined,
    addToCollection: typeof addToCollection !== "undefined" ? addToCollection : undefined,
    showCollection: typeof showCollection !== "undefined" ? showCollection : undefined,
    findByArtist: typeof findByArtist !== "undefined" ? findByArtist : undefined,
    search: typeof search !== "undefined" ? search : undefined,
  };
} catch (e) {
  // Do nothing
}
