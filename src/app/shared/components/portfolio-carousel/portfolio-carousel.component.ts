import { Component, OnInit, AfterViewInit, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-portfolio-carousel',
  templateUrl: './portfolio-carousel.component.html',
  imports: [CommonModule, MatIconModule, MatCardModule, MatDividerModule, MatButtonModule]
})
export class PortfolioCarouselComponent implements OnInit, AfterViewInit {
  public portfolios = [
    { photo: 'assets/images/2.jpg', title: 'Est atque tenetur', text: 'Adipisci quas repellat sed. Quasi quaerat aut nam possimus vitae dignissimos, sapiente est atque tenetur' },
    { photo: 'assets/images/3.jpg', title: 'Sapiente est atque tenetur', text: 'Adipisci quas repellat sed. Quasi quaerat aut nam possimus vitae dignissimos, sapiente est atque tenetur' },
    { photo: 'assets/images/1.jpg', title: 'Quasi quaerat aut', text: 'Adipisci quas repellat sed. Quasi quaerat aut nam possimus vitae dignissimos, sapiente est atque tenetur' },
    { photo: 'assets/images/3.jpg', title: 'Quasi quaerat aut nam', text: 'Adipisci quas repellat sed. Quasi quaerat aut nam possimus vitae dignissimos, sapiente est atque tenetur' },
    { photo: 'assets/images/1.jpg', title: 'Quasi quaerat aut', text: 'Adipisci quas repellat sed. Quasi quaerat aut nam possimus vitae dignissimos, sapiente est atque tenetur' },
    { photo: 'assets/images/2.jpg', title: 'Adipisci quas repellat sed', text: 'Adipisci quas repellat sed. Quasi quaerat aut nam possimus vitae dignissimos, sapiente est atque tenetur' }
  ];

  @ViewChild('track', { static: false }) track!: ElementRef;

  currentIndex = 0;
  slideWidth = 0;
  visibleItems = 3;

  constructor(private renderer: Renderer2) { }

  ngOnInit() { }

  ngAfterViewInit() {
    this.updateSlideWidth();
    window.addEventListener('resize', () => this.updateSlideWidth());
  }

  updateSlideWidth() {
    const containerWidth = this.track?.nativeElement?.offsetWidth;
    if (containerWidth) {
      this.slideWidth = containerWidth / this.visibleItems;
    }
  }

  nextSlide() {
    if ((this.currentIndex + this.visibleItems) < this.portfolios.length) {
      this.currentIndex++;
      this.moveCarousel();
    }
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.moveCarousel();
    }
  }

  moveCarousel() {
    const isMobile = window.innerWidth < 992;
  
    let moveX: string;
  
    if (isMobile) {
      // Translate by 100% per slide for mobile
      moveX = `-${this.currentIndex * 100}%`;
    } else {
      // Use fixed pixel slide width for larger screens
      const moveXPx = -(this.currentIndex * this.slideWidth);
      moveX = `${moveXPx}px`;
    }
  
    this.renderer.setStyle(this.track.nativeElement, 'transform', `translateX(${moveX})`);
  }
  
}
