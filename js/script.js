const toggler = document.querySelector('.navbar-toggler')
const collapsed = document.querySelectorAll('.collapse')

toggler.addEventListener('click', function() {
  collapsed.forEach(function(node) {
    node.classList.toggle('collapse')
  });
})