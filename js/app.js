/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 * 
 */
//nav global variable
const navigation = document.getElementById('navbar__list');
//section global variable
const sections = document.querySelectorAll('section');
/**
 * End Global Variables
 * Start Helper Functions
 * 
 */



/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav

const navBar = () => {
	let navUI = '';
	//loop over all sections
	sections.forEach(section => {
		const sectionID = section.id;
		const sectionDataNav = section.dataset.nav;
		navUI += `<li><a class = menu__link href = "#${sectionID}">${sectionDataNav}</a></li>`;
	});

	//append all elements to the nav
	navigation.innerHTML = navUI;

};

navBar();



// Add class 'active' to section when near top of viewport

function sectionInViewPort(elem) {
	let sectionPos = elem.getBoundingClientRect();
	return (sectionPos.top <= 0);
}

function ToggleActiveClass() {
	for (section of sections) {
		if (sectionInViewPort(sections)) {
			if (!sections.classList.contains('your-active-class')) {
				sections.classList.add('your-active-class');
			}
		} else {
			sections.classList.remove('your-active-class');
		}
	}
}



// Scroll to anchor ID using scrollTO event
const scrolling = () => {
	const links = document.querySelector('navbar__menu a');
	links.forEach(link => {
		link.addEventListener('click', () => {
			for (i = o; i < sections; i++) {
				sections[i].addEventListener("click", sectionScroll(link));
			}
		});

	});
};
scrolling();







/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 



// Scroll to section on link click

// Set sections as active