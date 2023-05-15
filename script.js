// Autor: Julio Paz Sosa
// Fecha: 2023-05-13
// Descripción: Encriptador de texto mediante llaves establecidas para las vocales

// Selección del elemento <textarea>
const textarea = document.querySelector('textarea');

// Selección de botones a través de sus IDs
const cifrarButton = document.querySelector('#cifrar');
const descifrarButton = document.querySelector('#descifrar');
const copiarButton = document.querySelector('#copiar');

/**
 * Reemplaza las vocales por llaves de encriptación.
 * @param {string} texto - El texto a cifrar.
 * @returns {string} El texto cifrado.
 */
function cifrarTexto(texto) {
    
    /** string.replace(searchValue, newValue)
     * El uso de '/' indica una expresión regular
     * El uso de 'g' indica una búsqueda global
     * El uso de '' indica el valor a reemplazar
     * Referencia: https://www.w3schools.com/jsref/jsref_replace.asp
     */
    texto = texto.replace(/e/g, 'enter');
    texto = texto.replace(/i/g, 'imes');
    texto = texto.replace(/a/g, 'ai');
    texto = texto.replace(/o/g, 'ober');
    texto = texto.replace(/u/g, 'ufat');
    return texto;
}

/**
 * Reemplaza las llaves de encriptación por vocales.
 * @param {string} texto - El texto a descifrar.
 * @returns {string} El texto descifrado.
 */
function descifrarTexto(texto) {
    texto = texto.replace(/enter/g, 'e');
    texto = texto.replace(/imes/g, 'i');
    texto = texto.replace(/ai/g, 'a');
    texto = texto.replace(/ober/g, 'o');
    texto = texto.replace(/ufat/g, 'u');
    return texto;
}

// Obtención del valor del elemento <textarea> al hacer clic en el botón "Cifrar"
cifrarButton.addEventListener('click', function () {
    
    // string.toLowerCase() - Convierte una cadena de texto a minúsculas
    var texto = textarea.value.toLowerCase();
    
    texto = cifrarTexto(texto); // Llamada a la función cifrarTexto
    textarea.value = texto;
});

// Obtención del valor del elemento <textarea> al hacer clic en el botón "Descifrar"
descifrarButton.addEventListener('click', function () {
    var texto = textarea.value.toLowerCase();
    texto = descifrarTexto(texto);
    textarea.value = texto;
});

/** Captura del valor en el elemento <textarea> y copia al portapapeles mediante la API del navegador
 * Referencia: https://www.w3schools.com/howto/howto_js_copy_clipboard.asp
 */
copiarButton.addEventListener('click', function () {
    var texto = textarea.value;
    navigator.clipboard.writeText(texto);
    alert('Texto copiado al portapapeles');
});