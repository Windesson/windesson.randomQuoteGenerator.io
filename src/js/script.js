/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing

/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/

var quotes = [
    {
        quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        source: "Albert Einstein",
        citation: "goodreads",
        year: "1940"
    },
    {
        quote: "A room without books is like a body without a soul.",
        source: "Marcus Tullius Cicero",
        citation: "goodreads",
        year: "2018"
    },
    {
        quote: 'Don\'t Let Yesterday Take Up Too Much Of Today.',
        source: 'Twitter',
        citation: 'Will Rogers',
        year: ""
    }
];


/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/

function getRandomQuote() {
    // generate a random number between 0 and the last index in the array parameter
    // use the random number and box notation to grab a random item from the quotes
    // return the random item
    var randomNumber = Math.floor(Math.random() * quotes.length); 
    return quotes[randomNumber];
}


/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/
function printQuote() {
    // create a variable that calls the getRandomQuote() function
    // create a variable that initiates your HTML string
    // using the template in the project instructions, add the two default quote

    // properties, quote and source
    // if there is a quote.citation property, add it the string
    // if there is a quote.year property, add it the string
    // close the string with the necessary closing HTML tags
    // set the innnerHTML of the .quote-box to the complete HTML string
    //document.getElementById('loadQuote')

    var randomQuote = getRandomQuote();

    var htmlString = `
        <p class="quote" >${randomQuote.quote || ''}</p>
        <p class="source">${randomQuote.source || ''}<span class="citation">${randomQuote.citation || ''}</span><span class="year">${randomQuote.year || ''}</span></p>
    `;

    document.getElementById('quote-box').innerHTML = htmlString;
}



/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.