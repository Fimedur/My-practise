fetch("https://livescore6.p.rapidapi.com/matches/v2/list-live?Category=soccer", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "9847e276f2mshb8942a0938af1c5p195635jsn4c97fc5e93a4",
		"x-rapidapi-host": "livescore6.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});