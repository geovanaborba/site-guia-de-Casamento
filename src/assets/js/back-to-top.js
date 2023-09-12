var btn = document.querySelector('#back-to-top');

window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) {
    btn.style.display = 'block';
  } else {
    btn.style.display = 'none';
  }
}


btn.addEventListener('click', function() {
    window.scrollTo(0, 0);
});