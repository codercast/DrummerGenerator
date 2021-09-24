function generateRandom() {

const quoteArr = ["I love being a drummer. Everyone thinks you’re dumb. What they don’t realise is that if it weren’t for you, their band would suck.", 
    "Stamina is the force that drives the drumming; it’s not really a sprint.", 
    "Playing fast around the drums is one thing. But to play music, to play with people for others to listen to, that’s something else. That’s a whole other world.",
    "You only get better by playing. If you think you stink, you probably do. I consider every drummer that ever played before me an influence, in every way.",
    "Drumming was the only thing I was ever good at.",
    "Drums all have their own particulars – each drum has a place where they sound the best – where they ring out and resonate the best, and the head surface isn’t too loose or too tight, mainly so you get a good rebound off of the head.",
    "Drumming is my middle name.",
    "Drumming’s pretty physical. We sit at the back of the stage getting beat up like a workhorse.",
    "I'm a drummer. I can count to four and repeat."
];

const drummers = ["-Dave Grohl", "-Neil Peart", "-Tony Williams", "-Buddy Rich", "-John Bonham", "-Chad Smith", "-Ringo Starr", "-Tommy Lee", "-Tre Cool" ];

let random = Math.floor(Math.random()*quoteArr.length);
let ranQuote = quoteArr[random];
let ranDrummer = drummers[random];
let quoteBlock = document.querySelector(".text");
let quoteDrum = document.querySelector(".drummer");
quoteBlock.textContent = ranQuote,
quoteDrum.textContent = ranDrummer;

};