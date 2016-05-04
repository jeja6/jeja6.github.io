$(document).ready(function () {

	// var omdb = 'http://www.omdbapi.com/?s=point+break'

	$('#movie-search').submit(function(evt) {
		evt.preventDefault();
		var url = 'http://www.omdbapi.com/?t=' + searchTerm
		var searchTerm = $('#title').val()


	$.ajax({
		type: 'GET', 
		url: url,
		success: function (response) {
			console.log(response)
		},
		error: function (xhr) {
			console.log(xhr)
		}
	})
})
})




// CIIT BIKE FUNCTION EXAMPLE 
	// function parseCitiBike (data) {
	// 	console.log(data)

	// 	data.forEach(function (station) {

	// 		var h3 = '<h3>' + station.name + '</h3>'
	// 		var p1 = '<p> Available bikes:' + station.bikes + '</p>'
	// 		var p2 = '<p> Open spots:' + station.free + '</p>'

	// 		$('body').append(h3+p1+p2+'<hr>')


			// console.log(station.name)
			// console.log(station.bikes)
			// console.log(station.free)
// 		})
// 	}
// })

// var animals = ['cat', 'dog', 'fish']

// animals.forEach()

// animals.forEach(function (animal) {
// 	console.log(animal)
// })

// 4 TYPES: 
// GET (most common, getting some value from the database somewhere)
// (these require a server to process)
// 	PUT (editing an existing value in the database)
// 	POST (when you're trying to record a record in the database)
// 	DELETE (when you go into a database and delete the record)

// {
// 	key: value,
// 	key: value,
// 	key: value,
// }

// url is also known as the end point
// 