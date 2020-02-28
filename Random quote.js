
  var $actualQuote = $('#actualText')
  var $actualAuthor = $('#actualAuthor')
const newQuote = () => {
      $.ajax({
        url: "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?",
        contentType: "application/json",
        dataType: 'json',
        success: function(result){
            $actualQuote.text("'" + result.quoteText + "'");
            $actualAuthor.text("'" + result.quoteAuthor + "'")
        }
    })
}


$(document).ready(function() {

//random quote url from: https://www.juniordevelopercentral.com/6-random-quote-apis/
    $.ajax({
        url: "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?",
        contentType: "application/json",
        dataType: 'json',
        success: function(result){
            $actualQuote.text("'" + result.quoteText + "'");
            $actualAuthor.text("'" + result.quoteAuthor + "'")
        }
    })
    $('#new-quote').click(newQuote);
});

