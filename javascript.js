$(document).ready(function(){
    $('.menu_toggler').click(function(){
        $(this).toggleClass("active");
        $(".links").toggleClass("active");
        $(".links a").toggleClass("active");
        $(".links").css("transition", "1s ease");
        setTimeout(function(){
            $(".links").css("transition", "");
        },3000);
        // $(".links")
        //     .css("transition", "1s ease")
        //     .delay(3000)
        //     .queue(function(){
        //         $(".links").css("transition", "");
        //     });
    });
});

// $('#user_button').toggle().css('borderBottomLeftRadius','+5px');

// setTimeout(function(){
//     $(formMessages).removeClass('error');
//     //....and whatever else you need to do
// }, 3000);

// $(formMessages)
//   .addClass('error')
//   .delay(3000)
//   .queue(function(next){
//     $(this).removeClass('error');
//     next();
//   })

// $(".aboutme").ready(function () {
//     var holdWidth = $(".aboutme").width();
//     var holdHeight = $(".aboutme").height();
//     var holdAverageSize = (holdWidth + holdHeight) / 2;
//     $(".aboutme").on('resize', function () {
//         newAverageSize = ($(".aboutme").width() + $(".aboutme").height()) / 2;
//         newPercentage = ((newAverageSize / holdAverageSize) * 100) + "%";
//         $("html").css("font-size", newPercentage)
//         console.log(newPercentage);
//     });
// });