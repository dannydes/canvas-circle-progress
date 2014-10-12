(function (document, CCP) {

	'use strict';

	var hideButton = document.getElementById('hide'),
		showButton = document.getElementById('show');

	CCP.init({
		id: 'circle',
		color: 'rgb(255, 0, 0)',
		width: 3
	});

	hideButton.addEventListener('click', function _hide() {
		hideButton.disabled = true;
		showButton.disabled = false;

		CCP.hide();
	});

	showButton.addEventListener('click', function _show() {
		showButton.disabled = true;
		hideButton.disabled = false;

		CCP.show();
	});

})(document, CCP);