var CCP = {};

(function (document) {
	
	'use strict';

	var canvas, context, interval,
		x, y, radius;

	CCP.init = function _init(options) {
		canvas = document.getElementById(options.id);
		context = canvas.getContext('2d');

		context.strokeStyle = options.color;
		context.lineWidth = options.width;

		x = canvas.width / 2;
		y = canvas.height / 2;

		initRendering();
	};

	CCP.show = function _show() {
		canvas.style.visibility = 'visible';
		initRendering();
	};

	CCP.hide = function _hide() {
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
		interval = setInterval(render, 10);
	}

	function render() {
		context.clearRect(0, 0, canvas.width, canvas.height);

		context.beginPath();
		context.arc(x, y, computeRadius(), 0, 2 * Math.PI);
		context.stroke();
	}

})(document);