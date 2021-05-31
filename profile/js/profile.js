;(function($){

    var profile = {
        init:function(){
            this.section1Fn();
        },
        section1Fn:function(){
            var $section1 = $('#section1');
            var $cube = $('#wrap .cube');
            var x = 0;
            var y = 0;
            var $a = $('#section1 .container > span > a');


            $section1.on({
                mousemove:function(event){

                    x = event.clientX*0.095;
                    y = event.clientY*0.2;

                    $cube.css({transform:'perspective(600px) rotateX('+ (y-90) +'deg) rotateY('+ (x-90) +'deg) scale3d(1,1,1)'});
                }
            });

            $a.each(function(idx){
                $(this).on({
                    mouseenter:function(){
                        if (idx === 0) {
                            $section1.css({background: 'url(./img/bg1.jpg) no-repeat 50% 50%', backgroundSize: 'cover'});
                            $a.css({textShadow: '4px 8px 4px rgba(255, 255, 255, 1)'});
                        } else if (idx === 1) {
                            $section1.css({background: 'url(./img/bg2.jpg) no-repeat 50% 50%', backgroundSize: 'cover'});
                            $a.css({textShadow: '4px 8px 4px rgba(255, 255, 255, 1)'});
                        } else if (idx === 2) {
                            $section1.css({background: 'url(./img/bg0.jpg) no-repeat 50% 50%', backgroundSize: 'cover'});
                            $a.css({textShadow: '4px 8px 4px rgba(0, 0, 0, .7)'});
                        } else if (idx === 3) {
                            $section1.css({background: 'url(./img/bg3.jpg) no-repeat 50% 50%', backgroundSize: 'cover'});
                            $a.css({textShadow: '4px 8px 4px rgba(0, 0, 0, .7)'});
                        }
                    }
                });
            });


            


        }
        
    }

    profile.init();

})(jQuery);