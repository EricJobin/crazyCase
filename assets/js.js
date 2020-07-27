// alert("connected");

caseflip =(letter, i)=> {
    console.log(i)

    if (i%2 == true) return letter.toUpperCase();
    return letter.toLowerCase();


}

$(document).ready(function(){

    $("#convertButton").click(function(){
        // console.log("clicked button");
        let phrase = $("#textForConversion").val();
        // console.log(phrase);
        phrase = phrase.split("");
        // console.log(phrase);

        phrase = phrase.map(caseflip);

        $("#convertedText").empty();
        $("#convertedText").append(phrase);
    })



})

// There Once Was A Man