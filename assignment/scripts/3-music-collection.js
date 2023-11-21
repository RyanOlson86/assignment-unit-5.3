console.log("***** Music Collection *****");
// Safe Zone -- Write code below this line
let myCollection = [];

function addToCollection(collection, title, artist, yearPublished) {
  const newAddition = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
  }; // create object with title, artist, and yearPublished
  collection.push(newAddition); // push object to collection
  return newAddition; // output object to function call
} // end addToCollection function

function showCollection(collection) {
  for (let i = 0; i < collection.length; i++) {
    console.log(
      `${collection[i].title} by ${collection[i].artist}, published in ${collection[i].yearPublished}`
    );
  } //end for loop
} // end showCollection function

function findByArtist(collection, artist) {
  let results = [];
  for (let album of collection) {
    if (album.artist === artist) {
      results.push(album);
    }
  }
  return results;
}

//Function for advanced search
function search(collection, searchCriteria) {
  let searchResults = [];
  if (
    typeof searchCriteria === "undefined" ||
    searchCriteria === "" ||
    searchCriteria.artist == "" ||
    searchCriteria.year == ""
  ) {
    searchResults = collection;
    return searchResults;
  } // return input collection if no search object, object is empty or missing artist/year
}
// Coding for testing addToCollection;
console.log("Starting collection", myCollection);
console.log(addToCollection(myCollection, "Chief", "Eric Church", "2011"));
console.log(addToCollection(myCollection, "Carolina", "Eric Church", "2009"));
console.log(addToCollection(myCollection, "Blacksheep", "Yelawolf", "2021"));
console.log(
  addToCollection(myCollection, "Licensed to Ill", "Beastie Boys", "1986")
);
console.log(
  addToCollection(myCollection, "Americana", "The Offspring", "1998")
);
console.log(addToCollection(myCollection, "Sunset Man", "James Otto", "2008"));
console.log(myCollection);

//Test for showCollection function
showCollection(myCollection);

// Test for findByArtist
console.log(
  "Test for findByArtist for Eric Church (expect array with 2 objects):",
  findByArtist(myCollection, "Eric Church")
);
console.log(
  "Test for artist not in collection (expect empty array):",
  findByArtist(myCollection, "Tim")
);

//Test for advanced search
console.log("--- Test for search function ---");
console.log("test missing object", search(myCollection));
console.log("test empty object", search(myCollection, {}));
console.log("test complete object", search(myCollection, { artist: "Eric Church", year: "2011" }));
console.log("test missing artist", search(myCollection, { artist: "", year: "2011" }));
console.log("test missing year", search(myCollection, { artist: "Eric Church", year: "" }));

// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection:
      typeof myCollection !== "undefined" ? myCollection : undefined,
    addToCollection:
      typeof addToCollection !== "undefined" ? addToCollection : undefined,
    showCollection:
      typeof showCollection !== "undefined" ? showCollection : undefined,
    findByArtist:
      typeof findByArtist !== "undefined" ? findByArtist : undefined,
    search: typeof search !== "undefined" ? search : undefined,
  };
} catch (e) {
  // Do nothing
}
