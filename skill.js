$(document).ready(function() {
    var entries = [
      {
       
        label: "HTML",
        
        target: "_top"
      },
      {
        label: "Bootstrap",
      
        target: "_top"
      },
      {
        label: "CSS",
      
        target: "_top"
      },
      {
        label: "SaSS",
     
        target: "_top"
      },
      {
        label: "javascript",
        
        target: "_top"
      },
      {
        label: "React",
     
        target: "_top"
      },
   
      {
        label: "git",
     
        target: "_top"
      },
   
      {
        label: "Figma",
        
        target: "_top"
      }
    ];
  
    var settings = {
      entries: entries,
      width: 400,
      height: 300,
      radius: "65%",
      radiusMin: 35,
      bgDraw: false,
      bgColor: "#111",
      opacityOver: 1.0,
      opacityOut: 0.15,
      opacitySpeed: 6,
      fov: 150,
      speed: 1,
      fontFamily: " 'Mulish', sans-serif;",
      fontSize: "16",
      fontColor: "#454545",
      fontWeight: "normal", //bold
      fontStyle: "normal", //italic
      fontStretch: "expanded", //wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
      fontToUpperCase: true
    };
  
    //var svg3DTagCloud = new SVG3DTagCloud( document.getElementById( 'holder'  ), settings );
    $("#tag-cloud").svg3DTagCloud(settings);
    // $("#tag-cloud2").svg3DTagCloud(settings);
  
  
  
  
    $( "#tag-cloud svg a:nth-child(1)" ).hover(function() {
      // $(".border").css("background-color", "yellow");
      $(".border-bg").css("opacity", "1");
      $(".border-bg").css("width", "100%");
      $(".border-bg").css("height", "100%");
      $(".border-bg").css("background-image", "url(images/html.png)");
  
    
    }, function() {
     
      $(".border-bg").css("opacity", "0");
   
      $(".border-bg").css("width", "0%");
      $(".border-bg").css("height", "0%");
  
    });
    $( "#tag-cloud svg a:nth-child(3)" ).hover(function() {
      // $(".border").css("background-color", "yellow");
      $(".border-bg").css("opacity", "1");
      $(".border-bg").css("width", "100%");
      $(".border-bg").css("height", "100%");
      $(".border-bg").css("background-image", "url(images/css.png)");
      
    
    }, function() {
      $(".border-bg").css("opacity", "0");
   
      $(".border-bg").css("width", "0%");
      $(".border-bg").css("height", "0%");
    
  
    });
    $( "#tag-cloud svg a:nth-child(2)" ).hover(function() {
      // $(".border").css("background-color", "yellow");
      $(".border-bg").css("opacity", "1");
      $(".border-bg").css("width", "100%");
      $(".border-bg").css("height", "100%");
      $(".border-bg").css("background-image", "url(images/bootstrap.png)");
      
    
    }, function() {
      $(".border-bg").css("opacity", "0");
   
      $(".border-bg").css("width", "0%");
      $(".border-bg").css("height", "0%");
    });
    $( "#tag-cloud svg a:nth-child(4)" ).hover(function() {
      // $(".border").css("background-color", "yellow");
      $(".border-bg").css("opacity", "1");
      $(".border-bg").css("width", "100%");
      $(".border-bg").css("height", "100%");
      $(".border-bg").css("background-image", "url(images/sass.png)");
      
    
    }, function() {
      $(".border-bg").css("opacity", "0");
   
      $(".border-bg").css("width", "0%");
      $(".border-bg").css("height", "0%");
    });
    $( "#tag-cloud svg a:nth-child(5)" ).hover(function() {
      // $(".border").css("background-color", "yellow");
      $(".border-bg").css("opacity", "1");
      $(".border-bg").css("width", "100%");
      $(".border-bg").css("height", "100%");
      $(".border-bg").css("background-image", "url(images/js.png)");
      
    
    }, function() {
      $(".border-bg").css("opacity", "0");
   
      $(".border-bg").css("width", "0%");
      $(".border-bg").css("height", "0%");
    });
    $( "#tag-cloud svg a:nth-child(6)" ).hover(function() {
      // $(".border").css("background-color", "yellow");
      $(".border-bg").css("opacity", "1");
      $(".border-bg").css("width", "100%");
      $(".border-bg").css("height", "100%");
      $(".border-bg").css("background-image", "url(images/react.png)");
      
    
    }, function() {
      $(".border-bg").css("opacity", "0");
   
      $(".border-bg").css("width", "0%");
      $(".border-bg").css("height", "0%");
    });
  
    $( "#tag-cloud svg a:nth-child(7)" ).hover(function() {
      // $(".border").css("background-color", "yellow");
      $(".border-bg").css("opacity", "1");
      $(".border-bg").css("width", "100%");
      $(".border-bg").css("height", "100%");
      $(".border-bg").css("background-image", "url(images/git.png)");
      
    
    }, function() {
      $(".border-bg").css("opacity", "0");
   
      $(".border-bg").css("width", "0%");
      $(".border-bg").css("height", "0%");
    });
    $( "#tag-cloud svg a:nth-child(8)" ).hover(function() {
      // $(".border").css("background-color", "yellow");
      $(".border-bg").css("opacity", "1");
      $(".border-bg").css("width", "100%");
      $(".border-bg").css("height", "100%");
      $(".border-bg").css("background-image", "url(images/figma.png)");
      
    
    }, function() {
      $(".border-bg").css("opacity", "0");
   
      $(".border-bg").css("width", "0%");
      $(".border-bg").css("height", "0%");
    });
    // $( "#tag-cloud svg a:nth-child(2)" ).hover(function() {
    //   $(".border").css("background-image", "url(/images/me2.png)");
    //   $(".border").css("background-repeat", "no-repeat");
    //   $(".border").fadeIn(500);
    //   ;
  
    // }, function() {
   
    //   $(".border").fadeOut(500);
   
    // });
    // $( "#tag-cloud svg a:nth-child(3)" ).hover(function() {
    //   $(".border").css("background-image", "url(/images/me3.png)");
    //   $(".border").css("background-repeat", "no-repeat");
    //   $(".border").fadeIn(500);
    //   ;
  
    // }, function() {
   
    //   $(".border").fadeOut(500);
   
    // });
  });
  