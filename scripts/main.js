//Brads script -- getting started with animate.css
//jquery library:
/*$(function(){
    //animateButton is the id of the button to be clicked
    $('animateButton').click(function(){
        animate('#anim-head', 'bounce');//This is the id of 1 element
        animate('#anim-body', 'rubberband');//This is the id of another element
        return false;
    });

    //Animate
    //Animate is also the text inside the button
    function animate(element, animation){
        $(element).addClass('animated '+ animation);
        let wait = setTimeout(function(){
            $(element).removeClass('animated '+ animation);
        }, 1000);
    }
});*/

/*Header part Sticky action*/
let height = $('#header').height();
$(window).scroll(function(){
    if(this).scrollTop() > height{
        $('.navbar').addClass('sticky');
    }else{
        $('.navbar').removeClass('sticky');
    }
})