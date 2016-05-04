$(document).ready(function () {
	$(window).resize(function () {
		console.log($(window).width())
	})

$('#threeLines').click(function () {
	$('#mobile-nav').slideToggle();
	});
})
