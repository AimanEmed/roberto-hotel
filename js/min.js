function openSearch() {
  document.getElementById("search-form").style.height = "80px";
  document.getElementById("input").style.display = "block";
  document.getElementById("input").style.display = "block";
  document.getElementById("button").style.display = "block";
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// Initiate the wowjs
new WOW().init();


    // Hero Header carousel
    $(".header-carousel").owlCarousel({
      animateOut: 'slideOutDown',
      items: 1,
      autoplay: true,
      smartSpeed: 1000,
      dots: false,
      loop: true,
      nav : true,
      navText : [
        '<i class="fa-solid fa-arrow-left"></i>',
        '<i class="fa-solid fa-arrow-right"></i>'
      ],
  });

      // testimonial carousel
      $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
          '<i class="fa-solid fa-arrow-left"></i>',
          '<i class="fa-solid fa-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:1
            },
            1200:{
                items:1
            }
        }
    });

       // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
  