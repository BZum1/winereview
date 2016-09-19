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
				var corkFull = '';
				var i, corks, corkNo, corkYes, style;

				style = post.acf.style;
				corks = post.acf.corks;
				corkNo = 5 - corks;

				var state = post.acf.state;
				var country = post.acf.country;

				switch (style) {

					case 'red':
						styleBlock = '<div class="bottle color-red">';
						break;

					case 'white':
						styleBlock = '<div class="bottle color-white">';
						break;

					case 'rose':
						styleBlock = '<div class="bottle color-rose">';
						break;

					default:
						styleBlock = '';
						break;
				}

        newBottle += '<div class="col-sm-4">';
				newBottle += styleBlock;
        newBottle += '<h3>' + post.title.rendered + ' ' + post.acf.vintage + '</h3>';
        newBottle += '<p>' + post.acf.winery + '</p>';
				newBottle += '<p><em>' + post.content.rendered + '</em></p>';

				if(state) {
					newBottle += '<p>' + post.acf.state  + '</p>';
				} else {
					newBottle += '<p>' + post.acf.country + '</p>';
				}
				newBottle += '</div>';
				newBottle += '<div class="bottle-rate"><p class="vote">';


				for(i = 0; i < corks; i++) {
					corkFull += '<i class="fa fa-star"></i>';
				}

				newBottle += corkFull;

				//newBottle += '<i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i>';
        newBottle += '</p></div>';
        newBottle += '</div>';

        document.getElementById('wineposts').innerHTML += newBottle;

			});
		}
	});
});
