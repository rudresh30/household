$(document).ready(function () {
    $("#ip-service-date").datepicker({
        dateFormat: "yy-mm-dd",
        showOtherMonths: true,
        inLine: true,
        minDate: 1,
        maxDate: "+7D"
    });

    // flip cards on click

    $(".card-flip-btn").click(function () {
        var bparent = $(this);
        console.log(bparent);
        $(this).parents().eq(2).toggleClass('flip');
    });

    // redirect to services page

    $(".submit-btn").click(function (e) {
        e.preventDefault();
        let newUrl = `/services`;
        console.log(newUrl);
        window.location.assign(newUrl);
    });

    $(".card-select-btn").click(function (e) {
        e.preventDefault();
        let newUrl = `/register`;
        console.log(newUrl);
        window.location.assign(newUrl);
    });

    $(".register-btn").click(function (e) {
        e.preventDefault();
        let newUrl = `/payment`;
        console.log(newUrl);
        window.location.assign(newUrl);
    });
    $("#ip-service").autocomplete({
        minLength: 2,
        source: ["cleaning", "cleaning full day", "deep cleaning", "carpet cleaning", "pool cleaning", "party cleaning", "gardening", "landscaping", "garden decoration", "trimming", "lawn mowing", "garden cleaning"]
    });
});