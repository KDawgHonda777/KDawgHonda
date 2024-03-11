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
    "Deveste Eight",
    "LM87", 
    "Vagner", 
    "Thrax", 
    "S80RR", 
    "RE-7B", 
    "Virtue", 
    "XA-21", 
    "Autarch", 
    "Tempesta", 
    'Visione", 
    "Entity MT", 
    "ETR1", 
    "X80 Proto", 
    "Tereract", 
    "T20", 
    "Osiris", 
    "Nero Custom", 
    "Tyrant", 
    "Zentorno", 
    "Tyrus", 
    "Itali GTB", 
    "Cyclone", 
    "FMJ", 
    "Turismo R", 
    "Entity XF", 
    "Penetrator", 
    "Reaper", 
    "Itali GTB Custom", 
    "Cheetah", 
    "Infernus", 
    "811", 
    "GP1", 
    "Banshee 900R", 
    "Sultan RS V", 
    "Sultan RS", 
    "Entity XXR", 
    "Adder", 
    "Champion V", 
    "Champion", 
    "Taipan", 
    "Bullet"
  ];
  var i = Math.floor(Math.random() * cars.length);
  return cars[i];
}
