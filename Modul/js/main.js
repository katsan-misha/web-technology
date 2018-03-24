$(".maincub").mouseenter( function () {
	$(".cub_anim").css("visibility", "visible");
}
);
$(".cub").mouseenter( function () {
	$(".cub_anim").animate({
	    left: '45%',top: '46%'
	}, 1000);
}
);