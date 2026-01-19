window.addEventListener('DOMContentLoaded', () => {
  fetch('Partials/Navbar.html')
    .then(res => res.text())
    .then(html => {
      // insert at the top of the body
      document.body.insertAdjacentHTML('afterbegin', html);

      // optional: set active link based on page
      const current = location.pathname.split("/").pop();
      document.querySelectorAll('nav a').forEach(link => {
        if (link.getAttribute('href') === current) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    })
    .catch(err => console.error("Failed to load navbar:", err));
});
