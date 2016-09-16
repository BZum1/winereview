$(document).ready(function() {
	$.ajax({
		type: "GET",
		url: 'https://winereview.wpengine.com/wp-json/wp/v2/wine-api/',
		dataType: 'json',
			error: function() {
			alert( 'Unable to load posts.' );
		},
		success: function(data) {

			data.forEach(function(post) {

        var newBottle = '';

        newBottle += '<div class="col-sm-4">';
        newBottle += '<div class="bottle">';
        newBottle += '<h3>' + post.title.rendered + ' ' + post.acf.vintage + '</h3>';
        newBottle += '<p>' + post.acf.winery + '</p>';
				newBottle += '<p>' + post.acf.state  + ', ' + post.acf.country + '</p>';
        newBottle += '<p class="style">' + post.acf.style + '</p>';
				newBottle += '</div>';
				newBottle += '<div class="bottle-rate">';
				newBottle += '<p class="vote"><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i></p>';
        newBottle += '</div>';
        newBottle += '</div>';

        document.getElementById('wineposts').innerHTML += newBottle;

			});
		}
	});
});
