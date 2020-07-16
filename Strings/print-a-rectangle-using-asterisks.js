'use strict';

function getRectangleString(width, height) {
	let new_line = "\r\n";
	let top_bottom = "*".repeat(width) + new_line;
	let center = (width > 1) ? ("*" + " ".repeat(width - 2) + "*" + new_line).repeat(height - 2) : "";
	return height > 1 ? (top_bottom + center + top_bottom) : top_bottom.repeat(height);
}