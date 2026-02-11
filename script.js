// Select dice images
var dice1 = document.querySelectorAll('img')[0];
var dice2 = document.querySelectorAll('img')[1];
var heading = document.querySelector("h1");

// Add rolling animation class
dice1.classList.add("rolling");
dice2.classList.add("rolling");
heading.innerHTML = "🎲 Rolling... 🎲";

// Generate random numbers
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Counter for animation frames
var rollCount = 0;
var maxRolls = 10; // Number of animation cycles

// Rolling animation - cycle through dice images
var rollInterval = setInterval(function() {
    // Generate temporary random numbers for animation
    var tempNum1 = Math.floor(Math.random() * 6) + 1;
    var tempNum2 = Math.floor(Math.random() * 6) + 1;
    
    // Update dice images rapidly during animation
    dice1.setAttribute("src", "images/dice" + tempNum1 + ".png");
    dice2.setAttribute("src", "images/dice" + tempNum2 + ".png");
    
    rollCount++;
    
    // Stop animation after maxRolls cycles
    if (rollCount >= maxRolls) {
        clearInterval(rollInterval);
        
        // Remove rolling animation
        dice1.classList.remove("rolling");
        dice2.classList.remove("rolling");
        
        // Set final dice values
        var randomImageSource1 = "images/dice" + randomNumber1 + ".png";
        var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
        dice1.setAttribute("src", randomImageSource1);
        dice2.setAttribute("src", randomImageSource2);
        
        // Determine winner and update heading
        if (randomNumber1 > randomNumber2) {
            heading.innerHTML = "🚩 Player 1 Wins!";
            dice1.classList.add("winner");
        } else if (randomNumber2 > randomNumber1) {
            heading.innerHTML = "Player 2 Wins! 🚩";
            dice2.classList.add("winner");
        } else {
            heading.innerHTML = "🤝 Draw!";
        }
    }
}, 100); // Animation speed (100ms per frame)
