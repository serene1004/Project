// GJB = GrandJosunBusan
;(function($){

    var gjb = {
        init:function(){
            this.headerFn();
            this.section1Fn();
            this.section2Fn();
            this.section3Fn();
            this.section4Fn();
            this.section5Fn();
            this.section6Fn();
            this.section7Fn();
            this.indicatorFn();
            this.footerFn();
        },

        headerFn:function(){
            
        },

        section1Fn:function(){
            var $window = $(window);
            var $winW = $(window).width;
            var $winH = $(window).height;
            var $mainBgSlide = $('#section1 .mainBg-slide');
            var $mainBgSlideWrap = $('#section1 .mainBg-slide-wrap');
            var $mainBgSlide = $('#section1 .mainBg-slide');
            var $prevBtn = $('#section1 .prev-btn');
            var $nextBtn = $('#section1 .next-btn');
            var $stopBtn = $('#section1 .stop-btn');
            var $mainBgSlideView = $('#section1 .mainBg-slide-view');
            var slideCnt = 0;
            

            function resizeFn(){
                $winW = $(window).width();
                $winH = $(window).height();
                $mainBgSlide.css({width:$winW,height:$winH});
            }
            resizeFn();

            $window.resize(function(){
                resizeFn();
            });

            // Background slide event
            function bgSlideFn(){
                $mainBgSlideWrap.stop().animate({left:-$winW*slideCnt}, 500, 'easeOutCubic',function(){
                    if ( slideCnt > 2 ) { slideCnt = 0; }
                    if ( slideCnt < 0 ) { slideCnt = 2; }
                    console.log(slideCnt);
                    $mainBgSlideWrap.stop().animate({left:-$winW*slideCnt}, 0)
                })
            }

            function bgPrevCountFn(){
                slideCnt--;
                bgSlideFn();
            }
            function bgNextCountFn(){
                slideCnt++;
                bgSlideFn();
            }

            $prevBtn.on({
                click:function(){
                    if (!$mainBgSlideWrap.is(':animated')) {
                        bgPrevCountFn();
                    }
                }
            });
            $nextBtn.on({
                click:function(){
                    if (!$mainBgSlideWrap.is(':animated')) {
                        bgNextCountFn();
                    }
                }
            });

            $mainBgSlideView.swipe({
                swipeLeft:function(){
                    if (!$mainBgSlideWrap.is(':animated')) {
                        bgNextCountFn();
                    }
                },
                swipeRight:function(){
                    if (!$mainBgSlideWrap.is(':animated')) {
                        bgPrevCountFn();
                    }
                }
            });
            
        },

        section2Fn:function(){

        },

        section3Fn:function(){

        },

        section4Fn:function(){

        },

        section5Fn:function(){

        },

        section6Fn:function(){

        },

        section7Fn:function(){

        },

        indicatorFn:function(){

        },

        footerFn:function(){

        }
    }

    gjb.init();

})(jQuery);