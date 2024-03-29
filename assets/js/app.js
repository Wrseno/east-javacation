// navbar offset
const nav = document.getElementById("nav");
const navChild = document.getElementById("navChild");

let initialPosition = nav.offsetTop;

window.addEventListener("scroll", function () {
  if (window.pageYOffset > initialPosition) {
    nav.classList.add("fixed");
    nav.classList.add("top-0");
    navChild.classList.add("shadow");
    navChild.classList.add("backdrop-blur");
    navChild.classList.add("bg-mixed100/[0.4]");
  } else {
    nav.classList.remove("fixed");
    nav.classList.remove("top-0");
    navChild.classList.remove("shadow");
    navChild.classList.remove("backdrop-blur");
    navChild.classList.remove("bg-mixed100/[0.4]");
  }
});

// function scroll to content travel tips
function goToTravelTips() {
  const travelTrips = document.getElementById("travel-tips");
  const navbarHeight = document.getElementById("navChild").offsetHeight;
  const offset = navbarHeight + 20;

  window.scroll({
    top: travelTrips.offsetTop - offset,
  });
}

// function dark & light theme
var themeToggleDarkIcon = document.querySelector(".theme-toggle-dark-icon");
var themeToggleLightIcon = document.querySelector(".theme-toggle-light-icon");

if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  themeToggleLightIcon.classList.remove("hidden");
} else {
  themeToggleDarkIcon.classList.remove("hidden");
}

var themeToggleBtn = document.querySelector(".theme-toggle");

themeToggleBtn.addEventListener("click", function () {
  themeToggleDarkIcon.classList.toggle("hidden");
  themeToggleLightIcon.classList.toggle("hidden");

  if (localStorage.getItem("color-theme")) {
    if (localStorage.getItem("color-theme") === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }
  } else {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    }
  }
});

// function dark & light theme
let themeToggleDarkIcon1 = document.querySelector("#theme-toggle-dark");
let themeToggleLightIcon1 = document.querySelector("#theme-toggle-light");

if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  themeToggleLightIcon1.classList.remove("hidden");
} else {
  themeToggleDarkIcon1.classList.remove("hidden");
}

let themeToggleBtn1 = document.querySelector("#theme-toggle");

themeToggleBtn1.addEventListener("click", function () {
  themeToggleDarkIcon1.classList.toggle("hidden");
  themeToggleLightIcon1.classList.toggle("hidden");

  if (localStorage.getItem("color-theme")) {
    if (localStorage.getItem("color-theme") === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }
  } else {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const fadeIns = document.querySelectorAll(".fade-in");

  function checkFadeIns() {
    fadeIns.forEach((fadeIn) => {
      const fadeInTop = fadeIn.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (fadeInTop < windowHeight) {
        fadeIn.classList.add("fade-in-show");
      } else {
        fadeIn.classList.remove("fade-in-show");
      }
    });
  }

  checkFadeIns();

  window.addEventListener("scroll", function () {
    checkFadeIns();
  });
});

// function read more history of eastjava
function readMore() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("readBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
    btnText.classList.remove("mt-6");
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
    btnText.classList.add("mt-6");
  }
}

// function show more travel tips
function showMore() {
  var arrowDown = document.getElementById("arrow-down");
  var arrowUp = document.getElementById("arrow-up");
  var travelMore = document.getElementById("travel-more");
  var btnText = document.getElementById("show-more-btn");

  if (arrowDown.style.display === "none") {
    arrowDown.style.display = "block";
    arrowUp.style.display = "none";
    btnText.innerHTML = "Show more";
    travelMore.style.display = "none";
    btnText.classList.remove("mt-2");
  } else {
    arrowDown.style.display = "none";
    arrowUp.classList.add = "block";
    btnText.innerHTML = "Show less";
    travelMore.style.display = "grid";
    btnText.classList.add("mt-2");
  }
}
