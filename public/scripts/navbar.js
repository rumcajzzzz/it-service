document.addEventListener("DOMContentLoaded", () => {
	const navbar = document.querySelector(".headerr");
  
	if (navbar) {
	  window.addEventListener("scroll", () => {
		const isVisible = window.getComputedStyle(navbar).display !== "none";
  
		if (isVisible) {
		  if (window.scrollY > 100) {
			navbar.classList.add("moved");
		  } else {
			navbar.classList.remove("moved");
		  }
		}
	  });
	}
  
	const hamburger = document.querySelector(".dots-hamburger");
	const offsideMenu = document.querySelector(".offside-menu");
  
	if (hamburger && offsideMenu) {
	  hamburger.addEventListener("click", () => {
		hamburger.classList.toggle("active");
		offsideMenu.classList.toggle("visible");
	  });
	}
  });
  