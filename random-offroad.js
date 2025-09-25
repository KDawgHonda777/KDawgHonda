/*
 * Nightbot command:
 * !editcom -ul=everyone -cd=30 !off-road $(eval randomCar(); $(urlfetch json https://raw.githubusercontent.com/KDawgHonda777/KDawgHonda/main/random-offroad.js);)
 */
function randomCar() {
  var cars = [
    "MonstroCiti", 
    "Firebolt ASP", 
    "Draugur", 
    "Vagrant", 
    "Terminus", 
    "Kamacho", 
    "Street Blazer", 
    "Ratel", 
    "Desert Raid", 
    "Trophy Truck", 
    "Nightshark", 
    "Blazer", 
    "Bifta", 
    "Dune Buggy", 
    "Brawler", 
    "Walton L35", 
    "Caracara 4x4", 
    "Yosemite 1500", 
    "Outlaw", 
    "Hellion", 
    "Boor", 
    "Yosemite Rancher", 
    "Insurgent", 
    "Injection", 
    "Dune", 
    "Dubsta 6x6", 
    "Merryweather Mesa", 
    "Patriot Mil-Spec", 
    "Rusty Rebel", 
    "Marshall", 
    "Liberator", 
    "Sandking SWB", 
    "Kalahari", 
    "Verus", 
    "Rancher XL", 
    "Duneloader"
  ];
  var i = Math.floor(Math.random() * cars.length);
  return cars[i];
}
