Canvas Circle Progress
======================

## Compact

Only 621 bytes (minified)!

## Browser Compatibility

Requires support for canvas 2D and is compatible with 
Firefox, Chrome, IE9+ and Safari.

## Easy

Include by pasting the following HTML or similar:

``` html
<canvas id="mycanvas"></canvas>
<script src="http://dannydes.github.io/canvas-sonar-load/canvas-sonar-load.min.js"></script>
```

Then initialize using:

``` javascript
SonarLoad.init({
	id: 'mycanvas'
});
```

The `` SonarLoad.init() `` function may also take the following options:

* color: String. Color of sonar wave. Example value: `` 'rgb(100, 100, 100)' ``

* width: Number. Width of sonar way in pixels. Example value: `` 2 ``

Here's an example of a custom call:

``` javascript
SonarLoad.init({
	id: 'mycanvas',
	color: 'rgb(100, 100, 100)',
	width: 2
});
```

There are also the following 2 methods, taking no parameters:

* `` SonarLoad.hide() ``: Hide animation.

* `` SonarLoad.show() ``: Show animation.

For a more complete example, please look at `` index.html `` and `` base.js ``.

Thanks for your interest!