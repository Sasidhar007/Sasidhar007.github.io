const header = document.querySelector(".site-header");
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

window.addEventListener("scroll", () => {
  header.classList.toggle("is-scrolled", window.scrollY > 8);
});

toggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(open));
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    toggle?.setAttribute("aria-expanded", "false");
  });
});

const sections = [...document.querySelectorAll("main section[id]")];
const navLinks = [...document.querySelectorAll(".nav a")];

const spy = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        link.classList.toggle(
          "is-active",
          link.getAttribute("href") === `#${entry.target.id}`
        );
      });
    });
  },
  { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
);

sections.forEach((section) => spy.observe(section));

const year = document.querySelector("[data-year]");
if (year) year.textContent = String(new Date().getFullYear());

const form = document.querySelector("#reach-out");
const statusEl = document.querySelector("[data-form-status]");

form?.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!statusEl) return;

  const endpoint = form.getAttribute("action") || "";
  if (endpoint.includes("YOUR_FORM_ID")) {
    statusEl.classList.add("is-error");
    statusEl.textContent =
      "The form is not connected yet. Add a Formspree ID in index.html to receive messages.";
    return;
  }

  statusEl.classList.remove("is-error");
  statusEl.textContent = "Sending…";

  const submit = form.querySelector('button[type="submit"]');
  submit?.setAttribute("disabled", "true");

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: new FormData(form),
    });

    if (!response.ok) throw new Error("Request failed");

    form.reset();
    statusEl.textContent = "Sent. I will get back to you by email.";
  } catch {
    statusEl.classList.add("is-error");
    statusEl.textContent = "Could not send. Try again, or reach me on LinkedIn.";
  } finally {
    submit?.removeAttribute("disabled");
  }
});
