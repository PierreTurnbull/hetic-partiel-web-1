var ui = {
	nav: {
		row0: document.querySelector("#nav .row0"),
		row1: document.querySelector("#nav .row1"),
		top: {},
		header: {}
	},
	footer: {
		scroll_top: document.querySelector("#footer .scroll_top")
	}
};

// make a smooth scrolling to the top of the page on .scroll_top click
ui.footer.scroll_top.addEventListener("click", function() {
	window.scroll({
	  top: 0,
	  left: 0,
	  behavior: 'smooth'
	});
});

// make the header appear when scrolling to the top and disappear when scrolling
// to the bottom, if #header .wrapper .row0 is invisible
window.addEventListener("wheel", function(event) {
	var row1_style = ui.nav.row1.style;
	// If user is at the top of the page, #header .row1 should be under #header
	// .row0, which means 52px from top
	if (window.pageYOffset + event.deltaY <= 52) {
		row1_style.top = "52px";
	} else if (event.deltaY < 0) {
		row1_style.top = "-77px";
	} else {
		row1_style.top = "0px";
	}
});
