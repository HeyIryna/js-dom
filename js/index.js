    // Calculator
    const nums = document.querySelectorAll('.calc .nums button');
    const opers = document.querySelectorAll('.calc .opers button');
    const display = document.querySelector('.calc .display');
    const equal = document.querySelector('.calc .eq');
    const clean = document.querySelector('.calc .clean');
    const del = document.querySelector('.calc .del');

    nums.forEach( buttonNum => buttonNum.addEventListener('click', numPressed) );
    function numPressed(ev) {
        const num = ev.target.innerText;
        display.value += num;
    }
    opers.forEach( buttonOper => buttonOper.addEventListener('click', operPressed) );
    function operPressed(ev) {
        const oper = ev.target.innerText;
        display.value += oper;
    }
    equal.addEventListener('click', () => display.value = eval(display.value) );

    clean.addEventListener('click', () => display.value = '');

    del.addEventListener('click', delPressed);
    function delPressed() {
        const deleted = display.value;
        display.value = deleted.substring(0, deleted.length - 1);;
    }







