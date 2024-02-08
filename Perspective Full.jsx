/*
Camera Raw Filter - Transform Values:
1 = Auto, 2 = Full, 3 = Level, 4 = Vertical
*/
transformCRF( transValue = 2 );

function transformCRF() {
var actDesc = new ActionDescriptor();
var transCode = charIDToTypeID("PerU");
actDesc.putInteger(transCode, transValue);
executeAction(stringIDToTypeID("Adobe Camera Raw Filter"), actDesc, DialogModes.NO);
}