jQuery(document).ready(function(){
    $('#videolink').magnificPopup({
        type:'inline',
        midClick: true
    });

    $('.slider-area').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay: true,
        autoplayTimeout:4000,    
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

    $('.team_canvas').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        margin: 15,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        items:2,
        
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:2
            }
        }
    })

    $('.client_info').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        margin: 15,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        items:2,
        
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

    $('.their-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        margin: 15,
        autoplay: true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        items:2,
        
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })


    $('.all_logo').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        margin: 15,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        items:2,
        
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:6
            }
        }
    })

    $('.blog_slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        margin: 15,
        autoplay:false,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        items:2,
        
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })
    
});

$('.skill-per').each(function(){
    var $this = $(this);
    var per = $this.attr('per');
    $this.css("width", per +'%');
});

$(function(){
    $("#services-tabs").responsiveTabs({
        animation: 'slide'
    });

   
    $('.gallery').magnificPopup({
        delegate: '.popimg',
        type:'image',  
        gallery:{
            enabled: true
        }
   });
});

/* Catagory JS */
$(document).ready(function(){

    $('.list').click(function(){

        var value = $(this).attr('data-filter');

        if(value == 'all'){
            $('.items').show('1000');
        }
        else if(value == '.graphics'){
            $('.graphics1').show();
            $('.web1').hide();
            $('.marketing1').hide();
        }
        else if(value == '.web'){
            $('.web1').show();
            $('.graphics1').hide();
            $('.marketing1').hide();
            
        }
        else if(value == '.marketing'){
            $('.marketing1').show();
            $('.graphics1').hide();
            $('.web1').hide();
            
        }
        else{
            $('.items').show('1000');
        }
        $('.list').click(function(){
            $(this).addClass('active').siblings().removeClass('active');
        });
    
    });
    
});

/*Counter jS */
$(document).ready(function(){
    $('.counter_value').each(function(){
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        },{
            duration: 5000,
            easing: 'swing',
            step: function(now){
                $(this).text(Math.ceil(now));
            }
        });
    });

});




