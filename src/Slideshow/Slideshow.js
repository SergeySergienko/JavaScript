import React, { Component } from 'react';
//import { observer } from 'mobx-react';
import { Zoom } from 'react-slideshow-image';
import './Slideshow.css';

const images = [
	'1.jpg',
	'2.jpg',
	'3.jpg',
	'4.png'
];


export default class Slideshow extends Component {
	render() {
		return (
        <Zoom
          images={images}
          scale="0.3"
          duration={5000}
          transitionDuration={2000}
        />
		);
	}
}