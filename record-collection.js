// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {

/* if prop not tracks
update || set album prop -> value 
- 2nd bullet */
if (prop !== 'tracks' && value !== "") {
    records[id][prop] = value;
  } 

/* if prop tracks but album have no tracks property,
create empty array && add value
3rd bullet */
else if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false) {
    records[id][prop] = [value];
  } 

/* if prop tracks && value not empty string,
add value to end of array to album's tracks 4th bullet */
else if (prop === "tracks" && value !== "") {
    records[id][prop].push(value);
  } 

/* if value is empty string,
delete given prop - last bullet */
else if (value === "") {
    delete records[id][prop];
  }

/* function always return entire record collection object*/
  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');
