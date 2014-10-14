(function (document, SonarLoad) {

	'use strict';

	var hideButton = document.getElementById('hide'),
		showButton = document.getElementById('show');

	SonarLoad.init({
		id: 'circle',
		color: 'rgb(255, 0, 0)',
		width: 3
	});

	hideButton.addEventListener('click', function _hide() {
		hideButton.disabled = true;
		showButton.disabled = false;

		SonarLoad.hide();
	});

	showButton.addEventListener('click', function _show() {
		showButton.disabled = true;
		hideButton.disabled = false;

		SonarLoad.show();
	});

})(document, SonarLoad);