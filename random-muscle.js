/*
 * Nightbot command:
 * !editcom -ul=everyone -cd=30 !muscle $(eval randomCar(); $(urlfetch json https://raw.githubusercontent.com/KDawgHonda777/KDawgHonda/main/random-muscle.js);)
 */
function randomCar() {
  var cars = [
    "Vigero ZX", 
    "Buffalo EVX", 
    "Buffalo STX",
    "Weevil Custom", 
    "Dominator ASP",
    "Dominator GTT",
    "Yosemite",
    "Pisswasser Dominator",
    "Arbiter GT",
    "Sabre Turbo Custom",
    "Clique",
    "Ruiner ZZ-8", 
    "Drift Yosemite",
    "Dominator GTX",
    "Blade",
    "Dukes",
    "Coquette Blackfin",
    "Vamos",
    "Gauntlet HellDawg",
    "Ruiner",
    "Duke O'Death",
    "Sabre Turbo",
    "Gauntlet Classic Custom",
    "Tahoma Coupe", 
    "Hermes",
    "Burger Shot Stallion", 
    "Tulip M-100", 
    "Redwood Gauntlet",
    "Slamvan Custom",
    "Tampa",
    "Phoenix",
    "Hustler",
    "Buccaneer Custom",
    "Gauntlet Classic",
    "Vigero",
    "Ellie",
    "Nightshade",
    "Eudora", 
    "Picador",
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
