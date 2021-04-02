;(function($){

    var slide3d = {
        init:function(){
            this.slide3dFn();
        },
        slide3dFn:function(){
            var $slideWrap = $('.slide-wrap');
            var $slide = $('.slide');
            var $slideContent = $('.slide-content');
            var $prevBtn = $('.prev-btn');
            var $nextBtn = $('.next-btn');
            var cnt = 0;
            var n = $('.slide').length;
            var angle = 360/n;
            var slideW = $('.slide').innerWidth();
            var tZ = Math.round((slideW/2) / Math.tan(Math.PI/n));

            // tZ = Math.round((슬라이드너비/2) / Math.tan(Math.PI/슬라이드갯수))
            
            function carouselSlideFn(){
                // $slide.stop().animate({opacity:.75})
                $slideContent.stop().animate({opacity:.75});
                $slideWrap.css({transform: 'perspective(' + (tZ*2) + 'px) translateZ('+ -tZ +'px) rotateY('+ (-angle*cnt) +'deg) rotateX(-7deg)'});
                $slideContent.eq(cnt%n).stop().animate({opacity:1});



            };

            function prevCountFn(){
                cnt--;
                carouselSlideFn();
            };
            function nextCountFn(){
                cnt++;
                carouselSlideFn();
            };

            $prevBtn.on({
                click:function(){
                    prevCountFn();
                }
            });
            $nextBtn.on({
                click:function(){
                    nextCountFn();
                }
            });


        }
    }

    slide3d.init();

})(jQuery);