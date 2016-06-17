/**  ---------------------------------------
	 PROJECT GREEN 
	 AUTHOR: John Mitchell
	 ---------------------------------------  **/

var numberSlides = 4;
var currentWidth = $(window).width();
var currentPosition = 0;
var documentWidth = $(window).width();
var containerWidth = documentWidth * numberSlides;
var newPosition = 0;
var currentPositionDistance = 0;
var startButtonHasBeenClicked = false;

var pg = {
	init: function() {
		pg.onload();
		pg.facebox();
		pg.menu();
		pg.handleSizeResize();
		pg.previousNext();
		pg.tips();
	},
	
	onload: function() {
		$(".container").css("left", 0);
		//Display the welcome items
		$(".welcome-circle").fadeIn("slow");
		$(".welcome-menu").fadeIn("slow");
		
		DD_belatedPNG.fix('.welcome-circle, .welcome-menu a');
		
		$(".start").click(function(e){
			pg.handleWelcomeScreen();
		});
		$(".welcome-menu-campus").click(function(e){
			pg.handleWelcomeScreen();
		});
		$(".welcome-menu-office").click(function(e){
			currentPosition = 1;
			pg.slidemenu();
		});
		$(".welcome-menu-kitchen").click(function(e){
			currentPosition = 2;
			pg.slidemenu();
		});
		$(".welcome-menu-tip").click(function(e){
			currentPosition = 3;
			pg.slidemenu();
		});
	},
	
	facebox: function() {
		$('a[rel*=facebox]').facebox({
       		loadingImage : '_js/facebox/loading.gif',
        	closeImage   : '_img/btn-close.png'
      	});
	},
	
	handleWelcomeScreen: function() {
		startButtonHasBeenClicked = true;
		
		$(".welcome-circle").fadeOut("slow");
		$(".welcome-menu").fadeOut("slow");
		
		pg.bobble();
	},
	
	menu: function() {
		$(".menu-campus a").click(function(e){
			currentPosition = 0;
			pg.slidemenu();
		});
		$(".menu-office a").click(function(e){
			currentPosition = 1;
			pg.slidemenu();
		});
		$(".menu-kitchen a").click(function(e){
			currentPosition = 2;
			pg.slidemenu();
		});
		$(".menu-tip a").click(function(e){
			currentPosition = 3;
			pg.slidemenu();
		});
		
		$(".label-campus").click(function(e){
			currentPosition = 0;
			pg.slidemenu();
		});
		$(".label-office").click(function(e){
			currentPosition = 1;
			pg.slidemenu();
		});
		$(".label-kitchen").click(function(e){
			currentPosition = 2;
			pg.slidemenu();
		});		
	},
	
	hoverstates: function() {
		$('.menu li.menu-campus a').removeClass("over");
		$('.menu li.menu-office a').removeClass("over");
		$('.menu li.menu-kitchen a').removeClass("over");
		$('.menu li.menu-tip a').removeClass("over");
		
		if (currentPosition == 0) {
			$('.menu li.menu-campus a').addClass("over");
		}	
		if (currentPosition == 1) {
			$('.menu li.menu-office a').addClass("over");
		}	
		if (currentPosition == 2) {
			$('.menu li.menu-kitchen a').addClass("over");
		}	
		if (currentPosition == 3) {
			$('.menu li.menu-tip a').addClass("over");
		}
	},
	
	slidemenu: function() {
		pg.hoverstates();	
			
		var x = Math.abs(parseInt($(".container").css("left")));
		
		documentWidth = $(window).width();
		newPosition = documentWidth * currentPosition;

		//Determine if we are going to be going left right or none
		if (x < newPosition) {
			var distance = newPosition - x;
			$(".container").animate({
				left: "-=" + distance
			});
		} else if (x > newPosition) {
			var distance = x - newPosition;
			$(".container").animate({
				left: "+=" + distance
			});
		}
		
		pg.bobble();
	},
	
	handleSizeResize: function() {
		//Change the container width
		documentWidth = $(window).width();
		containerWidth = documentWidth * numberSlides;
		$(".container").width(containerWidth);
		//Chnage the container position
		newPosition = documentWidth * currentPosition;
		$(".container").css("left", "-" + newPosition + "px");
		//Change the individual pages width
		$(".campus").width(documentWidth);
		$(".office").width(documentWidth);
		$(".kitchen").width(documentWidth);
		$(".tip").width(documentWidth);
		//I dunno why I'm doing this here but pfft
		$(".campus").css("float", "left");
		$(".office").css("float", "left");
		$(".kitchen").css("float", "left");
		$(".tip").css("float", "left");
	},
	
	previousNext: function() {
		//Next Button Click
		$(".nextButton").click(function(e){
			currentPosition = currentPosition + 1;
			var leftPosition = containerWidth - documentWidth;
			if ($(".container").css("left") !== "-"+leftPosition+"px") {
				$(".container").animate({
					left: "-=" + documentWidth
				});
				currentPositionDistance = $(".container").css("left");
			}
			pg.bobble();
			pg.hoverstates();		
		});
		//Previous Button Click
		$(".previousButton").click(function(e){
			currentPosition = currentPosition - 1;
			
			if ($(".container").css("left") !== "0px") {
				$(".container").animate({
					left: "+=" + documentWidth
				})
				currentPositionDistance = $(".container").css("left");
			}
			pg.bobble();
			pg.hoverstates();
		});
	},
	
	bobble: function() {
		if (currentPosition == 0) {
			if (startButtonHasBeenClicked) {
				setTimeout(function() {	$("#campusLabel1").css("display", "block"); $("#campusLabel1").effect("bounce", { times:3 }, 300); }, 500);
				setTimeout(function() { $("#campusLabel2").css("display", "block"); $("#campusLabel2").effect("bounce", { times:3 }, 300); }, 1000);
				setTimeout(function() { $("#campusLabel3").css("display", "block"); $("#campusLabel3").effect("bounce", { times:3 }, 300); }, 200);
				setTimeout(function() { $("#campusLabel4").css("display", "block"); $("#campusLabel4").effect("bounce", { times:3 }, 300); }, 3000);
				setTimeout(function() { $("#campusLabel5").css("display", "block"); $("#campusLabel5").effect("bounce", { times:3 }, 300); }, 1400);
				setTimeout(function() { $("#campusLabel6").css("display", "block"); $("#campusLabel6").effect("bounce", { times:3 }, 300); }, 1800);
				setTimeout(function() { $("#campusLabel7").css("display", "block"); $("#campusLabel7").effect("bounce", { times:3 }, 300); }, 700);
				setTimeout(function() { $("#campusLabel8").css("display", "block"); $("#campusLabel8").effect("bounce", { times:3 }, 300); }, 1100);
				setTimeout(function() { $("#campusLabel9").css("display", "block"); $("#campusLabel9").effect("bounce", { times:3 }, 300); }, 1500);
				setTimeout(function() { $("#campusLabel10").css("display", "block"); $("#campusLabel10").effect("bounce", { times:3 }, 300); }, 100);
				setTimeout(function() { $("#campusLabel11").css("display", "block"); $("#campusLabel11").effect("bounce", { times:3 }, 300); }, 2400);
				setTimeout(function() { $("#campusLabel12").css("display", "block"); $("#campusLabel12").effect("bounce", { times:3 }, 300); }, 2800);
				setTimeout(function() { $("#campusLabel13").css("display", "block"); $("#campusLabel13").effect("bounce", { times:3 }, 300); }, 1900);
				setTimeout(function() { $("#campusLabel14").css("display", "block"); $("#campusLabel14").effect("bounce", { times:3 }, 300); }, 900);
				setTimeout(function() { $("#campusLabel15").css("display", "block"); $("#campusLabel15").effect("bounce", { times:3 }, 300); }, 1300);
			}
		} else {
			$(".campus-labels a").each(function() {
    	    	$(this).css("display", "none");
    		});
		}
		if (currentPosition == 1) {
			setTimeout(function() {	$("#officeLabel1").css("display", "block"); $("#officeLabel1").effect("bounce", { times:3 }, 300); }, 500);
			setTimeout(function() { $("#officeLabel2").css("display", "block"); $("#officeLabel2").effect("bounce", { times:3 }, 300); }, 1000);
			setTimeout(function() { $("#officeLabel3").css("display", "block"); $("#officeLabel3").effect("bounce", { times:3 }, 300); }, 200);
			setTimeout(function() { $("#officeLabel4").css("display", "block"); $("#officeLabel4").effect("bounce", { times:3 }, 300); }, 3000);
			setTimeout(function() { $("#officeLabel5").css("display", "block"); $("#officeLabel5").effect("bounce", { times:3 }, 300); }, 1400);
			setTimeout(function() { $("#officeLabel6").css("display", "block"); $("#officeLabel6").effect("bounce", { times:3 }, 300); }, 1800);
			setTimeout(function() { $("#officeLabel7").css("display", "block"); $("#officeLabel7").effect("bounce", { times:3 }, 300); }, 700);
			setTimeout(function() { $("#officeLabel8").css("display", "block"); $("#officeLabel8").effect("bounce", { times:3 }, 300); }, 1100);
			setTimeout(function() { $("#officeLabel9").css("display", "block"); $("#officeLabel9").effect("bounce", { times:3 }, 300); }, 1500);
			setTimeout(function() { $("#officeLabel10").css("display", "block"); $("#officeLabel10").effect("bounce", { times:3 }, 300); }, 100);
			setTimeout(function() { $("#officeLabel11").css("display", "block"); $("#officeLabel11").effect("bounce", { times:3 }, 300); }, 2400);
			setTimeout(function() { $("#officeLabel12").css("display", "block"); $("#officeLabel12").effect("bounce", { times:3 }, 300); }, 2800);
			setTimeout(function() { $("#officeLabel13").css("display", "block"); $("#officeLabel13").effect("bounce", { times:3 }, 300); }, 1900);
			setTimeout(function() { $("#officeLabel14").css("display", "block"); $("#officeLabel14").effect("bounce", { times:3 }, 300); }, 900);
		} else {
			$(".office-labels a").each(function() {
    	    	$(this).css("display", "none");
    		});
		}
		if (currentPosition == 2) {
			setTimeout(function() {	$("#kitchenLabel1").css("display", "block"); $("#kitchenLabel1").effect("bounce", { times:3 }, 300); }, 500);
			setTimeout(function() { $("#kitchenLabel2").css("display", "block"); $("#kitchenLabel2").effect("bounce", { times:3 }, 300); }, 1000);
			setTimeout(function() { $("#kitchenLabel3").css("display", "block"); $("#kitchenLabel3").effect("bounce", { times:3 }, 300); }, 200);
			setTimeout(function() { $("#kitchenLabel4").css("display", "block"); $("#kitchenLabel4").effect("bounce", { times:3 }, 300); }, 3000);
			setTimeout(function() { $("#kitchenLabel5").css("display", "block"); $("#kitchenLabel5").effect("bounce", { times:3 }, 300); }, 1400);
			setTimeout(function() { $("#kitchenLabel6").css("display", "block"); $("#kitchenLabel6").effect("bounce", { times:3 }, 300); }, 1800);
			setTimeout(function() { $("#kitchenLabel7").css("display", "block"); $("#kitchenLabel7").effect("bounce", { times:3 }, 300); }, 700);
			setTimeout(function() { $("#kitchenLabel8").css("display", "block"); $("#kitchenLabel8").effect("bounce", { times:3 }, 300); }, 1100);
			setTimeout(function() { $("#kitchenLabel9").css("display", "block"); $("#kitchenLabel9").effect("bounce", { times:3 }, 300); }, 1500);
			setTimeout(function() { $("#kitchenLabel10").css("display", "block"); $("#kitchenLabel10").effect("bounce", { times:3 }, 300); }, 100);
			setTimeout(function() { $("#kitchenLabel11").css("display", "block"); $("#kitchenLabel11").effect("bounce", { times:3 }, 300); }, 2400);
			setTimeout(function() { $("#kitchenLabel12").css("display", "block"); $("#kitchenLabel12").effect("bounce", { times:3 }, 300); }, 2800);
			setTimeout(function() { $("#kitchenLabel13").css("display", "block"); $("#kitchenLabel13").effect("bounce", { times:3 }, 300); }, 1900);
		} else {
			$(".kitchen-labels a").each(function() {
    	    	$(this).css("display", "none");
    		});
		}
	},
	
	tips: function() {
		$(".top-tips .tip-details").css("display", "none");
		$(".btm-tips .tip-details").css("display", "none");
		$(".top-tips .tip-title").css("display", "block");
		$(".btm-tips .tip-title").css("display", "block");
		$(".tip1").mouseenter(function() {
			$(".tip1 .tip-details").css("display", "block");
			$(".tip1 .tip-title").css("display", "none");
		});
		$(".tip1").mouseleave(function() {
			$(".tip1 .tip-details").css("display", "none");
			$(".tip1 .tip-title").css("display", "block");
		});
		$(".tip2").mouseenter(function() {
			$(".tip2 .tip-details").css("display", "block");
			$(".tip2 .tip-title").css("display", "none");
		});
		$(".tip2").mouseleave(function() {
			$(".tip2 .tip-details").css("display", "none");
			$(".tip2 .tip-title").css("display", "block");
		});
		$(".tip3").mouseenter(function() {
			$(".tip3 .tip-details").css("display", "block");
			$(".tip3 .tip-title").css("display", "none");
		});
		$(".tip3").mouseleave(function() {
			$(".tip3 .tip-details").css("display", "none");
			$(".tip3 .tip-title").css("display", "block");
		});
		$(".tip4").mouseenter(function() {
			$(".tip4 .tip-details").css("display", "block");
			$(".tip4 .tip-title").css("display", "none");
		});
		$(".tip4").mouseleave(function() {
			$(".tip4 .tip-details").css("display", "none");
			$(".tip4 .tip-title").css("display", "block");
		});
		$(".tip5").mouseenter(function() {
			$(".tip5 .tip-details").css("display", "block");
			$(".tip5 .tip-title").css("display", "none");
		});
		$(".tip5").mouseleave(function() {
			$(".tip5 .tip-details").css("display", "none");
			$(".tip5 .tip-title").css("display", "block");
		});
	},

	closeFacebox: function() {
   		jQuery(document).trigger('close.facebox');
   	} 
}

//On DOM READY
$(document).ready(function() {
	pg.init();
});
//On window resize
$(window).resize(function() {
	pg.handleSizeResize();
});