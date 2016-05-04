$(document).ready(function () {


$('#myForm').submit(function () {
	var myInput = $('#name-input').val();
	$('#target').text(myInput);

	})

})
