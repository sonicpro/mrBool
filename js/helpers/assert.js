// Borrowed from Jon Resig's "Secrets of the JavaScript ninja"
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? 'pass' : 'fail';
  li.appendChild(document.createTextNode(desc));
  document.getElementById('info').appendChild(li);
}
