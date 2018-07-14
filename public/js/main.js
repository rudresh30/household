$(document).ready(function () {
    $("#ip-service-date").datepicker({
        dateFormat: "yy-mm-dd",
        showOtherMonths: true,
        inLine: true,
        minDate: 1,
        maxDate: "+7D"
    });

    // flip cards on click

    $('.btn-card-detail').on('click', function (event) {
        event.preventDefault();
        $(this).find('.card-flip').toggleClass('flip');
    });
    $('.btn-card-back').on('click', function (event) {
        event.preventDefault();
        $(this).find('.card-flip').toggleClass('flip');
    });
});