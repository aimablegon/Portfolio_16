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
	var slideWidth = $('.slide .col-sm-4').width()
	$('.port .next a').click(function(){
		$('.slide .col-sm-4').eq(idx).removeClass('on').children('img').animate({
			left:-slideWidth
		}).parents('.col-sm-4').next().addClass('on').children('img').css({
			left:slideWidth
		}).stop().animate({
            left:'0'
        })
	})
	
	
});

//