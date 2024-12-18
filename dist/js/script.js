const burger = document.querySelector(".burger");
const header = document.querySelector("header");
const nav = document.querySelector(".sidebar");

(function () {
  function supportsWebp() {
    var canvas = document.createElement("canvas");
    if (canvas.getContext && canvas.getContext("2d")) {
      return canvas.toDataURL("image/webp").indexOf("data:image/webp") === 0;
    }
    return false;
  }

  if (supportsWebp()) {
    document.documentElement.classList.add("webp");
  } else {
    document.documentElement.classList.add("no-webp");
  }
})();

// Initialize Swiper

var swiper = new Swiper(".slider", {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

document.addEventListener("scroll", () => {
  if (window.pageYOffset > 0) {
    header.classList.add("pinned");
  } else {
    header.classList.remove("pinned");
  }
});

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
});
