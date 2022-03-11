var gen = prompt("which genaration? 1-8");
var lvl = prompt("Pokémon level? 1-100");
var crit = prompt("critical hit? y/n");
var pwr = prompt("Move power?");
var atk = prompt("Pokémon attack?");
var def = prompt("Pokémon defense?");
var atkchange = prompt("Pokémon attack stat change, for example swords dance");
var defchange = prompt("Pokémon defense stat change, for example iron defense");
var br = prompt("Is the battle played in battle royals?");
var targets = prompt("How many targets of the attack?");
var atktype = prompt("What type/types are the attacking pokémon?");
var move = prompt("What is the type of the move?");
var movetype = prompt("What type is the move? ph/sp");
var deftype = prompt("What type/types are the defending pokémon?");
var weather = prompt("Current weather condition");
var eff = prompt("effectiveness? super=2 or 4, not very=0.5 or 0.25, no=0, neutral=1");
if(movetype == "ph") {
  var burn = prompt("Is the attacking pokémon burned? y/n")
} else {
  var burn = "n"
}
if(burn == "y") {
  burn = 0.5
} else {
  burn = 1
}
var item = prompt("Multipliers caused by items. For example the metronome")
var ability = prompt("Multipliers caused by abilities. For example multiscale")
var movemult = prompt("Multipliers caused by moves. For example reflect")
if(atktype.includes(move)) {
  var adpt = prompt("Does the attacking pokémon get a bonus from the 'adaptability' ability")
  if(adpt == "y") {
    var stab = 2
  } else {
    var stab = 1.5
  }
} else {
  var stab = 1
}
if(weather == "sandstorm") {
  if(deftype == "rock"){
    def = Math.round(def * 1.5)
  }
}
if(crit == "y"){
  if(gen == 2) {
    atkchange = 0
  } else if(atkchange < 0) {
    atkchange = 0
  }
}
if(crit == "y"){
  if(gen == 2) {
    defchange = 0
  } else if(defchange > 0) {
    defchange = 0
  }
}
if(crit == "y") {
  if(gen == 1){
    lvl = (lvl * 2)
    crit = 1
  } else if(gen < 6) {
    crit = 2
  } else {
    crit = 1.5
  }
} else if(crit == "n") {
  crit = 1
}
if(br == "y") {
  if(targets > 1) {
    targets = 0.5
  } else {
    targets = 1
  }
} else if(targets > 1) {
  targets = 0.75
} else {
  targets = 1
}
var thing = "Do you have the "
var text = thing.concat(move, "badge")
if(gen == 2) {
  var badge = prompt(text)
} else {
  var badge = "n"
}
if(badge == "y") {
  badge = 1.25
} else {
  badge = 1
}
if(weather == "sun") {
  if(move == "fire") {
    weather = 2
  } else if(move == "water") {
    weather = 0.5
  } else {
    weather = 1
  }
} else if(weather == "rain") {
  if(move == "water") {
    weather = 2
  } else {
    weather = 1
  }
} else {
  weather = 1
}
var other = (item * ability * movemult)
if(gen == 2) {
  if(crit == 2) {
      var Damage = ((((((((2 * lvl) / 5) + 2) * pwr * (atk / def)) / 50) * crit) + 2) * targets * weather * badge * stab * eff * burn * other)
  }
}
if(atkchange == -6) {
  atk = ((atk * 2) / 8)
} else if(atkchange == -5) {
  atk = ((atk * 2) / 7)
} else if(atkchange == -4) {
  atk = ((atk * 2) / 6) 
} else if(atkchange == -3) {
  atk = ((atk * 2) / 5)
} else if(atkchange == -2) {
  atk = ((atk * 2) / 4)
} else if(atkchange == -1) {
  atk = ((atk * 2) / 3)
} else if(atkchange == 1) {
  atk = ((atk * 3) / 2)
} else if(atkchange == 2) {
  atk = ((atk * 4) / 2)
} else if(atkchange == 3) {
  atk = ((atk * 5) / 2)
} else if(atkchange == 4) {
  atk = ((atk * 6) / 2)
} else if(atkchange == 5) {
  atk = ((atk * 7) / 2)
} else if(atkchange == 6) {
  atk = ((atk * 8) / 2)
}
if(defchange == -6) {
  def = ((def * 2) / 8)
} else if(defchange == -5) {
  def = ((def * 2) / 7)
} else if(defchange == -4) {
  def = ((def * 2) / 6) 
} else if(defchange == -3) {
  def = ((def * 2) / 5)
} else if(defchange == -2) {
  def = ((def * 2) / 4)
} else if(defchange == -1) {
  def = ((def * 2) / 3)
} else if(defchange == 1) {
  def = ((def * 3) / 2)
} else if(defchange == 2) {
  def = ((def * 4) / 2)
} else if(defchange == 3) {
  def = ((def * 5) / 2)
} else if(defchange == 4) {
  def = ((def * 6) / 2)
} else if(defchange == 5) {
  def = ((def * 7) / 2)
} else if(defchange == 6) {
  def = ((def * 8) / 2)
}
if(gen == 2) {
  if(crit == 1) {
      var Damage = ((((((((2 * lvl) / 5) + 2) * pwr * (atk / def)) / 50) * crit) + 2) * targets * weather * badge * stab * eff * burn * other)
  }
}
if(gen != 2) {
    var Damage = (((((((2 * lvl) / 5) + 2) * pwr * (atk / def)) / 50) + 2) * targets * weather * badge * crit * stab * eff * burn * other)
}
var thing2 = "You will deal between "
var thing3 = ((Damage / 20) * 17)
var FinalDamage = thing2.concat(thing3," and ",Damage," damage depending on your luck.")
alert(FinalDamage)