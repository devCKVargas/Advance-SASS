"use strict";

const yearNow = document.querySelectorAll(".current-year");
for (const item of yearNow) item.innerHTML = new Date().getFullYear().toString();

//? Event listeners
document.querySelector("#user-bookmark").addEventListener("click", () => {});
document.querySelector("#user-chat").addEventListener("click", () => {});

//? add click for every item in the side nav
const sideNavItems = document.querySelectorAll(".side-nav__item");

for (const navItem of sideNavItems) {
	navItem.addEventListener("click", () => {
		// remove active class from all item except the clicked one
		for (const item of sideNavItems) {
			if (navItem !== item && item.classList.contains("side-nav__item--active"))
				item.classList.remove("side-nav__item--active");
		}

		// Toggle active class for the clicked item
		navItem.classList.add("side-nav__item--active");
	});
}

//? Show profile when clicked
const user = document.querySelector("#user-profile");
const yourProfile = document.querySelector(".your-profile");

user.addEventListener("click", () => {
	yourProfile.classList.toggle("show-profile");
});

//? Hide profile when clicking outside the element
document.addEventListener("click", (event) => {
	if (!user.contains(event.target) && !yourProfile.contains(event.target))
		yourProfile.classList.remove("show-profile");
});
