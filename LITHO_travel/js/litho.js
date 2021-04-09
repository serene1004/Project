;(function($){
    var litho = {
        init:function(){
            var that = this;

            that.headerFn();
            that.section1Fn();
            that.section2Fn();
            that.section3Fn();
            that.section4Fn();
            that.section5Fn();
            that.section6Fn();
            that.section7Fn();
            that.section8Fn();
            that.section9Fn();
            that.section10Fn();
            that.footerFn();
        },
        headerFn:function(){

        },
        section1Fn:function(){
            var $slideView = $('#section1 .slide-view');
            var $slideWrap = $('#section1 .slide-wrap');
            var $slide = $('#section1 .slide');
            var slideW = $('#section1 .slide').innerWidth();
            var cnt = 0;
            var touchS = 0;
            var touchE = 0;

            function mainPrevSlideFn(){
                $slide.css({zIndex:1}).stop().animate({opacity:1},0);
                $slide.eq(cnt).css({zIndex:2});
                $slide.eq(cnt===2?0:cnt+1).css({zIndex:3}).stop().animate({opacity:1},0).animate({opacity:0},1000);
            }
            function mainNextSlideFn(){
                $slide.css({zIndex:1});
                $slide.eq(cnt===0?2:cnt-1).css({zIndex:2});
                $slide.eq(cnt).css({zIndex:3}).stop().animate({opacity:0},0).animate({opacity:1},1000);
            }
            function prevSlideCountFn(){
                cnt--;
                if(cnt<0){cnt=2;}
                mainPrevSlideFn();
            }
            function nextSlideCountFn(){
                cnt++;
                if(cnt>2){cnt=0;}
                mainNextSlideFn();
            }

            $slideView.on({
                mousedown:function(e){
                    e.preventDefault();
                    touchS = e.clientX;
                },
                mouseup:function(e){
                    e.preventDefault();
                    touchE = e.clientX;
                    touchSwipeFn();
                }
            });
            function touchSwipeFn(){
                if(touchS-touchE > 0){
                    if(!$slide.is(':animated')){
                        nextSlideCountFn();
                    }
                }
                if(touchS-touchE < 0){
                    if(!$slide.is(':animated')){
                        prevSlideCountFn();
                    }
                }
            }


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
        section8Fn:function(){

        },
        section9Fn:function(){

        },
        section10Fn:function(){

        },
        footerFn:function(){

        },
    }

    litho.init();

})(jQuery);