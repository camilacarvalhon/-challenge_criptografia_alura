
/* Regras Codificador: 
"e" é convertido para "enter" 
"i" é convertido para "imes"
"a" é convertido para "ai"
"o" é convertido para "ober"
"u" é convertido para "ufat"
Apenas letras minúsculas
Não permite acentuação   
*/

/* Regras Decodificador: 
"enter" é convertido para "e" 
"imes" é convertido para "i"
"ai" é convertido para "a"
"ober" é convertido para "o"
"ufat" é convertido para "u"
Apenas letras minúsculas
Não permite acentuação     
*/


// Função de criptografar 

function criptografar(){

    let texto = document.getElementById('input-texto').value;

    let texto_cripto = ''

    for (let l of texto){

        if(l == 'a'){
            texto_cripto= texto_cripto + 'ai';
        }else if( l == 'e'){
            texto_cripto= texto_cripto + 'enter';
        }
        else if (l == 'i'){
            texto_cripto = texto_cripto + 'imes';
        }else if (l == 'o'){
            texto_cripto = texto_cripto + 'ober';
        }else if(l == 'u'){
            texto_cripto = texto_cripto + 'ufat';
        }else{
            texto_cripto = texto_cripto + l
        }
    }

    // document.getElementById("msg").innerText = 
    console.log(texto_cripto);

}

// Função de descriptografar
function descriptografar(){

    let texto = document.getElementById('input-texto').value;

    let texto_descripto = ''

    for (let i=0; i< texto.length; i++){
       

        if(texto[i]== 'a' && texto[i+1]== 'i' ){
        
            texto_descripto = texto_descripto + 'a'
        }else if(texto[i]== 'e' && texto[i+1]== 'n' && texto[i+2] == 't' && texto[i+3]== 'e' ){

            texto_descripto = texto_descripto + 'e'
            i = i + 4
        }else if(texto[i]== 'i' && texto[i+1]=='m' && texto[i+2]=='e' && texto[i+3] == 's'){
            texto_descripto = texto_descripto + 'i'
            i = i + 3
        }else if(texto[i]== 'o'&& texto[i+1]== 'b' && texto[i+2]=='e' && texto[i+3] =='r'){
            texto_descripto = texto_descripto + 'o'
            i = i + 3
        }else if(texto[i]== 'u'&& texto[i+1]== 'f' && texto[i+2]=='a' && texto[i+3] =='t' ){
            texto_descripto = texto_descripto + 'u'
            i = i + 3
        }
        else{
            if(texto[i]!= 'a' 
                        &&  texto[i]!= 'e'
                             &&  texto[i]!= 'i'
                                 &&  texto[i]!= 'o'
                                     &&  texto[i]!= 'u'){

                    texto_descripto = texto_descripto + texto[i]
            }
        }
        
        
    }
    console.log(texto_descripto);
}

//  Função de copiar
function copiar(){
    alert('deu certo!')
}
