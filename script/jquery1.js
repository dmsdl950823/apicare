$(document).ready(function () {

    
    /*bestitem 출렁이*/
    var si1=setInterval(best1,0)
    var si2=setInterval(best2,0)
    function best1(){
        $('.orn1').animate({
            'left':'-1840px'
        },15000,'linear',function(){
             $('.orn1').append($('.orn1 li:first'))
                $('.orn1').css('left','0')
        })
    }
    function best2(){
        $('.orn2').animate({
            'left':'-1840px'
        },4000,'linear',function(){
             $('.orn2').append($('.orn2 li:first'))
                $('.orn2').css('left','0')
        })
    }
    /*bestitem 출렁이 E*/
        
    
    /*FOOTER 출렁이*/
    
    var num=0;
    var si3=setInterval(foot1,0)
    var si4=setInterval(foot2,0)
    
    function foot1() {
        $('.fluidall1').animate({
            'left':'-1840px'
        },12000,'linear',function(){
             $('.fluidall1').append($('.fluidall1 li:first'))
                $('.fluidall1').css('left','0')
        })
    }
    function foot2() {
        $('.fluidall2').animate({
            'left':'-1840px'
        },4000,'linear',function(){
             $('.fluidall2').append($('.fluidall2 li:first'))
                $('.fluidall2').css('left','0')
        })
    }
    /*FOOTER 출렁이 E*/

    
    
    
    /*검색창*/
    $('.basicmenu ul li:last').hover(function(){
        $('.searchBox').css({
            'opacity':'1',
            'transform':'translateY(0px)'
        })
    })
    $('.input_val').focusout(function(){
        $('.searchBox').css({
            'opacity':'0',
            'transform':'translateY(-20px)'
        })
    })    
    $('.input_val').focus(function(){
        $('.searchBox').css({
            'opacity':'1',
            'transform':'translateY(0px)'
        })
    })
    /*검색창E*/

    

    /*product li*/
    
    function beediv(){
        $('.morebtnbox > div').removeClass('on')
        $('.morebtnbox > div').eq($('.nxtpg ul li.on').index()).addClass('on')
    }
    
    function nxtpg(){
        $('.procontbox').animate({
            //left: '-1402' * ($('.nxtpg ul li.on').index())+'px'
            left: '-1402'*($('.nxtpg ul li.on').index())+'px'
        }, 100)
    }
    
    $('.lftbtn a').click(function (e) {
        e.preventDefault();
        $('.procontbox').animate({
            left: '0px'
        }, 200)
        $('.nxtpg ul li').removeClass('on')
        $('.nxtpg ul li:eq(0)').addClass('on')
        beediv();
    })
    $('.rghtbtn a').click(function (e) {
        e.preventDefault();
        $('.procontbox').animate({
            left: '-1402px'
        }, 100)
        $('.nxtpg ul li').removeClass('on')
        $('.nxtpg ul li:eq(1)').addClass('on')
        beediv();
    })
    /*product li*/

    
    
    /*product btn*/
    $('.nxtpg ul li').click(function () {
        $('.nxtpg ul li').removeClass('on')
        $(this).addClass('on')

        $('.morebtnbox > div').removeClass('on')
        $('.morebtnbox > div').eq($(this).index()).addClass('on')
        
        nxtpg();
        
    })
    /*product btn E*/



    /*스크롤*/
    $('.selectpage li').click(function (e) {
        e.preventDefault();
         var pageNum=$(this).index();
//        console.log(pageNum);
         var sectionall=$('#Wrapper > section').eq(pageNum);
         var offset=sectionall.offset().top;
//         console.log(offset); //0 920 1840 2762 3682 4602
        
        
//        console.log(sectionall);
        $('html,body').animate({
            scrollTop:offset
        },600)
    })
    
    var nav=$('.selectpage li');
    var cont=$('#Wrapper > section');
    
    $(window).scroll(function () {
        var wscroll = $(this).scrollTop(); //내가지금 보고있는 window top 값
        num++;
        
        for(var i=0; i<cont.length; i++){
            if(wscroll>=($('#Wrapper > section').eq(i).offset().top)-200){
                nav.removeClass('selectedpage');
                nav.eq(i).addClass('selectedpage');
            }
            
//            if(wscroll>=($('#Wrapper > section').eq(i).offset().top)-200){
//                $('html,body').animate({
//                    scrollTop:$('#Wrapper > section').eq(i).offset().top
//                })
//            }
            
            
            }
        })
        
        
        /*uppage*/
        $('a[href^="#Product"]').on('click',function(e){
            e.preventDefault();
//            console.log(1)
            var uppg=$($(this).attr('href')) //#Product href속성을 불러왔음
            if(uppg.length){
                $('html,body').animate({
                    scrollTop:uppg.offset().top
                },600)
            }
        })
        
        /*top page*/
        $('a[href^="#header"]').on('click',function(e){
            e.preventDefault();
            var toppg=$($(this).attr('href'))
            if(toppg.length){
                $('html,body').animate({
                    scrollTop:toppg.offset().top
                },1000)
            }
        })
        
  
    /*스크롤 E*/
    
    
    // ripples
    $('.pic').ripples({
      dropRadius: 10,
      perturbance: 0.05,
    });
    

    
});

