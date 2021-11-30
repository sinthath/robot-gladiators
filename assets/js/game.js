

// fight function with parameter for enemy name
var fight = function(enemy) {
  // repeat and execute as long as the enemy-robot is alive
  while(playerInfo.health > 0 && enemy.health > 0) { 
  // ask player to fight or run
  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
  
  // if player choses to skip
  if (promptFight === "skip" || promptFight === "SKIP") {
    //confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you want to quit?");
//0
    // if yes (true), leave fight
    if (confirmSkip) {
    window.alert(playerInfo.name + " has decided to skip the fight. Goodbye!");
    //subtract money from playerInfo.money for skipping
    playerInfo.money = Math.max(0, playerInfo.money - 10);
    console.log("playerInfo.money", playerInfo.money);
    break;
   }
  }
  // if player choses to fight, then fight
  //  if (promptFight === "fight" || promptFight === "FIGHT") {


  // generate random damage value based on player's attack power
  var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

  enemy.health = Math.max(0, enemy.health - damage);
  // Log a resulting message to the console so we know that it worked.
  console.log(
    playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
  );

  //check enemy's health
  if (enemy.health <= 0) {
      window.alert(enemy.name + " has died!");

      //give player money for winning
      playerInfo.money = playerInfo.money + 20;

      //leave while loop because enemy has died
      break;
  } else {
      window.alert(enemy.name + " still has " + enemy.health + " health left.");
  }

  // generate random damage value based on player's attack power
  var damage = randomNumber(enemy.attack - 3, enemy.attack);

  playerInfo.health = Math.max(0, playerInfo.health - damage);
console.log(
  enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
);

  // check player's health
  if (playerInfo.health <= 0) {
  window.alert(playerInfo.name + " has died!");
  break;
} else {
  window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
   }
  }
};

var startGame = function() {
  // reset player stats
  playerInfo.reset();

  // fight the enemy robot by looping them one at a time
  for(var i = 0; i < enemyInfo.length; i++) {
    //if player is alive keep fighting
    if (playerInfo.health > 0) {
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

      var pickedEnemyObj = enemyInfo[i];
      
      //reset enemy health
      pickedEnemyObj.health = randomNumber(40, 60);
      //pass enemy.name variable to the fight function
      fight(pickedEnemyObj);

      // if not the last enemy in the array
      if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
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
  if (playerInfo.health > 0) {
    window.alert("You survived. You have a score of " + playerInfo.money + ".");
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
      playerInfo.refillHealth();
      break;
    case "UPGRADE": // new case
    case "upgrade":
      playerInfo.upgradeAttack();  
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

var playerInfo = {
  name: window.prompt("What is your robot's name?"),
  health: 100,
  attack: 10,
  money: 10,
  reset: function() {
    this.health = 100;
    this.money = 10;
    this.attack = 10;
  }, // comma!
  refillHealth: function() {
    if (this.money >= 7) {
    window.alert("Refilling player's health by 20 for 7 dollars.")  
    this.health += 20;
    this.money -= 7;
    }
    else {
      window.alert("You don't have enough money!");
    }
  }, // comma!
  upgradeAttack: function() {
    if (this.money >= 7) {
      window.alert("Upgrading player's attack by 6 for 7 dollars.")
      this.attack += 6;
      this.money -= 7;
    }
    else {
      window.alert("You don't have enough money!");
    }
  }
};
  
  var enemyInfo = [
    {
      name: "Roberto",
      attack: randomNumber(10,14)
    },
    {
      name: "Amy Android",
      attack: randomNumber(10.14)
    },
    {
      name: "Robo Trumble",
      attack: randomNumber(10,14)
    }
  ];

//start the game when the page loads
startGame();