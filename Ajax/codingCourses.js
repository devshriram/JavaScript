function getCourses() {

    // Hide the get-courses-container
    $('#get-courses-container').css('display', 'none');

    // Get the API content and display on Screen
    $.get('https://api.codingninjas.in/api/v3/courses', function(data) {

       var courseData = data.data.courses;

       function displayCourseData(element){
       var courseContainer = $('<div>');

       courseContainer.addClass('course');

       var courseImage = $('<img>');
       courseImage.attr('src', element.preview_image_url);

       var courseName = $('<p>');
       courseName.text(element.name);

       var courseLevel = $('<p>');
       courseLevel.text(element.level);

       courseContainer.append(courseImage);
       courseContainer.append(courseName);
       courseContainer.append(courseLevel);

       $('#container').append(courseContainer);
    }

    courseData.forEach(displayCourseData);
    }).fail(function() {
    console.log("Request Failed!!");
    });
}

$('#fetch-courses-button').click(getCourses);