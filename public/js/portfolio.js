$(document).ready(function(){
  console.log(document.getElementById('editor'));
  var myTextArea = document.getElementById('editor');

  var myCodeMirror = CodeMirror.fromTextArea(myTextArea, {
    lineNumbers: true
  });
})
