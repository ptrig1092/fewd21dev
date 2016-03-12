// Define the option list in an array
var cities = ['NYC','SF','LA','ATX','SYD'];

// Define page level functions
$(document).ready(function() {
	// For loop -> for i increasing from 0 to the end of the array, apped the value of the option tag to 

	for (i = 0; i < cities.length; i++) {
		$('#city-type').append('<option value="' + cities[i] + '">' + cities[i] + '</option>');
	}

	//  
	$('form').on('change','#city-type',function() {
		
		var city = $('#city-type').val();

		if (city == "NYC") {
			$('body').attr('class','nyc');
		} else if (city == "SF") {
			$('body').attr('class','sf');
		} else if (city == "LA") {
			$('body').attr('class','la');
		} else if (city == "ATX") {
			$('body').attr('class','austin');
		} else if (city == "SYD") {
			$('body').attr('class','sydney');
		} else {
			$('body').attr('class','');
		}
	});
});




