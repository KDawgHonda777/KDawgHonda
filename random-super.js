/*
 * Nightbot command:
 * !editcom -ul=everyone -cd=30 !sports $(eval randomCar(); $(urlfetch json https://raw.githubusercontent.com/KDawgHonda777/KDawgHonda/main/random-sports-john.js);)
 */
function randomCar() {
  var cars = [
    "Weaponized Ingus",
    "Cyclone II",
    "Emerus",
    "Deveste Eight", 
    "Krieger",
    "Vagner", 
    "S80RR", 
    "Thrax", 
    "RE-7B", 
    "XA-21", 
    "Autarch", 
    "Tempesta", 
    "Zentorno", 
    "Nero Custom", 
    "Visione", 
    "X80 Proto", 
    "ETR1", 
    "Tezeract", 
    "T20", 
    "Tyrant", 
    "Osiris", 
    "Tyrus", 
    "FMJ", 
    "Itali GTB", 
    "Cyclone", 
    "Turismo R", 
    "Entity XF", 
    "Penetrator", 
    "Reaper", 
    "Itali GTB Custom", 
    "Infernus", 
    "811", 
    "GP1", 
    "Entity XXR", 
    "Sultan RS V", 
    "Sultan RS", 
    "Banshee 900R", 
    "Champion V", 
    "Champion", 
    "Adder", 
    "Taipan"
  ];
  var i = Math.floor(Math.random() * cars.length);
  return cars[i];
}
