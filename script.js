setTimeout(function(){
    // const main1 = document.getElementById("main1")
    // main1.style.display = "none"
   
}, 3000)

const settings = {
	async: true,
	crossDomain: true,
	url: 'https://spotify23.p.rapidapi.com/albums/?ids=0vE6mttRTBXRe9rKghyr1l',
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a2935f3471msh03e57ecfdd61e6cp1b0c67jsn9b5aa5d546de',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};

$.ajax(settings).done(function (response) {
	document.getElementById("main1").style.display = "none"
    document.getElementById("main2").style.display = "block"
	if(response){
		console.log("Done")
	}
	let artist = response.albums[0].artists[0].name
	$("#artist").text(artist)

	let album = response.albums[0].images[0].name
	$("#album").text(album)
	
	let tracks = response.albums[0].tracks.items

	console.log(tracks)

	for(let i=0; i < tracks.length; i++){
		
	}
	
	//let album = response.albums[1].
	//console.log(response.albums)
	
	

});

