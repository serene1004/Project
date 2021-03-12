// GJB = GrandJosunBusan
;(function($){

    var gjb = {
        init:function(){
            var taht = this;

            taht.headerFn();
            taht.section1Fn();
            taht.section2Fn();
            taht.section3Fn();
            taht.section4Fn();
            taht.section5Fn();
            taht.section6Fn();
            taht.section7Fn();
            taht.indicatorFn();
            taht.footerFn();
        },

        headerFn:function(){
            var $nav = $('#header #nav');
            var $logo = $('#header #logo h1 a');
            var $gnbWrap = $('#header #nav .gnb-wrap');
            var $gnbBtn = $('#header #nav .gnb-wrap .gnb-btn');
            var $lnbWrap = $('#header #nav .gnb-wrap .lnb-wrap');

            var $sideBtn = $('#header .side-btn-box .side-btn')
            var $sideBtnText = $('#header .side-btn-box .side-btn .side-btn-text');

            $sideBtn.on({
                mouseenter:function(){
                    $sideBtnText.stop().slideDown(200);
                },
                mouseleave:function(){
                    $sideBtnText.stop().slideUp(200);
                }
            });

            // gnb에 마우스오버시 lnb보이게
            // lnb영역으로 마우스들어가도 영역이 닫히지않도록
            // gnb버튼에서 다른 gnb버튼으로 마우스 이동시 기존 lnb는 닫고 새로운 lnb가 보이게
            // gnb에 마우스오버시 nav 배경 흰색+lnb슬라이드다운
            // 배경이 흰색이면 글자색은 검정으로, 배경이 투명이면 글자색은 흰색으로

            $nav.on({
                mouseleave:function(){
                    $nav.removeClass('mouseon');
                    $lnbWrap.stop().slideUp(0);
                    $logo.css({color:'#fff'});

                }
            });

            $gnbWrap.on({
                mouseenter:function(){
                    $nav.addClass('mouseon');
                    $logo.css({color:'#000'});
                }
            });
            
            $gnbBtn.on({
                mouseenter:function(){
                    $nav.addClass('mouseon');
                    $lnbWrap.stop().slideUp(100);
                    $(this).next().stop().slideDown(300);
                }
            });
            $gnbWrap.on({
                mouseleave:function(){
                    $lnbWrap.stop().slideUp(100);
                }
            });

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