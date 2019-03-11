/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/
// Create a list containing 5 quotes, one with citation and years

var quotes =[{Quote: "Good order is the foundation of all things.", Source: "Edmund Burke,", Citation: "Reflections on the Revolution in France,", Year: "1790"},
            {Quote:"There are two great days in a person's life - the day we are born and the day we discover why.", Source: "William Barclay", Citation:"", Year:""},
            {Quote:"Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.", Source:"Mark Twain", Citation:"", Year:""},
            {Quote:"Those who dare to fail miserably can achieve greatly.", Source:"John F. Kennedy", Citation:"", Year:""},
            {Quote:"It is hard to fail, but it is worse never to have tried to succeed.", Source:"Theodore Roosevelt", Citation:"", Year:""}];
/*
Create a function to receive the list and create random numbers from 0 to 5.
Create a list to hold the quote selected by the random number generator.
*/
function getRandomQuote(message){
  var randomQuoteRef = Math.floor(Math.random()*quotes.length);
  var newList = [];
  var newQuote = quotes[randomQuoteRef].Quote;
  var newSource = quotes[randomQuoteRef].Source;
  var newCitation = quotes[randomQuoteRef].Citation;
  var newYear = quotes[randomQuoteRef].Year;

  newList.unshift(newQuote, newSource, newCitation, newYear);
      return  newList;
}
/*
Create a function to call the getRandomQuote hold the "return" from that function in a variable.
Pull out the quote from the "return" list from the getRandomQuote function.
Identify the element id's added in the "index.html" file and use ".innerHTML" to wite to those elements.
*/
function  printQuote(){
  newQuote = getRandomQuote(quotes);
  var outputDiv = document.getElementById('quote');
      outputDiv.innerHTML = newQuote[0];
  var outputDiv = document.getElementById('output');
      outputDiv.innerHTML = newQuote[1] + " " + newQuote[2] +" " + newQuote[3];
}
/*
Use ".addEventListener" method from the "getElementById" method to run the "printQuote" function
when the button is clicked.
*/
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
