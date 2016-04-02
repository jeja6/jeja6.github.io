// 1. Besure to write your code within the $(document).ready(...)
// 2. Add .click() event handlers for each of the boxes:
// - A) boxes #a10, #a20, and #a30 should each add 10, 20, and 30, respectively, to the value in the center box, #out
// - B) boxes #n10, #n20, and #n30 should each subtract 10, 20, and 30, respectively, from the value in the center box, #out
// - C) #red and #blue should change the background color of #out to red and blue, respectively
// - D) #out should change the background of #out to white, and set the value back to zero
// HINT: define a variable, var count = 0, at the top of your function; use this variable to keep track of what to display inside of #out
// Ex: when the user clicks #a10, add 10 to the var count, and then reflect this change in the HTML
//
// jQuery Methods Needed:
// - .click()
// - . text() or .html()
// - .css()
$(document).ready(function () {



function sumNumbers () {
	var total;
	$('#app').click(function() {
		app = $(app).value("+10")= $('total').val(0);
	$('#app').text(total + 10)	
	
	var count = $('reset').val(0); 
	// var aBoxes = $('#a10').text
	var aBoxes = $('#a20').val;
	var aBoxes = $('#a30').val;
	var bBoxes = $('#n10').val;
	var bBoxes = $('#n20').val;
	var bBoxes = $('#n30').val;

	var red = $('#red').val;
	var blue = $('#blue').val;

	var outputStr = ""

$('#out').html(outputStr)
}

})


var editid;
$("div.editable").click(function(e) {
   editid = $(this).attr("id");
}); 


// function addText () {
  // var txt = $('#container').text()
  // $('#container').text(txt + 'I have been added. Sweet!')

  // var reset = $('#app').text()
	// $('#app').text(reset + 25)

	$('#output').html(outputStr)



