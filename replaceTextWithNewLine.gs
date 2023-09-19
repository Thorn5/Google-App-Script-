function replaceTextWithNewLine() {
  var docId = PropertiesService.getScriptProperties().getProperty('DOC_ID');
  // Logger.log('docId: ' + docId);
  var body = DocumentApp.openById(docId).getBody();
  body.replaceText(' OR ', '\n');
}
