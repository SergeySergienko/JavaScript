import React from 'react';
import '../Testimonials/Testimonials.css';
 
 export default class Reviews extends React.Component {

  render() {
    const { data } = this.props;
	var photos = data.filter(photo => photo.gender==='female').slice(0,3);
	
    return (
      <div id="testimonials" className="testimonials">
			<h3>ОТЗЫВЫ КЛИЕНТОВ</h3>
		<ul>
			{photos.map(item => 
				<li key = {item.login.sha1} className="float-left">
					<img src={item.picture.large} alt={item.id.name} />
						<p><i>"Lorem ipsum dolor sit amet consectetuer sit amet 
						justo amet consectetuer sit amet justo et 
						et elit adipiscing sit amet justo."
						</i></p>
					<h3>{item.name.first} {item.name.last}</h3>
				</li>
			)}
			</ul>
      </div>
    );
  }
  
}