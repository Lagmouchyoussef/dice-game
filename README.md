<div align="center">
  <img src="https://raw.githubusercontent.com/Lagmouchyoussef/dice-game/main/images/dice1.png" alt="Dice Logo" width="100" height="100">
  
  <h1>🎲 Dice Game</h1>
  
  <p><strong>A Dynamic Two-Player Dice Game Built with Vanilla JavaScript</strong></p>

  <!-- Badges -->
  <p>
    <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
    <img src="https://img.shields.io/badge/Status-Complete-success?style=for-the-badge" alt="Status">
  </p>

  <p>
    <a href="#-demo"><strong>View Demo</strong></a> • 
    <a href="#-installation"><strong>Install</strong></a> • 
    <a href="#-javascript-concepts"><strong>Learn JS</strong></a>
  </p>
  
  <img src="https://raw.githubusercontent.com/Lagmouchyoussef/dice-game/main/screenshot.png" alt="Dice Game Screenshot" width="700" style="border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.3);">
</div>

---

## 📋 Table of Contents

- [🎯 Overview](#-overview)
- [✨ Features](#-features)
- [🎥 Demo](#-demo)
- [🚀 Installation](#-installation)
- [📁 Project Structure](#-project-structure)
- [💡 JavaScript Concepts](#-javascript-concepts)
- [🔧 Code Explanation](#-code-explanation)
- [🛠️ Technologies](#-technologies)
- [👤 Author](#-author)

---

## 🎯 Overview

**Dice Game** is an interactive web application that simulates a classic dice-rolling game between two players. Each page refresh generates random dice values, and the game automatically determines the winner based on the results.

<div align="center">

| Feature | Description |
|:-------:|-------------|
| 🎲 **Random Roll** | Generates random values (1-6) for each player |
| 👥 **Two Players** | Player 1 vs Player 2 gameplay |
| 🏆 **Auto Winner** | Automatically displays the winner |
| 🎨 **Modern UI** | Clean and responsive interface |
| ⚡ **Animation** | Smooth dice rolling animation |

</div>

---

## ✨ Features

<div align="center">

| Feature | Description | Status |
|:-------:|:------------|:------:|
| 🎲 Random Dice Roll | Generates random values (1-6) for each player | ✅ |
| 👥 Two-Player Mode | Player 1 vs Player 2 gameplay | ✅ |
| 🏆 Auto Winner Declaration | Automatically displays the winner | ✅ |
| 🎨 Modern UI Design | Clean and responsive interface | ✅ |
| 🎬 Rolling Animation | Smooth dice rolling animation on page load | ✅ |
| ✨ Winner Glow Effect | Winning dice glows with green effect | ✅ |
| 🔤 Custom Typography | Google Fonts integration | ✅ |
| 📱 Responsive Layout | Works on all screen sizes | ✅ |

</div>

---

## 🎥 Demo

<div align="center">

### 🎬 Game Preview

| 🎲 Player 1 | 🎲 Player 2 | 📢 Result |
|:-----------:|:-----------:|:---------:|
| `5` | `3` | 🏆 **Player 1 Wins!** |
| `2` | `6` | 🏆 **Player 2 Wins!** |
| `4` | `4` | 🤝 **Draw!** |

### 🖼️ Screenshot

<img src="https://raw.githubusercontent.com/Lagmouchyoussef/dice-game/main/screenshot.png" alt="Dice Game Screenshot" width="600" style="border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.2);">

</div>

---

## 🚀 Installation

### 📥 Quick Start

```bash
# Clone the repository
git clone https://github.com/Lagmouchyoussef/dice-game.git

# Navigate to project directory
cd dice-game

# Open in browser
# Simply double-click dicee.html or use:
open dicee.html        # macOS
start dicee.html       # Windows
xdg-open dicee.html    # Linux
```

### 🌐 Using VS Code Live Server

1. Install the **Live Server** extension in VS Code
2. Right-click on `dicee.html`
3. Select **"Open with Live Server"**

---

## 📁 Project Structure

```
🎲 dice-game/
│
├── 📄 dicee.html          # Main HTML document
├── 📄 styles.css          # Stylesheet with animations
├── 📄 script.js           # JavaScript game logic
├── 📄 README.md           # Project documentation
├── 🖼️ screenshot.png      # Game screenshot
│
└── 📁 images/
    ├── 🖼️ dice1.png       # Dice face 1
    ├── 🖼️ dice2.png       # Dice face 2
    ├── 🖼️ dice3.png       # Dice face 3
    ├── 🖼️ dice4.png       # Dice face 4
    ├── 🖼️ dice5.png       # Dice face 5
    └── 🖼️ dice6.png       # Dice face 6
```

---

## 💡 JavaScript Concepts

> 📚 This section covers fundamental JavaScript concepts demonstrated in this project.

### ❓ Question 1: How do we generate a random number between 1 and 6?

```javascript
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
```

| Step | Code | Result |
|:----:|------|--------|
| 1️⃣ | `Math.random()` | Returns decimal between `0` and `0.999...` |
| 2️⃣ | `Math.random() * 6` | Returns decimal between `0` and `5.999...` |
| 3️⃣ | `Math.floor(...)` | Returns integer between `0` and `5` |
| 4️⃣ | `... + 1` | Returns integer between `1` and `6` ✅ |

---

### ❓ Question 2: How do we select and manipulate DOM elements?

```javascript
// Method 1: querySelectorAll - selects all matching elements
document.querySelectorAll('img')[0].setAttribute("src", randomImageSource);

// Method 2: querySelector - selects the first matching element
document.querySelector("h1").innerHTML = "Player 1 Wins";
```

| Method | Purpose | Returns |
|--------|---------|---------|
| `querySelectorAll('img')` | Selects all `<img>` elements | NodeList |
| `[0]` or `[1]` | Accesses element by index | Element |
| `setAttribute("src", value)` | Changes the `src` attribute | `undefined` |
| `innerHTML` | Gets/sets HTML content | String |

---

### ❓ Question 3: How do we construct dynamic file paths?

```javascript
var randomImageSource = "images/dice" + randomNumber1 + ".png";
```

```
"images/dice"  +  randomNumber1  +  ".png"
     ↓                 ↓              ↓
   String    +    Number(3)    +   String
     ↓                 ↓              ↓
"images/dice"  +     "3"       +  ".png"
     ↓
"images/dice3.png"  ✅
```

---

### ❓ Question 4: How do we use conditional statements?

```javascript
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins";
} else {
    document.querySelector("h1").innerHTML = "Draw";
}
```

---

### ❓ Question 5: Why is the script at the end of body?

| Placement | Behavior | Recommendation |
|-----------|----------|----------------|
| In `<head>` | Script runs before DOM ❌ | Avoid without `defer` |
| End of `<body>` | Script runs after DOM ✅ | **Recommended** |
| With `defer` | Script runs after parsing ✅ | Modern approach |

---

### ❓ Question 6: What is the difference between `var`, `let`, and `const`?

| Keyword | Scope | Redeclare | Reassign | Use Case |
|---------|-------|:---------:|:--------:|----------|
| `var` | Function | ✅ Yes | ✅ Yes | Legacy code |
| `let` | Block | ❌ No | ✅ Yes | Variables that change |
| `const` | Block | ❌ No | ❌ No | Constants |

---

## 🔧 Code Explanation

<details>
<summary>📜 Click to view full JavaScript code</summary>

```javascript
// ═══════════════════════════════════════════════════════════
// 🎲 DICE GAME - FULL CODE BREAKDOWN
// ═══════════════════════════════════════════════════════════

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
var maxRolls = 10;

// Rolling animation
var rollInterval = setInterval(function() {
    var tempNum1 = Math.floor(Math.random() * 6) + 1;
    var tempNum2 = Math.floor(Math.random() * 6) + 1;
    
    dice1.setAttribute("src", "images/dice" + tempNum1 + ".png");
    dice2.setAttribute("src", "images/dice" + tempNum2 + ".png");
    
    rollCount++;
    
    if (rollCount >= maxRolls) {
        clearInterval(rollInterval);
        
        dice1.classList.remove("rolling");
        dice2.classList.remove("rolling");
        
        dice1.setAttribute("src", "images/dice" + randomNumber1 + ".png");
        dice2.setAttribute("src", "images/dice" + randomNumber2 + ".png");
        
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
}, 100);
```

</details>

---

## 🛠️ Technologies

<div align="center">

| Technology | Purpose |
|:----------:|---------|
| <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" width="40"> | **HTML5** - Page structure |
| <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" width="40"> | **CSS3** - Styling & animations |
| <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" width="40"> | **JavaScript** - Game logic |

</div>

---

## 👤 Author

<div align="center">

### **Youssef Lagmouch**

[![GitHub](https://img.shields.io/badge/GitHub-Lagmouchyoussef-181717?style=for-the-badge&logo=github)](https://github.com/Lagmouchyoussef)

</div>

---

<div align="center">

### 📄 License

This project is open source and available for **educational purposes**.

---

### ⭐ If you found this project helpful, please consider giving it a star! ⭐

**Made with ❤️ and ☕**

</div>
