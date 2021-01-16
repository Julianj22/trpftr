$("#play_a").click(function() {
    $(".dblftr").fadeOut();
    $(".safari_game").css("display", "flex");
});

$("#play_s").click(function() {
    $(".dblftr").fadeOut();
    $(".aliens_game").css("display", "block");
});

$("#play_si").click(function() {
    $(".dblftr").fadeOut();
    $(".spaceinvaders_game").css("display", "block");
});


$(".safari_game").mouseenter(function() {
    $("#saf").delay(2000).fadeIn(2000);
    $("#btm").delay(2000).fadeIn(2000);
});

$("#one").click(function() {
    $("#one").fadeOut();
    $("#chung").delay(1000).fadeIn(1000);
    $("#text1").delay(2000).fadeIn(1000);
});

$("#chung").dblclick(function() {
    $("#loading").fadeIn();
    $("#text1").fadeOut();
    $("#loading").delay(7000).fadeOut(1000);
    $("#chung").fadeOut(1000);
    $("#j").delay(8000).fadeIn(1000);
    $("#r1").delay(8000).fadeIn(1000);
    $("#l1").delay(8000).fadeIn(1000);
});

$("#l1").click(function() {
    $(".page_1").fadeOut(3000);
    $(".page_2").delay(3000).fadeIn(3000);
});

$(".donkeykong_quest2").click(function() {
    $(".page_2").fadeOut(3000);
    $(".page_3").delay(3000).fadeIn(3000);
});

$("#bribe").click(function() {
    $("#bribe_text").fadeIn();
    $("#proceed").fadeIn();
    $("#kr_text").fadeOut();
    $("#krool").fadeOut(2000);
    $(".krool_button").fadeOut();
});

$("#proceed").click(function() {
    $(".page_3").fadeOut(3000);
    $(".page_4").delay(3000).fadeIn(3000);
});

$("#leave").click(function() {
    $("#funky_surfboard").fadeOut(2000);
    $("#fs").delay(2000).fadeIn(2000);
});

$("#take").click(function() {
    $("#funky_surfboard").fadeOut(2000);
    $("#fs").delay(2000).fadeIn(2000);
});

$("#r1").click(function() {
    $(".page_1").fadeOut(2000);
    $(".page_6").delay(2000).fadeIn(2000);
});

$(".donkeykong_quest1").click(function() {
    $(".page_2").fadeOut(2000);
    $(".page_6").delay(2000).fadeIn(2000);
});

$("#flee ").click(function() {
    $(".page_3").fadeOut(2000);
    $(".page_6").delay(2000).fadeIn(2000);
});

$(".page_5").mouseenter(function() {
    $("#sad").delay(3000).fadeIn(1000);
});

$("#rs").click(function() {
    location.reload(false);
});

$("#rs1").click(function() {
    location.reload(false);
});

$("#run1").click(function() {
    $(".page_4").fadeOut(2000);
    $(".page_5").delay(2000).fadeIn(2000);
});

$("#run2").click(function() {
    $(".page_4").fadeOut(2000);
    $(".page_5").delay(2000).fadeIn(2000);
});

$(".aliens_game").mouseenter(function() {
    $("#sp").delay(1000).fadeIn(2000);
    $("#spb").delay(1000).fadeIn(2000);
    $("#t1").delay(3000).fadeIn(2000);
    $("#t2").delay(5000).fadeIn(2000);
    $("#t3").delay(7000).fadeIn(2000);
});

// $(document).on('keypress', function(e) {
//     if(e=== 13) {

//     }
// }

$("#t3").click(function() {
    $("#t3").css("animation", "blinkingText .1s");
    $("#t3").css("animation-iteration-count", "50");
    $(".game_screen").delay(2000).fadeOut(4000);

    $(".game").delay(10000).show();
});

$("#rs2").click(function() {
    location.reload(false);
});


$("#q").click(function() {
    $("#q").hide();
});

$("#w").click(function() {
    $("#w").hide();
});

$("#e").click(function() {
    $("#e").hide();
});

$("#r").click(function() {
    $("#r").hide();
});

$("#t").click(function() {
    $("#t").hide();
});

$("#y").click(function() {
    $("#y").hide();
});

$("#a").click(function() {
    $("#a").hide();
});

$("#s").click(function() {
    $("#s").hide();
});

$("#d").click(function() {
    $("#d").hide();
});

$("#f").click(function() {
    $("#f").hide();
});

$("#g").click(function() {
    $("#g").hide();
});

$("#h").click(function() {
    $("#h").hide();
});

$("#z").dblclick(function() {
    $("#z").hide();
});

$("#x").dblclick(function() {
    $("#x").hide();
});

$("#c").dblclick(function() {
    $("#c").hide();
});

$("#v").dblclick(function() {
    $("#v").hide();
});

$("#b").dblclick(function() {
    $("#b").hide();
});

$("#n").dblclick(function() {
    $("#n").hide();
});

$("#bn").dblclick(function() {
    $(".bonus").fadeOut(2000);
    $("#yw").delay(2000).fadeIn(1000);
    $("#rs2").delay(2000).fadeIn(1000);
});

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top:" + (e.pageY + 5) + "px; left:" + (e.pageX - 35) + "px;");
});

$("#bugOne").click(function() {
    $("#bugOne").hide();
});

$("#bugTwo").click(function() {
    $("#bugTwo").hide();
});

$("#bugThree").click(function() {
    $("#bugThree").hide();
});

$("#bugFour").click(function() {
    $("#bugFour").hide();
});

$("#bugFive").click(function() {
    $("#bugFive").hide();
});

$("#bugSix").click(function() {
    $("#bugSix").hide();
});

$("#bugSeven").click(function() {
    $("#bugSeven").hide();
});

$("#bugEight").click(function() {
    $("#bugEight").hide();
});

$("#bugNine").click(function() {
    $("#bugNine").hide();
});

$("#bugTen").click(function() {
    $("#bugTen").hide();
});

$("#bugEleven").click(function() {
    $("#bugEleven").hide();
});

$("#bugTwelve").click(function() {
    $("#bugTwelve").hide();
});

$("#bugThirteen").click(function() {
    $("#bugThirteen").hide();
});

$("#bugFourteen").click(function() {
    $("#bugFourteen").hide();
});

$("#bugFifteen").click(function() {
    $("#bugFifteen").hide();
});

$("#bugSixteen").click(function() {
    $("#bugSixteen").hide();
});

$(".dot").mouseenter(function() {
    $("#bugOne").hide();
    $("#bugTwo").hide();
    $("#bugThree").hide();
    $("#bugFour").hide();
    $("#bugFive").hide();
    $("#bugSix").hide();
    $("#bugSeven").hide();
    $("#bugEight").hide();
    $("#bugNine").hide();
    $("#bugTen").hide();
    $("#bugEleven").hide();
    $("#bugTwelve").hide();
    $("#bugThirteen").hide();
    $("#bugFourteen").hide();
    $("#bugFifteen").hide();
    $("#bugSixteen").hide();
    $(".gameover").show();
    $(".dot").hide();
    $(".title").hide();
    $("#fb").show();


    $("#fb").click(function() {
        $("#bugOne").show();
        $("#bugTwo").show();
        $("#bugThree").show();
        $("#bugFour").show();
        $("#bugFive").show();
        $("#bugSix").show();
        $("#bugSeven").show();
        $("#bugEight").show();
        $("#bugNine").show();
        $("#bugTen").show();
        $("#bugEleven").show();
        $("#bugTwelve").show();
        $("#bugThirteen").show();
        $("#bugFourteen").show();
        $("#bugFifteen").show();
        $("#bugSixteen").show();
        $(".gameover").hide();
        $(".dot").show();
        $(".title").show();
        $("#fb").hide();
    });




});