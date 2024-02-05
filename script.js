setTimeout(function(){
    // const main1 = document.getElementById("main1")
    // main1.style.display = "none"
   
}, 3000)

const settings = {
	async: true,
	crossDomain: true,
	url: 'https://spotify23.p.rapidapi.com/albums/?ids=0vE6mttRTBXRe9rKghyr1l',
	method: 'GET',
	headers: {'X-RapidAPI-Key': 'a2935f3471msh03e57ecfdd61e6cp1b0c67jsn9b5aa5d546de',
	'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
}
		
	}


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

	var text = '<tr><th><h2 style="color: white;">Track Name/<br>Length</h2></th><th></th></tr>';

	for(let i=0; i < tracks.length; i++){

		let time = ""
		let minutes
		let seconds
		let holder = tracks[i].duration_ms

		holder /= 1000
		holder = Math.round(holder)

		if( holder < 60){
			seconds = holder
			minutes = 0
		}else{
			seconds = holder % 60
			minutes = (holder - seconds)/60
		}

		time = `${minutes}:${seconds}`
		
		if(i % 2 == 0){
			text += "<tr><td><h3>" + tracks[i].name + "<br>" + time + "</h3></td>"
		}else{
			text += "<td><h3>" + tracks[i].name + "<br>" + time + "</h3></td></tr>"
		}
		
	}
	console.log(text)
	$("#list").html(text)
	
	//let album = response.albums[1].
	//console.log(response.albums)
	
	

});

