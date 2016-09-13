var index = 0;
var _index = 0;
var timer;


$(".iconLeft").click(function() {
	var prevIndex = index == 0 ? 1 : 0;
	$(".bImgs").eq(index).addClass("outStage_tl").siblings().removeClass("inStage_tr").removeClass("outStage_tl");
	$(".bImgs").eq(prevIndex).addClass("inStage_tl").siblings().removeClass("outStage_tr").removeClass("inStage_tl");
	index = index == 0 ? 1 : 0; 
	console.log(prevIndex);
});

$(".iconRight").click(function() {
	var nextIndex = _index == 0 ? 1 : 0;
	$(".bImgs").eq(_index).addClass("outStage_tr").siblings().removeClass("outStage_tr");
	$(".bImgs").eq(nextIndex).addClass("inStage_tr").siblings().removeClass("inStage_tr");
	_index = _index == 0 ? 1 : 0;
});

var autoChange = function(){
	timer = setInterval(function(){
		var prevIndex = index == 0 ? 1 : 0;
		$(".bImgs").eq(index).addClass("outStage_tl").siblings().removeClass("inStage_tr").removeClass("outStage_tl");
		$(".bImgs").eq(prevIndex).addClass("inStage_tl").siblings().removeClass("outStage_tr").removeClass("inStage_tl");
		index = index == 0 ? 1 : 0; 
	},4000);
}
autoChange();



$(".lr-btn-box").mouseenter(function() {
	clearInterval(timer);
});

$(".lr-btn-box").mouseleave(function() {
	autoChange();
});



