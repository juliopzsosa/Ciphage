const textarea = document.querySelector('textarea');

// Selección de botones a través de sus IDs
const cifrarButton = document.querySelector('#encrypt-button');
const descifrarButton = document.querySelector('#decrypt-button');
const copiarButton = document.querySelector('#ctc-button');


function cifrarTexto(texto) {
    
    texto = texto.replace(/e/g, 'tk5h7f');
    texto = texto.replace(/i/g, '7crx2k');
    texto = texto.replace(/a/g, 'cq7vj4');
    texto = texto.replace(/o/g, 'nk986h');
    texto = texto.replace(/u/g, '93tbr7');
    return texto;
}

function descifrarTexto(texto) {
    texto = texto.replace(/tk5h7f/g, 'e');
    texto = texto.replace(/7crx2k/g, 'i');
    texto = texto.replace(/cq7vj4/g, 'a');
    texto = texto.replace(/nk986h/g, 'o');
    texto = texto.replace(/93tbr7/g, 'u');
    return texto;
}

cifrarButton.addEventListener('click', function () {
    
    var texto = textarea.value.toLowerCase();
    
    texto = cifrarTexto(texto); // Llamada a la función cifrarTexto
    textarea.value = texto;
});

descifrarButton.addEventListener('click', function () {
    var texto = textarea.value.toLowerCase();
    texto = descifrarTexto(texto);
    textarea.value = texto;
});

copiarButton.addEventListener('click', function () {
    var texto = textarea.value;
    navigator.clipboard.writeText(texto);
    alert('Texto copiado al portapapeles');
});