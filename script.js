const btnNavEl = document.querySelector(".btn-mobile-nav");
const navbarEl = document.querySelector(".header");
btnNavEl.addEventListener("click", function(){
	navbarEl.classList.toggle("nav-open");
});
const cookiesModal = document.querySelector(".cookies-modal");
const checkDeactivated = document.getElementById("checkDeactivated")
const learnMore = document.querySelector(".cookies-learn-more");
const cookiesExtra = document.querySelector(".cookies-extra");
const cookiesAccept = document.querySelector(".btn-accept");
const cookiesDecline = document.querySelector(".btn-decline");

checkDeactivated.disabled = true;

learnMore.addEventListener("click", function(){
	cookiesExtra.classList.toggle("cookies-extra-toggle")
})
cookiesAccept.addEventListener("click", function(){
	cookiesModal.style.display = "none";
})
cookiesDecline.addEventListener("click", function(){
	cookiesModal.style.display = "none";
}) 