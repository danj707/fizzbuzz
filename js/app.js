$(document).ready(function () {
    //add button clicker
    $("#start_form").submit(function (event) {
        event.preventDefault(); // dont submit to server
        var fizzbuzzStart = parseInt($("input#start").val()); //grab val and get the integer
        var fizzbuzzEnd = parseInt($("input#end").val()); //grab val end and get the int

        if (isNaN(fizzbuzzStart) || isNaN(fizzbuzzEnd)) {
            //tried to enter a string, reprompt
            alert("Good try, one of those wasn't a number.")
        } else {
            //both good numbers
            for (i = fizzbuzzStart; i <= fizzbuzzEnd; i++) {
                if ((i % 3 == 0) && (i % 5 == 0)) {
                    //first check both
                    $('body').append('<p>' + i + ' :fizzbuzz</p>')
                } else if (i % 3 == 0) {
                    //then check 3
                    $('body').append('<p>' + i + ' : fizz</p>')
                } else if (i % 5 == 0) {
                    //then check 5
                    $('body').append('<p>' + i + ' : buzz</p>')
                } else {
                    //else must not be mod either, print number
                    $('body').append('<p>' + i + '</p>')
                }
            }
        }
    });
});
