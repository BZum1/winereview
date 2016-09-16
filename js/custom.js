$(document).ready(function() {
	$.ajax({
		type: "GET",
		url: 'http://winereview.wpengine.com/wp-json/wp/v2/wine-api/',
		dataType: 'json',
			error: function() {
			alert( 'Unable to load posts.' );
		},
		success: function(data) {

			data.forEach(function(post) {

        var newBottle = '';

        newBottle += '<div class="col-sm-6">';
        newBottle += '<div class="bottle">';
        newBottle += '<h3>' + post.title.rendered + '</h3>';
        newBottle += '<p>' + post.acf.vintage + '</p>';
        newBottle += '<p>' + post.acf.winery + '</p>';
        newBottle += '<p>' + post.acf.style + '</p>';
        newBottle += '</div>';
        newBottle += '</div>';

        document.getElementById('wineposts').innerHTML += newBottle;

			});
		}
	});
});
