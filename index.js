const wrapper = document.querySelector(".auth-section");
const loginBtn = document.querySelector(".login");
const closeBtn = document.querySelector("login-modal__close");
const signin = document.querySelector(".sign-in-wrapper");
const signup = document.querySelector(".sign-up-wrapper");

loginBtn.addEventListener("click", () => {
  wrapper.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

signin.addEventListener('click', () => {
  document.getElementsByClassName("sign-in-wrapper").style.display = 'none';
  document.getElementsByClassName("sign-up-wrapper").style.display = 'block';
}); 