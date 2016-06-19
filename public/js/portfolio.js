$(document).ready(function(){
  var myTextArea = document.getElementById('editor');

  var myCodeMirror = CodeMirror.fromTextArea(myTextArea, {
    lineNumbers: true
  });

  $.fn.goTo = function() {
    console.log('hey');
    $('html, body').animate({
      scrollTop: $(this).offset().top + 'px'
    }, 'fast');
    return this;
  }

  $('#start-learning').on('click', function(e) {
    e.preventDefault();
    var editor = $('.code-area');
    console.log(editor.offset());
    $('html, body').animate({
      scrollTop: $(editor).offset().top + 'px'
    }, 'slow');
  })
})
