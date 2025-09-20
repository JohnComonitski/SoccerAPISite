import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonial-simple',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatCardModule],
  templateUrl: './testimonials.component.html',
})
export class TestimonialSimpleComponent {
  testimonials = [
    {
      quote: '“Absolutely loved the service! Professional, quick, and super friendly.”',
      name: 'Sarah Johnson',
      role: 'Marketing Manager',
      image: 'assets/images/user-thumb-1.jpg',
    },
    {
      quote: '“Top-notch quality and support. I highly recommend their services!”',
      name: 'David Lee',
      role: 'Entrepreneur',
      image: 'assets/images/user-thumb-2.jpg',
    },
    {
      quote: '“Their attention to detail is incredible. It was a pleasure working with them.”',
      name: 'Emily Clark',
      role: 'UI/UX Designer',
      image: 'assets/images/user-thumb-3.jpg',
    },
    {
      quote: '“Quick, easy, and reliable. The team truly cares about their clients.”',
      name: 'John Smith',
      role: 'Software Engineer',
      image: 'assets/images/user-thumb-4.jpg',
    },
    {
      quote: '“I was impressed with the level of support. Highly responsive team!”',
      name: 'Linda Martin',
      role: 'Project Manager',
      image: 'assets/images/user-thumb-5.jpg',
    },
    {
      quote: '“Efficient, friendly, and skilled. The results exceeded expectations.”',
      name: 'Alex Brown',
      role: 'Consultant',
      image: 'assets/images/user-thumb-6.jpg',
    },
  ];
}
