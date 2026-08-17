$('#get-image-button').click(function() {

    // Get the Date
    var dateSelected = $('#datepicker').val();

    // Call the API
    $.ajax({
        url: 'https://api.nasa.gov/EPIC/api/natural',
        method: 'GET',
        data: {
            date: dateSelected,
            api_key: 'hJfvE47xSj67omcMHQFHHpYYRhOCZy7jodArafMv',
        },
        success: function(data) {

            $('#content-container').empty();

            function displayImages(element) {

                var year = element.date[0] + element.date[1] + element.date[2] + element.date[3];
                var month = element.date[5] + element.date[6];
                var day = element.date[8] + element.date[9];

                var imageUrl = `https://epic.gsfc.nasa.gov/archive/natural/${year}/${month}/${day}/png/${element.image}.png`;

                console.log(imageUrl);

                $(document.createElement('img')).attr('src', imageUrl).appendTo('#content-container');
            }

            data.forEach(displayImages);
        }
    }).fail(function() {
        console.log("Request Failed!!");
    });
});