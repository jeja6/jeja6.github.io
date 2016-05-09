 $(document).ready(function() {


$('#artists').on('change', function(){

	myFunction();
	});

$('#tempos').on('change', function(){

	myFunction();
	});

$('#years').on('change', function(){

	myFunction();
	});


var myFunction = function() {
	var artists = $('#artists option:selected')
.val(),
	tempos = $('#tempos option:selected')
.val(),
	years = $('#years option:selected')
.val();
console.log (artists,tempos,years);

	if (artists == 'AsapRocky' && tempos == 'slow' && years == '2010')
		$('#song').text('Phoenix');
	else if (artists == 'AsapRocky' && tempos == 'medium' && years == '2010')
		$('#song').text('Goldie'); 
	else if (artists == 'AsapRocky' && tempos == 'fast' && years ==  '2010')
		$('#song').text('Wild For The Night');
	else if (artists == 'BigSean' && tempos == 'slow' && years == '2010')
		$('#song').text('Marvin and Chardonay'); 
	else if (artists == 'BigSean' && tempos ==  'medium' && years ==  '2010')
		$('#song').text('My Last');
	else if (artists == 'BigSean' && tempos ==  'fast' && years == '2010')
		$('#song').text('Dance'); 
	else if (artists == 'Drake' && tempos ==  'slow' && years == '2010')
		$('#song').text('Over My Dead Body'); 
	else if (artists == 'Drake' && tempos ==  'medium' && years == '2010')
		$('#song').text('Motto');
	else if (artists == 'Drake' && tempos ==  'fast' && years ==  '2010')
		$('#song').text('Take Care'); 
	else if (artists == 'AsapRocky' && tempos == 'slow' && years == '2015')
		$('#song').text('LSD'); 
	else if (artists == 'AsapRocky' && tempos ==  'medium' && years ==  '2015')
		$('#song').text('Westside');
	else if (artists == 'AsapRocky' && tempos == 'fast' && years ==  '2015')
		$('#song').text('LPFJ2');
	else if (artists == 'BigSean' && tempos == 'slow' && years ==  '2015')
		$('#song').text('One Man Can Change The World'); 
	else if (artists == 'BigSean' && tempos ==  'medium' && years ==  '2015')
		$('#song').text('Paradise');
	else if (artists == 'BigSean' && tempos ==  'fast' && years ==  '2015')
		$('#song').text('IDFWU'); 
	else if (artists == 'Drake' && tempos ==  'slow' && years == '2015')
		$('#song').text('Jungle'); 
	else if (artists == 'Drake' && tempos ==  'medium' && years == '2015')
		$('#song').text('Hot Line Bling');
	else if (artists == 'Drake' && tempos == 'fast' && years ==  '2015')
		$('#song').text('Energy');

		};

});



