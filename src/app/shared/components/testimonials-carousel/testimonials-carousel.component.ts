import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
@Component({
	selector: 'app-testimonials-carousel',
	templateUrl: './testimonials-carousel.component.html',
	imports: [CommonModule, MatIconModule, MatCardModule]
})
export class TestimonialsCarouselComponent {
	public testimonials = [
		{
			photo: 'assets/images/user-thumb-1.jpg',
			text: `“This platform exceeded my expectations. The support team was responsive, and the experience overall was smooth, intuitive, and reliable. I’d highly recommend it to professionals.”`,
			title: 'Jenaa Meg',
			subtitle: 'Manager',
		},
		{
			photo: 'assets/images/user-thumb-2.jpg',
			text: `"Great experience! The tools provided are top-notch, and the interface is super clean. My team became more productive and efficient within just a few days of onboarding."`,
			title: 'Tim Creed',
			subtitle: 'Sr. Dev',
		},
		{
			photo: 'assets/images/user-thumb-3.jpg',
			text: `"I was genuinely impressed by the quality and speed of service. Everything was well-organized, and their attention to detail helped us deliver our goals ahead of schedule."`,
			title: 'Miley Cyprus',
			subtitle: 'Dev Head',
		},
		{
			photo: 'assets/images/user-thumb-4.jpg',
			text: `"Absolutely fantastic! The level of professionalism, combined with user-friendly features, made it incredibly easy for us to adapt. Highly recommended for anyone seeking reliable digital solutions."`,
			title: 'Jimmy Clay',
			subtitle: 'CEO',
		},
	];

	public currentIndex = 0;

	nextSlide() {
		this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
	}

	prevSlide() {
		this.currentIndex =
			(this.currentIndex - 1 + this.testimonials.length) %
			this.testimonials.length;
	}
}

