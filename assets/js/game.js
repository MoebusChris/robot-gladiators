var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playermoney = 10;

// check to see if the value of the playerHealth variable is greater than 0
if (playerHealth > 0) {
    console.log("Your player is still alive.");
}

var playerAttack = 10;

var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"];
var enemyHealth = "50";
var enemyAttack = "12";

console.log(enemyNames[0]);
console.log(enemyNames[1]);
console.log(enemyNames[2]);

for(var i = 0; i < 3; i++) {
    console.log("apple", i);
}

for(var i = 0; i < enemyNames.length; i++) {
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + " is at " + i + " index");
}


var fight = function(enemyName) {
    window.alert("Welcome to Robot Gladiators!");
    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
        enemyHealth = enemyHealth - playerAttack;
    
    // Log a resulting message to the console so we know that it worked.
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        playerHealth = playerHealth - enemyAttack;

    // Log a resulting message to the console so we know that it worked.
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
};

var promptFight = window.prompt("Would you like to Fight or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");



/*-------------- function scetion -----------------*/

fight();

console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remainging."
);

//check the enemy's health.
if (enemyHealth <=0) {
    window.alert(enemyName + " has died! ");
}
else {
    window.alert(enemyName + " still has " + enemyHealth + " health remaing.");
}

console.log (
    enemyName + " attacked " + ". " + playerName + " now has " + playerHealth + " health remaining."
);

//check player's health
if (playerHealth <= 0) {
    window.alert(playerName + " has died! ");
}
else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
}

if (promptFight ==-"fight" || promptFight === "FIGHT") {
    //remove enemy's health bt sub amout
    enemyHealth = enemyHealth - playerAttack;
    console.log(
        playerName + " attacked" + enemyName + " now has " + enemyHealth + " health remaining."
    );

    //check enemy's health
    if (enemyHealth <=0) {
        window.alert(enemyName + " has died! ");
    } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    //remove player's health by sub the amount of enemyAttack
    playerHealth = playerHealth - enemyAttack;
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
    //check player's health
    if (playerHealth <= 0) {
        window.alert (playerName + " had died!");
    } else {
        window.alert(playerName + " still has " + playerHealth + " Health left.");
    }
    //if player chose to skip
}   else if (promptFight === "skip" || promptFight === "SKIP") {
    //confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    //if yes (true), leave fight
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        //subtract money
        playermoney = playermoney - 2;
    }
    //if no (false), ask question again by running fight()
    else {
        fight();
    }
}   

for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}
