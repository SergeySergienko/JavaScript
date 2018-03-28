import React, { Component } from 'react';
import { observer } from 'mobx-react';
import './css/Slider.css';

@observer
export default class Slider extends Component {

  render() {
	const {counter} = this.props;
	const showSlide = "slide slide-" + counter.slideCount;
	
    return (
      <div className="slider">
			<div className={showSlide} onClick={() => counter.nextSlide()}/>
		
		<div className="arrows">
			<button className="arrow-left" onClick={() => counter.previousSlide()}> &lt; </button>
			<button className="arrow-right" onClick={() => counter.nextSlide()}> &#9658; </button>
		</div>

      </div>
    );
  }
}