import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbCarouselModule, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Image {
	url: string;
	caption: string;
  }

@Component({
  selector: 'app-carousel-pause',
  templateUrl: './carousel-pause.component.html',
  styleUrls: ['./carousel-pause.component.css']
})

export class CarouselPauseComponent implements OnInit {
  @Input() showPanel = true;
  @Input() imageArray : Image[] = [];
  //images : string[] = [];

	paused = false;
	unpauseOnArrow = false;
	pauseOnIndicator = false;
	pauseOnHover = true;
	pauseOnFocus = true;

  ngOnInit(): void {
      //this.images = this.imageArray.map((n) => `https://picsum.photos/id/${n}/1600/500`);
  }


	@ViewChild('carousel', { static: true })
  carousel!: NgbCarousel;

	togglePaused() {
		if (this.paused) {
			this.carousel.cycle();
		} else {
			this.carousel.pause();
		}
		this.paused = !this.paused;
	}

	onSlide(slideEvent: NgbSlideEvent) {
		if (
			this.unpauseOnArrow &&
			slideEvent.paused &&
			(slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
		) {
			this.togglePaused();
		}
		if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
			this.togglePaused();
		}
	}
}
