const doc = document.createDocumentFragment();
const p = document.createElement('p');
p.innerText = 'hello world!！this es6';

doc.appendChild(p);
document.body.appendChild(doc);