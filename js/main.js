$(document).ready(function(){
    $(".region-content2").hide();
    $(".region-btn1").click(function(){
        $(".region-content2").hide();
        $(".region-content").show(1000);

        $(this).addClass("active-btn");
        $(".region-btn2").removeClass("active-btn");

    });
    $(".region-btn2").click(function(){
        $(".region-content").hide();
        $(".region-content2").show(1000);

        $(this).addClass("active-btn");
                $(".region-btn1").removeClass("active-btn");
      });
      $(".carouselTicker").carouselTicker({

        // animation speed
        speed: 1,
      
        // animation delay
        delay: 30,
      
        // or 'next'
        direction: "prev",
      
        // or 'vertical'
        mode: "vertical",
      
        // callback
        onCarouselTickerLoad: function () {},
      
      });
      
  });


  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginRight= "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginRight= "0";
    document.body.style.backgroundColor = "white";
  }
  