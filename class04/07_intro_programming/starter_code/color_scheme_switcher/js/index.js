// On click white button set colors white
document.getElementById('grayButton').onclick = switchToGray
// On click grey button set colors grey
document.getElementById('whiteButton').onclick = switchToWhite



// function to make colors white
function switchToWhite() {
	document.body.style.backgroundColor = "white"; // change background
	document.body.style.color = "black"; // change text colors
}

// funciton to make colors gray
function switchToGray() {
	document.body.style.backgroundColor = "gray"; // change background
	document.body.style.color = "white"; // change text colors
}

