// global. currently active menu item
var current_item = 0;

// few settings
var section_hide_time = 1300;
var section_show_time = 1300;

// jQuery stuff
$(window).load(function() {

	//====================================//
	//			nav click event			  //
	//====================================//


	$('.mainmenu ul li a').click(function(){
		if( ! $(this).hasClass('active') ) {
			$(this).addClass('active').parent().siblings().children('a').removeClass('active');
		}
		return false;
	});

	$('.mainmenu .container .dropdown>button').click(function(){
		// console.log('aa')
		var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

		$(this).animate({
			top:'-200px'
		},300)

		$('.mainmenu .container .dropdown>.gnb_menu').animate({
			top:0
		}, 500).addClass('animated bounceInDown').one(animationEnd, function(){
        $(this).removeClass('animated bounceInDown');
    	});
	})


	$('.mainmenu .gnb_menu .btn_close').click(function(){
		$(this).parents('.gnb_menu').animate({
			top:'-200px'
		},300)
		$('.mainmenu .container .dropdown>button').animate({
			top:0
		},200)
	})



	//====================================//
	//			scroll Event			  //
	//====================================//
		var spot = []
	    $('.wrapper>section').each(function(){

	        spot.push($(this).offset().top);
	        console.log(spot);

	    })


	    $('.dropdown li a').click(function(){
	        // console.log('ssss')
	        var idx = $(this).parent().index();
	        $('body,html').animate({
	          scrollTop:spot[idx]
	        })
	        return false;

	    })

	//====================================//
	//		next&prev click Event		  //
	//====================================//

	var idx = 0;
	var slideWidth = $('.port').width()
	$('.port .next').click(function(){
		console.log('aa')

		$('.slide .slide_port>div').eq(idx).removeClass('on').children('div').animate({
			'left':-slideWidth
		}).parent('div').next().addClass('on').children('div').css({
			'display':'block',
			'left':slideWidth
		}).stop().animate({
            left:'10%'
        })

        idx++

        if(idx == $('.slide .slide_port>div').length){
            idx =0
            $('.slide .slide_port>div').eq(idx).children('div').css({
                'left':slideWidth
            }).stop().animate({
                'left':'10%'
            }).parent().addClass('on').siblings().removeClass('on')
        }
        return false
	})

	$('.port .prev').click(function(){

        $('.slide .slide_port>div').eq(idx).removeClass('on').children('div').animate({
                left:slideWidth
            }).parent('div').prev().addClass('on').children('div').css({
                display:'block',
                left:-slideWidth
            }).stop().animate({
                left:'10%'
            })


            idx--
            // console.log(idx)
        if(idx <0){
            idx = $('.slide .slide_port>div').length-1;

            // console.log(idx)
            $('.slide .slide_port>div').eq(idx).children('div').css({
                left:-slideWidth,
                display:'block'
            }).stop().animate({
                left:'10%'
            }).parent().addClass('on').siblings().removeClass('on')
        }
        return false
    })

	//====================================//
	//				star Event			  //
	//====================================//

	$('html').jstars({
		image_path: 'assets/images',
		style: 'white',
		image: 'jstar-map.png',
	
		frequency: 17,
		delay: 600


	});
	//====================================//
	//	   	 l'outil mouse Event          //
	//====================================//

	$('.skill .sk_li span:first-child').mouseenter(function(){
		$(this).css({
			'background-color':'black'
		}).children('img').css({
			'display':'none',

		}).parent().next('span').css({
			'display':'block'
		})
	}).mouseleave(function(){
		$(this).css({
			'background-color':'transparent'
		}).children('img').css({
			'display':'block'
		}).parent().next('span').css({
			'display':'none'
		})
	})



});

//
