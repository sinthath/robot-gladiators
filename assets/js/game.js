var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

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
//0
    // if yes (true), leave fight
    if (confirmSkip) {
    window.alert(playerName + " has decided to skip the fight. Goodbye!");
    //subtract money from playerMoney for skipping
    playerMoney = Math.max(0, playerMoney - 10);
    console.log("playerMoney", playerMoney);
    break;
   }
  }
  // if player choses to fight, then fight
  //  if (promptFight === "fight" || promptFight === "FIGHT") {


  // generate random damage value based on player's attack power
  var damage = randomNumber(playerAttack - 3, playerAttack);

  enemyHealth = Math.max(0, enemyHealth - damage);
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

  // generate random damage value based on player's attack power
  var damage = randomNumber(enemyAttack - 3, enemyAttack);

  playerHealth = Math.max(0, playerHealth - damage);
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
      enemyHealth = randomNumber(40, 60);
      //pass pickedEnemyName variable to the fight function
      fight(pickedEnemyName);

      // if not the last enemy in the array
      if (playerHealth > 0 && i < enemyNames.length - 1) {
        // ask if player wants to use store before next round
        var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

        // if yes, take them to the store() function
        if (storeConfirm) {
          shop();
        }        
      }
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
  window.alert("The game has now ended.  Let's see how you did!");

  // if player is still alive, player wins!
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

// got to shop between battles function
var shop = function() {
  // ask player what they would like to do
  var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");

  switch (shopOptionPrompt) {
    case "REFILL": // new case
    case "refill":
      if (playerMoney >= 7) {
      window.alert("Refilling player's health by 20 for 7 dollars.");

      // increase health and decrease money'
      playerHealth = playerHealth + 20;
      playerMoney = playerMoney - 7;
  }
      else {
    window.alert("You don't have enough money!");
      }

      break;
    case "UPGRADE": // new case
    case "upgrade":  
      if (playerMoney >= 7) {
        window.alert("Upgrading player's attack by 6 for 7 dollars.");

      // increase attack and decrease money  
      playerAttack = playerAttack + 6;
      playerMoney = playerMoney - 7;
      }
      else {
        window.alert("You don't have enough money");
      }

      break;
     case "LEAVE": // new case 
     case "leave":
      window.alert("Leaving the store."); 

      // do nothing so function ends
      break;
      default:
        window.alert("You did not pick a valid option. Try again");

      // call shop function again to force selection
      shop();
      break;  
  }
};

// function to generate a random numeric value
var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
};


//start the game when the page loads
startGame();