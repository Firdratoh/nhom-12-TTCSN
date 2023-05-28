const wrapper = document.querySelector(".auth-section");
const loginBtn = document.querySelector(".login");

loginBtn.addEventListener("click", () => {
  wrapper.classList.add("active");
});

wrapper.addEventListener("click", () => {
  wrapper.classList.remove("active");
});
