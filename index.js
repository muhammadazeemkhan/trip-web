const tl = gsap.timeline();

tl.from(
  "#header-1",
  {
    x: "-100%",
    ease: "slow(0.7,0.7,false)",
    duration: 1,
  },
  "header"
);

tl.from(
  "#header-2",
  {
    y: "-100%",
    duration: 2.5,
    // ease: "slow(0.7,0.7,false)",
    ease: "bounce.out",
  },
  "header"
);

const donateTl = gsap.timeline({
  scrollTrigger: {
    trigger: "#Donate-sec",
    // markers: true,
    start: "0% 80%",
    end: "100% 100%",
    scrub: true,
  },
});

donateTl.from("#Donate-1", {
  x: "-100%",
  duration: 4,
  ease: "power1.in",
});

donateTl.from("#Donate-2", {
  y: "100%",
  duration: 4,
  ease: "power1.in",
});

const travellerTl = gsap.timeline({
  scrollTrigger: {
    trigger: "#traveller-sec",
    // markers: true,
    start: "0% 80%",
    end: "70% 100%",
    scrub: true,
  },
});

ScrollTrigger.matchMedia({
  // large
  "(min-width: 768px)": function () {
    travellerTl.from("#traveller-1", {
      x: "-100%",
    });

    travellerTl.from("#traveller-2", {
      y: "100%",
      x: "-50%",
    });
  },

  //Mobile
  "(max-width:320px)": function () {
    travellerTl.from("#traveller-1", {
      x: "-100%",
    });

    travellerTl.from("#traveller-2", {
      y: "100%",
      x: "-50%",
    });
  },
});

// travellerTl.from("#traveller-1", {
//   x: "-100%",
// });

// travellerTl.from("#traveller-2", {
//   y: "100%",
//   x: "-50%",
// });
