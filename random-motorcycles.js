/*
 * Nightbot command:
 * !editcom -ul=everyone -cd=30 !motorcycles $(eval randomCar(); $(urlfetch json https://raw.githubusercontent.com/KDawgHonda777/KDawgHonda/main/random-motorcycles.js);)
 */
function randomCar() {
  var cars = [
    "Hakuchou Drag", 
    "Powersurge", 
    "Shotaro", 
    "Shinobi", 
    "Bati 801RR", 
    "Bati 801", 
    "Akuma", 
    "Reever", 
    "Double-T", 
    "Hakuchou", 
    "Carbon RS", 
    "Vortex", 
    "FCR 1000 Custom", 
    "Ruffian", 
    "Cliffhanger", 
    "Gargoyle", 
    "Diabolus Custom", 
    "BF 400", 
    "Sanctus", 
    "Nightblade", 
    "Sanchez", 
    "Sanchez (Livery)", 
    "Innovation", 
    "Esskey", 
    "Sovereign", 
    "PCJ 600", 
    "Manchez Scout", 
    "Avarus", 
    "Zombie Chopper", 
    "Zombie Bobber", 
    "Daemon", 
    "Enduro", 
    "Pizza Boy", 
    "Faggio"
  ];
  var i = Math.floor(Math.random() * cars.length);
  return cars[i];
}
