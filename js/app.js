console.log('sanity check')

let readout = document.querySelector('.readout');

let count = 0

let text = ["Software Engineer", "Programmer", "Handstand Enthusiast", "Full Stack Web Developer", "George R.R. Martin fan girl", "CSS defender" ];
setInterval(e => {
  let randomNumber = Math.floor(Math.random()*11);
  count = (count + randomNumber) % text.length;
  var newText = text[count];
  readout.innerHTML = `<b>${newText}</b>`
}, 2000);

$(function() {
  
  console.log($);

  $('.nav a').on('click', function(){
    $('.btn-navbar').click();
    $('.navbar-toggle').click()
});

fadeInUp('#about-me-blurb', 370);
fadeInUp('.all-steps', 855);
fadeInUp('.work-flow-text', 855);
fadeInUp("#a-few-short-miles", 1280);
fadeInUp("#few-short-miles-preview", 1280);
fadeInUp("#within-reach", 1860);
fadeInUp("#within-reach-preview", 1860);
fadeInUp("#the-best-hour", 2430);
fadeInUp("#best-hour-preview", 2430);
fadeInUp(".contact-text", 3135);
fadeInUp(".icon-container", 3135);
fadeInUp(".icon-container", 3135);
fadeInUp('#copyright', 3135);

function fadeInUp(element, height){
  $(window).scroll(function() { 
      if ($(this).scrollTop() > height) { 
          $(element).css('visibility','visible');   
          $(element).addClass('animated fadeInUp');  
      } 
  });
};

});