const wrapper = document.querySelector(".auth-section");
const loginBtn = document.querySelector(".login");
const closeBtn = document.querySelector("login-modal__close");
const signin = document.querySelector(".js-sign-in");
const signup = document.querySelector(".js-sign-up");
loginBtn.addEventListener("click", () => {
  wrapper.classList.add("active");
  signup.classList.add("unactive")
});

closeBtn.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

function showSignUp(){
  signup.classList.remove("unactive")
  signin.classList.add("unactive")
}
function showSignIn(){
  signin.classList.remove("unactive")
  signup.classList.add("unactive")
}

