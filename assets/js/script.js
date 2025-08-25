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



(function() {
  const WHATSAPP_NUMBER = "917736333004"; // +91 77363 33004

  function formToWhatsAppText(form) {
    const data = new FormData(form);
    const lines = [];
    lines.push("🟢 New Tour Enquiry");
    lines.push("---------------------------");

    for (const [key, value] of data.entries()) {
      if (!value) continue;
      const label = key.replace(/[_-]/g, " ")
                       .replace(/\b\w/g, c => c.toUpperCase());
      lines.push(`${label}: ${value}`);
    }

    lines.push("---------------------------");
    lines.push(`Page: ${document.title}`);
    lines.push(`URL: ${location.href}`);
    return lines.join("\n");
  }

  document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".tour-search-form");
    if (!form) return;

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const text = formToWhatsAppText(form);
      const encoded = encodeURIComponent(text);
      const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
      window.open(waUrl, "_blank");
    });
  });
})();


(function() {
  const WHATSAPP_NUMBER = "917736333004"; // +91 77363 33004

  function collectFormData() {
    const form = document.querySelector(".tour-search-form");
    if (!form) return null;

    const data = new FormData(form);
    const lines = [];
    lines.push("🟢 New Tour Booking");
    lines.push("---------------------------");

    for (const [key, value] of data.entries()) {
      if (!value) continue;
      const label = key.replace(/[_-]/g, " ")
                       .replace(/\b\w/g, c => c.toUpperCase());
      lines.push(`${label}: ${value}`);
    }

    lines.push("---------------------------");
    lines.push(`Page: ${document.title}`);
    lines.push(`URL: ${location.href}`);
    return lines.join("\n");
  }

  document.addEventListener("DOMContentLoaded", function () {
    // Attach to Book Now button
    const bookBtn = document.querySelector(".btn-white");
    if (bookBtn) {
      bookBtn.addEventListener("click", function (e) {
        e.preventDefault();
        const text = collectFormData() || "🟢 New Tour Booking Request";
        const encoded = encodeURIComponent(text);
        const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
        window.open(waUrl, "_blank");
      });
    }
  });
})();

(function() {
  const WHATSAPP_NUMBER = "917736333004"; // +91 77363 33004

  document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form");
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        const text = 
`🟢 New Contact Message
---------------------------
Name: ${name}
Email: ${email}
Message: ${message}
---------------------------
Page: ${document.title}
URL: ${location.href}`;

        const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
        window.open(waUrl, "_blank");
      });
    }
  });
})();

(function() {
  const WHATSAPP_NUMBER = "917736333004"; // +91 77363 33004

  document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".booking-form");
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("bname").value.trim();
        const email = document.getElementById("bemail").value.trim();
        const destination = document.getElementById("destination").value.trim();
        const travelDate = document.getElementById("travel-date").value.trim();
        const message = document.getElementById("bmessage").value.trim();

        const text = 
`🟢 New Booking Inquiry
---------------------------
Name: ${name}
Email: ${email}
Destination: ${destination}
Travel Date: ${travelDate}
Additional Info: ${message}
---------------------------
Page: ${document.title}
URL: ${location.href}`;

        const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
        window.open(waUrl, "_blank");
      });
    }
  });
})();

  document.querySelectorAll(".book-package").forEach(button => {
    button.addEventListener("click", function () {
      const packageName = this.getAttribute("data-package");
      const packagePrice = this.getAttribute("data-price");
      const phone = "917736333004"; // WhatsApp number (+91 without +)
      
      const message = `Hello, I am interested in the package:\n\n*${packageName}*\nPrice: ${packagePrice}\n\nPlease share more details.`;
      
      const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank");
    });
  });

  
(function() {
  const WHATSAPP_NUMBER = "917736333004"; // +91 77363 33004

  function collectFormData() {
    const form = document.querySelector(".tour-search-form");
    if (!form) return null;

    const data = new FormData(form);
    const lines = [];
    lines.push("🟢 New Tour Booking");
    lines.push("---------------------------");

    for (const [key, value] of data.entries()) {
      if (!value) continue;
      const label = key.replace(/[_-]/g, " ")
                       .replace(/\b\w/g, c => c.toUpperCase());
      lines.push(`${label}: ${value}`);
    }

    lines.push("---------------------------");
    lines.push(`Page: ${document.title}`);
    lines.push(`URL: ${location.href}`);
    return lines.join("\n");
  }

  document.addEventListener("DOMContentLoaded", function () {
    // Attach to Book Now button
    const bookBtn = document.querySelector(".btn-primary");
    if (bookBtn) {
      bookBtn.addEventListener("click", function (e) {
        e.preventDefault();
        const text = collectFormData() || "🟢 New Tour Booking Request";
        const encoded = encodeURIComponent(text);
        const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
        window.open(waUrl, "_blank");
      });
    }
  });
})();
