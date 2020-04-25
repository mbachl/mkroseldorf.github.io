document.addEventListener("DOMContentLoaded", () => {
	let currentYear = new Date().getFullYear();
	let currentYearElements = document.getElementsByClassName("currentYear");

	Array.from(currentYearElements ).forEach(element => {
		element.innerText=currentYear;
	});
});
