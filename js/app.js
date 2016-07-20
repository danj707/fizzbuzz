$(document).ready(function () {
    //function to get the values from the form
    getValues();
});

//functions outside the document ready, seems to work!
function getValues() {
    $("#start_form").submit(function (event) {
        event.preventDefault(); // dont submit to server
        var fizzbuzzStart = parseInt($("input#start").val()); //grab val and get the integer
        var fizzbuzzEnd = parseInt($("input#end").val()); //grab val end and get the integer

        //tests to validate the data
        if (isNaN(fizzbuzzStart) || isNaN(fizzbuzzEnd)) {
            //tried to enter a string, reprompt
            alert("Good try, one of those wasn't a number.")
        } else {
            //both good numbers, then check if fizzbuzzEnd < fizzbuzzStart
            if (fizzbuzzEnd < fizzbuzzStart) {
                alert("Can't have the end less than the start!")
            } else {
                //call fizzBuzz to do the actual work
                fizzBuzz(fizzbuzzStart, fizzbuzzEnd);
            }
        }
    });
};

//for loop testing the modulus for each increment from start to end
function fizzBuzz(fizzbuzzStart, fizzbuzzEnd) {
    for (i = fizzbuzzStart; i <= fizzbuzzEnd; i++) {
        if ((i % 3 == 0) && (i % 5 == 0)) {
            //first check both
            $('body').append('<p class="fizzbuzz">' + i + ' :fizzbuzz</p>')
        } else if (i % 3 == 0) {
            //then check 3
            $('body').append('<p class="fizz">' + i + ' : fizz</p>')
        } else if (i % 5 == 0) {
            //then check 5
            $('body').append('<p class="buzz">' + i + ' : buzz</p>')
        } else {
            //else must not be mod either, print number
            $('body').append('<p>' + i + '</p>')
        }
    }
};
