import React from 'react';
import Counter from './SlideCounter';
import Header from './Header';
import Services from './Services';
import Experts from './Experts';
import Slider from './Slider';
import Slideshow from './Slideshow';
import Testimonials from './Testimonials';
import LastWorks from './LastWorks';
import Store from './Store';
import Basement from './Basement';
import Footer from './Footer';
import './css/App.css';

const store = new Store([],[]);

const Home = () => (
  <div id="home" className="home">
  {/*<Slider counter={new Counter(1)} />*/}
    <Slideshow />
    <Services />
    <Experts store={store} />
    <LastWorks store={store} />
    <Testimonials store={store} />
    <Basement />
  </div>
)

export default Home;