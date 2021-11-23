var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
  // Alert players that they are starting the round  
  window.alert("Welcome to Robot Gladiators!");
  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

  // if player choses to fight, then fight
  if (promptFight === "fight" || promptFight === "FIGHT") {


  //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
  enemyHealth = enemyHealth - playerAttack;
  // Log a resulting message to the console so we know that it worked.
  console.log(
      playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
  );

  //check enemy's health
  if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
  }

  else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
  }

  // remove player's health by subtracting the amount set in the enemyAttack variable
  playerHealth = playerHealth - enemyAttack;
console.log(
  enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
);

  // check player's health
  if (playerHealth <= 0) {
  window.alert(playerName + " has died!");
} else {
  window.alert(playerName + " still has " + playerHealth + " health left.");
  

  }
}
    // if player choses to skip
  else if (promptFight === "skip" || promptFight === "SKIP") {
      //confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you want to quit?");

      // if yes (true), leave fight
      window.alert(playerName + " has decided to skip the fight. Goodbye!");
      //subtract money from playerMoney for skipping
      playerMoney = playerMoney - 2;
  }

  else {
      fight();
  }
};

for(var i = 0; i < enemyNames.length; i++) {
  fight(enemyNames[i]);
}
