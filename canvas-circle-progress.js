var SonarLoad = {};

(function (SonarLoad, requestAnimationFrame) {
	
	'use strict';

	var canvas, context, interval,
		x, y, radius;

	SonarLoad.init = function _init(options) {
		canvas = document.getElementById(options.id);
		context = canvas.getContext('2d');

		context.strokeStyle = options.color;
		context.lineWidth = options.width;

		x = canvas.width / 2;
		y = canvas.height / 2;

		initRendering();
	};

	SonarLoad.show = function _show() {
		canvas.style.visibility = 'visible';
		initRendering();
	};

	SonarLoad.hide = function _hide() {
		canvas.style.visibility = 'hidden';
		clearInterval(interval);
	};

	function computeRadius() {
		var maxRadius = Math.max(x, y);

		if (! radius || radius > maxRadius) {
			radius = maxRadius / 3;
		}

		return radius++;
	}

	function initRendering() {
		if (requestAnimationFrame) {
			render();
		} else {
			interval = setInterval(render, 10);
		}
	}

	function render() {
		context.clearRect(0, 0, canvas.width, canvas.height);

		context.beginPath();
		context.arc(x, y, computeRadius(), 0, 2 * Math.PI);
		context.stroke();

		if (requestAnimationFrame && getComputedStyle(canvas).visibility === 'visible') {
			requestAnimationFrame(render);
		}
	}

})(SonarLoad, requestAnimationFrame);