"use strict";

//? Select HTML elements
const popup = document.querySelector(".popup__content");
const navContainer = document.querySelector(".navigation__list");
const navMenu = document.getElementById("navi-toggle");
const navLinks = document.querySelectorAll(".navigation__link"); // 0️⃣

//? Event listener for clicking anywhere on the DOM
document.addEventListener("click", (event) => {
	// if clicked element is not a child of popup__content && when URL includes #popup
	if (!popup.contains(event.target) && window.location.href.includes("#popup")) {
		// close popup | closing animation still plays since there is no #popup-closed in HTML
		window.location.href = "#closed";
	}

	// if clicked target is not a child of navMenu
	if (!navMenu.contains(event.target)) {
		navMenu.addEventListener("click", () => {
			navMenu.checked = !navMenu.checked;
		});

		// extract links from navLinks array 0️⃣
		for (const link of navLinks) {
			// close navMenu if clicked target is not any link
			if (!link.contains(event.target)) {
				navMenu.checked = false;
			}
		}
	}
});
