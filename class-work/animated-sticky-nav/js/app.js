$(document).ready(function () {
	$(window).scroll(function () {
		var scrollTop = $(window).scrollTop()
		console.log(scrollTop)

		if (scrollTop > 20) {
			// $('header').css('background', 'red');
			$('header').addClass('scrolled')
		// }else if (scrollTop > 25) {
		// 	$('header').css('background','green');
		// } else {
		// 	$('header').css('background', 'blue')
		} else {
			$('header').removeClass('scrolled')
		}

	})
})

