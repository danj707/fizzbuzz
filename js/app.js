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

function fizzBuzz(fizzbuzzStart, fizzbuzzEnd) {
    for (i = 1; i <= 100; i++) {
        var content = '<p> ' + i + ' </p>';
        if (i % 3 == 0) {
            //check 3
            content = '<p class="fizz">' + i + ' : fizz</p>';
        }
        if (i % 5 == 0) {
            //then check 5
            content = '<p class="buzz">' + i + ' : buzz</p>';
        }
        if ((i % 3 == 0) && (i % 5 == 0)) {
            //finally check for both
            content = '<p class="fizzbuzz">' + i + ' :fizzbuzz</p>';
        }
        $('body').append(content);
    }
}

/*super advanced*/
//    for (i = 1; i <= 100; i++) {
//    var content = "";
//    if (i % 3 == 0) content += 'fizz';
//    if (i % 5 == 0) content += 'buzz';
//    $('body').append('<p> ' + (content || i) + ' </p>');
