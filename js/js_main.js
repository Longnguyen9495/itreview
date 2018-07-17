function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
	if (!event.target.matches('.dropbtn, .dropbtn span')) {
		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}

$(document).ready(function() {
	var owl = $('.owl-carousel');
	owl.owlCarousel({
		margin: 10,
		nav: true,
		loop: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 3
			},
			1000: {
				items: 5
			}
		}
	})
});

$(document).ready(function () {
	$('.mode-bar-content .fa-angle-right').click(function() {
		$('.mb-topic-list').css('left', -200);
	})
	$('.mode-bar-content .fa-angle-left').click(function() {
		$('.mb-topic-list').css('left', 0);
	})
})

$(document).ready(function () {
	$('.view-mode i.fa-th-large').click(function () {
		$('.wrap-list-item .list-bx').show();
		$('.wrap-list-item .list-block-row').hide();
	})
})