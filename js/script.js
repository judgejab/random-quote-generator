// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var intervalID = window.setInterval(printQuote, 3000);
var viewedQuotes = [];

// prints quote
function printQuote(){
	
	var finalQuote = buildQuote();
	document.getElementById('quote-box').innerHTML = finalQuote;

	var color = '#'+Math.floor(Math.random()*16777215).toString(16);
	document.body.style.background = color;
	document.getElementById('loadQuote').style.backgroundColor = color; 
}


// builds message for html, adding on citation and/or year if necessary
function buildQuote(){
	var quote2Print = getQuote(); 
	var message;
	message = "<p class='quote'>" + quote2Print.quote + "</p><p class='source'>" + quote2Print.source;

	if(quote2Print.hasOwnProperty('citation') === true){
		citation = quote2Print.citation;
		message += "<span class='citation'>"  + quote2Print.citation + "</span>";
		
		if(quote2Print.hasOwnProperty('year') === true){
			year = quote2Print.year;
			message += "<span class='year'>" + quote2Print.year  + "</span></p>";
			return message;

		} else {
			return message += "</p>";
		}

	}else {
		return message;
	}
}




function getQuote() {
  if (quotes.length == 0)                                   // if empty, reload the main list
    quotes = viewedQuotes.splice(0, viewedQuotes.length);   // (and empty viewed list)
  var randNum = Math.floor(Math.random() * quotes.length);  // pick a quote at random
  var quote = quotes.splice(randNum, 1)[0];                 // take it out of the main list
  viewedQuotes.push(quote);                                 // now add it to the "viewed" list
  return quote;                                             // return the chosen quote
}














