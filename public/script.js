(function () { 
    console.log('script is working ! ');


document.querySelector("#btnLoad").addEventListener('click', () =>{
    getQuote();
})

async function getQuote(){
    const response = await fetch('/quote');
    const data = await response.json();
    
   
    let author = JSON.stringify(data.originator.name);
    let quoteN = data.content;
    let x = document.querySelector('#author');
    x.innerHTML = author;
    let y = document.querySelector('#Saying');
    y.innerHTML = quoteN; 
    
    
    
    

};

}
 ) 
  ();