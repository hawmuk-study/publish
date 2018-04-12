$(document).ready(function(){

/* 로그인 팝업창 */
	function LoginPopup() {
		$(".Btn_Menu").mouseover(function(){
			$(".topLoginModal").css({"opacity":"1","z-index":"9","height":"300px"});
			$(".topLoginModal").mouseleave(function(){
				$(".topLoginModal").css({"opacity":"0","z-index":"-1","height":"0px"});
			});
		});
	}
	LoginPopup();
/* - */


   /*	$(function() {
	    var time = 500;
	    var idx = idx2 = 0;
	    var slide_width = $("#slider").width();
	    var slide_count = $("#slider li").size();
	    $("#slider li:first").css("display", "block");

	    if(slide_count > 1)
	        $(".btn").css("display", "inline");
	 
	    $(".Btn_Pre").click(function() {
	        if(slide_count > 1) {
	            idx2 = (idx - 1) % slide_count;
	            if(idx2 < 0)
	                idx2 = slide_count - 1;
	            $("#slider li:hidden").css("left", "-"+slide_width+"px");
	            $("#slider li:eq("+idx+")").animate({ left: "+="+slide_width+"px" }, time, function() {
	                $(this).css("display", "none").css("left", "-"+slide_width+"px");
	            });
	            $("#slider li:eq("+idx2+")").css("display", "block").animate({ left: "+="+slide_width+"px" }, time);
	            idx = idx2;
	        }
	    });
	 
	    $(".Btn_Next").click(function() {
	        if(slide_count > 1) {
	            idx2 = (idx + 1) % slide_count;
	            $("#slider li:hidden").css("left", slide_width+"px");
	            $("#slider li:eq("+idx+")").animate({ left: "-="+slide_width+"px" }, time, function() {
	                $(this).css("display", "none").css("left", slide_width+"px");
	            });
	            $("#slider li:eq("+idx2+")").css("display", "block").animate({ left: "-="+slide_width+"px" }, time);
	            idx = idx2;
	        }
	    });
	});*/

/* 메인 이미지 슬라이드 */

    function ImageSlider(){
        var $panel = $("#slider");
        var itemWidth = $panel.children().outerWidth(); // 아이템 가로 길이
        var itemLength = $panel.children().length;      // 아이템 수

        // Auto 롤링 아이디
        var rollingId;
        auto();

        // 배너 마우스 오버 이벤트
        $panel.mouseover(function() {
            clearInterval(rollingId);
        });

        // 배너 마우스 아웃 이벤트
        $panel.mouseout(function() {
            auto();
        });

        // 이전 이벤트
        $(".Btn_Pre").on("click", prev);
        $(".Btn_Pre").mouseover(function(e) {
            clearInterval(rollingId);
        });

        $(".Btn_Pre").mouseout(auto);
        // 다음 이벤트
        $(".Btn_Next").on("click", next);
        $(".Btn_Next").mouseover(function(e) {
            clearInterval(rollingId);
        });
        $(".Btn_Next").mouseout(auto);

        function auto() {

            // 2초마다 start 호출
            rollingId = setInterval(function() {
                start();
            }, 3000);
        }

        function start() {
            $panel.css("width", itemWidth * itemLength);
            $panel.animate({"left": - itemWidth + "px"}, function() {

                // 첫번째 아이템을 마지막에 추가하기
                $(this).append("<li>" + $(this).find("li:first").html() + "</li>");

                // 첫번째 아이템을 삭제하기
                $(this).find("li:first").remove();

                // 좌측 패널 수치 초기화
                $(this).css("left", 0);
            });
        }

        // 이전 이벤트 실행
        function prev(e) {
            $panel.css("left", - itemWidth);
            $panel.prepend("<li>" + $panel.find("li:last").html() + "</li>");
            $panel.animate({"left": "0px"}, function() {
                $(this).find("li:last").remove();
            });
        }

        // 다음 이벤트 실행
        function next(e) {
            $panel.animate({"left": - itemWidth + "px"}, function() {
                $(this).append("<li>" + $(this).find("li:first").html() + "</li>");
                $(this).find("li:first").remove();
                $(this).css("left", 0);
            });
        }
    }
    ImageSlider();
/* */


/* 메뉴바 Fixed */

    function GNBScroll(){
        $(window).scroll(function() {
          var $el = $('.GnbWrap');
          
          if($(this).scrollTop() >= 800) $el.addClass('scroll');
          else $el.removeClass('scroll');
        });
    }
    GNBScroll();

/* */


});