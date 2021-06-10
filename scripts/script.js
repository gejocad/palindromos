//Función prevent Default para cancelar los eventos por defecto
function functionSubmit(e){
   e.preventDefault();
}

//Declaración de variables
let base, palabra;



function palindromo(){
    base = document.getElementById('palabra').value;

    palabra = base.toLowerCase().replace(/[\W_]/g, '');
    
    let tmp = 0;
    for(var i = 0, len = palabra.length - 1; i < len/2; i++) {
      if(palabra[i] !== palabra[len-i]) {
        tmp = 1;
        
      }
    }
    if (tmp > 0)
    { document.querySelector("#mensaje").innerHTML = "No es un palindromo";}
    else   
    { document.querySelector("#mensaje").innerHTML = "Es un palindromo";}
    
}

