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
var colorHolder = new RGBColor();

for (var i=0; i<selRef.length; i++) {
	var pathRef = selRef[i];
	colorHolder = pathRef.fillColor;
	pathRef.filled = false;
	pathRef.stroked = true;
	pathRef.strokeColor = colorHolder;
}
