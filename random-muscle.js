/*
 * Nightbot command:
 * !editcom -ul=everyone -cd=30 !muscle $(eval randomCar(); $(urlfetch json https://raw.githubusercontent.com/KDawgHonda777/KDawgHonda/main/random-muscle.js);)
 */
function randomCar() {
  var cars = [
    "Vigero ZX", 
    "Buffalo EVX", 
    "Buffalo STX",
    "Dominator ASP",
    "Weevil Custom", 
    "Arbiter GT", 
    "Yosemite", 
    "Dominator GTT",
    "Clique", 
    "Drift Yosemite",
    "Sabre Turbo Custom", 
    "Pisswasser Dominator",
    "Ruiner ZZ-8", 
    "Dominator GTX",
    "Dukes",
    "Blade",
    "Gauntlet HellDawg", 
    "Coquette Blackfin",
    "Ruiner", 
    "Sabre Turbo",
    "Duke O'Death", 
    "Vamos",
    "Hermes", 
    "Slamvan Custom", 
    "Gauntlet Classic Custom",
    "Tampa", 
    "Tahoma Coupe", 
    "Burger Shot Stallion", 
    "Redwood Gauntlet", 
    "Tulip M-100", 
    "Phoenix",
    "Hustler",
    "Gauntlet Classic", 
    "Buccaneer Custom",
    "Vigero",
    "Nightshade", 
    "Ellie",
    "Virgo Classic Custom", 
    "Picador",
    "Eudora", 
    "Virgo", 
    "Broadway", 
    "Lost Slamvan",
    "Chino Custom", 
    "Voodoo Custom",
    "Rat-Truck",
    "Slamvan"
  ];
  var i = Math.floor(Math.random() * cars.length);
  return cars[i];
}
