import React, { Component } from 'react';
import $ from 'jquery';

export default class InstagramImages extends Component {
	
	componentDidMount() {
		var token = '4417915906.b6970d4.28e366a283a84256872046e361e2f322',
			userid = 4417915906,
			kolichestvo = 7;
 
		$.ajax({
			url: 'https://api.instagram.com/v1/users/' + userid + '/media/recent',
			dataType: 'jsonp',
			type: 'GET',
			data: {access_token: token, count: kolichestvo}, // передаем параметры, которые мы указывали выше
			success: function(result){
					//console.log(result.data); // пишем в консоль результат
					
					for( var x in result.data ){
					    if (result.data[x].tags.indexOf("nails") !== -1) {
						$('.last_works ul').append(
						'<li><a href="'
						+ result.data[x].link +
						'" target="_blank"><img src="'
						+ result.data[x].images.thumbnail.url +
						'"></a><p style=" font-family: arial; font-size: 20px; color: #ff0000;">'+result.data[x].likes.count+' ❤</p></li>'
						); 
								// result.data[x].images.low_resolution.url - это URL картинки среднего разрешения, 306х306
								// result.data[x].images.thumbnail.url - URL картинки 150х150
								// result.data[x].images.standard_resolution.url - URL картинки 612х612
								// result.data[x].link - URL страницы данного поста в Инстаграм 
						}
					}
			},
			error: function(result){
				console.log(result); // пишем в консоль об ошибках
			}
		});
	}
	
	render() {
	    return (
		        <div className="last_works">
					<h3>МОИ ПОСЛЕДНИЕ РАБОТЫ</h3>
					<ul></ul>
				</div>
				);
  }
}	