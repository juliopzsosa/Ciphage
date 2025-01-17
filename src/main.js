const textarea = document.querySelector('textarea');

const encryptButton = document.querySelector('#encrypt-button');
const decryptButton = document.querySelector('#decrypt-button');
const copyButton = document.querySelector('#ctc-button');

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

const decryptionDict = Object.fromEntries(
  Object.entries(encryptionDict).map(([key, value]) => [value, key])
);

function encryptText(text) {
  for (const [key, value] of Object.entries(encryptionDict)) {
    text = text.replace(new RegExp(key, 'g'), value);
  }
  return text;
}

function decryptText(text) {
  for (const [key, value] of Object.entries(decryptionDict)) {
    text = text.replace(new RegExp(key, 'g'), value);
  }
  return text;
}

encryptButton.addEventListener('click', function () {
  var text = textarea.value;
  text = encryptText(text);
  textarea.value = text;
});

decryptButton.addEventListener('click', function () {
  var text = textarea.value;
  text = decryptText(text);
  textarea.value = text;
});

copyButton.addEventListener('click', function () {
  textarea.select();
  document.execCommand('copy');
  alert('Texto copiado al portapapeles');
});