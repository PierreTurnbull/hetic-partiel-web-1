var ui = {
	nav: {
		row0: {
			self: document.querySelector("#nav .row0"),
			top: {},
		},
		row1: {
			self: document.querySelector("#nav .row1"),
			header: {
				mainav: {
					burger: document.querySelector("#header #mainav .burger"),
					clear: document.querySelector("#header #mainav .clear")
				}
			}
		}
	},
	footer: {
		scroll_top: document.querySelector("#footer .scroll_top")
	}
};

// make a smooth scrolling to the top of the page on .scroll_top click
ui.footer.scroll_top.addEventListener("click", function() {
	var row1_style = ui.nav.row1.self.style;
	window.scroll({
	  top: 0,
	  left: 0,
	  behavior: 'smooth'
	});
	row1_style.top = "52px";
});

// make the header appear when scrolling to the top and disappear when scrolling
// to the bottom, if #header .wrapper .row0 is invisible
window.addEventListener("wheel", function(event) {
	var row1_style = ui.nav.row1.self.style;
	var clear_is_open = ui.nav.row1.header.mainav.clear.classList.contains("open");
	// If user is at the top of the page, #header .row1 should be under #header
	// .row0, which means 52px from top
	if (window.pageYOffset + event.deltaY <= 52) {
		row1_style.top = "52px";
	} else if (event.deltaY < 0) {
		row1_style.top = "-77px";
		if (clear_is_open) {
			change_nav_state();
		}
	} else {
		row1_style.top = "0px";
	}
});

// change nav state on click
ui.nav.row1.header.mainav.burger.addEventListener("click", function() {
	change_nav_state();
});

// change nav state
function change_nav_state() {
	var clear = ui.nav.row1.header.mainav.clear;
	var burger = ui.nav.row1.header.mainav.burger;
	clear.classList.toggle("closed");
	clear.classList.toggle("open");
	burger.classList.toggle("closed");
	burger.classList.toggle("open");
}
