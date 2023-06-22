"use strict";

//? Update text to current year
const yearNow = document.querySelectorAll(".current-year");
for (const item of yearNow) item.innerHTML = new Date().getFullYear().toString();

//? Change active item in sidenav
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

//? Header navigation buttons
const userBtn = document.querySelector("#user-profile");
const profileContainer = document.querySelector(".your-profile");
const chatBtn = document.querySelector("#user-chat");
const chatsContainer = document.querySelector(".user-messages");

const toggleElement = function (container, className) {
	container.classList.toggle(className);
};

const hideElement = function (container, className) {
	container.classList.add(className);
};

const showElement = function (container, className) {
	container.classList.remove(className);
};

document.addEventListener("click", (event) => {
	//? Toggle Profile
	const isUserBtnClicked = userBtn.contains(event.target);
	const notProfileClicked = !profileContainer.contains(event.target);

	if (isUserBtnClicked) toggleElement(profileContainer, "hidden");
	else if (notProfileClicked) hideElement(profileContainer, "hidden");

	//? Toggle Chats
	const isChatBtnClicked = chatBtn.contains(event.target);
	const notChatClicked = !chatsContainer.contains(event.target);

	if (isChatBtnClicked) toggleElement(chatsContainer, "hidden");
	else if (notChatClicked) hideElement(chatsContainer, "hidden");
});
