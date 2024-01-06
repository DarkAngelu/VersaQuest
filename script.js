
// Shop Start
$(".minus").click(function() {
    if ($(this).hasClass("disabled")) {
        return;
    }
    $("#payment-display").text(parseInt($("#payment-display").text()) - parseInt($(this).parent().children(".card-text").children("span").text()));
    $(this).parent().children(".quantity").text(parseInt($(this).parent().children(".quantity").text()) - 1);
    if (parseInt($(this).parent().children(".quantity").text()) == 0) {
        $(this).addClass("disabled");
    }
    if (parseInt($("#payment-display").text()) < 0) {
        parseInt($("#payment-display").text()) = 0;
    }
    

})
$(".plus").click(function() {
    if (parseInt($(this).parent().children(".quantity").text()) == 0) {
        $(this).parent().children(".minus").removeClass("disabled");
    }
    $("#payment-display").text(parseInt($("#payment-display").text()) + parseInt($(this).parent().children(".card-text").children("span").text()));
    $(this).parent().children(".quantity").text(parseInt($(this).parent().children(".quantity").text()) + 1);
})

$("#state").children().hide();
$("#country").change(function() {
    $("#state").children().hide();
    var val=$(this).val();
    if (val.length != 0) {
        $("."+val).show();
    }
})
// Shop End
// Quiz Start
var correctAnswer = 0;
$(".quiz-submit").click(function() {
    correctAnswer = 0;
    $(".right-box").addClass("d-none");
    $(".wrong-box").addClass("d-none");
    $(".quiz-score").addClass("d-none");

    for (var i = 0 ; i < $(".options").length ; i++) {
        var correct = false;
        var options = $($(".options")[i]).children("div").children("input");
        
        // console.log($(options[2]).is(":checked"))

        for (var j = 0 ; j < 4 ; j++) {
            if ($(options[j]).is(":checked")) {
                if ($(options[j]).hasClass("correct-answer")) {
                    correctAnswer++;
                    correct = true;
                }
                break;
            }
        }

        if ($(options[j]).is(":checked")) {
            if (correct) {
                $($(".options")[i]).parent().children(".right-box").removeClass("d-none");
            } else {
                $($(".options")[i]).parent().children(".wrong-box").removeClass("d-none");
            }
        }
    }
    
    $(".quiz-score").removeClass("d-none");
    $(".quiz-score > span").html(correctAnswer);

    $(this).attr("onclick", "window.location.href='index.html'");
    $(this).text("BACK TO HOME");
})
// Quiz End