$(document).ready(function () {
  $("#trip-carousal").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplaySpeed: 2000,
    center: true,
    navSpeed: 2500,
    margin: 10,
    nav: true,
    dots: false,
    navText: [$(".destination-prev"), $(".destination-next")],
    responsiveRefreshRate: 200,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1024: {
        items: 4,
      },
    },
  });
});

$(document).ready(function () {
  $("#more-explore-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplaySpeed: 1000,
    center: true,
    navSpeed: 2500,
    margin: 10,
    // nav: true,
    dots: true,
    // navText: [$(".destination-prev"), $(".destination-next")],
    responsiveRefreshRate: 200,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1024: {
        items: 4,
      },
    },
  });
});

// $(".owl-carousel").owlCarousel({
//   loop: true,
//   margin: 10,
//   nav: true,
//   responsive: {
//     0: {
//       items: 1,
//     },
//     600: {
//       items: 3,
//     },
//     1000: {
//       items: 4,
//     },
//   },
// });

// const tl = gsap.timeline();

// tl.from(
//   "#header-1",
//   {
//     x: "-100%",
//     ease: "slow(0.7,0.7,false)",
//     duration: 1,
//   },
//   "header"
// );

// tl.from(
//   "#header-2",
//   {
//     y: "-100%",
//     duration: 2.5,
//     // ease: "slow(0.7,0.7,false)",
//     ease: "bounce.out",
//   },
//   "header"
// );

// const donateTl = gsap.timeline({
//   scrollTrigger: {
//     trigger: "#Donate-sec",
//     // markers: true,
//     start: "0% 80%",
//     end: "100% 100%",
//     scrub: true,
//   },
// });

// donateTl.from("#Donate-1", {
//   x: "-100%",
//   duration: 4,
//   ease: "power1.in",
// });

// donateTl.from("#Donate-2", {
//   y: "100%",
//   duration: 4,
//   ease: "power1.in",
// });

// const travellerTl = gsap.timeline({
//   scrollTrigger: {
//     trigger: "#traveller-sec",
//     // markers: true,
//     start: "0% 80%",
//     end: "70% 100%",
//     scrub: true,
//   },
// });

// ScrollTrigger.matchMedia({
//   // large
//   "(min-width: 768px)": function () {
//     travellerTl.from("#traveller-1", {
//       x: "-100%",
//     });

//     travellerTl.from("#traveller-2", {
//       y: "100%",
//       x: "-50%",
//     });
//   },

//   //Mobile
//   "(max-width:320px)": function () {
//     travellerTl.from("#traveller-1", {
//       x: "-100%",
//     });

//     travellerTl.from("#traveller-2", {
//       y: "100%",
//       x: "-50%",
//     });
//   },
// });

// travellerTl.from("#traveller-1", {
//   x: "-100%",
// });

// travellerTl.from("#traveller-2", {
//   y: "100%",
//   x: "-50%",
// });
