$(".maincub").mouseenter(function(){
	$(".cub1").css("visibility", "visible");
});
$(".tri").mouseenter(function(){
	$(".cub2").css("visibility", "visible");
	flag = 1
});
$(".maincub").mouseleave(function(){
	$(".cub1").animate({bottom: "0"}, 1000);
});
$(".maincub").mouseleave(function(){
	$(".cub2").animate({left: "0"}, 1000);
});