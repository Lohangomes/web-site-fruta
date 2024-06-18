const links = document.querySelectorAll('.js-menu a[href^="#"]');

function scrollSuave(event) {
  event.preventDefault();

  const href = event.currentTarget.getAttribute("href");

  const section = document.querySelector(href);

  const topo = section.offsettop;

  section.scrollIntoView({
    behavior: "smooth",

    block: "start",
  });
}

links.forEach((links) => {
  links.addEventListener("click", scrollSuave);
});
