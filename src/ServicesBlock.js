import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Services from './Services';
import Manicure from './Manicure';
import Pedicure from './Pedicure';
import Modeling from './Modeling';

const ServicesBlock = () => (
	<div className="services-block">
		<Services />
		<Switch>
		  <Route path='/manicure' component={Manicure}/>
		  <Route path='/pedicure' component={Pedicure}/>
		  <Route path='/modeling' component={Modeling}/>
		</Switch>
	</div>
)

export default ServicesBlock;