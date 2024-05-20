function findandCopyRows() {
  // Source sheet details
  var sourceSheetName = "Source"; //Name of the sheet where IDs are listed.

  var sourceRange = "A:A";  //column where the IDs are located.

  // Target sheet details
  var targetSheetName = "Target"; //Name of the sheet to search for IDs.

  var targetColumn = "B"; //Column in the target sheet where the ids might be found.

  // New sheet name
  var newSheetName = "NewSheet"; //Name of the new sheet to copy matching rows to

  // Get the source range (IDs)
  var sourceSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sourceSheetName);

  var sourceRangeValues = sourceSheet.getRange(sourceRange).getValues();

  // Prepare the new sheet
  var newSheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet(newSheetName);

  // loop through each ID in the source range
  for (var i=0; i<sourceRangeValues.length; i++){
    var id = sourceRangeValues[i][0]; //Assuming IDs are in the first columns


    // Search for the ids in the target sheet
  var targetsheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(targetSheetName);

  var LastRow = targetsheet.getLastRow();

  var dataRange = targetsheet.getRange(1, targetsheet.getRange(targetColumn+'1').getColumn(), LastRow); //Adjust the start row if needed.

  var values = dataRange.getValues();

  // check if the ID exists in the target sheet
  for (var j = 0; j < values.length; j++){
    if (values[j][0] == id ){//Assuming the IDs are in the first column of the target sheet
    // Copy the entire row to the new sheet
    newSheet.appendRow(values[j]);
    }
  }
    
  }

}
