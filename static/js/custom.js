document.addEventListener('DOMContentLoaded', function () {
    const loader = document.getElementById('loader');
  
    // Prevent scrolling initially
    document.body.style.overflow = 'hidden';
  
    window.addEventListener('load', function () {
        // Hide the loader after a short delay to ensure it disappears smoothly
        setTimeout(() => {
            loader.style.opacity = '0';  // Fade out
            loader.style.transition = 'opacity 0.5s ease';  // Smooth transition
            setTimeout(() => {
                loader.style.display = 'none';  // Remove from layout after fade out
                document.body.style.overflow = ''; // Allow scrolling
            }, 500); // Match the duration of the transition
        }, 100); // Small delay to ensure smooth transition
    });
  });


//   project slider 

// happy customer js start
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
     // Responsive breakpoints
  breakpoints: {
  // when window width is >= 320px
  320: {
    slidesPerView: 1,
    spaceBetween: 20
  },
  // when window width is >= 480px
  480: {
    slidesPerView: 1,
    spaceBetween: 20
  },
  // when window width is >= 640px
  540: {
    slidesPerView: 1,
    spaceBetween: 20
  },
  767: {
    slidesPerView: 2,
    spaceBetween: 20
  },
  1200: {
    slidesPerView: 3,
    spaceBetween: 20
  }
  }
  });
  // happy customer js end


  // teams  js start
var swiper = new Swiper(".teams", {
  slidesPerView: 0,
  spaceBetween: 30,
  speed: 200,
  autoplay: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    delay: 1000,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
},
   // Responsive breakpoints
breakpoints: {
// when window width is >= 320px
320: {
  slidesPerView: 1,
  spaceBetween: 20
},
// when window width is >= 480px
480: {
  slidesPerView: 2,
  spaceBetween: 20
},
// when window width is >= 640px
540: {
  slidesPerView: 2,
  spaceBetween: 20
},
767: {
  slidesPerView: 3,
  spaceBetween: 20
},
1200: {
  slidesPerView: 4,
  spaceBetween: 20
}
}
});
// teams  js end


 // Testimonials  js start
 var swiper = new Swiper(".Testimonials", {
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
},
   // Responsive breakpoints
breakpoints: {
// when window width is >= 320px
320: {
  slidesPerView: 1,
  spaceBetween: 20
},
// when window width is >= 480px
480: {
  slidesPerView: 1,
  spaceBetween: 20
},
// when window width is >= 640px
540: {
  slidesPerView: 2,
  spaceBetween: 20
},
767: {
  slidesPerView: 3,
  spaceBetween: 20
},
1200: {
  slidesPerView: 3,
  spaceBetween: 20
}
}
});
// Testimonials  js end




// sidbar

$('.dropdown-toggle').on('click', function(e) {
  e.stopPropagation();
  e.preventDefault();

  var self = $(this);
  if(self.is('.disabled, :disabled')) {
    return false;
  }
  self.parent().toggleClass("open");
});

$(document).on('click', function(e) {
  if($('.dropdown').hasClass('open')) {
    $('.dropdown').removeClass('open');
  }
});

$('.menu').on('click', function() {
  $('.overlay').show();
  $('nav').toggleClass("open");
});

$('.overlay').on('click', function() {
  if($('nav').hasClass('open')) {
    $('nav').removeClass('open');
  }
  $(this).hide();
});




var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});


// newslatter


