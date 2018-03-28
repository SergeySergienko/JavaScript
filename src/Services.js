import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Manicure from './Manicure';
import Pedicure from './Pedicure';
import Modeling from './Modeling';
import manicure_logo from './images/manicure.jpg';
import pedicure from './images/pedicure.jpg';
import nail_extension from './images/modeling.jpg';

const Services = () => (
	<div id="services" className="services">
		
		<h3>УСЛУГИ</h3>
		<ul>
			<li><Link to='/manicure'><img src={manicure_logo} alt='МАНИКЮР'/><p>⭐️ МАНИКЮР</p><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit sit justo amet. Suspendisse et justo.</p></Link></li>
			<li><Link to='/pedicure'><img src={pedicure} alt='ПЕДИКЮР'/><p>⭐️ ПЕДИКЮР</p><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit sit justo amet. Suspendisse et justo.</p></Link></li>
			<li><Link to='/modeling'><img src={nail_extension} alt='МОДЕЛИРОВАНИЕ'/><p>⭐️ МОДЕЛИРОВАНИЕ</p><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit sit justo amet. Suspendisse et justo.</p></Link></li>
		</ul>
		{/*<Switch>
		  <Route path='/manicure' component={Manicure}/>
		  <Route path='/pedicure' component={Pedicure}/>
		  <Route path='/modeling' component={Modeling}/>
		</Switch>*/}
	</div>
)

export default Services;