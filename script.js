// ক্যালকুলেটর ভেরিয়েবল
let display = document.getElementById('display');
let currentInput = '0';
let previousInput = '';
let operator = '';

// নাম্বার যোগ করা
function appendNumber(num) {
    if (currentInput === '0') {
        currentInput = num;
    } else {
        currentInput += num;
    }
    updateDisplay();
}

// অপারেটর যোগ করা
function appendOperator(op) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        calculate();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

// ক্যালকুলেশন করা
function calculate() {
    if (previousInput === '' || currentInput === '' || operator === '') return;
    
    let result;
    let prev = parseFloat(previousInput);
    let current = parseFloat(currentInput);

    switch(operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = current !== 0 ? prev / current : 'Error';
            break;
        default:
            return;
    }

    currentInput = result.toString();
    previousInput = '';
    operator = '';
    updateDisplay();
}

// ফলাফল বের করা (= বাটন)
function calculate() {
    if (previousInput === '' || currentInput === '' || operator === '') return;
    
    let result;
    let prev = parseFloat(previousInput);
    let current = parseFloat(currentInput);

    switch(operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = current !== 0 ? prev / current : 'Error';
            break;
        default:
            return;
    }

    currentInput = result.toString();
    previousInput = '';
    operator = '';
    updateDisplay();
}

// ডিসপ্লে আপডেট করা
function updateDisplay() {
    display.value = currentInput;
}

// ডিসপ্লে পরিষ্কার করা (AC বাটন)
function clearDisplay() {
    currentInput = '0';
    previousInput = '';
    operator = '';
    updateDisplay();
}

// শেষ সংখ্যা মুছা (DEL বাটন)
function deleteLast() {
    if (currentInput.length > 1) {
        currentInput = currentInput.slice(0, -1);
    } else {
        currentInput = '0';
    }
    updateDisplay();
}

// পজিটিভ/নেগেটিভ টগল করা
function toggleSign() {
    if (currentInput !== '0') {
        currentInput = currentInput.startsWith('-') 
            ? currentInput.slice(1) 
            : '-' + currentInput;
        updateDisplay();
    }
}

// ট্যাব সুইচ করা
function switchTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    document.getElementById(tabName).classList.add('active');
    event.target.classList.add('active');
}

// কনভার্টার নির্বাচন করা
function selectConverter(type) {
    document.querySelector('.converter-menu').style.display = 'none';
    document.getElementById('converter-panel').style.display = 'block';
    
    let units = {
        'length': { title: 'Length Converter', units: ['Meter (m)', 'Kilometer (km)', 'Centimeter (cm)', 'Millimeter (mm)', 'Mile (mi)', 'Yard (yd)', 'Foot (ft)', 'Inch (in)'] },
        'weight': { title: 'Weight Converter', units: ['Kilogram (kg)', 'Gram (g)', 'Pound (lb)', 'Ounce (oz)', 'Milligram (mg)'] },
        'temperature': { title: 'Temperature Converter', units: ['Celsius (°C)', 'Fahrenheit (°F)', 'Kelvin (K)'] },
        'area': { title: 'Area Converter', units: ['Square Meter (m²)', 'Square Kilometer (km²)', 'Square Centimeter (cm²)', 'Hectare (ha)', 'Square Mile (mi²)', 'Square Yard (yd²)', 'Square Foot (ft²)', 'Square Inch (in²)'] },
        'time': { title: 'Time Converter', units: ['Second (s)', 'Minute (min)', 'Hour (h)', 'Day (d)', 'Week (w)', 'Month (mo)', 'Year (y)'] },
        'volume': { title: 'Volume Converter', units: ['Liter (L)', 'Milliliter (ml)', 'Cubic Meter (m³)', 'Cubic Centimeter (cm³)', 'Gallon (gal)', 'Quart (qt)', 'Pint (pt)', 'Cup (cup)', 'Fluid Ounce (fl oz)'] },
        'currency': { title: 'Currency Converter', units: ['US Dollar ($)', 'Euro (€)', 'British Pound (£)', 'Japanese Yen (¥)', 'Indian Rupee (₹)', 'Chinese Yuan (¥)'] },
        'speed': { title: 'Speed Converter', units: ['Meter/Second (m/s)', 'Kilometer/Hour (km/h)', 'Mile/Hour (mph)', 'Knot (kn)', 'Foot/Second (ft/s)'] },
        'energy': { title: 'Energy Converter', units: ['Joule (J)', 'Kilocalorie (kcal)', 'Watt-Hour (Wh)', 'Kilowatt-Hour (kWh)', 'BTU', 'Calorie (cal)'] },
        'data': { title: 'Data Converter', units: ['Byte (B)', 'Kilobyte (KB)', 'Megabyte (MB)', 'Gigabyte (GB)', 'Terabyte (TB)', 'Petabyte (PB)', 'Bit', 'Kilobit (Kb)'] },
        'density': { title: 'Density Converter', units: ['kg/m³', 'g/cm³', 'lb/ft³', 'lb/gal'] },
        'bmi': { title: 'BMI Calculator', units: ['BMI', 'Height (cm)', 'Weight (kg)'] }
    };

    let converterData = units[type];
    document.getElementById('converter-title').textContent = converterData.title;
    
    // Units populate করা (সিম্পল উদাহরণ)
    console.log('Converter selected:', type);
}

// ইউনিট কনভার্ট করা
function convertUnit() {
    let fromValue = parseFloat(document.getElementById('from-value').value);
    let toValue = document.getElementById('to-value');
    
    if (isNaN(fromValue)) {
        toValue.value = '';
        return;
    }

    // সিম্পল কনভার্শন উদাহরণ (Length)
    toValue.value = (fromValue * 1000).toFixed(2); // Placeholder
}

// কনভার্টার বন্ধ করা
function closeConverter() {
    document.querySelector('.converter-menu').style.display = 'grid';
    document.getElementById('converter-panel').style.display = 'none';
  }
