# Google-Scripts
This Google Apps Script automates the process of copying rows from one sheet to another based on matching IDs. It is designated to work within a Google Sheets enviroment providing a convinient way to transfer data between sheets.

Functionality
1. Source Sheet Detail:
the script requires the user to specify the name of the source sheet where the IDs are listed and the column where the IDs are located.
2.Target Sheet Detail:
it also requires the name of the target sheet, to search for IDs and the column in the target sheet where the IDs might be found.
3. New Sheet Name:
Additionally, the user can specify the name of the new sheet where the matching rows will be copied.
4. Copying Process:
1.The script first retrieves the IDs from the specified column in the source sheet.
2.It then searches for each ID in the target sheet, looking for matches in the specified column.
If a match is found, the entire row from the target sheet is copied to the new sheet.
This process is repeated for each ID found in the source sheet.
5. Error Handling:
The script includes error handling to check if the source and target sheets exist. if either sheet is not found, an error message is logged, and the script exits.
if the new sheet with the specified name already exists, the script appends a timestamp to the name to create a unique new sheet.
Usage:
to use the script, the user need to open the Google Sheets document containing the source and target sheets, open the Apps Script editor, and paste the provided script. They should then customize the script by specifying the names of the source and target sheets, the columns where the IDs are located, and the names of the new sheet. Finally, they can run the script to copy the matching rows to the new sheet.

NB This script can be a useful tool for various purposes, such as data analysis, consolidated or creating summary reports based on the specific critrea.  
