const body = document.querySelector('body'),
modeSwitch = body.querySelector(".toggle-switch"),
modeText = body.querySelector(".mode-text"),
section = document.querySelectorAll('.page')

window.addEventListener('load', (event) => {
  $('.loader-section').removeClass('active')
});
function Set(value){
      $(':root').css('--web-color', value);
}
let num =0
function page(id){
  if (num != id){
    num = id
    $('.home').addClass('menu-active');
    $('nav').addClass('close')
    setTimeout(function () { 
      $('.page').removeClass('active')
      $('.home').removeClass('menu-active'); 
      section[id].classList.add('active')
    }, 1000)
  }
  else{
    $('nav').addClass('close')
    $('.home').removeClass('menu-active'); 
  }
}

$('.toggle').on('click', function(e){
  
  $('.home').toggleClass('menu-active');
  $('nav').toggleClass('close')
  $('.navigator').removeClass('disabled')
})
$('a').on('click', function(e) {
  e.preventDefault();
});




if ($('.typed').length) {
  var typed_strings = $(".typed").data('typed-items');
  typed_strings = typed_strings.split(',')
  new Typed('.typed', {
    strings: typed_strings,
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000
  });
}
$(window).on('load', function() {
  AOS.init()
});
const Texts = [
  'HTML', 'CSS', 'JAVASCRIPT','PYTHON',
  'JQUERY', 'VUE', 'BOOTSTRAP', 'BULMA','DJANGO',
  'HTML', 'CSS', 'JAVASCRIPT','PYTHON',
  'JQUERY', 'VUE', 'BOOTSTRAP', 'BULMA','DJANGO',
];

var tagCloud = TagCloud('.Sphere', Texts, {

  // Sphere radius in px
  radius: 350,

  // animation speed
  // slow, normal, fast
  maxSpeed: 'normal',
  initSpeed: 'fast',

  // Rolling direction [0 (top) , 90 (left), 135 (right-bottom)] 
  direction: 150,

  // interaction with mouse or not [Default true (decelerate to rolling init speed, and keep rolling with mouse).]
  keep: true,

});

// Giving color to each text in sphere



$(".circle_percent").each(function () {
  var $this = $(this),
      $dataV = $this.data("percent"),
      $dataN = $this.data("name"),
      $dataDeg = $dataV * 3.6,
      $round = $this.find(".round_per");
  $round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
  $this.append('<div class="circle_inbox"><span class="percent_text"></span></div>');
  $this.prop('Counter', 0).animate({ Counter: $dataV },
      {
          duration: 2000,
          easing: 'swing',
          step: function (now) {
              // console.log($dataN)
              $this.find(".percent_text").text($dataN);
          }
      });
  if ($dataV >= 51) {
      $round.css("transform", "rotate(" + 360 + "deg)");
      setTimeout(function () {
          $this.addClass("percent_more");
      }, 1000);
      setTimeout(function () {
          $round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
      }, 1000);
  }
});




