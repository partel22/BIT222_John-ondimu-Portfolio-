var navbar = document.getElementById('navbar');
    var items = navbar.getElementsByClassName('nav-item');

    for (var i = 0; i < items.length; i++) {
      items[i].addEventListener('click', function() {
        var current = document.getElementsByClassName('active');
        current[0].classList.remove('active');
        this.classList.add('active');
      });
    }