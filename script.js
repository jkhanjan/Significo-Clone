function HomepageAnim() {
  gsap.set(".slidesm", { scale: 9 });
  gsap.set(".heading", { opacity: 0 });
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".home",
      start: "top top",
      end: "bottom bottom",
      scrub: 4,
    },
  });
  tl.to(
    ".video",
    {
      "--clip": "0%",
      ease: Power2,
    },
    "same"
  );
  tl.to(
    ".slidesm",
    {
      scale: 1,
      ease: Power2,
    },
    "same"
  );
  tl.to(
    ".heading",
    {
      opacity: 1,
      ease: Power3,
    },
    "a"
  );
  tl.to(
    ".lft",
    {
      xPercent: -10,
      stagger: 0.03,
      ease: Power4,
    },
    "b"
  );
  tl.to(
    ".rgt",
    {
      xPercent: 10,
      stagger: 0.03,
      ease: Power4,
    },
    "b"
  );
}
HomepageAnim();

function cardAnim() {
  gsap.set(".cards", {
    yPercent: 20,
  });
  gsap.set(".card", {
    width: "90%",
  });
  gsap.to(".card", {
    scrollTrigger: {
      trigger: ".cards",
      start: "top 50%",
      end: "center 20%",
      scrub: true,
    },
    backgroundColor: "black",
    color: "#aedee0",
    stagger: 2,
    width: "100%",
    ease: Power4,
  });
}
cardAnim();

function realPageAnim() {
  gsap.to(".slide", {
    scrollTrigger: {
      trigger: ".real",
      start: "top top",
      end: "bottom bottom",
      scrub: 2,
    },
    xPercent: -300,
    exase: Power4,
  });
}
realPageAnim();

function thirdAnim() {
  document.querySelectorAll(".listitem").forEach(function (el) {
    el.addEventListener("mousemove", function (dets) {
      gsap.to(this.querySelector(".picture"), {
        opacity: 1,
        x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX),
        ease: Power4,
        duration: 0.5,
      });
    });
    el.addEventListener("mouseleave", function (dets) {
      gsap.to(this.querySelectorAll(".picture"), {
        opacity: 0,
        ease: Power4,
        duration: 0.5,
      });
    });
  });
}
thirdAnim();

function paraAnim() {
  var clutter = "";
  document
    .querySelector(".textpara")
    .textContent.split("")
    .forEach(function (e) {
      if (e === " ") clutter += `<span></span>`;
      clutter += `<span>${e}</span>`;
    });
  document.querySelector(".textpara").innerHTML = clutter;
  gsap.set(".textpara span", { opacity: 0.1 });
  gsap.to(".textpara span", {
    scrollTrigger: {
      trigger: ".para",
      start: "top 60%",
      end: "bottom 90%",
      scrub: 0.2,
    },
    opacity: 1,
    stagger: 0.03,
    ease: Power4,
  });
}

paraAnim();

function loco() {
  (function () {
    const locomotiveScroll = new LocomotiveScroll();
  })();
}
loco();

function capsuleAnim() {
  gsap.to(".capsule:nth-child(2)", {
    scrollTrigger: {
      trigger: ".capsules",
      start: "top 70%",
      end: "bottom bottom",
      scrub: 1,
    },
    y: 0,
    ease: Power4,
  });
}
capsuleAnim();

function allAnim() {
  document.querySelectorAll(".section").forEach(function (e) {
    ScrollTrigger.create({
      trigger: e,
      start: "top 50%",
      end: "bottom 50%",
      onEnter: function () {
        document.body.setAttribute("theme", e.dataset.color);
      },
      onEnterBack: function () {
        document.body.setAttribute("theme", e.dataset.color);
      },
    });
  });
}
allAnim();

function footerAnim() {
  gsap.set(".logo-cont", { y: 330 });
  gsap.to(".logo-cont ", {
    scrollTrigger: {
      start: "40% 65%",
      end: "60% 70%",
      trigger: ".bottomfooter",
      scrub: true,
      ease: Power4,
    },
    y: 100,
    stagger: 1,
    duration: 10,
  });
}
footerAnim();
