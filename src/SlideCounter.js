import { observable } from 'mobx';

export default class SlideCounter {
	@observable slideCount;
	
	constructor(slideCount) {
        this.slideCount = slideCount;
    }
	
	nextSlide() {
      this.slideCount++;
	  if (this.slideCount > 3) {this.slideCount = 1;}
	}

	previousSlide() {
      this.slideCount--;
	  if (this.slideCount < 1) {this.slideCount = 3;}
	}
	
}