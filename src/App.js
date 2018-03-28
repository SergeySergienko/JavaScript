import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Counter from './SlideCounter';
import Home from './Home';
import ServicesBlock from './ServicesBlock';
import Experts from './Experts';
import Slider from './Slider';
import Testimonials from './Testimonials';
import LastWorks from './LastWorks';
import Store from './Store';
import Basement from './Basement';
import Footer from './Footer';
import './css/App.css';

//const store = new Store([],7);

const App = () => (
  <div className="app">
	<Header />
	<Home />	
	<Footer />
  </div>
)

export default App;