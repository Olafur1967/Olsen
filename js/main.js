// Netkynning — lágmarks JavaScript fyrir farsímavalmynd
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        if (window.matchMedia("(max-width: 640px)").matches) {
          nav.classList.remove("open");
          toggle.setAttribute("aria-expanded", "false");
        }
      });
    });
  }

  // Flettanleg verkefnakort — smellt eða Enter/Bilslá til að fletta og sýna myndband
  document.querySelectorAll(".client-card--flip").forEach(function (card) {
    function toggleFlip() {
      var flipped = card.classList.toggle("is-flipped");
      card.setAttribute("aria-pressed", flipped ? "true" : "false");
      var iframe = card.querySelector(".client-card-video");
      if (iframe) {
        if (flipped) {
          if (!iframe.getAttribute("src")) {
            iframe.setAttribute("src", iframe.getAttribute("data-src"));
          }
        } else {
          iframe.removeAttribute("src");
        }
      }
    }

    card.addEventListener("click", toggleFlip);
    card.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " " || e.key === "Spacebar") {
        e.preventDefault();
        toggleFlip();
      }
    });
  });
});
