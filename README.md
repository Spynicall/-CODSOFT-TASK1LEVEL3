# Simple Calculator

A basic calculator built with **plain HTML, CSS, and JavaScript** — no frameworks, no libraries, no build tools. Created as a beginner-friendly project to practice CSS Grid layouts, event listeners, and basic conditional logic in JavaScript.

---

## 📁 Project Structure

```
.
├── index.html      # Display screen + button grid
├── style.css        # Styling, CSS Grid layout for buttons
└── script.js          # Event listeners and calculation logic
```

---

## ✨ Features

- Display screen showing current input and results.
- Buttons for digits `0–9`, decimal point, and the four basic operations: `+`, `−`, `×`, `÷`.
- `C` (Clear) button to reset the input.
- `DEL` button to remove the last character.
- Basic error handling — dividing by zero or an invalid expression shows `Error` instead of crashing.
- Layout built entirely with CSS Grid (`grid-template-columns`), including a double-height `=` button and a double-width `0` button.

---

## 🛠️ Tech Stack

- HTML5
- CSS3 (Grid layout)
- Vanilla JavaScript (`for` loop for button listeners, `if-else` for operator logic)

No dependencies, no npm install, no build step.

---

## 🚀 Getting Started

1. Clone the repo:
   ```bash
   git clone https://github.com/Spynicall/CODSOFT-LEVEL1TASK3.git
   cd CODSOFT-LEVEL1TASK3
   ```
2. Open `index.html` in your browser:
   ```bash
   # macOS
   open index.html
   # Windows
   start index.html
   # Linux
   xdg-open index.html
   ```

That's it — it's a static page, so there's nothing to install or run.

---

## ✏️ How It Works

- Each button has a `data-value` (numbers, operators, `.`) or `data-action` (`clear`, `delete`, `equals`) attribute.
- A single loop in `script.js` attaches one click listener to every button.
- Clicking number/operator buttons appends to a running string (e.g. `"12+7"`) shown on the display.
- Pressing `=` calls a `calculate()` function that finds the operator in the string, splits it into two numbers, and applies the matching operation with `if-else`.

**Current scope:** handles one operator between two numbers at a time (e.g. `12+7`), not multi-step expressions with operator precedence (e.g. `12+7*3`). That's intentional for this beginner-level version — a natural next step if extending the project.

---

## 📄 License

Feel free to fork and adapt this project for your own practice or submissions.
