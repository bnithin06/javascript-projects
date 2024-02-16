// creating a array to store the quotes
const quotes=[
    "A beautiful sunset adorned the sky as the waves gently crashed against the shore.",
    "Beneath the canopy of stars, the ancient ruins whispered stories of civilizations long gone.",
    "Cascading waterfalls carved their way through the rugged mountains, creating breathtaking vistas.",
    "Dappled sunlight filtered through the dense foliage, painting patterns on the forest floor.",
    "Ethereal mist hung over the tranquil lake, shrouding the landscape in a mystical aura.",
    "Flocks of migratory birds filled the crisp autumn air, heralding the changing of seasons.",
    "Golden fields stretched as far as the eye could see, swaying in the gentle breeze.",
    "Hushed whispers echoed through the halls of the abandoned castle, hinting at forgotten secrets.",
    "In the heart of the bustling city, hidden alleyways revealed glimpses of its storied past.",
    "Jagged peaks pierced the horizon, standing as silent sentinels against the passage of time.",
    "Kaleidoscopic flowers bloomed in vibrant hues, attracting bees with their sweet nectar.",
    "Luminous fireflies danced in the moonlit meadow, painting the night with their gentle glow.",
    "Majestic eagles soared high above the rugged cliffs, surveying their domain with keen eyes.",
    "Nestled among the rolling hills, quaint villages exuded an air of timeless charm.",
    "Ornate tapestries adorned the walls of the grand ballroom, telling tales of bygone eras.",
    "Pristine glaciers glistened in the early morning light, casting an ethereal beauty upon the landscape.",
    "Quintessential cobblestone streets winded their way through the historic district, inviting exploration.",
    "Rustling leaves whispered secrets of the forest, weaving tales of ancient wisdom.",
    "Sun-kissed meadows stretched out beneath a vast expanse of cerulean sky, alive with the hum of nature.",
    "Twinkling stars dotted the night sky like diamonds, casting their light upon the world below.",
    "Underneath the ancient oak tree, a sense of tranquility enveloped the peaceful glade.",
    "Velvety petals unfurled in the warmth of the morning sun, heralding the arrival of spring.",
    "Whispers of the past lingered in the air, haunting the corridors of the abandoned mansion.",
    "Xenial warmth emanated from the cozy fireplace, inviting weary travelers to take respite.",
    "Yearning for adventure, the intrepid explorer set out to chart uncharted territories.",
    "Zealous spirits roamed the earth, their legacy etched into the annals of history."
];


// empty array to store the words of current quote.
let current=[];
// word index
let index=0;
let startTime=Date.now();
// console.log(startTime);

// accesing the elements through dom manipulation
const start=document.querySelector('#start');
const input=document.querySelector('#user-msg');
const message=document.querySelector('#msg-content');
const reset=document.querySelector('#restart');

reset.addEventListener('click',()=>{
    // generate quote from quotes array
    const quoteIndex=Math.floor(Math.random()*quotes.length);
    const quote=quotes[quoteIndex];
    current=quote.split(' ');
    index = 0;
    // reset the word index
    const spanWords=current.map(function(current) {return `<span>${current} </span>`});
    // console.log(spanWords);
    message.innerHTML=spanWords.join('');
    message.childNodes[0].className = 'highlight';
    // console.log(current);
    // setting the msg box to empty 
    // message.innerText='';
    // taking the input from the user
    input.value='';
    input.focus();
    startTime=new Date().getTime();
    start.disabled=true;
    start.style.color='black';
});



start.addEventListener('click',()=>{
    // generate quote from quotes array
    const quoteIndex=Math.floor(Math.random()*quotes.length);
    const quote=quotes[quoteIndex];
    current=quote.split(' ');
    index = 0;
    // reset the word index
    const spanWords=current.map(function(current) {return `<span>${current} </span>`});
    // console.log(spanWords);
    message.innerHTML=spanWords.join('');
    message.childNodes[0].className = 'highlight';
    // console.log(current);
    // setting the msg box to empty 
    // message.innerText='';
    // taking the input from the user
    input.value='';
    input.focus();
    startTime=new Date().getTime();
    start.disabled=true;
    start.style.color='black';
});

// typing logic
input.addEventListener('input',()=>{
    const typedValue=input.value;
    const word=current[index];
    if (typedValue === word && index === current.length - 1) {
        // end of sentence
        // Display success
        const elapsedTime = new Date().getTime() - startTime;
        const m = `CONGRATULATIONS!🥳 You finished in ${elapsedTime / 1000} seconds.`;
        message.innerText = m;
        input.value='';
      } else if (typedValue.endsWith(' ') && typedValue.trim() === word) {
        // end of word
        // clear the typedValueElement for the new word
        input.value = '';
        // move to the next word
        index++;
        // reset the class name for all elements in quote
        for (const wordElement of message.childNodes) {
            wordElement.className = '';
        }
        // highlight the new word
        message.childNodes[index].className = 'highlight';
      } else if (word.startsWith(typedValue)) {
        // currently correct
        // highlight the next word
        message.className = '';
      } else {
        // error state
        message.childNodes[index].className = 'error';
      }
});










