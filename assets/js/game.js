var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

// fight function with parameter for enemy name
var fight = function(enemyName) {
  // repeat and execute as long as the enemy-robot is alive
  while(playerHealth > 0 && enemyHealth > 0) { 
  // ask player to fight or run
  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
  
  // if player choses to skip
  if (promptFight === "skip" || promptFight === "SKIP") {
    //confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you want to quit?");

    // if yes (true), leave fight
    if (confirmSkip) {
    window.alert(playerName + " has decided to skip the fight. Goodbye!");
    //subtract money from playerMoney for skipping
    playerMoney = playerMoney - 10;
    console.log("playerMoney", playerMoney);
    break;
   }
  }
  // if player choses to fight, then fight
  //  if (promptFight === "fight" || promptFight === "FIGHT") {


  //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
  enemyHealth = enemyHealth - playerAttack;
  // Log a resulting message to the console so we know that it worked.
  console.log(
      playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
  );

  //check enemy's health
  if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");

      //give player money for winning
      playerMoney = playerMoney + 20;

      //leave while loop because enemy has died
      break;
  } else {
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
  break;
} else {
  window.alert(playerName + " still has " + playerHealth + " health left.");
   }
  }
};

var startGame = function() {
  // reset player stats
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;

  
  // fight the enemy robot by looping them one at a time
  for(var i = 0; i < enemyNames.length; i++) {
    //if player is alive keep fighting
    if (playerHealth > 0) {
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

      var pickedEnemyName = enemyNames[i];
      
      //reset enemy health
      enemyHealth = 50;
      //pass pickedEnemyName variable to the fight function
      fight(pickedEnemyName);

    }
    //if play has no health, stop game
    else {
      window.alert("You have lost your robot in battle! Game Over!");
      break;
    }
  }
  //after the loop ends, player is out of health or no more enemies to fight
  endGame();
}; 

// funtion to end the entire game
var endGame = function() {
  if (playerHealth > 0) {
    window.alert("You survived. You have a score of " + playerMoney + ".");
  }
  else {
    window.alert("You have lost.")
  }

  //ask player if they wish to play again
  var playAgainConfirm = window.confirm("Would you like to play again?");

  if (playAgainConfirm) {
    // restart the game
    startGame();
  }
  else {
    window.alert("Thank you for playing Robot Gladiators!")
  }
};
//start the game when the page loads
startGame();