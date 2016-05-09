$(document).ready(function () {
	SC.initialize({
		client_id:'6150dd7ff5335b40c8d9faaf7e7c4644'
	});

	SC.get('/tracks').then(function(tracks){
	  alert('Latest track: ' + tracks[0].title);
	});
})




$(document).ready(function () {
    var iframeElement = document.querySelector('iframe');
    var widget = SC.Widget(iframeElement);
    widget.bind(SC.Widget.Events.READY, function () {
        console.log('Ready');
        widget.bind(SC.Widget.Events.PLAY, function () {
            // get information about currently playing sound
            widget.getCurrentSound(function (sound) {
                console.log(sound.title);
            });
        });
            widget.bind(SC.Widget.Events.FINISH, function () {
            console.log('Finished');
        });
    });
    widget.seekTo(30000);
    widget.toggle();
}());





// function playSomeSound(genre) {
// 	SC.get('/tracks', {
// 		genres: genre,
// 		bpm: {
// 			from: 100		
// 		}
// 	}, function(tracks) {
// 		console.log(tracks)
// 		var random = Math.floor(Math.random()* 49);

// 		SC.oEmbed(tracks[random].uri, {auto_play: true}. document.getElementbyID('target'));
// 	});
// }

// window.onload = function () {
// 	SC.initialize ({
// 		client_id: '6150dd7ff5335b40c8d9faaf7e7c4644'
// 	});

// 	var menuLinks = document.getElementsByClassName('genre');
// 	for (var i = 0; i < menuLinks.length; i++) {
// 		var menuLink = menuLinks[i];
// 		menuLink.onclick = function(e) {
// 			e.preventDefault();
// 			playSomeSound(menuLink.innerHTML);
// 		};
// 	}
// };

// var widget = SC.Widget(document.querySelector('iframe'))



// $(document).ready(function () {
// 	SC.get('/tracks', { genres: 'rap'}, function(tracks) {
// 		$(tracks).each(function(index, track) {
// 			$('#results').append($('<li></li>').html(track.title + '-' + track.genre));
// 	   });
//   });
// });





// SC.initialize({
//   client_id: 'YOUR_CLIENT_ID'
// });

// $(document).ready(function() {
//   SC.get('/tracks', { genres: 'rap' }, function(tracks) {
//     $(tracks).each(function(index, track) {
//       $('#results').append($('<li></li>').html(track.title + ' - ' + track.genre));
//     });
//   });
// });




// $(document).ready(function () {

// 	// event handler for the #clickme button
// 	$('#clickme').click(function () {

// 		// create a variable, newItem, that stores the user's input
// 		var newItem = $('#item').val();

// 		// if the user has not entered a value, trigger alert
// 		if (newItem.length === 0) {
// 			alert('You must enter a value!')
// 		} else {
// 			// call the appendItem function and pass it newItem as a variable
// 			appendItem(newItem);
// 		}

// 		// focuses on the <input> so user doesn't have to click back into it, also sets the value of the input to an empty string (clearing it)
// 		$('#item')
// 			.focus()
// 			.val('')
// 	})

// 	// appends a new <li> element containing the user's text to #list
// 	function appendItem (item) {
// 		$('#list').append('<li>' + item + '</li>');
// 	}

// 	// removes dynamically-created <li> elements on click
// 	$(document).on('click', 'li', function () {
// 		$(this).remove();
// 	})

// })
