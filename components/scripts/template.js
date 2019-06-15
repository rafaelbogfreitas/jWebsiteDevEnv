$(function() {
  var Mustache = require('mustache');

  $.getJSON('js/data.json', function(data){
    var template = $().html();
    var html = Mustache.to_html(template, data);
    $().html(html);
  })
})
