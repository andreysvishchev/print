var swiper = new Swiper(".slider", {
  speed: 900,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

const input = document.body.querySelector('.telmask');

input.addEventListener('keypress', (evt) => {
  if (evt.keyCode < 47 || evt.keyCode > 57) {
    evt.preventDefault();
  }
})

input.addEventListener('focus', () => {
  if (input.value.length === 0) {
    input.value = '+7';
    input.selectionStart = input.value.length;
  }
})

input.addEventListener('click', (evt) => {
  if (input.selectionStart < 2) {
    input.selectionStart = input.value.length;
  }
  if (evt.key === 'Backspace' && input.value.length <= 2) {
    evt.preventDefault();
  }
})

input.addEventListener('blur', () => {
  if (input.value === '+7') {
    input.value = '';
  }
})

input.addEventListener('keydown', (evt) => {
  if (evt.key === 'Backspace' && input.value.length <= 2) {
    evt.preventDefault();
  }
})

AOS.init();

const modal = new GraphModal();

$(function () {
  $('.address__map').on('mouseenter', function () {
    $('.address__info').css({
      transform: 'translateX(-50%)'
    })
    $('.address__social').fadeOut(0)
  })
  $('.address__map').on('mouseleave', function () {
    $('.address__info').css({
      transform: 'translateX(0)'
    })
    $('.address__social').fadeIn(0)
  })
});