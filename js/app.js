$(document).ready(function () {

    //for loop, checking i, starting at 1, to see if modulus with 3, 5, or both
    //equals 0

    for (i = 1; i <= 100; i++) {
        if ((i % 3 == 0) && (i % 5 == 0)) {
            //first check both
            $('body').append('<p>fizzbuzz</p>')
        } else if (i % 3 == 0) {
            //then check 3
            $('body').append('<p>fizz</p>')
        } else if (i % 5 == 0) {
            //then check 5
            $('body').append('<p>buzz</p>')
        } else {
            //else must not be mod either, print number
            $('body').append('<p>' + i + '</p>')
        }
    }
});
