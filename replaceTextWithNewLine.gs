// replaceTextWithNewLine.gs
function replaceTextWithNewLine() {
  // Grab the docID from the document URL
  var docId = 'XXX';
  //Logger.log('docId: ' + docId);
  var body = DocumentApp.openById(docId).getBody();
  body.replaceText(' OR ', '\n');
}
