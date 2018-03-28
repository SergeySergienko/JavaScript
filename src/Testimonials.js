import React from 'react';
import { observer } from 'mobx-react';
import reviewPhotoLeft from './images/isabella.jpg';
import reviewPhotoRight from './images/margo.jpg';

@observer
class Testimonials extends React.Component {
	componentWillMount() {
    this.props.store.getData();
	}
	render() {
	  const {photos} = this.props.store;
	  const data = photos.filter(photo => photo.gender==='female').slice(0,3);
	  
		return (
		<div id="testimonials" className="testimonials">
			<h3>ОТЗЫВЫ КЛИЕНТОВ</h3>
			<ul>
			{data.map(item => 
				<li key = {item.id.value} className="float-left">
					<img src={item.picture.large} alt={item.id.name} />
						<p>🏆<i>"Lorem ipsum dolor sit amet consectetuer sit amet 
						justo amet consectetuer sit amet justo et 
						et elit adipiscing sit amet justo."
						</i></p>
					<h3>{item.name.first} {item.name.last}</h3>
				</li>
			)}
			</ul>
			{/*<div className="float-left">
				<img src={photos['0'].picture.medium} alt="reviewPhotoLeft"/>
				<p><i>"Lorem ipsum dolor sit amet consectetuer sit amet 
				justo amet consectetuer sit amet justo et 
				et elit adipiscing sit amet justo."</i></p>
				<h3>Изабелла</h3>
				<span>Модель</span>
			</div>
			<div className="float-right">
				<img src={photos['1'].picture.medium} alt="reviewPhotoRight"/>
				<p><i>"Lorem ipsum dolor sit amet consectetuer sit amet justo
				et amet consectetuer sit amet justo et elit adipiscing sit amet justo 
				elit adipiscing sit amet justo."</i></p>
				<h3>Марго</h3>
				<span>Модель</span>
			</div>*/}
		</div>
		);
	}
}

export default Testimonials;