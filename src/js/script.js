/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


//Returns a random quote object from the `quotes` array.
function getRandomQuote() {
    var randomNumber = Math.floor(Math.random() * quotes.length); 
    return quotes[randomNumber];
}

//Logs each quote to the console.
function quotesToConsoleLog() {
    quotes.forEach(function (quote) {
        quote.log();
    });
}

//Returns a document element
function getElement(elementname, attributeName, innerHtml) {
    var htmlElement = document.createElement(elementname);
    htmlElement.setAttribute('class', attributeName);
    htmlElement.innerHTML = innerHtml;

    return htmlElement;
}


//Return document element with the quote source add 'citation' and 'year' if exist. 
function getQuoteElement(randomQuote) {
    var sourceElement = getElement('p', 'source', randomQuote.source);

    if (randomQuote.citation) {
        var htmlCitationElement = getElement('span', 'citation', randomQuote.citation);
        sourceElement.appendChild(htmlCitationElement);
    }

    if (randomQuote.year) {
        var htmlYearElement = getElement('span', 'year', randomQuote.year);
        sourceElement.appendChild(htmlYearElement);
    }

    return sourceElement;
}

//Clear the 'quote-box' div box and append new quote.
function setQuoteBoxInnerHtml(quoteElement, sourceElement) {
    var quoteBoxElement = document.getElementById('quote-box');
    quoteBoxElement.innerHTML = "";
    quoteBoxElement.appendChild(quoteElement);
    quoteBoxElement.appendChild(sourceElement);
}


//Set the `innerHTML` of the `quote-box` div to the HTML string. 
function printQuote() {

    var randomQuote = getRandomQuote();
    var quoteElement = getElement('p', 'quote', randomQuote.quote);
    var sourceElement = getQuoteElement(randomQuote);

    setQuoteBoxInnerHtml(quoteElement, sourceElement);
}

//Print all quotes to console
quotesToConsoleLog();

/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. 
***/
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
