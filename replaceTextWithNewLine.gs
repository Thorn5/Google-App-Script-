function replaceTextWithNewLine() {
// create environment variable or paste the DOC_ID (can be grabbed from the document URL)
  var docId = PropertiesService.getScriptProperties().getProperty('DOC_ID');
  // Logger.log('docId: ' + docId);
  var body = DocumentApp.openById(docId).getBody();
  body.replaceText(' OR ', '\n');
}
