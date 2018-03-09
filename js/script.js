const toggler = document.querySelector('.navbar-toggler')
const collapsed = document.querySelectorAll('.collapse')
const paddingLeftFour = document.querySelector('.pl-4-at-993')

toggler.addEventListener('click', function() {
  collapsed.forEach(function(node) {
    node.classList.toggle('collapse')
  });
})