import React from 'react';
import Services from '../Services/Services';
import Experts from '../Experts/Experts';
import Slideshow from '../Slideshow/Slideshow';
//import Testimonials from '../Testimonials/Testimonials';
import Reviews from '../ReduxComponent/app';
import LastWorks from '../LastWorks/LastWorks';
import Store from '../Store/Store';
import Basement from '../Basement/Basement';
import './Home.css';

const store = new Store([],[]);

const Home = () => (
  <div id="home" className="home">
    <Slideshow />
    <Services />
    <Experts store={store} />
    <LastWorks store={store} />
		{/*<Testimonials store={store} />*/}
		<Reviews />
    <Basement />
  </div>
)

export default Home;