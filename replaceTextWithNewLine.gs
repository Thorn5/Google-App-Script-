function replaceTextWithNewLine() {
var body = DocumentApp.getActiveDocument().getBody();
body.replaceText(' OR ', '\n');
}
