/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing

/*** 
   An array to store quote objects 
***/
var quotes = [
    {
        quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        source: "Albert Einstein",
        citation: "goodreads",
        year: "1940",
        log: function () {
            var self = this;
            console.log(`${self.quote}, ${self.source}, ${self.citation}, ${self.year}`);
        }
    },
    {
        quote: "A room without books is like a body without a soul.",
        source: "Marcus Tullius Cicero",
        citation: "goodreads",
        year: "2018",
        log: function () {
            var self = this;
            console.log(`${self.quote}, ${self.source}, ${self.citation}, ${self.year}`);
        }
    },
    {
        quote: 'Don\'t Let Yesterday Take Up Too Much Of Today.',
        source: 'Twitter',
        citation: 'Will Rogers',
        year: "",
        log: function() {
            var self = this;
            console.log(`${self.quote}, ${self.source}, ${self.citation}, ${self.year}`);
        }
    }
];

/***
    @return {quote} a random quote object from the `quotes` array.
***/
function getRandomQuote() {
    var randomNumber = Math.floor(Math.random() * quotes.length); 
    return quotes[randomNumber];
}

/***
    Logs each quote to the console.
 ***/
function quotesToConsoleLog() {
    quotes.forEach(function (quote) {
        quote.log();
    });
}

function getElement(elementname, attributeName, innerHtml) {
    var htmlElement = document.createElement(elementname);
    htmlElement.setAttribute('class', attributeName);
    htmlElement.innerHTML = innerHtml;

    return htmlElement;
}


/***
   Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/
function printQuote() {

    var randomQuote = getRandomQuote();

    var htmlQuoteElement = getElement('p', 'quote', randomQuote.quote);

    var htmlSourceElement = getElement('p', 'source', randomQuote.source);

    if (randomQuote.citation) {
        var htmlCitationElement = getElement('span', 'citation', randomQuote.citation);
        htmlSourceElement.appendChild(htmlCitationElement);
    }

    if (randomQuote.year) {
        var htmlYearElement = getElement('span', 'year', randomQuote.year);
        htmlSourceElement.appendChild(htmlYearElement);
    }

    document.getElementById('quote-box').innerHTML =  "";
    document.getElementById('quote-box').appendChild(htmlQuoteElement);
    document.getElementById('quote-box').appendChild(htmlSourceElement);
}

quotesToConsoleLog();

/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
