var btn1 = document.getElementById('increment1');
var ctr1 = document.getElementById('counter1');
var counter1 = 50;
var increment = function () {
    counter1++;
    ctr1.textContent = counter1;
};
btn1.addEventListener('click', increment);

var btn2 = document.getElementById('increment2');
var ctr2 = document.getElementById('counter2');
var counter2 = 46;
var increment = function () {
    counter2++;
    ctr2.textContent = counter2;
};
btn2.addEventListener('click', increment);


var btn3 = document.getElementById('increment3');
var ctr3 = document.getElementById('counter3');
var counter3 = 84;
var increment = function () {
    counter3++;
    ctr3.textContent = counter3;
};
btn3.addEventListener('click', increment);

var btn4 = document.getElementById('increment4');
var ctr4 = document.getElementById('counter4');
var counter4 = 96;
var increment = function () {
    counter4++;
    ctr4.textContent = counter4;
};
btn4.addEventListener('click', increment);

var btn5 = document.getElementById('increment5');
var ctr5 = document.getElementById('counter5');
var counter5 = 84;
var increment = function () {
    counter5++;
    ctr5.textContent = counter5;
};
btn5.addEventListener('click', increment);