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



		$(".activities ul li .openActivity").on("click",function(){

			if($(this).parent().attr("class") == "open"){
				$(this).parent().removeClass("open");
			}else{
				$(this).parent().addClass("open");
			}

			return false;

		});

		$('.slidercontainer').click(function(e){

			var slider = $(this).find('.slider');

	        if(slider.attr("class")== "slider on"){
	            slider.removeClass('on');
	            slider.addClass('off');
	            $(".status").html("private");

	            slider.parent().parent().removeClass("green");
	            slider.parent().parent().addClass("red");
	        }else{
	            slider.removeClass('off');
	            slider.addClass('on');
	            $(".status").html("public");
	            slider.parent().parent().removeClass("red");
	            slider.parent().parent().addClass("green");
	        }

    });
		
	}

	init();


	function checkIfMobile (argument) {

		if($(this).width() < mobilewidth){

			$( "html" ).on("swipe",function () {
				console.log("you swiped");
			});
		}else{

		}
	}

	function openMenu(){

		
		if($("nav").attr("class") == "open"){
			$( "nav" ).removeClass("open");
			$( ".menu" ).removeClass("close");
			$("article").removeClass("blur");
			$("#header").removeClass("blur");
		}else{
			$( "nav" ).addClass("open");
			$( ".menu" ).addClass("close");
			$("article").addClass("blur");
			$("#header").addClass("blur");
		}
	}

})