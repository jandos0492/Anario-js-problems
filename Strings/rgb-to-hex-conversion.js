'use strict';

function rgb(r, g, b) {
    if (r < 0)
		r = 0
    if (r > 255)
		r = 255;
    if (g < 0)
		g = 0
    if (g > 255)
		g = 255;
    if (b < 0)
		b = 0
    if (b > 255)
		b = 255;
    return ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).toUpperCase().slice(1);
}