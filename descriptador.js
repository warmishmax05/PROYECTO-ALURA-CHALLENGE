const texto1 = document.getElementById('texto1');
const texto2 = document.getElementById('texto2');
const botonEncriptar = document.getElementById('btn_encriptar');
const botonDesencriptar = document.getElementById('btn_desencriptar');
const botonCopiar = document.getElementById('copiar');
 //navigator clipboard meto write text

 


const encriptarLetras = (letra) => {
    let letraFinal = '';
    //definir variable a retornar
    //si letra igual a e convertir a "enter"
    if (letra === 'e') {
       letraFinal = "enter"
    } 
     
    else  if (letra === 'i'){
        letraFinal = 'imes'
    }
    
    else  if (letra === 'a'){
        letraFinal = 'ai'
    }
    else  if (letra === 'o'){
        letraFinal = 'ober'
    }
    else  if (letra === 'u'){
        letraFinal = 'ufat'
    }
    
    
    
    else {
        letraFinal = letra;
    }
   
   return letraFinal;
   
   
   } ;
