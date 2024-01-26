setTimeout(function(){
    // const main1 = document.getElementById("main1")
    // main1.style.display = "none"
    document.getElementById("main1").style.display = "none"
    document.getElementById("main2").style.display = "block"
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
	let artist = response.albums[0].artists[0].name
	$("#top").text(artist)
	
	
	console.log(artist);
});

