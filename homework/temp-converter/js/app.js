$(document).ready(function() {


function convertTemp() {
 var c = document.getElementById('c'), f = document.getElementById('f');
 if(c.value != '') {
  f.value = Math.round(c.value * 9 / 5 + 32);
  c.value = '';
// } else if (c.value>= 100) {
// 	$('celci').css('background-color', 'rgb'(255, 124, 117));
// } else if (c.value<=100) {
// 	$('celci').css('background-colo', 'rgb'(117, 182, 255));
// }else {
// 	$('celci').css('background-color', 'black')
// }
})

function convertTemp() {
 var f = document.getElementById('f'), c = document.getElementById('f');
 if(f.value != '') {
  c.value = Math.round(f.value - 32) * 5 / 9);
  f.value = '';
 // } else  {
 //  c.value = Math.round((f.value - 32) * 5 / 9);
 //  f.value = '';
 }
})


