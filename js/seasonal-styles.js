$("document").ready(function(){
    $('.seasons a').click(function(e){//find all a tags inside class of seasons
        e.preventDefault();//stop default submission
        var season = $(this).attr("href");//contents of href attribute of this element
        //alert(season);

        //make the season lower case
        season = season.toLowerCase();

        switch(season){
            case "spring":
                $("#logo").attr("src","images/spring.gif");
                $("#wear").attr("src","images/spring-wear.jpg");
                $("html").css("background-color","#2B7129");
                $("header>h3").text("Jump into Spring!")
                break;

            case "summer":
                $("#logo").attr("src","images/summer.gif");
                $("#wear").attr("src","images/summer-wear.jpg");
                $("html").css("background-color","#EBA52B");
                $("header>h3").text("Cool off with Summer wear!")
                break;

            case "fall":
                $("#logo").attr("src","images/fall.gif");
                $("#wear").attr("src","images/fall-wear.jpg");
                $("html").css("background-color","#A81124");
                $("header>h3").text("Fall into fashion!")
                break;

            case "winter":
                $("#logo").attr("src","images/winter.gif");
                $("#wear").attr("src","images/winter-wear.jpg");
                $("html").css("background-color","#005393");
                $("header>h3").text("Stay warm in Winter!")
            break;

            default:
                $("#logo").attr("src","images/four-seasons.gif");
                $("#wear").attr("src","images/300x400.png");
                $("html").css("background-color","#ccc");
                $("header>h3").text("Outfitter for All Seasons!")
        }
    });
});

 