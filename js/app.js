console.log('sanity check')


var firstTabEl = document.querySelector('#myTab li:last-child button')
var firstTab = new bootstrap.Tab(firstTabEl)
        
firstTab.show()


let readout = document.querySelector('.readout');

let count = 0

let text = ["Software Engineer", "Programmer", "Handstand Enthusiast", "Full Stack Web Developer", "George R.R. Martin fan girl", "CSS defender" ];
setInterval(e => {
  let randomNumber = Math.floor(Math.random()*11);
  count = (count + randomNumber) % text.length;
  var newText = text[count];
  readout.innerHTML = `<b>${newText}</b>`
}, 2000);




