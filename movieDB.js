var movies = [
{
	title: "Made Men", 
	hasWatched: true, 
	rating: 4
},
{
	title: "Lion King", 
	hasWatched: true, 
	rating: 5
},
{
	title: "Welcome to America", 
	hasWatched: true, 
	rating: 3
},
{
	title: "Aliens", 
	hasWatched: false, 
	rating: 2
}
]

movies.forEach(function(movie){
	var result = "You have ";
	if(movie.hasWatched){
		result += "watched ";
	} else {
		result += "not seen ";
	}
	result += "\"" + movie.title + "\" - ";
	result += movie.rating + " stars";
	console.log(result)
})

function buildString(movie){
	var result = "You have ";
	if(movie.hasWatched){
		result += "watched ";
	} else {
		result += "not seen ";
	}
	result += "\"" + movie.title + "\" - ";
	result += movie.rating + " stars";
	return result;
}

movies.forEach(function(movie){
console.log(buildString(movie));
});