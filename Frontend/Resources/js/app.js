$(document).ready(function(){
    $('.js--mealsection').waypoint(function(direction){
        //the direction argument helps to know the direction of the motion of scroll
        if(direction =='down'){
            $('nav').addClass('sticky');
        }else{
            $('nav').removeClass('sticky');
        }
        
    }, {
    offset:'60px;'
    });
    
    $('.js--foodplans').on('click', function(){
        $('html, body').animate({scrollTop: $('.js--mealPlan').offset().top}, 1000);
    });
    
    $('.js--getmealready').on('click', function(){
        $('html, body').animate({scrollTop: $('.js--mealsection').offset().top}, 1000);
    });
    
//    this for page navigation
    
   $(function(){
        $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
            || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
               if (target.length) {
                 $('html,body').animate({
                     scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
        });
    });
//    animations on scroll
    $('.js--funcal').waypoint(function(direction){
        $('.js--funcal').addClass('animated fadeIn')
    },{
        offset:'50%'
    });
    
    $('.js--funcal1').waypoint(function(direction){
        $('.js--funcal1').addClass('animated fadeInUp')
    },{
        offset:'50%'
    });
    
    $('.js--funcal2').waypoint(function(direction){
        $('.js--funcal2').addClass('animated fadeIn')
    },{
        offset:'50%'
    });
    
    $('.js--funcal3').waypoint(function(direction){
        $('.js--funcal3').addClass('animated pulse')
    },{
        offset:'50%'
    });
    
   $('.js--funcal4').waypoint(function(direction){
       $('.js--funcal4').addClass('animated shake');
   },{
       offset:'50%'
   });
    
    //    this for navbar toggle
    $('.js-navclick').on('click', function(){
        const nav = $('.js--navbar');
        const icon = $('js--navclick i');
         nav.slideToggle(200);
        
         if(icon.hasClass('ion-navicon-round')){
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
         }else{
             icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
         }
       
        
    });
    
    
});