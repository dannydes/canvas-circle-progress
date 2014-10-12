var CCP = {};

(function (document) {
	
	'use strict';

	var canvas, context, interval,
		x, y, radius;

	CCP.init = function _init(canvasId) {
		canvas = document.getElementById(canvasId);
		context = canvas.getContext('2d');

		x = canvas.width / 2;
		y = canvas.height / 2;

		initRendering();
	};

	CCP.show = function _show() {
		canvas.style.display = 'block';
		initRendering();
	};

	CCP.hide = function _hide() {
		canvas.style.display = 'none';
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