$(document).ready(function () {

    $('body').on('click', '.ajax-get', function () {
        var urlRequest = $(this).data('url');
        $.get(urlRequest, function (data) {
            $('.container').html(data);
        });
    });
    $('#contactForm').on('submit', function (event) {
        //prevents the default behaviour
        //(doesn't allow it to be submitted)
        event.preventDefault();
        //see if the form is valid

        if ($(this).valid()) {
            //time to do the AJAX POST
            var urlToPostTo = $(this).attr('action');
            //serializing converts the f5orm fields into a string that we can pass into our function
            var dataToSend = $(this).serialize();

            $.post(urlToPostTo, dataToSend, function (data) {
                //update the #container elemnts with the new HTML returned in the "data" param
                $('.container').html(data);

            });
        };
    });
});