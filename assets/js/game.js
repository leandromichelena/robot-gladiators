/* Data Types:

// This is a String data type; it must be wrapped in double quotes (" ") or single quotes (' ').
var stringDataType = "This is a string, which is a fancy way to say text";

// This is a Number data type; it can be an integer (whole number) or have decimals (floated numbers).
var numberIntegerDataType = 10;
var numberFloatDataType = 10.4;

// This is a Boolean data type, which can only be given a value of true or false.
var booleanDataType = true;


https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
*/


// Create the fight function
var fight = function (enemy) {
    console.log(enemy);
    
    while (playerInfo.health > 0 && enemy.health > 0) {

        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    
         // If player chooses to skip
        if (promptFight === "skip" || promptFight === "SKIP") {
            // Confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?")

            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
                // subtract money from playerInfo.money for skipping
                Math.max (0, playerInfo.money = playerInfo.money - 10); // Math.max (0, ...) ensures that the number is not bellow 0.
                console.log("playerInfo.money", playerInfo.money);
                break;
            }
            //  if no (false), ask question again by running fight() again
            else {
                fight();
            }
        } 

        // If player chooses to fight, then fight:
        else if (promptFight === "fight" || promptFight === "FIGHT") {
            // Generate random damage value based on player's attack power
            var damage = randomNumber(playerInfo.attack -3, playerInfo.attack);

            // Subtract the value of playerInfo.attack from the value of enemy.health and use that result to update the value in the enemy.health variable.
            Math.max (0,enemy.health = enemy.health - damage);
        
            // Log a resulting message to the console so we know that it worked.
            console.log(playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining.");
        
            // Check enemy's health
            if (enemy.health <= 0) {
                window.alert(enemy.name + " has died!");
                break;
            }
            else {
                window.alert(enemy.name + " still has " + enemy.health + " health left.");
            }
        
            // Generate random damage value based on enemy's attack power
            var enemyDamage = randomNumber(enemy.attack-3, enemy.attack);

            // Subtract the value of enemy.attack from the value of playerInfo.health and use that result to update the value in the playerInfo.health variable.
            Math.max (0, playerInfo.health = playerInfo.health - enemyDamage);
        
            // Log a resulting message to the console so we know that it worked.
            console.log(enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining.")
        
            // Check players health
            if (playerInfo.health <= 0) {
                window.alert(playerInfo.name + " has died!");
                break;
            }
            else {
                window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");    }
        }    
       
        // If player typed something else
        else {
            window.alert("You need to choose a valid option. Try again!");
        }
    }

}


// Run the fight function created above
// fight();

// Function to start a new game:
var startGame = function() {

    // reset player stats:
    playerInfo.reset();

    // For loop used to run the fight() function for each enemy from the list
    for (var i = 0; i < enemyInfo.length; i++) {
    
        if (playerInfo.health > 0) {
            // Alert players that they are starting the round
            window.alert("Welcome to Robot Gladiators! Round " + (i+1));
            
            // Pick new enemy to fight based on the index of the enemyInfo array
            var pickedEnemyObj = enemyInfo[i];
            
            // Reset enemy health before starting a new fight
            pickedEnemyObj.health = randomNumber(40,60);
    
            // Pass the pickedEnemyObj variable's value into the fight function, where it will assume the value of the enemyInfo.name parameter
            fight(pickedEnemyObj);

            // If we're not at the last enemy in the array
            if (i < enemyInfo.length - 1) {
                // ask player if they want to visit the store before next round
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

                // if yes, take them to the store() function
                if (storeConfirm) {
                    shop();
                };
            }
        }
        else {
            window.alert("You have lost your robot in battle. Game over!");
            break;
        }
    }

    // after the loop ends, player is either out of health or enemies to fight, so run the endGame function
    endGame();
};

// Function to end the entire game
var endGame = function() {
    // if player is still alive, player wins
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
    }
    else {
        window.alert("You've lost your robot in battle.");
    }
    window.alert("The game has now ended. Let's see how you did!");

    // ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        //restart the game
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

// Function to add the possibility to buy health or attack points
var shop = function() {
    // ask player what they'd like to do
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.") 
    // Use switch to carry out functions
    switch (shopOptionPrompt) {
        case "REFILL": // new case (equivalent to || or operator)
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
            break;
        
        default: // user didn't reply with any of the previous cases. Similar to "Else"
            window.alert("You did not pick a valid option. Try again.");
            shop();
            break;
    }
};

// Function to generate a random numeric value
var randomNumber = function (min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);
    return value;
};

// this creates an object (playerInfo) and it's properties:
var playerInfo = {
    // the Name property is assigned to the answer of the window prompt
    name: window.prompt("What is your robot's name?"),
    // this will assign the initial properties for health, attack and money for the object playerInfo
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function() {
        if (this.money >= 7) {
            this.health += 20; // takes the current value and adds 20 to it. similar to this.health = this.health + 20.
            this.money -= 7; // takes the current value and subtracts 7 from it.
        }
        else {
            window.alert("You don't have enough money!");
        }
    },
    upgradeAttack: function() {
        if (this.money >= 7) {
            this.attack += 6;
            this.money -= 7;
        }
        else {
            window.alert("You don't have enough money!");
        }
    }
};

// You can also log multiple values at once like this
// console.log(playerInfo.name, playerInfo.attack, playerInfo.health);

// Creates an array of enemy objects
var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14)
    }
];

// Start the game when the page loads
startGame();