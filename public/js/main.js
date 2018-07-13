$(document).ready(function () {
    $("#ip-service-date").datepicker({
        dateFormat: "yy-mm-dd",
        showOtherMonths: true,
        inLine: true,
        minDate: 1,
        maxDate: "+7D"
    });
});