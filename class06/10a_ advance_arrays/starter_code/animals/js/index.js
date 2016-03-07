// Define Variables
var images = ['images/animal2.jpg','images/animal3.jpg','images/animal4.jpg','images/animal5.jpg','images/animal6.jpg','images/animal7.jpg'];

var i = 0;

var maxImages = images.length-1;

// Function for skip button
function nextImage() {
	if (i < maxImages) {
		i++;
	} else {
		i = 0;
	} 
	changeImage(i);
};

	// If increment var < maxImages, increment forward, else start at 0, else change iamge.

// Function for back button
function previousImage() {
	if (i > 0) {
		i--;
	} else {
		i = maxImages;
	} 
	changeImage(i);
};

	// If incremement variable > 0, incremement back, else stay at maxImages, else increment images

// Function to change image
function changeImage() {
	$('#carousel-image').attr('src',images[i]);

	// Update image source to current image
};


// Event listeners
$(document).ready(function() {
	// next image click
	$('#next').on('click',nextImage);
	// previous image click
	$('#back').on('click',previousImage);
});



