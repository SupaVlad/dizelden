import '../styles/index.scss';
window.$ = window.jQuery = require('jquery');
$(document).ready(function() {

  function SelectContent (element) {
    var doc = document
      , text = doc.getElementById(element)
      , range, selection
    ;
    if (doc.body.createTextRange) {
      range = document.body.createTextRange();
      range.moveToElementText(text);
      range.select();
    } else if (window.getSelection) {
      selection = window.getSelection();
      range = document.createRange();
      range.selectNodeContents(text);
      selection.removeAllRanges();
      selection.addRange(range);

    }
    document.execCommand('Copy');
  }

  $(".copy").click(function () {
    SelectContent($(this).attr('title'));
  });
});

console.log('webpack starterkit');
