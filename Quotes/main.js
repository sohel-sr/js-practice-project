const quotes = [
  {
    name:  "Mahatma Gandhi",
    quote: "Live as if you were to die tomorrow. Learn as if you were to live forever."
  },
  {
    name:  " Friedrich Nietzsche ",
    quote: " That which does not kill us makes us stronger. "
  },
  {
    name:  " Bernard M. Baruch ",
    quote: " Be who you are and say what you feel, because those who mind don’t matter and those who matter don’t mind. "
  },
  {
    name:  "Virginia Satir ",
    quote: "We must not allow other people’s limited perceptions to define us. "
  },
  {
    name:  "Theodore Roosevelt ",
    quote: "Do what you can, with what you have, where you are. "
  },
  {
    name:  "Oscar Wilde ",
    quote: "Be yourself; everyone else is already taken. "
  },
  {
    name:  "William Shakespeare ",
    quote: "This above all: to thine own self be true. "
  },
  {
    name:  " Napoleon Hill ",
    quote: "If you cannot do great things, do small things in a great way. "
  },
  {
    name:  "Milton Berle ",
    quote: "If opportunity doesn’t knock, build a door. "
  },
  {
    name:  "Plato ",
    quote: "Wise men speak because they have something to say; fools because they have to say something. "
  },
  {
    name:  "Albert Einstein ",
    quote: "Strive not to be a success, but rather to be of value. "
  },
  {
    name:  "Robert Frost ",
    quote: "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference. "
  },
  {
    name:  "John Wooden ",
    quote: "Do not let what you cannot do interfere with what you can do. "
  },
  {
    name:  "Mark Twain ",
    quote: "Whenever you find yourself on the side of the majority, it is time to pause and reflect. "
  },
  {
    name:  "Thomas Edison ",
    quote: "I haven’t failed. I’ve just found 10,000 ways that won’t work. "
  },
  {
    name:  "Lao Tzu ",
    quote: "A journey of a thousand leagues begins beneath one’s feet. "
  },
  {
    name:  "Maya Angelou ",
    quote: "I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel. "
  },
  {
    name:  " Jim Rohn ",
    quote: "Either you run the day, or the day runs you. "
  },
  {
    name:  "Anais Nin ",
    quote: "Life shrinks or expands in proportion to one’s courage. "
  },
  {
    name:  " Mahatma Gandhi ",
    quote: "You must be the change you wish to see in the world. "
  },
  {
    name:  "Ralph Waldo Emerson ",
    quote: "What you do speaks so loudly that I cannot hear what you say. "
  },
  {
    name:  "Charles Kettering ",
    quote: "Believe and act as if it were impossible to fail. "
  },
  {
    name:  "Jimmy Johnson ",
    quote: "The difference between ordinary and extraordinary is that little extra. "
  },
  {
    name:  "Alan Kay ",
    quote: "The best way to predict the future is to invent it. "
  },
  {
    name:  "Rabbi Hillel ",
    quote: "If I am not for myself, who is for me? And if I am only for myself, what am I? And if not now, when? "
  },
  {
    name:  "Confucius ",
    quote: "Everything has beauty, but not everyone can see. "
  },
  {
    name:  "Theodore Roosevelt ",
    quote: "Believe you can and you’re halfway there. "
  },
  {
    name:  "Anne Frank ",
    quote: "How wonderful it is that nobody need wait a single moment before starting to improve the world. "
  },
  {
    name:  "Albert Einstein ",
    quote: "Imagination is everything. It is the preview of life’s coming attractions. "
  },
  {
    name:  "Norman Vincent ",
    quote: "Change your thoughts and you change your world."
  }
]


const quoteBtn = document.querySelector("#quoteBtn");
const quote = document.querySelector("#quote");
const quoteAuthor = document.querySelector("#quoteAuthor");


quoteBtn.addEventListener("click", displayQuote);

function displayQuote(){
  let random = Math.floor(Math.random()*quotes.length);
  quote.innerHTML = quotes[random].quote;
  quoteAuthor.innerHTML = quotes[random].name;
}
