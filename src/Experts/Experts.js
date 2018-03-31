import React from 'react';
import { observer } from 'mobx-react';
import insta from './images/insta.png';
import fb from './images/fb.png';
import vk from './images/vk.png';
import './Experts.css';

@observer
class Experts extends React.Component {
  
  componentWillMount() {
    this.props.store.fetchData();
}

  render() {
	  const {images} = this.props.store;
	  
    return (
	<div id="experts" className="experts">
		<h3>ОБО МНЕ</h3>
		<div className="experts-images float-left">
			<img src={images.length!==0 ? images[0].user.profile_picture : null} alt='Алена Линец'/>
			<h4>Мастер Алена Линец</h4>
		</div>
		
		{/*<p className="about_linets">{images.length!==0 ? images[0].caption.text : null}</p>*/}
		<p className="about_linets">Ухоженные ногти у женщины - неотъемлемая частица ее элегантности и жизненной позиции.
		Позаботиться о них сможет квалифицированный мастер маникюра и педикюра. 
		В нашем салоне разрабатывают дизайн, производят качественное наращивание или коррекцию. 
		Здесь создают художественное отображение ваших фантазий, покрывая лаком, лепкой и прочими современными материалами.
		Ухоженные ногти у женщины - неотъемлемая частица ее элегантности и жизненной позиции.
		Позаботиться о них сможет квалифицированный мастер маникюра и педикюра. 
		В нашем салоне разрабатывают дизайн, производят качественное наращивание или коррекцию. 
		Здесь создают художественное отображение ваших фантазий, покрывая лаком, лепкой и прочими современными материалами.</p>
		<div className="social-icons">
			<ul>
				<li><a href="https://www.instagram.com/alyona_lynets_nails/" target="_blank" rel="noopener noreferrer"><img src={insta} alt="instagram"/></a></li>
				<li><a href=""><img src={fb} alt="facebook"/></a></li>
				<li><a href=""><img src={vk} alt="vkontakte"/></a></li>
			</ul>
		</div>
	</div>
	);
  }
}

export default Experts;