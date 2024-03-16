







function criptografar(){
 let letra=[]
let palavra=document.querySelector('input').value;
for(i=0;i<palavra.length;i++){
   letra.push(palavra[i])

   switch(letra[i]){
    case "e":
         letra[i]='enter'
        break
    case "i":
         letra[i]='imes'
       break
    case "a":
        letra[i]='ai'
        break
    case "o":
        letra[i]='ober'
        break
    case "u":
        letra[i]='ufat'
    break
   }
}
let letraSemVirgula=letra.join('')  
let palavracriptografada=document.getElementById('CampoDeOutput');
palavracriptografada.innerHTML=letraSemVirgula
if(letraSemVirgula==""){
    alert("Algo deu errado")
    palavracriptografada.innerHTML="Nenhuma palavra encontrada. Insira uma palavra no campo do texto!!!"
}
else{
    palavracriptografada.innerHTML=resultado
}
}

function descriptografar(){
    palavra=document.querySelector('input').value;
    let resultado=palavra.replace(/enter/g,'e').replace(/imes/g,'i').replace(/ai/g,'a').replace(/ober/g,'o').replace(/ufat/g,'u')
    let palavradescriptografada=document.getElementById('CampoDeOutput')
    palavradescriptografada.innerHTML=resultado
    if(resultado==""){
        alert("Algo deu errado")
        palavradescriptografada.innerHTML="Nenhuma palavra foi encontrada. Insira uma palavra no campo do texto!!!"
    }
    else{
        palavradescriptografada.innerHTML=resultado
    }
}


function copiarTexto() {
    const Copiar = document.getElementById("CampoDeOutput");
        let texto = Copiar.innerText;  
        navigator.clipboard.writeText(texto)   
}
