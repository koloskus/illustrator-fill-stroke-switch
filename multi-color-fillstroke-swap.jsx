/**********************************
**                               **
**   A Simple-Ass Code           **
**   I think Illustrator         **
**   Has Been Missin':           **
**                               **
**   Swap fill for Stroke        **
**   on multiple shapes in       **
**   Adobe Illustrator CC 19     **
**                               **
**   Jack Koloskus 5/12/16       **
**   MIT License yadda yadda     **
**   blah blah whatever          **
**                               **
**********************************/

var docRef = app.activeDocument;
var selRef = docRef.selection;

if (selRef.length == 0) {alert("You haven't selected anything, dummy.")}

for (var i=0; i<selRef.length; i++) {
	var pathRef = selRef[i];	
	
	if 	(!(pathRef.fillColor instanceof RGBColor) && 
		(!(pathRef.fillColor instanceof GradientColor)) && 
		(!(pathRef.fillColor instanceof NoColor)) && 
		(!(pathRef.fillColor instanceof GrayColor))) {
			alert("No fill color data found.")
	}
	
	if 	(!(pathRef.strokeColor instanceof RGBColor) && 
		(!(pathRef.strokeColor instanceof GradientColor)) && 
		(!(pathRef.strokeColor instanceof NoColor)) && 
		(!(pathRef.strokeColor instanceof GrayColor))) {
			alert("No stroke color data found.")
	}
	
	var strokeWidthHolder = pathRef.strokeWidth;
	var fillColorHolder = pathRef.fillColor;
	var strokeColorHolder = pathRef.strokeColor;
	
	pathRef.stroked = false;
	pathRef.stroked = true;
	
	if (pathRef.fillColor instanceof RGBColor) {
		pathRef.strokeColor = new RGBColor()
	} else if (pathRef.fillColor instanceof GradientColor) {
		pathRef.strokeColor = new GradientColor()
	} else if (pathRef.fillColor instanceof NoColor) {
		strokeWidthHolder = 0;
		pathRef.strokeColor = new NoColor()
	} else if (pathRef.fillColor instanceof GrayColor) {
		strokeWidthHolder = 0;
		pathRef.strokeColor = new GrayColor()
	}
	
	pathRef.strokeColor = fillColorHolder;
	pathRef.strokeWidth = strokeWidthHolder;
	
	
	
	pathRef.filled = false;
	pathRef.filled = true;
	
	if (pathRef.strokeColor instanceof RGBColor) {
		pathRef.fillColor = new RGBColor()
	} else if (pathRef.strokeColor instanceof GradientColor) {
		pathRef.fillColor = new GradientColor()
	} else if (pathRef.strokeColor instanceof NoColor) {
		pathRef.fillColor = new NoColor()
	} else if (pathRef.strokeColor instanceof GrayColor) {
		pathRef.fillColor = new GrayColor()
	}
	
	pathRef.fillColor = strokeColorHolder;
	
}
