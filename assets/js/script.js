'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

const navToggleEvent = function (elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function () {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
    });
  }
}

navToggleEvent(navElemArr);
navToggleEvent(navLinks);



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 200) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});
 // Toggle card active on click/tap, but don't toggle when clicking a button inside the card.
  (function () {
    const cards = Array.from(document.querySelectorAll('.flip-card'));

    cards.forEach(card => {
      // make click toggle (mobile & desktop)
      card.addEventListener('click', (ev) => {
        // if clicked inside .card-actions (buttons) — do nothing (let buttons work)
        if (ev.target.closest('.card-actions')) return;

        // toggle active on clicked card, close others
        if (card.classList.contains('active')) {
          card.classList.remove('active');
          card.setAttribute('aria-pressed','false');
        } else {
          cards.forEach(c => { c.classList.remove('active'); c.setAttribute('aria-pressed','false'); });
          card.classList.add('active');
          card.setAttribute('aria-pressed','true');
        }
      });

      // keyboard support: Enter or Space toggles
      card.addEventListener('keydown', (ev) => {
        if (ev.key === 'Enter' || ev.key === ' ') {
          ev.preventDefault();
          card.click();
        }
      });

      // prevent button clicks from bubbling up (just an extra defensive measure)
      card.querySelectorAll('.card-actions button').forEach(btn => {
        btn.addEventListener('click', (e) => e.stopPropagation());
      });
    });
  })();
/** * FAQ accordion
 */
// Select all FAQ question elements and add click event listeners to toggle the active class
  document.querySelectorAll(".faq-question").forEach(button => {
    button.addEventListener("click", () => {
      const faqItem = button.parentElement;
      faqItem.classList.toggle("active");
    });
  });

