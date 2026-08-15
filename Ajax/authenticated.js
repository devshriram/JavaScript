function displayImage(data) {
    // $('<img>', {
    //     src: data.url,
    //     height: '100%',
    //     width: '100%'
    // }).appendTo('#image-container');

    $(document.createElement('img')).attr('src', data.url).appendTo('#img-container');
};

$.ajax({
    // url: 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2026-08-15',
    url: 'https://api.nasa.gov/planetary/apod',
    method: 'GET',
    success: displayImage,
    data: {
        api_key: 'DEMO_KEY',
        date: '2018-06-05',
    }
});