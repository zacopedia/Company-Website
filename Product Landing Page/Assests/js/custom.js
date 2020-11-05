$(function (){
    'use strict';


    // Adjust Header

    var myHeader = $('.header');
    var mySlider = $('.slider')

    myHeader.height($(window).height());

    $(window).resize(function(){

        myHeader.height($(window).height());
    });

    // Adjust Links

    $('.links li ').click(function () {

        $(this).addClass('selected').siblings().removeClass('selected');
    });

    // Adjust Bx Slider Center 

    mySlider.each(function () {
       $(this).css('padding-top', ($(window).height() - mySlider.height()) / 2);
   });

    // Bx Slider 

    mySlider.bxSlider({
        pager:false
    });

    // Smoth Scroll To Div 

   $('.links li a').click(function () {

    $('html, body').animate({
 
        scrollTop: $('#' + $(this).data('value')).offset().top

    }, 1000);
   });

    //Auto Slider Code 
    
    $(function autoSlider() {
     
        $('.sliderTest, .active').each(function () {

            if (!$(this).is(':last-child')) {

               $(this).delay(3000).fadeOut(1000, function () {

                 $(this).removeClass('active').next().addClass('active').fadeIn();

                 autoSlider();
               });

               
            } else {
                $(this).delay(3000).fadeOut(1000, function () {
                    $(this).removeClass('active');

                    $('.slider-test div').eq(0).addClass('active').fadeIn();

                    autoSlider();
                });

                
            }
           
        });
    }());

    

    



    // $('#projects').mixItUp();

});









































// $(function () {

//     'use strict';

//     // Adjust Header Height

//     var myHeader = $('.header');

//     myHeader.height($(window).height());

//     $(window).resize(function () {

//         myHeader.height($(window).height());
//     });


//     // Adjust Bx Slider Text
// $('.slider').each(function () {
//     $(this).css('padding-top', ($(window).height() - $('.slider').height()) / 2);
// });

//     // Triger Mixitup
//     $('#container').mixItup();

//     Bx Slider
//     $('.slider').bxSlider({
//         pager:false
//     });


//         //   Smoth Scroll to Div 
// $('.links li a').click(function () {
//     $('html, body').animate({
//          scrollTop: $('#' + $(this).data('value')).offset().top
//     }, 1000);

//  });


//  (function autoSlider () {
//     $('.slider-test .active').each(function() {
//        if($(this).is('first:child')){
//            console.log('yes');
//        }
//     });
// }());
 



//  });






// $(function () {
   
//     'use strict';
    
//     // Adjust Header Height
    
//     var myHeader = $('.header'),
        
//         mySlider = $('.bxslider');
    
//     myHeader.height($(window).height());
    
//     $(window).resize(function () {
       
//         myHeader.height($(window).height());
        
//         // Adjust Bxslider List Item Center
        
//         mySlider.each(function () {

//             $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);

//         });
        
//     });
    
    // Links Add Active Class
    
    // $('.links li a').click(function () {
       
    //     $(this).parent().addClass('active').siblings().removeClass('active');
        
    // });
    
    // // Adjust Bxslider List Item Center
    
    // mySlider.each(function () {
       
    //     $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);
        
    // });
    
    // // Trigger The Bx Slider
    
    // mySlider.bxSlider({
        
    //     pager: false
        
    // });
    
    // // Smooth Scroll To Div 
    
    // $('.links li a').click(function () {
       
    //     $('html, body').animate({
            
    //         scrollTop: $('#' + $(this).data('value')).offset().top
            
    //     }, 1000);
        
    //     console.log('#' + $(this).data('value'));
        
    // });
    
    // // Our Auto Slider Code
    
    // (function autoSlider() {
        
    //     $('.slider .active').each(function () {
           
    //         if (!$(this).is(':last-child')) {
                
    //             $(this).delay(3000).fadeOut(1000, function () {
                   
    //                 $(this).removeClass('active').next().addClass('active').fadeIn();
                    
    //                 autoSlider();
                    
    //             });
                
    //         } else {
                
    //             $(this).delay(3000).fadeOut(1000, function () {
                    
    //                 $(this).removeClass('active');
                    
    //                 $('.slider div').eq(0).addClass('active').fadeIn();
                    
    //                 autoSlider();
                    
    //             });
                
    //         }
            
    //     });
        
    // }());
    
    // // Trigger MixitUp
    
    // $('#Container').mixItUp();
    
    // // Adjust Shuffle Links
    
    // $('.shuffle li').click(function () {
       
    //     $(this).addClass('selected').siblings().removeClass('selected');
        
    // });
    
    // // Trigger Nice Scroll
    
    // $('html').niceScroll({
        
    //     cursorcolor: '#1abc9c',
        
    //     cursorwidth: '10px',
        
    //     cursorborder: '1px solid #1abc9c',
        
    //     cursorborderradius: 0
        
    // });
    
// });






 


 
  


