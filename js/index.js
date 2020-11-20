console.log("it's working GRAPE!");

$(document).ready(function(){

    $("#alfred").click(function(){
        // 1a. give current element 100% opacity
        $("#alfred").addClass("selected");
        // 1b. give all other elements 30% opacity
        $("#oasis").removeClass("selected");
        $("#mysl").removeClass("selected");
        $("#final").removeClass("selected");


        // 2a. fade out current content
        $("#oasisContent").addClass("hide");
        $("#myslContent").addClass("hide");
        $("#finalContent").addClass("hide");
        // 2b. fade in alfred section content
        $("#alfredContent").fadeIn();
        $("#alfredContent").removeClass("hide");
    });

    $("#oasis").click(function(){
        // 1a. give current element 100% opacity
        $("#oasis").addClass("selected");
        // 1b. give all other elements 30% opacity
        $("#alfred").removeClass("selected");
        $("#mysl").removeClass("selected");
        $("#final").removeClass("selected");

        // 2a. fade out current content
        $("#alfredContent").addClass("hide");
        $("#myslContent").addClass("hide");
        $("#finalContent").addClass("hide");
        // 2b. fade in alfred section content
        $("#oasisContent").fadeIn();
        $("#oasisContent").removeClass("hide");
    });

    $("#mysl").click(function(){
        // 1a. give current element 100% opacity
        $("#mysl").addClass("selected");
        // 1b. give all other elements 30% opacity
        $("#alfred").removeClass("selected");
        $("#oasis").removeClass("selected");
        $("#final").removeClass("selected");
    });

    $("#final").click(function(){
         // 1a. give current element 100% opacity
         $("#final").addClass("selected");
         // 1b. give all other elements 30% opacity
         $("#alfred").removeClass("selected");
         $("#mysl").removeClass("selected");
         $("#oasis").removeClass("selected");
    });

    // $("#mysl").hover(function(){
    //    $("#mysl").animate({
    //     opacity: '1'
    //     });
    // });

});