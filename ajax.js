$(document).ready(function() {

  $(document).ready(function() {
  $.ajax("text.txt", {
  }).done(function(text) {
    $('#text').html(text);
  });
});

  $('h2').click(function() {
    $.getJSON("json.json", function(data) {
      $('#text2').html('<p>' + data.title + '</p>');
      list = '<ul>'
      for(var i = 0; i < data.movies.length; i++) {
        list += '<ol>' + data.movies[i] + '</ol>'
      }
      list += '</ul>'
      $('#text3').html(list);
    });
  });
});
