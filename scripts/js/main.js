var ui = {
	footer: {
		scroll_top: document.querySelector("#footer .scroll_top")
	}
};

ui.footer.scroll_top.addEventListener("click", function() {
	window.scroll({
	  top: 0,
	  left: 0,
	  behavior: 'smooth'
	});
});
