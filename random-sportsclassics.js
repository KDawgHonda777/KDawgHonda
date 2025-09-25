/*
 * Nightbot command:
 * !editcom -ul=everyone -cd=30 !sports $(eval randomCar(); $(urlfetch json https://raw.githubusercontent.com/KDawgHonda777/KDawgHonda/main/random-sports.js);)
 */
function randomCar() {
  var cars = [
    "Turismo Classic", 
    "Stirling GT", 
    "Uranus LozSpeed", 
    "LSCM Cheetah Classic", 
    "Cheetah Classic", 
    "Ardent", 
    "Rapid GT Classic", 
    "Pathetic Easy Mode Mk II", 
    "Infernus Classic", 
    "Torero", 
    "Viseris", 
    "Zion Classic", 
    "Savestra", 
    "Retinue", 
    "Z-Type", 
    "Pigalle", 
    "190z", 
    "Monroe", 
    "Coquette Classic", 
    "Cheburek", 
    "Mamba", 
    "Michelli GT", 
    "Stinger GT", 
    "Roosevelt Valor", 
    "Fränken Stange", 
    "Roosevelt", 
    "Fagaloa", 
    "Tornado Custom", 
    "Peyote", 
    "Mariachi Tornado"
  ];
  var i = Math.floor(Math.random() * cars.length);
  return cars[i];
}
