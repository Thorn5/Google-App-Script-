// replaceTextWithNewLine.gs
// multiple terms: OR or { }. eg: (from:amy OR from:david) / {from:amy from:david}

function replaceTextWithNewLine() {
  // Grab the docID from the document URL
  var docId = 'XXX';
  //Logger.log('docId: ' + docId);
  var body = DocumentApp.openById(docId).getBody();
  body.replaceText(' OR ', '\n');
}
