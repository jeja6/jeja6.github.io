 $(document).ready(function()

//  	SC.initialize({
//     client_id: '6150dd7ff5335b40c8d9faaf7e7c4644',
//     // redirect_uri: 'http://example.com/callback'

// 	SC.stream('/tracks/293').then(function(player){
// 	  player.play();
	

// var scWidget = document.getElementById(scWidget)


// 	});
//   });
// })



$('#clickme').click(songSync);
function songSync () {
	var region = $('#region').val();
	var tempo = $('#tempo').val();
	var year = $('#year').val();
	var outputStr= "You are synced with" + "song"

	$('#outputStr').html(outputStr)

	SC.initialize({
    client_id: '6150dd7ff5335b40c8d9faaf7e7c4644',
    // redirect_uri: 'http://example.com/callback'

	SC.stream('/tracks/293').then(function(player){
	  player.play();
	

var scWidget = document.getElementById(scWidget)


		});
	  });
	})

})


// SC.get('/user/183/tracks').then(function(tracks){
//   alert('Latest track: ' + tracks[0].title);
// });

// SC.stream('/tracks/293').then(function(player){
//   player.play();
// });