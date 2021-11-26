/*
 * Nightbot command:
 * !editcom -ul=everyone -cd=30 !muscle $(eval randomCar(); $(urlfetch json https://raw.githubusercontent.com/KDawgHonda777/KDawgHonda/main/random-muscle-john.js);)
 */
function randomCar() {
  var cars = [
    "Dominator ASP",
    "Dominator GTT",
    "Yosemite",
    "Pisswasser Dominator",
    "Sabre Turbo Custom",
    "Clique",
    "Drift Yosemite",
    "Impaler",
    "Dominator GTX",
    "Dominator",
    "Blade",
    "Tulip",
    "Dukes",
    "Coquette Blackfin",
    "Vamos",
    "Gauntlet Hellfire",
    "Ruiner",
    "Duke O'Death",
    "Sabre Turbo",
    "Beater Dukes",
    "Gauntlet Classic Custom",
    "Deviant",
    "Hermes",
    "Burger Shot Stallion",
    "Redwood Gauntlet",
    "Slamvan Custom",
    "Tampa",
    "Phoenix",
    "Stallion",
    "Hustler",
    "Buccaneer Custom",
    "Buccaneer",
    "Vigero",
    "Ellie",
    "Peyote Gasser",
    "Lurcher",
    "Faction Custom Donk",
    "Picador",
    "Hotknife",
    "Lost Slamvan",
    "Voodoo Custom",
    "Rat-Truck",
    "Rat-Loader",
    "Slamvan"
  ];
  var i = Math.floor(Math.random() * cars.length);
  return cars[i];
}
