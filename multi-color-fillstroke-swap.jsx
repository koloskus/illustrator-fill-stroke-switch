var docRef = app.activeDocument;
var selRef = docRef.selection;
var colorHolder = new RGBColor();

for (var i=0; i<selRef.length; i++) {
	var pathRef = selRef[i];
	colorHolder = pathRef.fillColor;
	pathRef.filled = false;
	pathRef.stroked = true;
	pathRef.strokeColor = colorHolder;
}
