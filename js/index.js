
    $(".options span").click(function(){
        $("#optionsSide").animate({ width:'250px'},50)
       $(".options span").animate({marginLeft :'250px'},50)
    })
    
    $(".closebtn").click(function(){
        $("#optionsSide").animate({ width:'0px'},50)
       $(".options span").animate({marginLeft :'0px'},50)
    })


  $('#optionsSide a').click(function(e){
    let sectionId=$(this).attr('href');
    let sectionTop=$(sectionId).offset().top;
    $('html,body').animate({
      scrollTop:sectionTop
      },1000)
    })


    
$('#duration .titel').click(function(){
    console.log($('.desc').not($(this).next()));
    $('.desc').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);
});




window.onload = function() {
   
    countDown("10 october 2025 9:56:00");
}

  function countDown(countToDate) {
    var countDownDate = new Date(countToDate).getTime();
    var x = setInterval(function() {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);    
        
        $(".days").html(`${days} D`);
        $(".hours").html(`${hours} h`);
        $(".minutes").html(`${ minutes } m`);
        $('.seconds').html(`${ seconds} s`);


        if (distance < 0) {
            clearInterval(x);
            $(".days").html("EXPIRED");
            $(".hours").html("EXPIRED");
            $(".minutes").html("EXPIRED");
            $('.seconds').html("EXPIRED");
        }


    },1000);
}



var maxLength = 100;
$('textarea').keyup(function() {
  var length = $(this).val().length;
  var remaining = maxLength-length;
  if(remaining<=0){
         $("#charctars").text("your available character finished");         
  }else{
        $("#charctars").text(remaining +' Characyer Reamining');
  }
});