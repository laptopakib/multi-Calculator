let upperDisplay = document.getElementById('upper-display'); // ইনপুট দেখানোর জন্য
let lowerDisplay = document.getElementById('display'); // রেজাল্ট দেখানোর জন্য
let currentInput = '0';
let expression = ''; // পুরো ইকুয়েশন জমানোর জন্য

function updateDisplay() {
    lowerDisplay.innerText = currentInput;
    upperDisplay.innerText = expression;
}

function appendNumber(num) {
    if (currentInput === '0') currentInput = num.toString();
    else currentInput += num.toString();
    expression += num.toString();
    updateDisplay();
}

function appendOperator(op) {
    expression += " " + op + " ";
    currentInput = '0';
    updateDisplay();
}

// স্পেশাল ফাংশন সমূহ
function insertSymbol(symbol) {
    if (symbol === 'sqrt') {
        expression += "Math.sqrt(";
        currentInput = "√";
    } else if (symbol === 'square') {
        expression += "**2";
        currentInput += "²";
    } else if (symbol === 'pi') {
        expression += "Math.PI";
        currentInput = "π";
    }
    updateDisplay();
}

// সবধরণের বৈজ্ঞানিক ধ্রুবক (Constants)
const constants = {
    'G': 6.674e-11,
    'g': 9.8,
    'R': 8.314,
    'F': 96485
};

function appendConstant(c) {
    expression += constants[c];
    currentInput = c;
    updateDisplay();
}

function calculate() {
    try {
        // ভাগ চিহ্ণের বদলে / এবং গুণের বদলে * বসিয়ে ক্যালকুলেট করা
        let finalExpression = expression.replace(/÷/g, '/').replace(/×/g, '*');
        
        // ব্র্যাকেট ব্যালেন্স করা (যদি রুট ইউজ করেন)
        let openBrackets = (finalExpression.match(/\(/g) || []).length;
        let closeBrackets = (finalExpression.match(/\)/g) || []).length;
        while(openBrackets > closeBrackets) {
            finalExpression += ")";
            closeBrackets++;
        }

        let result = eval(finalExpression);
        currentInput = result.toString();
        expression = result.toString(); // রেজাল্টকে ইনপুট হিসেবে রাখা
        updateDisplay();
    } catch (e) {
        currentInput = "Error";
        updateDisplay();
    }
}

function clearDisplay() {
    currentInput = '0';
    expression = '';
    updateDisplay();
}

