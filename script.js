$("button").click(function() {
    var name=$(".name").val();
    var age=$(".age").val();
    var money=$(".money").val();
    $(".nothing").text(name);
    $(".final").show();
    var amount=$(".money").val();
    var total= amount * 132;
    $(".calc").append(total);
    $(".money").hide();
    $(".name").hide();
    $(".age").hide();
    $(".ageQuestion").hide();
    $(".moneyQuestion").hide();
    $(".oldQuestion").hide();
    $("button").hide();
});

