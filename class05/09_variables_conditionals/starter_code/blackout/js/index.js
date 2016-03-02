var lights = 'on';

function lightSwtich() {
	if (lights == 'on') {
		$("body").addClass('dark');
		lights = 'off';
	} else {
		$("body").removeClass('dark');
		lights = 'on';
	};
};

$('#light_switch').click(lightSwtich);