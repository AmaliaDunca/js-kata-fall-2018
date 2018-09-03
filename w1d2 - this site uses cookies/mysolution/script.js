window.addEventListener("load", () => {
  const cookie = document.querySelector(".cookie");
  const accept = document.querySelector(".accept");
  cookie.classList.add("moveIn");

  hookUpEvents();
  function hookUpEvents() {
    accept.addEventListener("click", () => {
      cookie.classList.remove("moveIn");
    });
  }
});
