src="jquery-3.4.1.min.js"

document.body.style.backgroundColor = "#fdffcf";


var dogs = ["Rottweiler", "Australian Shepherd", "Pomeranian", "Shiba Inu", "St. Bernard", "Schnauzer", "Poodle", "Bulldog", "Border Collie", "Great Dane", "Dobermann", "Basenji", "Dalmatian", "Sheltie", "Alaskan Malamute", "Italian Greyhound", "Samoyed", "Afghan Hound"]

// $('#dog').append("<br><br><br><h2>Welcome to DOG list</h2>")

for(var i=0; i<dogs.length; i++){
	$('#dog').append("<div class='box'>" + dogs[i] + "</div>")
}






// console.log("div")
// for(var i=0; i<6; i++){
// 	console.log(dogs[i])
// }

// dogs.forEach(function(dogs) {
		
// 	})

// for(var i=0; i<6; i++){
	// $('blockquote').append("<div>" + dogs + "</div>")
// }




	// $('#dog').append("<div class=box>" + dogs + "</div>")
