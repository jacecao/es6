import 'babel-polyfill';
import out_info from './lesson/symbol.js';

const doc = document.createDocumentFragment();
const p = document.createElement('p');
p.innerText = out_info;
p.style.color = 'red';

doc.appendChild(p);
document.body.appendChild(doc);