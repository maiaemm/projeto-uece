const password = '12345675'

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  if(re.test(email) && password.length > 6) {
    console.log('true')
  }
  return re.test(email);
}

validateEmail('texto@texto.com')
    
console.log(validateEmail('texto@texto.com')); // true
console.log(validateEmail('texto@texto')); // false
console.log(validateEmail('texto.com')); // false
console.log(validateEmail('texto')); // false