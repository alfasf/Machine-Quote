
$(document).ready(function(){
  $("#newQuote").on("click", function(e){
  	e.preventDefault();
    $.ajax({
    	type: 'GET',
    	url: "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=",
    	});

    });

}); 
/*
$(document).ready(function(){
  
    $.getJSON("https://quotesondesign.com/wp-json/posts", function(json){
      $("blockquote").html(JSON.stringify(json));
      
    });
    //$("blockquote").html(' "This is just a test" ' )
  
});*/