// Calculator
const nums = document.querySelectorAll('.calc .nums button');
const opers = document.querySelectorAll('.calc .opers button');
const display = document.querySelector('.calc .display');
const equal = document.querySelector('.calc .eq');
const clean = document.querySelector('.calc .clean');
const del = document.querySelector('.calc .del');
const memoAdd = document.querySelector('.calc .memoAdd');
const memoExtr = document.querySelector('.calc .memoExtr');

//displayes pressed digits
//enables entering zeros in front of a number
nums.forEach( buttonNum => buttonNum.addEventListener('click', numPressed) );
function numPressed(ev) {
    const num = ev.target.innerText;
    if(display.value.length === 1 && display.value === '0' && num === '0') {
        display.value = 0;
    } else if (display.value.length === 1 && display.value === '0' && num != '0') {
        display.value = display.value.substring(0, display.value.length - 1) + num;
    } else {
        display.value += num;
    }
}

//displays pressed math operators
//enables entering same operator twice
//replaces different math operators entered one by one
opers.forEach( buttonOper => buttonOper.addEventListener('click', operPressed) );
function operPressed(ev) {
    const oper = ev.target.innerText;
    const lastSymbol = display.value[display.value.length - 1];
    console.log(lastSymbol);
    if(lastSymbol === '+' || lastSymbol === '-' || lastSymbol === '*' || lastSymbol === '/') {
        if(lastSymbol === ev.target.innerText) {
            display.value = display.value;
        }
        else {
            display.value = display.value.substring(0, display.value.length - 1) + oper;
        }
    } else {
        display.value += oper;
    }
}

//executes calculation
//enebles dividing by 0
equal.addEventListener('click', eqPressed);
function eqPressed() {
    if(display.value.endsWith('/0')) {
        alert('You cannot divide by 0');
    } else {
        display.value = eval(display.value);
    }
}

//clears display window
clean.addEventListener('click', () => display.value = '');

//deletes last symbol
del.addEventListener('click', delPressed);
function delPressed() {
    const deleted = display.value;
    display.value = deleted.substring(0, deleted.length - 1);
}

//adds value from the display (including expressions) to memory
let memoCell = 0;
memoAdd.addEventListener('click', addToMemo);
function addToMemo () {
    memoCell = display.value;
}

//extracts value from the memory to display (including expressions)
memoExtr.addEventListener('click', extrFromMemo);
function extrFromMemo () {
    display.value = display.value + memoCell;
}