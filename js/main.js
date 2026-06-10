document.querySelectorAll(".gallery-toggle").forEach((button) => {
  button.addEventListener("click", () => {
    const gallery = button.nextElementSibling;

    gallery.classList.toggle("active");

    if (gallery.classList.contains("active")) {
      button.textContent = "Hide Screenshots";
    } else {
      button.textContent = "View Additional Screenshots";
    }
  });
});
