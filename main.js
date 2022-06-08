const input = document.getElementById('input');
const res = document.getElementById('res');

let btn_0 = document.getElementById('0');
let btn_1 = document.getElementById('1');
let btn_2 = document.getElementById('2');
let btn_3 = document.getElementById('3');
let btn_4 = document.getElementById('4');
let btn_5 = document.getElementById('5');
let btn_6 = document.getElementById('6');
let btn_7 = document.getElementById('7');
let btn_8 = document.getElementById('8');
let btn_9 = document.getElementById('9');
let btn_plus = document.getElementById('plus');
let btn_minus = document.getElementById('minus');
let btn_mulytpliy = document.getElementById('multyply');
let btn_dil = document.getElementById('dil');
let btn_na_nol = document.getElementById('btn_na_nol');

btn_0.onclick = (e) => {
	input.value += 0;
};
btn_1.onclick = (e) => {
	input.value += 1;
};
btn_2.onclick = (e) => {
	input.value += 2;
};
btn_3.onclick = (e) => {
	input.value += 3;
};
btn_4.onclick = (e) => {
	input.value += 4;
};
btn_5.onclick = (e) => {
	input.value += 5;
};
btn_6.onclick = (e) => {
	input.value += 6;
};
btn_7.onclick = (e) => {
	input.value += 7;
};
btn_8.onclick = (e) => {
	input.value += 8;
};
btn_9.onclick = (e) => {
	input.value += 9;
};
btn_plus.onclick = (e) => {
	input.value += '+';
};
btn_minus.onclick = (e) => {
	input.value += '-';
};
btn_mulytpliy.onclick = (e) => {
	input.value += '*';
};
btn_dil.onclick = (e) => {
	input.value += '/';
};
btn_na_nol.onclick = (e) => {
	input.value = '';
}

res.addEventListener('click', (e) => {
	input.value = eval(input.value);
});
