/*
 * Nightbot command:
 * !editcom -ul=everyone -cd=30 !sports $(eval randomCar(); $(urlfetch json https://raw.githubusercontent.com/KDawgHonda777/KDawgHonda/main/random-sports-john.js);)
 */
function randomCar() {
  var cars = [
    "Weaponized Ingus",
    "Cyclone II",
    "Emerus",
    "Krieger",
    "Vagner", 
    "S80RR", 
    "Thrax", 
    "Ingus", 
    "RE-7B", 
    "Autarch", 
    "Deveste Eight", 
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
    "Zeno", 
    "Tyrus", 
    "Nero", 
    "FMJ", 
    "Cyclone", 
    "Turismo R", 
    "En ( . Y . ) y XF", 
    "Reaper", 
    "Itali GTB Custom", 
    "Infernus", 
    "811", 
    "En ( . Y . ) y XXR", 
    "Vacca", 
    "Sultan RS", 
    "Banshee 900R", 
    "Adder", 
    "Voltic"
  ];
  var i = Math.floor(Math.random() * cars.length);
  return cars[i];
}
