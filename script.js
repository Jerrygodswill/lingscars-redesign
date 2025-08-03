document.addEventListener("DOMContentLoaded", () => {
  // Scroll to top
  const scrollToTopBtn = document.getElementById("scrollToTop");
  if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Hamburger toggle
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.querySelector(".nav-menu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  }

  // Desktop dropdowns
  const isDesktop = () => window.innerWidth >= 768;
  const dropdowns = document.querySelectorAll(".dropdown, .sub-dropdown");

  dropdowns.forEach((item) => {
    const submenu = item.querySelector(".dropdown-menu");
    if (!submenu) return;

    item.addEventListener("mouseenter", () => {
      if (isDesktop()) submenu.style.display = "block";
    });

    item.addEventListener("mouseleave", () => {
      if (isDesktop()) submenu.style.display = "none";
    });
  });

  // Close mobile nav on outside click
  document.addEventListener("click", (e) => {
    if (
      navMenu?.classList.contains("active") &&
      !navMenu.contains(e.target) &&
      !hamburger.contains(e.target)
    ) {
      navMenu.classList.remove("active");
    }
  });

  // Hero slider
  let slideIndex = 0;
  const slides = document.querySelectorAll(".slide");

  function showNextSlide() {
    slides[slideIndex].classList.remove("active");
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].classList.add("active");
  }

  if (slides.length > 1) {
    setInterval(showNextSlide, 5000);
  }

  // Vehicle tabs (car vs van)
  const tabs = document.querySelectorAll(".tab");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach((tab, i) => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      contents.forEach(c => c.classList.remove("active"));

      tab.classList.add("active");
      contents[i].classList.add("active");
    });
  });

  // Toggle buttons (car or van) logic
  const toggles = document.querySelectorAll(".toggle-buttons .toggle");
  const carForm = document.getElementById("car-form");
  const vanForm = document.getElementById("van-form");

  toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      toggles.forEach((btn) => btn.classList.remove("active"));
      toggle.classList.add("active");

      // Show relevant form
      if (toggle.dataset.type === "car") {
        carForm.style.display = "flex";
        vanForm.style.display = "none";
      } else if (toggle.dataset.type === "van") {
        vanForm.style.display = "flex";
        carForm.style.display = "none";
      }
    });
  });
});
<button type="button" class="get-deals" onclick="window.location.href='https://www.lingscars.com/car-lease-deals/'">Get Deals</button>
