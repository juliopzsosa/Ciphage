const textarea = document.querySelector('textarea');

const cifrarButton = document.querySelector('#encrypt-button');
const descifrarButton = document.querySelector('#decrypt-button');
const copiarButton = document.querySelector('#ctc-button');

const encryptionDict = {
  'e': 'nf4NDW',
  'i': 'PGp3bB',
  'a': 'hzNy8P',
  'o': 't7WzS2',
  'u': 'yL4YVT',
  '\n': 'dJs9rT',
  ' ': 'k9zW8V',
  ',': 'n57XJb'
};

const decryptionDict = {
  'nf4NDW': 'e',
  'PGp3bB': 'i',
  'hzNy8P': 'a',
  't7WzS2': 'o',
  'yL4YVT': 'u',
  'dJs9rT': '\n',
  'k9zW8V': ' ',
  'n57XJb': ','
};

function cifrarTexto(text) {
  for (const [key, value] of Object.entries(encryptionDict)) {
    text = text.replace(new RegExp(key, 'g'), value);
  }
  return text;
}

function descifrarTexto(text) {
  for (const [key, value] of Object.entries(decryptionDict)) {
    text = text.replace(new RegExp(key, 'g'), value);
  }
  return text;
}

/* function normalizeText(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, ''); // Elimina los acentos
} */

textarea.addEventListener('input', function () {
  textarea.value = normalizeText(textarea.value);
});

cifrarButton.addEventListener('click', function () {
  var text = textarea.value;
  text = cifrarTexto(text);
  textarea.value = text;
});

descifrarButton.addEventListener('click', function () {
  var text = textarea.value;
  text = descifrarTexto(text);
  textarea.value = text;
});

copiarButton.addEventListener('click', function () {
  var text = textarea.value;
  navigator.clipboard.writeText(text);
  alert('Texto copiado al portapapeles');
});