
const btn = document.getElementById('btn')
const texto = document.getElementById('texto')

function lower(word){
    let min = word.value.toLowerCase()
    min = min.replace(/[^a-z'\s]+/g, "")
    
    return min;
}
let valor = false

function letra(){
  
   let letra = lower(texto)
   let atual = []
   let contador = {}
      for (let i = 0; i < letra.length; i++) {
       atual = letra[i]
       
       if (contador[atual] === undefined) {
           contador[atual] = 1; 
        } else { 
           contador[atual]++; 
        }
        
    }
    for (let letter in contador) { 
       const span = document.createElement("span"); 
       const textContent = `"${letter}": ${contador[letter]}, `;
       span.innerHTML = textContent; 
       const letters = document.getElementById("lettersDiv");
       letters.appendChild(span); 
    }
   
   valor=true
}


function palavra(){
   let sepPalavra = lower(texto).split(/\s/)
   let contador = {}
   let atual = ''

for (let i = 0; i < sepPalavra.length; i++) {
   atual = sepPalavra[i]
   
   if (contador[atual] === undefined) {
       contador[atual] = 1; 
    } else { 
       contador[atual]++; 
    }

   }
   for (let letter in contador) { 
    const span = document.createElement("span"); 
    const textContent = `"${letter}": ${contador[letter]}, `;
    span.innerHTML = textContent; 
    const letters = document.getElementById("wordsDiv");
    letters.appendChild(span); 
 }
valor =true
}
function reset(){
   const letterClean = document.getElementById('lettersDiv')
   const wordClean = document.getElementById('wordsDiv')
   letterClean.innerText=''
   wordClean.innerText=''
}



btn.addEventListener('click', function(){
   if(valor === true){
      reset()
   }
  letra()
  palavra()
})



let area = document.getElementById('texto')
function myFunction(x) {
   if (x.matches) { 
     document.body.style.backgroundColor = "yellow";
     
     area.setAttribute('cols', '30');
     area.setAttribute('rows', '15');
   } else {
    document.body.style.backgroundColor = "#2bc12b";
     area.setAttribute('cols', '60');
     area.setAttribute('rows', '15');
   }
 }

 const x = window.matchMedia("(max-width: 700px)")
myFunction(x) 
x.addListener(myFunction) 
