$( document ).ready(function() {
	$('#answer1').hide();
	$('#answer2').hide();
	$('#answer3').hide();
	$('#question1').click(answerSlide1);
	$('#question2').click(answerSlide2);
	$('#question3').click(answerSlide3);

	function answerSlide1() {
		$('#answer1').slideToggle();
	}

	function answerSlide2() {
		$('#answer2').slideToggle();
	}

	function answerSlide3() {
		$('#answer3').slideToggle();
	}

});

