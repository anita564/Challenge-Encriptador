
   

var inputTexto=document.getElementById('campo_texto')
var boton = document.getElementById('botonEncriptar');
var boton2=document.getElementById('botonDesencriptar');
var texto_textarea=document.getElementById('texto_textarea');
const botonCopiar = document.getElementById('botonCopiar');


function handleClick() {
       const fraseEstablecida =inputTexto.value;
       const frase=fraseEstablecida;
       let valor="";
       let encript="";
    
    const validador= validarCaracteresEspeciales(fraseEstablecida);
    if(validador){
     for (let i = 0; i < frase.length; i++) {
      const vocal = frase.charAt(i);
      // Realizar la comparación con cada letra
      if (vocal === 'a'){
        valor="ai";
      }
      else if(vocal === 'e'){
        valor="enter";
      }
      else if(vocal === 'i'){
        valor="imes";
      }
      else if(vocal === 'o'){
        valor="ober";
      }
      else if(vocal === 'u'){
        valor="ufat";
      }
      else{
        valor= vocal;
      }
      encript= encript+ valor;
      texto_textarea.value=encript;
      console.log(encript);
    }
  }
}

  const valor_vocales = {
    ai: 'a',
    enter: 'e',
    imes: 'i',
    ober: 'o',
    ufat: 'u'
  };
  
  function DesencriptarTexto() {
    const fraseEncriptada =inputTexto.value;
    let fraseDesencriptada = fraseEncriptada;

    const validador= validarCaracteresEspeciales(fraseEncriptada);
    if(validador){
        for (const valorEncriptado in valor_vocales) {
          if (valor_vocales.hasOwnProperty(valorEncriptado)) {
            const valorDesencriptado = valor_vocales[valorEncriptado];
            fraseDesencriptada = fraseDesencriptada.replace(valorEncriptado, valorDesencriptado);
          }
        }

        texto_textarea.value=fraseDesencriptada;
        console.log(fraseDesencriptada);
    }
  }

  function validarCaracteresEspeciales(str) {
    // Expresión regular para buscar caracteres especiales
    const regex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?ABCDEFGHIJKLMNOPQRSTUVWXZY]/;
  
    // Verificar si el string contiene caracteres especiales
    if (regex.test(str)) {
      return false; // El string contiene caracteres especiales
    } else {
      return true; // El string no contiene caracteres especiales
    }
  }


  function copiar_texto(){
    texto_textarea.select();
  
  // Copiar el texto al portapapeles
  document.execCommand('copy');
  
  // Deseleccionar el campo de texto
  texto_textarea.blur();
  
  // Mensaje de confirmación
  console.log('Texto copiado al portapapeles');
  }
  // !mensaje.style.display = 'onblur';
 
  function mostrarMensaje() {
    var mensaje = document.getElementById('mensaje');
    mensaje.style.display = 'block';
  }
  function ocultarMensaje() {
    var mensaje = document.getElementById('mensaje');
    mensaje.style.display = 'none';
  }
 



  
  






