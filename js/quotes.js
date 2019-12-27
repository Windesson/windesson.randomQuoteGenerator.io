// An array to store quote objects 
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
        quote: "A smile is a curve that sets everything straight.",
        source: "Phyllis Diller",
        citation: "brainyquote",
        year: "2018",
        log: function () {
            var self = this;
            console.log(`${self.quote}, ${self.source}, ${self.citation}, ${self.year}`);
        }
    },
    {
        quote: "Whatever comes in my way, I take it with smile.",
        source: "Kubra Sait",
        citation: "brainyquote",
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
        log: function () {
            var self = this;
            console.log(`${self.quote}, ${self.source}, ${self.citation}, ${self.year}`);
        }
    }
];