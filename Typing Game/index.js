// creating a array to store the quotes
const quotes=[
    'The only way to do great work is to love what you do.',
    'In the end, it is not the years in your life that count. It is the life in your years',
    'Believe you can and you are halfway there',
    'The future belongs to those who believe in the beauty of their dreams',
    'Happiness is not something ready-made. It comes from your own actions'
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
    // start.disabled=true;
    start.style.color='black';
});

// typing logic
input.addEventListener('input',()=>{
    const typedValue=input.value;
    const word=current[index];
    if( typedValue===word && index===current.length-1){
        const elapsedTime = new Date().getTime() - startTime;
        const m = `CONGRATULATIONS! You finished in ${elapsedTime / 1000} seconds.`;
        message.innerText = m;
        input.value='';
    }
    else if(typedValue.endsWith(' ') && typedValue.trim()===word){
        index++;
        input.value='';
        for(el of message.childNodes){
            el.className='';
        }
        message.childNodes[index].className='highlight';
    }
    else{
        console.log('The Game is case sensitive');
    }
});










