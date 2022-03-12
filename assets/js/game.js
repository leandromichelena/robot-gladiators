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

// this creates a variable (playerName) and assign it to the answer of the prompt:
var playerName = window.prompt("What is your robot's name?");
// this will assign the initial values for playerHealth and playerAttack
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
// console.log(playerName, playerAttack, playerHealth);

// Enemy name is defined (Roborto).
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;
// console.log(enemyName, enemyAttack, enemyHealth);

// Create the fight function
var fight = function (enemyName) {
    
    while (playerHealth > 0 && enemyHealth > 0) {

        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    
         // If player chooses to skip
        if (promptFight === "skip" || promptFight === "SKIP") {
            // Confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?")

            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                // subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            }
            //  if no (false), ask question again by running fight() again
            else {
                fight();
            }
        } 

        // If player chooses to fight, then fight:
        else if (promptFight === "fight" || promptFight === "FIGHT") {
            // Subtract the value of playerAttack from the value of enemyHealth and use that result to update the value in the enemyHealth variable.
            enemyHealth = enemyHealth - playerAttack;
        
            // Log a resulting message to the console so we know that it worked.
            console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
        
            // Check enemy's health
            if (enemyHealth <= 0) {
                window.alert(enemyName + " has died!");
                break;
            }
            else {
                window.alert(enemyName + " still has " + enemyHealth + " health left.");
            }
        
            // Subtract the value of enemyAttack from the value of playerHealth and use that result to update the value in the playerHealth variable.
            playerHealth = playerHealth - enemyAttack;
        
            // Log a resulting message to the console so we know that it worked.
            console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.")
        
            // Check players health
            if (playerHealth <= 0) {
                window.alert(playerName + " has died!");
                break;
            }
            else {
                window.alert(playerName + " still has " + playerHealth + " health left.");    }
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
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    // For loop used to run the fight() function for each enemy from the list
    for (var i = 0; i < enemyNames.length; i++) {
    
        if (playerHealth > 0) {
            // Alert players that they are starting the round
            window.alert("Welcome to Robot Gladiators! Round " + (i+1));
            
            // Pick new enemy to fight based on the index of the enemyNames array
            var pickedEnemyName = enemyNames[i];
            
            // Reset enemy health before starting a new fight
            enemyHealth = 50;
    
            // Pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter 
            fight(pickedEnemyName);
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
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
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

// Start the game when the page loads
startGame();