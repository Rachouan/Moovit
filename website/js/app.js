var mobile = false;
var mobilewidth = 768;
var seconds = 0;

$(function(){

	function init () {
		
		console.log("INITIALISE");

		$("nav header .menu").on("click",function (e) {
			e.preventDefault();
			console.log("click");
			openMenu();
		});

		$(".calendar").on("click",function (e) {
			console.log("click");
			openNotification();
		});

		$( window ).resize(function() {

			if($(this).width() <= 1100){

				$( "nav" ).removeClass("open");
				$("body").removeClass("overflow");
				$( ".menu" ).removeClass("icon-cross");
				$( ".menu" ).addClass("icon-menu");
				$("article").removeClass("blur");
				$("#header").removeClass("blur");

			}

		});


		$(".activities ul li .openActivity").on("click",function(){

			if($(this).parent().attr("class") == "open"){
				$(this).parent().removeClass("open");
			}else{
				$(this).parent().addClass("open");
			}

			return false;

		});

		$(".help ul li h1").on("click",function(){

			if($(this).parent().attr("class") == "open"){
				$(this).parent().removeClass("open");
				$(this).find("span").addClass("icon-maximize");
				$(this).find("span").removeClass("icon-minimize");
			}else{
				$(this).parent().addClass("open");
				$(this).find("span").removeClass("icon-maximize");
				$(this).find("span").addClass("icon-minimize");
			}

			return false;

		});

		$(".settings ul li.edit div.edit").on("click",function (e) {

			if($(this).parent().attr("class") == "edit open"){
				$(this).parent().removeClass("open");
			}else{
				$(this).parent().addClass("open");
			}

		})

		$('.slidercontainer').click(function(e){

			var slider = $(this).find('.slider');

	        if(slider.attr("class")== "slider on"){
	            slider.removeClass('on');
	            slider.addClass('off');
	            slider.parent().parent().removeClass("green");
	            slider.parent().parent().addClass("red");
	        }else{
	            slider.removeClass('off');
	            slider.addClass('on');
	            slider.parent().parent().removeClass("red");
	            slider.parent().parent().addClass("green");
	        }

    	});

    	$('.slidercontainer').on("swipe",function(e){

			var slider = $(this).find('.slider');

	        if(slider.attr("class")== "slider on"){
	            slider.removeClass('on');
	            slider.addClass('off');
	            slider.parent().parent().removeClass("green");
	            slider.parent().parent().addClass("red");
	        }else{
	            slider.removeClass('off');
	            slider.addClass('on');
	            slider.parent().parent().removeClass("red");
	            slider.parent().parent().addClass("green");
	        }

    	});
		
	}

	init();

	function openNotification () {

		if($(".opencalendar").attr("class") == "opencalendar open"){
			$( ".opencalendar" ).removeClass("open");
		}else{
			$( ".opencalendar" ).addClass("open");
		}
	}

	function openMenu(){

		
		if($("nav").attr("class") == "open"){
			$( "nav" ).removeClass("open");
			$("body").removeClass("overflow");
			$( ".menu" ).removeClass("icon-cross");
			$( ".menu" ).addClass("icon-menu");
			$("article").removeClass("blur");
			$("#header").removeClass("blur");
		}else{
			$( "nav" ).addClass("open");
			$("body").addClass("overflow");
			$( ".menu" ).removeClass("icon-menu");
			$( ".menu" ).addClass("icon-cross");
			$("article").addClass("blur");
			$("#header").addClass("blur");
		}
	}

})