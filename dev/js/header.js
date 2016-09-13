$(".hoverBox").mouseenter(function() {
	var navLi = $(this).find(".navLi");
	navLi.css("backgroundColor","#014145");
	var dropDown = $(this).find(".dropDown");
	dropDown.addClass("show");
}).mouseleave(function() {
	var navLi = $(this).find(".navLi");
	navLi.css("backgroundColor","");
	var dropDown = $(this).find(".dropDown");
	dropDown.removeClass("show");
});

